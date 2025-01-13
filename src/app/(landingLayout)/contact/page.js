import ContactForm from "@/components/AllSection/Contact/ContactForm";
import contact from "@/assets/images/contact.avif";
import Image from "next/image";

export const metadata = {
  title: "Contact | Artistic Pixel",
  description: "This is the contact page of Artistic Pixel website.",
};

const page = () => {
  return (
    <section className="mt-10 px-5 mb-20">
      <div className="flex justify-between items-center py-2 flex-col mt-6">
        <div className="w-full flex flex-col items-center pb-4">
          <h1 className="sm:text-5xl text-3xl tracking-normal font-bold">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="relative w-full container m-auto pt-6 flex flex-col lg:flex-row justify-between items-center gap-20">
        <Image src={contact} alt="contact" className="-mb-20 lg:mb-0" />
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default page;
