import LoginForm from "@/components/AllSection/Login/LoginForm";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo_dark.png";

const page = () => {
  return (
    <section className="bg-black">
      <div className="lg:flex h-screen justify-center items-center text-center text-black">
        <div className="bg-white p-20 rounded-xl">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={200}
              className="mx-auto rounded-xl"
            />
          </Link>
          <h2 className="text-4xl font-bold mt-6">Welcome back!</h2>
          <p className="text-base text-textColor font-semibold mb-6">
            Enter your Credentials to access your account
          </p>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default page;
