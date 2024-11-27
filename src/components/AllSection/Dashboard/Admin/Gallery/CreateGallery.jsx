"use client";

import CustomForm from "@/components/Reusable/Form/CustomForm";
import FormButton from "@/components/Shared/FormButton";
import { useAddGalleryMutation } from "@/redux/services/gallery/galleryApi";
import { appendToFormData } from "@/utilities/lib/appendToFormData";
import { useState } from "react";
import { toast } from "sonner";
import GalleryForm from "./GalleryForm";
import { compressImage } from "@/utilities/lib/compressImage";
import CustomModal from "@/components/Reusable/Modal/CustomModal";

const CreateGallery = ({ open, setOpen }) => {
  const [errorFields, setErrorFields] = useState([]);

  const [addGallery, { isLoading }] = useAddGalleryMutation();

  const onSubmit = async (values) => {
    if (!values.artists || values.artists.length === 0) {
      toast.error("Please add at least one artist.");
      return;
    }

    const toastId = toast.loading("Creating Gallery...");

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

    const compressedImage = await compressImage(values.image[0].originFileObj);

    let submittedData = {
      ...values,
      artists,
      image: compressedImage,
    };

    const data = new FormData();
    appendToFormData(submittedData, data);

    try {
      const res = await addGallery(data);
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
      console.error("Error creating gallery:", error);
      toast.error("An error occurred while creating the gallery.", {
        id: toastId,
      });
    }
  };

  return (
    <CustomModal open={open} setOpen={setOpen} title="Create Gallery">
      <CustomForm onSubmit={onSubmit} fields={errorFields}>
        <GalleryForm />
        <FormButton setOpen={setOpen} loading={isLoading} />
      </CustomForm>
    </CustomModal>
  );
};

export default CreateGallery;
