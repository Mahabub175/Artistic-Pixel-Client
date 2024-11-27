"use client";

import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomTextEditor from "@/components/Reusable/Form/CustomTextEditor";
import ImageUploaderWithUrl from "@/components/Reusable/Form/ImageUploaderWithUrl";
import CustomModal from "@/components/Reusable/Modal/CustomModal";
import FormButton from "@/components/Shared/FormButton";
import { useAddInterviewMutation } from "@/redux/services/interview/interviewApi";
import { appendToFormData } from "@/utilities/lib/appendToFormData";
import { compressImage } from "@/utilities/lib/compressImage";
import { Form } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import InterviewForm from "./InterviewForm";
import dayjs from "dayjs";

const CreateInterview = ({ open, setOpen }) => {
  const [errorFields, setErrorFields] = useState([]);
  const [content, setContent] = useState("");

  const [addInterview, { isLoading }] = useAddInterviewMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Creating Interview...");

    const compressedThumbnailImage = await compressImage(
      values.thumbnail_image[0].originFileObj
    );

    const submittedData = {
      ...values,
      content,
      published_at: dayjs(values.published_at).format("YYYY-MM-DD"),
      thumbnail_image: compressedThumbnailImage,
    };

    const data = new FormData();

    appendToFormData(submittedData, data);

    try {
      const res = await addInterview(data);
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
      console.error("Error creating interivew:", error);
      toast.error("An error occurred while creating the interivew.", {
        id: toastId,
      });
    }
  };

  return (
    <CustomModal open={open} setOpen={setOpen} title="Create Interview">
      <CustomForm onSubmit={onSubmit} fields={errorFields}>
        <InterviewForm />
        <ImageUploaderWithUrl />
        <Form.Item
          label={"Content"}
          name={"content"}
          rules={[{ required: true, message: `Content is required` }]}
        >
          <CustomTextEditor value={content} onChange={setContent} />
        </Form.Item>
        <FormButton setOpen={setOpen} loading={isLoading} />
      </CustomForm>
    </CustomModal>
  );
};

export default CreateInterview;
