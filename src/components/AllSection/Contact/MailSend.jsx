"use client";

import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import {
  public_key,
  service_id,
  template_id,
} from "@/utilities/configs/configs";
import emailjs from "@emailjs/browser";
import { Button } from "antd";
import { useEffect } from "react";
import { toast } from "sonner";
import StaticInfo from "./StaticInfo";
import MailingList from "./MailingList";

const MailSend = () => {
  const onSubmit = (values) => {
    const templateParam = {
      from_name: values?.name,
      from_email: values?.email,
      to_name: "Photohouse Magazine",
      message: values?.message,
    };
    const toastId = toast.loading("Sending Message...");

    try {
      emailjs
        .send(service_id, template_id, templateParam, public_key)
        .then((res) => {
          toast.success(`Thanks for your message ${templateParam?.from_name}`, {
            id: toastId,
          });
          window.location.reload();
        })
        .error(() => {
          toast.error("Something Went Wrong! Please Try Again", {
            id: toastId,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const formSection = document.getElementById("formSection");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <div className="-mt-3 lg:flex items-center mx-auto bg-white">
        <div className="bg-[#0b0b0b] text-center px-10 py-[110px]">
          <StaticInfo />
        </div>

        <div className="mx-auto flex flex-col w-full max-w-[550px] mt-20 md:mt-0 pb-10 md:py-10 px-10 md:px-0">
          <CustomForm onSubmit={onSubmit}>
            <CustomInput label={"Full Name"} name={"name"} required />
            <CustomInput
              label={"Email"}
              name={"email"}
              type={"email"}
              required
            />
            <CustomInput
              label={"Message"}
              name={"message"}
              type={"textarea"}
              required
            />
            <Button
              htmlType="submit"
              size="large"
              style={{
                fontWeight: "bold",
                width: "100%",
                backgroundColor: "#0b0b0b",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Send Message
            </Button>
          </CustomForm>
        </div>
      </div>
      <MailingList />
    </div>
  );
};

export default MailSend;
