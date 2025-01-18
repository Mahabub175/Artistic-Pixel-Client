import Image from "next/image";
import banner from "@/assets/images/home/banner.png";
import banner1 from "@/assets/images/home/banner1.png";
import banner2 from "@/assets/images/home/banner2.png";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="container mx-auto px-5 lg:flex items-center justify-between">
      <div>
        <h1 className="text-black text-3xl lg:text-5xl xl:text-7xl font-bold lg:w-4/6 leading-tight">
          We boost growth for your startup business
        </h1>
        <p className="mt-4 xl:text-xl lg:w-4/6">
          Our goal is top at the heart of creativity services industry as a
          digital creator. In has a after comment
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-10">
          <Link href={"/consultation"}>
            <button className="bg-primary text-white hover:text-primary hover:bg-transparent duration-300 font-bold px-16 py-3 rounded border-2 border-primary">
              Get Started
            </button>
          </Link>
          <Link href={"/about"}>
            <button className="bg-transparent text-primary hover:text-white hover:bg-primary duration-300 font-bold px-16 py-3 rounded border-2 border-primary">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="relative mt-10 lg:mt-0">
        <Image
          src={banner}
          alt="banner"
          width={800}
          height={650}
          className="z-10"
        />
        <Image
          src={banner1}
          alt="banner1"
          className="absolute top-10 -left-[20%] lg:-left-[40%] -z-10"
        />
        <Image
          src={banner2}
          alt="banner2"
          className="absolute top-20 right-10 -z-10"
        />
      </div>
    </section>
  );
};

export default Banner;
