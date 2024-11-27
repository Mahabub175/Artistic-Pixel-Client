import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import { Button } from "antd";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import {
  public_key,
  second_template_id,
  service_id,
} from "@/utilities/configs/configs";

const MailingList = () => {
  const onSubmit = (values) => {
    const templateParam = {
      from_name: values?.name,
      from_email: values?.email,
      to_name: "Photohouse Magazine",
    };
    const toastId = toast.loading("Subscribing...");

    try {
      emailjs
        .send(service_id, second_template_id, templateParam, public_key)
        .then((res) => {
          toast.success(
            `Thanks for your subscribe ${templateParam?.from_name}`,
            {
              id: toastId,
            }
          );
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

  return (
    <section>
      <div className="container mx-auto py-10 mt-20 px-10 md:px-0">
        <div className="text-center">
          <p className="text-[42px] font-bold mb-4">Join our Newsletter</p>
          <p>
            Sign up for exclusive content, opportunities, news + plus a few
            surprises.
          </p>
        </div>
        <CustomForm onSubmit={onSubmit}>
          <div className="flex flex-col items-center w-full max-w-[800px] mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <CustomInput label={"Name"} name={"name"} required />
              <CustomInput
                label={"Email"}
                name={"email"}
                type={"email"}
                required
              />
            </div>
            <div className="flex justify-center">
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
                Subscribe
              </Button>
            </div>
          </div>
        </CustomForm>
      </div>
    </section>
  );
};

export default MailingList;
