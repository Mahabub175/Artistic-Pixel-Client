"use client";

import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomSelect from "@/components/Reusable/Form/CustomSelect";
import FormButton from "@/components/Shared/FormButton";
import {
  useGetSingleMagazineQuery,
  useUpdateMagazineMutation,
} from "@/redux/services/magazine/magazineApi";
import { appendToFormData } from "@/utilities/lib/appendToFormData";
import { transformDefaultValues } from "@/utilities/lib/transformedDefaultValues";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import MagazineForm from "./MagazineForm";
import { compressImage } from "@/utilities/lib/compressImage";
import CustomModal from "@/components/Reusable/Modal/CustomModal";

const EditMagazine = ({ open, setOpen, itemId }) => {
  const [fields, setFields] = useState([]);

  const { data: magazineData, isFetching: isMagazineFetching } =
    useGetSingleMagazineQuery(itemId, {
      skip: !itemId,
    });

  const [updateMagazine, { isLoading }] = useUpdateMagazineMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Updating Magazine...");
    try {
      let compressedImage;

      if (values.image[0].originFileObj) {
        compressedImage = await compressImage(values.image[0].originFileObj);
      }

      const submittedData = {
        ...values,
      };

      if (!values.image[0].url) {
        submittedData.image = compressedImage;
      }
      const updatedMagazineData = new FormData();
      appendToFormData(submittedData, updatedMagazineData);

      const updatedData = {
        id: itemId,
        data: updatedMagazineData,
      };

      const res = await updateMagazine(updatedData);

      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
        setOpen(false);
      } else {
        toast.error(res.data.errorMessage, { id: toastId });
      }
    } catch (error) {
      console.error("Error updating magaazine:", error);
      toast.error("An error occurred while updating the magaazine.", {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    setFields(transformDefaultValues(magazineData));
  }, [magazineData]);

  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      title="Edit Magazine"
      loading={isMagazineFetching}
    >
      <CustomForm onSubmit={onSubmit} fields={fields}>
        <MagazineForm attachment={magazineData?.image} />

        <CustomSelect
          name={"status"}
          label={"Status"}
          options={[
            { value: "Active", label: "Active" },
            { value: "Inactive", label: "Inactive" },
          ]}
        />

        <FormButton setOpen={setOpen} loading={isLoading} />
      </CustomForm>
    </CustomModal>
  );
};

export default EditMagazine;
