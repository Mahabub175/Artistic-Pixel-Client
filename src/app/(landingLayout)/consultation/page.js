import ConsultationForm from "@/components/AllSection/Consultation/ConsultationForm";

const page = () => {
  return (
    <section className="mb-20">
      <div className="bg-[#F5F3FF] py-20 max-w-4xl px-4 mx-auto flex flex-col justify-center items-center rounded-xl">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-primary">
          Get Consultation
        </h2>
        <div className="lg:w-4/6 mx-auto">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
};

export default page;
