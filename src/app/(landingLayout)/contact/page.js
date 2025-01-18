import ContactForm from "@/components/AllSection/Contact/ContactForm";
import contact from "@/assets/images/contact.avif";
import Image from "next/image";

export const metadata = {
  title: "Contact | Artistic Pixel",
  description: "This is the contact page of Artistic Pixel website.",
};

const page = () => {
  return (
    <section className="px-5 mb-20">
      <div className="flex justify-between items-center flex-col">
        <div className="text-center">
          <p className="xl:text-xl">Contact Us</p>
          <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold mt-2">
            We are here at your service
          </h2>
        </div>
      </div>
      <div className="relative w-full container m-auto pt-6 flex flex-col lg:flex-row justify-between items-center gap-20 mt-10">
        <Image src={contact} alt="contact" className="-mb-20 lg:mb-0" />
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default page;
