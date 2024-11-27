"use client";

import { useGetAllMagazinesQuery } from "@/redux/services/magazine/magazineApi";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./MagazineSlider.css";
import CustomLoader from "@/components/Shared/CustomLoader";

const MagazineSlider = () => {
  const { data: magazineData, isFetching } = useGetAllMagazinesQuery();

  const activeMagazines = magazineData?.results?.filter(
    (item) => item.status === "Active" && !item.is_special
  );

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 5,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      {isFetching ? (
        <CustomLoader />
      ) : (
        <div className="slider-container ">
          <Slider {...settings}>
            {activeMagazines?.map((data) => (
              <Link key={data?._id} href={`/magazines`}>
                <Image
                  className="center-img py-10 px-2.5"
                  src={data?.image}
                  alt="slider"
                  width={350}
                  height={520}
                />
              </Link>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export default MagazineSlider;
