import { useAddMagazineMutation } from "@/redux/services/magazine/magazineApi";
import { appendToFormData } from "@/utilities/lib/appendToFormData";
import { useState } from "react";
import { toast } from "sonner";
import CustomForm from "@/components/Reusable/Form/CustomForm";
import FormButton from "@/components/Shared/FormButton";
import MagazineForm from "./MagazineForm";
import { compressImage } from "@/utilities/lib/compressImage";
import CustomModal from "@/components/Reusable/Modal/CustomModal";

const CreateMagazine = ({ open, setOpen }) => {
  const [errorFields, setErrorFields] = useState([]);
  const [addMagazine, { isLoading }] = useAddMagazineMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Creating Magazine...");

    try {
      const compressedImage = await compressImage(
        values.image[0].originFileObj
      );

      let submittedData = {
        ...values,
        image: compressedImage,
      };

      if (values.is_special === undefined) {
        submittedData.is_special = false;
      }

      const data = new FormData();
      appendToFormData(submittedData, data);

      const res = await addMagazine(data);
      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
        setOpen(false);
      } else {
        const errorFields = Object.keys(res.data.error).map((fieldName) => ({
          name: fieldName,
          errors: res.data.error[fieldName],
        }));
        setErrorFields(errorFields);

        toast.error(res.data.errorMessage, { id: toastId });
      }
    } catch (error) {
      console.error("Error creating magazine:", error);
      toast.error("An error occurred while creating the magazine.", {
        id: toastId,
      });
    }
  };

  return (
    <CustomModal open={open} setOpen={setOpen} title="Create Magazine">
      <CustomForm onSubmit={onSubmit} fields={errorFields}>
        <MagazineForm />
        <FormButton setOpen={setOpen} loading={isLoading} />
      </CustomForm>
    </CustomModal>
  );
};

export default CreateMagazine;
