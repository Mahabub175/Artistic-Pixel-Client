import Image from "next/image";
import news from "@/assets/images/home/news.png";
import { Input } from "antd";

const NewsLetter = () => {
  return (
    <section className="container mx-auto px-5 mt-10 lg:mt-32 mb-44">
      <div className="text-center">
        <p className="xl:text-xl">NEWSLETTER</p>
        <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold mt-2">
          Subscribe Our Newsletter
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-20 justify-center items-center mt-20">
        <Image src={news} alt="news" className="w-[420px] h-[360px]" />

        <div className="lg:w-3/6 -mt-10 lg:mt-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Input
            placeholder="Enter your email"
            size="large"
            className="w-full mt-10 py-3"
            type="email"
          />
          <button className="bg-primary text-white mt-5 hover:text-primary hover:bg-transparent duration-300 font-medium px-16 py-2 rounded border-2 border-primary w-full">
            Subscribe Our Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
