"use client";

import { DeleteButton } from "@/components/Reusable/Button/CustomButton";
import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import CustomLoader from "@/components/Shared/CustomLoader";
import {
  useGetAllGlobalLinksQuery,
  useUpdateGlobalLinkMutation,
} from "@/redux/services/globalLinks/globalLinksApi";
import { appendToFormData } from "@/utilities/lib/appendToFormData";
import { transformDefaultValues } from "@/utilities/lib/transformedDefaultValues";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const GlobalLinks = () => {
  const [fields, setFields] = useState([]);

  const { data, isFetching } = useGetAllGlobalLinksQuery();

  const [updateGlobalLink, { isLoading }] = useUpdateGlobalLinkMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Updating Global Links...");
    try {
      const submittedData = {
        ...values,
      };

      const updatedData = {
        id: data?.results?._id,
        data: submittedData,
      };

      const res = await updateGlobalLink(updatedData);

      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
      } else {
        toast.error(res.data.message, { id: toastId });
      }
    } catch (error) {
      console.error("Error updating global links:", error);
      toast.error("An error occurred while updating the global links.", {
        id: toastId,
      });
    }
  };
  const defaultValue = data?.results;

  useEffect(() => {
    setFields(transformDefaultValues(defaultValue));
  }, [defaultValue]);

  return (
    <CustomForm fields={fields} onSubmit={onSubmit}>
      <div className="mx-auto max-w-[800px] bg-white p-10 rounded-xl">
        {isFetching ? (
          <CustomLoader />
        ) : (
          <>
            <CustomInput name={"facebook_group"} label={"Facebook Group"} />
            <CustomInput name={"submit_photo"} label={"Submit Photo"} />
            <CustomInput name={"instagram"} label={"Instagram"} />
            <CustomInput name={"sponsor"} label={"Sponsor"} />
            <CustomInput name={"linked_in"} label={"Linked In"} />
            <CustomInput name={"twitter"} label={"Twitter"} />
            <CustomInput name={"facebook_page"} label={"Facebook Page"} />
            <CustomInput name={"submission_link"} label={"Submission Link"} />
            <CustomInput name={"submission_link"} label={"Submission Link"} />
            <CustomInput name={"pagel_email"} label={"Pagel Email"} />
            <CustomInput name={"pagel_facebook"} label={"Pagel Facebook"} />
            <CustomInput name={"pagel_instagram"} label={"Pagel Instagram"} />
            <CustomInput name={"pagel_web"} label={"Pagel Web"} />
            <CustomInput name={"sabbir_email"} label={"Sabbir Email"} />
            <CustomInput name={"sabbir_facebook"} label={"Sabbir Facebook"} />
            <CustomInput name={"sabbir_instagram"} label={"Sabbir Instagram"} />
            <CustomInput name={"sabbir_web"} label={"Sabbir Web"} />
            <CustomInput
              name={"Insta_access_token"}
              label={"Insta Access Token"}
            />
            <DeleteButton text={"Save"} loading={isLoading} />
          </>
        )}
      </div>
    </CustomForm>
  );
};

export default GlobalLinks;
