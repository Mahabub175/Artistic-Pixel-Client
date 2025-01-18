"use client";

import { homeReviewData } from "@/assets/data/homeData";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto px-5 mt-10 lg:mt-32">
      <div className="text-center">
        <p className="xl:text-xl">TESTIMONIALS</p>
        <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold mt-2">
          What Clients say about us
        </h2>
      </div>
      <div className="lg:mt-10">
        <Slider {...settings}>
          {homeReviewData?.map((item, index) => {
            if (index % 2 === 0) {
              const nextItem = homeReviewData[index + 1];
              return (
                <div key={index} className="grid grid-cols-2 p-5">
                  <div className="flex flex-col items-center text-center gap-5 border-2 border-primaryLight p-5 rounded-xl hover:border-primary duration-300">
                    <Image
                      src={item?.image}
                      alt={item?.name}
                      className="mx-auto w-[80px] h-[80px] rounded-full"
                      width={80}
                      height={80}
                    />
                    <div>
                      <FaQuoteRight className="inline-flex text-xl" />
                      <h3 className="text-base font-medium">{item?.quote}</h3>
                      <p className="text-gray-500 mt-2">{item?.name}</p>
                    </div>
                  </div>
                  {nextItem && (
                    <div className="mt-5 flex flex-col items-center text-center gap-5 border-2 border-primaryLight p-5 rounded-xl hover:border-primary duration-300">
                      <Image
                        src={nextItem?.image}
                        alt={nextItem?.name}
                        className="mx-auto w-[80px] h-[80px] rounded-full"
                        width={80}
                        height={80}
                      />
                      <div>
                        <FaQuoteRight className="inline-flex text-xl" />
                        <h3 className="text-base font-medium">
                          {nextItem?.quote}
                        </h3>
                        <p className="text-gray-500 mt-2">{nextItem?.name}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
