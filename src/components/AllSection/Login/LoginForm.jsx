"use client";

import { DeleteButton } from "@/components/Reusable/Button/CustomButton";
import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import { useLoginMutation } from "@/redux/services/auth/authApi";
import { setUser } from "@/redux/services/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Logging in...");

    try {
      const res = await login(values).unwrap();
      if (res.success) {
        dispatch(setUser({ user: res.data.user, token: res.data.token }));
        toast.success("Logged in Successfully!", {
          id: toastId,
        });
        router.push("/");
      }
    } catch (error) {
      toast.error(error.data.errorMessage, {
        id: toastId,
      });
    }
  };
  return (
    <>
      <CustomForm onSubmit={onSubmit}>
        <div className="mt-4 w-full">
          <CustomInput
            label={"Username Or Email"}
            name={"usernameOrEmail"}
            type={"text"}
            required={true}
          />
          <CustomInput
            label={"Password"}
            name={"password"}
            type={"password"}
            required={true}
          />
        </div>

        <DeleteButton text={"Sign In"} loading={isLoading} />
      </CustomForm>
      <div className="text-center mt-6 text-black">
        <span>Don’t have an account?</span>
        <Link
          href={"/sign-up"}
          className="font-bold text-lg hover:underline ml-1"
        >
          Create One
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
