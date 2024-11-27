import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { FaShare } from "react-icons/fa";
import { base_url_client } from "@/utilities/configs/base_api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedInterViewSlider = ({ data = [], handleShareClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <Slider {...settings}>
      {data?.map((item) => {
        const shareUrl = `${base_url_client}/interviews/${item?.slug}`;
        const thumbnailImage =
          item?.thumbnail_image || "https://i.ibb.co/PNQkmRf/cont.jpg";

        return (
          <div
            key={item?._id}
            className="relative rounded-xl group !flex gap-4 lg:ml-14"
          >
            <div className="relative">
              <Image
                src={thumbnailImage}
                alt={item?.title}
                width={200}
                height={250}
                className="lg:w-[200px] lg:h-[250px] rounded-xl object-contain"
              />
            </div>
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleShareClick(shareUrl, item?.title, thumbnailImage);
                }}
                className="text-white bg-gray-700 p-3 rounded-full hover:scale-105 duration-300"
              >
                <FaShare />
              </button>
            </div>
            <div className="p-4 flex-1 flex flex-col w-full">
              <h3 className="text-2xl font-bold group-hover:text-white/70 duration-300 mb-2">
                {item?.title}
              </h3>
              <p className="font-bold mb-4 text-sm">
                Profession: {item?.interviewee_profession}
              </p>
              <Link href={`/interviews/${item?.slug}`}>
                <button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold tracking-normal text-white bg-[#00000055] border border-gray-400 rounded-2xl group w-40">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-60 group-hover:h-60"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative">Read More</span>
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default RelatedInterViewSlider;
