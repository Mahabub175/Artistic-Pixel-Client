import Marquee from "react-fast-marquee";
import brand1 from "@/assets/images/home/brand1.jpg";
import brand2 from "@/assets/images/home/brand2.jpg";
import brand3 from "@/assets/images/home/brand3.jpg";
import brand4 from "@/assets/images/home/brand4.jpg";
import brand5 from "@/assets/images/home/brand5.jpg";
import Image from "next/image";

const Brands = () => {
  const data = [
    { id: 1, name: "brand1", image: brand1 },
    { id: 2, name: "brand2", image: brand2 },
    { id: 3, name: "brand3", image: brand3 },
    { id: 4, name: "brand4", image: brand4 },
    { id: 5, name: "brand5", image: brand5 },
  ];
  return (
    <section className="container mx-auto px-5 mt-10 lg:mt-32">
      <div className="text-center">
        <p className="xl:text-xl">Brands</p>
        <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold mt-2">
          Our collaboration Partners
        </h2>
      </div>
      <Marquee className="flex items-center justify-between mt-10 lg:mt-20">
        {data?.map((item) => (
          <Image
            key={item.id}
            src={item?.image}
            alt={item?.name ?? "logo"}
            width={100}
            height={100}
            className="mx-10 lg:mx-20 w-[100px] h-[100px]"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default Brands;
