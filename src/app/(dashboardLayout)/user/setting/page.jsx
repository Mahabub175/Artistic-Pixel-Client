"use client";

import { DeleteButton } from "@/components/Reusable/Button/CustomButton";
import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import ProfileUploader from "@/components/Reusable/Form/ProfileUploader";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/services/auth/authApi";
import { useCurrentUser } from "@/redux/services/auth/authSlice";
import { appendToFormData } from "@/utilities/lib/appendToFormData";
import { compressImage } from "@/utilities/lib/compressImage";
import { transformDefaultValues } from "@/utilities/lib/transformedDefaultValues";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const UserAccountSetting = () => {
  const [fields, setFields] = useState([]);
  const user = useSelector(useCurrentUser);
  const { data } = useGetSingleUserQuery(user?._id);

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Updating User Information...");

    try {
      let compressedProfileImage;

      if (values.profile_image[0].originFileObj) {
        compressedProfileImage = await compressImage(
          values.profile_image[0].originFileObj
        );
      }

      const submittedData = {
        ...values,
      };

      if (!values.profile_image[0].url) {
        submittedData.profile_image = compressedProfileImage;
      }
      const updatedUserData = new FormData();
      appendToFormData(submittedData, updatedUserData);

      const updatedData = {
        id: user?._id,
        data: updatedUserData,
      };

      const res = await updateUser(updatedData);

      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
      } else {
        toast.error(res.data.message, { id: toastId });
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("An error occurred while updating the user.", {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    setFields(transformDefaultValues(data));
  }, [data]);

  return (
    <div className="mx-auto max-w-[800px] bg-white p-10 rounded-xl">
      <CustomForm fields={fields} onSubmit={onSubmit}>
        <div className="mx-auto max-w-[800px]">
          <div className=" flex flex-col justify-center items-center">
            <ProfileUploader
              defaultValue={data?.profile_image}
              name={"profile_image"}
              label={"Profile Image"}
            />
          </div>
          <CustomInput name={"name"} label={"Name"} />
          <CustomInput name={"email"} label={"Email"} required />
          <CustomInput name={"username"} label={"Username"} required />
          <CustomInput name={"phone_number"} label={"Phone Number"} />
          <CustomInput name={"address"} label={"Address"} />
          <DeleteButton text={"Save"} loading={isLoading} />
        </div>
      </CustomForm>
    </div>
  );
};

export default UserAccountSetting;
