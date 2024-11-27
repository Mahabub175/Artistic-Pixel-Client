"use client";

import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomSelect from "@/components/Reusable/Form/CustomSelect";
import FormButton from "@/components/Shared/FormButton";
import {
  useGetSingleInterviewQuery,
  useUpdateInterviewMutation,
} from "@/redux/services/interview/interviewApi";
import { appendToFormData } from "@/utilities/lib/appendToFormData";
import { transformDefaultValues } from "@/utilities/lib/transformedDefaultValues";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import InterviewForm from "./InterviewForm";
import { Form } from "antd";
import CustomTextEditor from "@/components/Reusable/Form/CustomTextEditor";
import ImageUploaderWithUrl from "@/components/Reusable/Form/ImageUploaderWithUrl";
import { compressImage } from "@/utilities/lib/compressImage";
import CustomModal from "@/components/Reusable/Modal/CustomModal";
import dayjs from "dayjs";

const EditInterview = ({ open, setOpen, itemId }) => {
  const [fields, setFields] = useState([]);
  const [content, setContent] = useState("");

  const { data: interviewData, isFetching: isInterviewFetching } =
    useGetSingleInterviewQuery(itemId, {
      skip: !itemId,
    });

  const [updateInterview, { isLoading }] = useUpdateInterviewMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Updating Interview...");
    try {
      let compressedThumbnailImage;
      if (values.thumbnail_image[0].originFileObj) {
        compressedThumbnailImage = await compressImage(
          values.thumbnail_image[0].originFileObj
        );
      }

      const submittedData = {
        ...values,
        published_at: dayjs(values.published_at).format("YYYY-MM-DD"),
        content,
      };

      if (!values.thumbnail_image[0].url) {
        submittedData.thumbnail_image = compressedThumbnailImage;
      }
      const updatedInterviewData = new FormData();
      appendToFormData(submittedData, updatedInterviewData);

      const updatedData = {
        id: itemId,
        data: updatedInterviewData,
      };

      const res = await updateInterview(updatedData);

      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
        setOpen(false);
      } else {
        toast.error(res.data.errorMessage, { id: toastId });
      }
    } catch (error) {
      console.error("Error updating interview:", error);
      toast.error("An error occurred while updating the interview.", {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    setFields(transformDefaultValues(interviewData));
    setContent(interviewData?.content);
  }, [interviewData]);

  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      title="Edit Interview"
      loading={isInterviewFetching}
    >
      <CustomForm onSubmit={onSubmit} fields={fields}>
        <InterviewForm attachment={interviewData?.thumbnail_image} />

        <ImageUploaderWithUrl />

        <Form.Item
          label={"Content"}
          name={"content"}
          rules={[{ required: true, message: `Content is required` }]}
        >
          <CustomTextEditor value={content} onChange={setContent} />
        </Form.Item>

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

export default EditInterview;
