"use client";

import { SubmitButton } from "@/components/Reusable/Button/CustomButton";
import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import FileUploader from "@/components/Reusable/Form/FileUploader";
import { base_url } from "@/utilities/configs/base_api";
import { useState } from "react";
import { toast } from "sonner";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { MdOutlinePhone } from "react-icons/md";

const ConsultationForm = () => {
  const [loading, setLoading] = useState(false);

  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

  const handleSubmit = async (values) => {
    const toastId = toast.loading("Submitting...");

    if (!phoneRegex.test(values.phone_number)) {
      toast.error("Please enter a valid phone number!", {
        id: toastId,
      });
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone_number", values.phone_number);

    if (values.description) {
      formData.append("description", values.description);
    }

    if (values.attachment) {
      formData.append("attachments", values.attachment[0]?.originFileObj);
    }

    try {
      const response = await fetch(`${base_url}/lets-talk/`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Thank you for your submission. We'll get back to you!", {
          id: toastId,
        });
        setTimeout(() => {
          setLoading(false);
          window.location.reload();
        }, 1000);
      } else {
        toast.error("Something went wrong! Please try again!", {
          id: toastId,
        });
        setTimeout(() => {
          setLoading(false);
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      toast.error("An error occurred! Please try again!", {
        id: toastId,
      });
      console.error("An error occurred", error);
      setTimeout(() => {
        setLoading(false);
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <CustomForm onSubmit={handleSubmit}>
      <CustomInput
        label={"Name"}
        name="name"
        type={"text"}
        required={true}
        prefix={<UserOutlined />}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CustomInput
          label={"Email"}
          name="email"
          type={"email"}
          required={true}
          prefix={<MailOutlined />}
        />
        <CustomInput
          label={"Number"}
          name="phone_number"
          required={true}
          prefix={<MdOutlinePhone />}
        />
      </div>
      <CustomInput
        label={"Description"}
        name="description"
        type={"textarea"}
        required={true}
      />
      <FileUploader label={"Attachment"} name={"attachment"} />
      <SubmitButton text={"Submit"} loading={loading} />
    </CustomForm>
  );
};

export default ConsultationForm;
