import MailSend from "@/components/AllSection/Contact/MailSend";

export const metadata = {
  title: "Contact | Photohouse Magazine",
  description: "This is the contact page of photohouse magazine website.",
};

const page = () => {
  return (
    <>
      <section className="pb-20">
        <div className="relative">
          <div className="bg-[url('https://i.ibb.co/PNQkmRf/cont.jpg')] bg-cover bg-center h-[20vh] md:h-[90vh] mx-auto flex justify-center items-center px-5 md:px-0 object-cover">
            <div className="text-center px-5 md:px-0">
              <p className="text-2xl md:text-[100px] font-bold md:mb-8 font-sans">
                Contact Us
              </p>
              <p className="md:text-bold text-xs md:text-xl">
                Any question or remarks? Just write us a message!
              </p>
            </div>
            <div id="formSection"></div>
          </div>
          <MailSend />
        </div>
      </section>
    </>
  );
};

export default page;
