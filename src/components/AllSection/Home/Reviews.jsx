import { homeReviewData, serviceData } from "@/assets/data/homeData";
import Image from "next/image";

const Reviews = () => {
  return (
    <section className="container mx-auto px-5 mt-10 lg:mt-32">
      <div className="text-center">
        <p className="xl:text-xl">TESTIMONIALS</p>
        <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold mt-2">
          What Clients say about us
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 justify-center mt-20">
        {homeReviewData?.map((item) => (
          <div
            key={item?.id}
            className="flex items-start gap-10 border-2 p-5 rounded-xl hover:border-primary duration-300"
          >
            <Image
              src={item?.image}
              alt={item?.name}
              className="mx-auto w-[80px] h-[80px]"
              width={80}
              height={80}
            />
            <div>
              <h3 className="text-base font-medium mt-2">{item?.quote}</h3>
              <p className="text-gray-500 mt-2">{item?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
