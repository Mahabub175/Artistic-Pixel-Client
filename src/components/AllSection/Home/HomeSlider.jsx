"use client";

import { useGetAllGalleriesQuery } from "@/redux/services/gallery/galleryApi";
import { useGetAllGlobalLinksQuery } from "@/redux/services/globalLinks/globalLinksApi";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./MagazineSlider.css";
import CustomLoader from "@/components/Shared/CustomLoader";

const HomeSlider = () => {
  const { data: galleryData, isFetching } = useGetAllGalleriesQuery();
  const { data: globalLinksData } = useGetAllGlobalLinksQuery();

  const activeGalleries = galleryData?.results?.filter(
    (item) => item?.status === "Active"
  );

  const homeSliders = activeGalleries?.filter(
    (item) => item?.is_home_slider === true
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    pauseOnHover: false,
    autoplaySpeed: 1500,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="mt-4">
      {isFetching ? (
        <CustomLoader />
      ) : (
        <div className="slider-container ">
          <Slider {...settings}>
            {homeSliders?.map((item) => (
              <div key={item?._id} className="cursor-pointer">
                <div className="relative lg:h-[90vh] md:h-[80vh] h-[60vh] group">
                  <Image
                    src={item?.image}
                    alt="hero image"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                  <p className="hidden group-hover:block absolute bottom-0 text-sm text-center w-full bg-black/30 py-1 font-semibold">
                    {item?.click}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
      <div className="relative flex flex-col justify-center gap-2 self-center w-full text-center my-10 lg:my-20 px-5">
        <h1 className="mb-3 text-2xl md:text-5xl lg:text-6xl tracking-normal font-bold text-white">
          Inspire and get inspired
        </h1>
        <p className="mb-2 text-bold md:text-lg text-sm">
          Join our Photography community, submit your photo to our next magazine
        </p>
        <div className="flex justify-center flex-col md:flex-row gap-4">
          <a
            href={globalLinksData?.results?.facebook_group}
            target="blank"
            className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold tracking-normal text-white bg-[#00000055] border border-gray-400 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-80 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Join Our community</span>
          </a>
          <a
            href={globalLinksData?.results?.submit_photo}
            target="blank"
            className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold tracking-normal text-white bg-[#00000055] border border-gray-400 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Submit Your Photo</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
