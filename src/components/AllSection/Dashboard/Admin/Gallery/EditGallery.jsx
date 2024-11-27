"use client";

import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomSelect from "@/components/Reusable/Form/CustomSelect";
import FormButton from "@/components/Shared/FormButton";
import {
  useGetSingleGalleryQuery,
  useUpdateGalleryMutation,
} from "@/redux/services/gallery/galleryApi";
import { appendToFormData } from "@/utilities/lib/appendToFormData";
import { transformDefaultValues } from "@/utilities/lib/transformedDefaultValues";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import GalleryForm from "./GalleryForm";
import { compressImage } from "@/utilities/lib/compressImage";
import CustomModal from "@/components/Reusable/Modal/CustomModal";

const EditGallery = ({ open, setOpen, itemId }) => {
  const [fields, setFields] = useState([]);

  const { data: galleryData, isFetching: isGalleryFetching } =
    useGetSingleGalleryQuery(itemId, {
      skip: !itemId,
    });

  const [updateGallery, { isLoading }] = useUpdateGalleryMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Updating Gallery...");

    try {
      const artists = values?.artists?.map((artist) => {
        const fullString = artist?.flag;

        if (typeof fullString === "string" && fullString.includes("|")) {
          const [countryName, flagUrl] = fullString.split("|");
          return {
            ...artist,
            flag: flagUrl,
            country: countryName,
          };
        } else {
          console.error("Invalid flag value:", fullString);
          return artist;
        }
      });

      let compressedImage;

      if (values.image[0].originFileObj) {
        compressedImage = await compressImage(values.image[0].originFileObj);
      }

      const submittedData = {
        ...values,
        artists,
      };

      if (!values.image[0].url) {
        submittedData.image = compressedImage;
      }

      const updatedGalleryData = new FormData();
      appendToFormData(submittedData, updatedGalleryData);

      const updatedData = {
        id: itemId,
        data: updatedGalleryData,
      };

      const res = await updateGallery(updatedData);
      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
        setOpen(false);
      } else {
        toast.error(res.data.errorMessage, { id: toastId });
      }
    } catch (error) {
      console.error("Error updating gallery:", error);
      toast.error("An error occurred while updating the gallery.", {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    setFields(
      transformDefaultValues(galleryData, [
        {
          name: "artists",
          value: galleryData?.artists?.map((item) => ({
            photo: item?.photo,
            name: item?.name,
            profession: item?.profession,
            facebook: item?.facebook,
            instagram: item?.instagram,
            website: item?.website,
            is_default: item?.is_default,
            flag: item?.country,
          })),
        },
      ])
    );
  }, [galleryData]);

  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      title="Edit Gallery"
      loading={isGalleryFetching}
    >
      <CustomForm onSubmit={onSubmit} fields={fields}>
        <GalleryForm attachment={galleryData} />

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

export default EditGallery;
