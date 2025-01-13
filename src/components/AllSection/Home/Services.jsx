import { serviceData } from "@/assets/data/homeData";
import Image from "next/image";

const Services = () => {
  return (
    <section className="container mx-auto px-5 mt-10 lg:mt-32">
      <div className="text-center">
        <p className="xl:text-xl">SERVICE</p>
        <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold mt-2">
          Our Vision & Our Goal
        </h2>
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-20 text-center">
        {serviceData?.map((item) => (
          <div
            key={item?.id}
            className="flex flex-col items-center gap-4 shadow-2xl p-5 w-[350px] mx-auto rounded-xl"
          >
            <Image
              src={item?.image}
              alt={item?.name}
              className="mx-auto w-[80px] h-[80px]"
              width={80}
              height={80}
            />
            <h3 className="text-xl font-bold mt-2">{item?.name}</h3>
            <p className="text-gray-500 mt-2">{item?.description}</p>
            <button className="bg-primary text-white mt-5 hover:text-primary hover:bg-transparent duration-300 font-bold px-16 py-3 rounded border-2 border-primary">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
