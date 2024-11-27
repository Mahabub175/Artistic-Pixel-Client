"use client";

import { DeleteButton } from "@/components/Reusable/Button/CustomButton";
import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import { useSignUpMutation } from "@/redux/services/auth/authApi";
import { Checkbox, Form } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignUpForm = () => {
  const router = useRouter();

  const [signUp, { isLoading }] = useSignUpMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Signing Up...");
    try {
      const res = await signUp(values).unwrap();
      if (res.success) {
        toast.success("Signed Up Successfully!", {
          id: toastId,
          duration: 2000,
        });
        router.push("/sign-in");
      }
    } catch (error) {
      toast.error("Something Went Wrong! Please try again!", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <>
      <CustomForm onSubmit={onSubmit}>
        <div className="mt-4 mb-6">
          <CustomInput
            label={"Username"}
            name={"username"}
            type={"text"}
            placeholder={"Please Enter Your Username"}
            required={true}
          />
          <CustomInput
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Please Enter Your Email"}
            required={true}
          />
          <CustomInput
            label={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"Please Enter Your Password"}
            required={true}
          />
          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              { required: true, message: `Please Agree to the Terms & Policy` },
            ]}
          >
            <Checkbox className="text-black font-semibold">
              I agree to the{" "}
              <span className="hover:underline font-bold">terms & policy</span>
            </Checkbox>
          </Form.Item>
        </div>
        <DeleteButton text={"Sign Up"} loading={isLoading} />
      </CustomForm>
      <div className="text-center mt-6">
        <span>Already have an account?</span>
        <Link href={"/sign-in"} className="font-bold hover:underline text-lg">
          {" "}
          Sign in
        </Link>
      </div>
    </>
  );
};

export default SignUpForm;
