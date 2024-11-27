import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo_dark.png";
import SignUpForm from "@/components/AllSection/SignUp/SignUpForm";

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
          <h2 className="text-4xl font-bold mt-6">Get Started Now!</h2>
          <p className="text-base text-textColor font-bold mb-6">
            Register now to enjoy all the features
          </p>
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};

export default page;
