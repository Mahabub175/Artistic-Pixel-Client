"use client";

import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaFacebook, FaInstagram, FaGlobe, FaCompress } from "react-icons/fa";
import {
  useGetAllGalleriesQuery,
  useGetSingleGalleryQuery,
} from "@/redux/services/gallery/galleryApi";
import Image from "next/image";
import CustomLoader from "@/components/Shared/CustomLoader";

const GallerySlider = ({ param }) => {
  const { data: singleGalleryData } = useGetSingleGalleryQuery(param);
  const { data: allGalleryData } = useGetAllGalleriesQuery();
  const [currentGallery, setCurrentGallery] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    if (singleGalleryData && allGalleryData) {
      const reversedGalleries = [...allGalleryData?.results]?.reverse();

      setCurrentGallery(singleGalleryData);
      setImageIndex(
        reversedGalleries.findIndex(
          (gallery) => gallery._id === singleGalleryData._id
        )
      );
    }
  }, [singleGalleryData, allGalleryData]);

  const handlePrevNext = (newIndex) => {
    if (allGalleryData && allGalleryData.results.length > 0) {
      const validIndex = newIndex < 0 ? 0 : newIndex;
      const newGallery = allGalleryData.results[validIndex];
      setImageIndex(validIndex);
      setCurrentGallery(newGallery);
    }
  };

  const toggleFullScreen = () => {
    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        // Safari
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
    } else {
      if (imageContainerRef.current.requestFullscreen) {
        imageContainerRef.current.requestFullscreen();
      } else if (imageContainerRef.current.webkitRequestFullscreen) {
        // Safari
        imageContainerRef.current.webkitRequestFullscreen();
      } else if (imageContainerRef.current.mozRequestFullScreen) {
        // Firefox
        imageContainerRef.current.mozRequestFullScreen();
      } else if (imageContainerRef.current.msRequestFullscreen) {
        // IE/Edge
        imageContainerRef.current.msRequestFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="mt-6 lg:-mb-10">
      {!currentGallery ? (
        <CustomLoader />
      ) : (
        <div className="flex flex-col lg:grid lg:grid-cols-10 mb-20 mt-2 gap-10 overflow-hidden">
          <div
            ref={imageContainerRef}
            className={`lg:col-span-7 col-span-10 relative  ${
              isFullScreen ? "w-screen bg-[#0b0b0b]" : ""
            }`}
          >
            <div
              className="absolute inset-0 -mr-5 mx-auto h-full -z-10 bg-cover bg-center opacity-50"
              style={{
                backgroundImage: `url(${currentGallery?.image})`,
                filter: "blur(25px)",
              }}
            ></div>
            <div
              className={`flex justify-end absolute z-50 right-0 top-5 ${
                isFullScreen && "absolute z-50 top-4 right-[5%]"
              }`}
              onClick={toggleFullScreen}
            >
              {isFullScreen ? (
                <FaCompress className="text-2xl hover:scale-125 duration-300" />
              ) : (
                <SlSizeFullscreen className="text-2xl hover:scale-125 duration-300" />
              )}
            </div>
            <div
              className={`lg:h-[100vh] lg:-mt-20 relative backdrop-blur-sm flex justify-center cursor-move ${
                isFullScreen ? "w-screen" : ""
              }`}
            >
              <div
                className={`flex items-center relative z-10 lg:mt-20 ${
                  isFullScreen ? "h-[100vh]" : ""
                }`}
              >
                <Image
                  width={600}
                  height={300}
                  src={currentGallery?.image}
                  alt={currentGallery?.title || "Gallery Image"}
                  className={`${
                    isFullScreen ? "w-auto max-h-[100vh]" : "h-fit"
                  }`}
                />
              </div>
              <div
                className={`flex justify-between absolute top-[48%] w-full px-2 z-20 ${
                  isFullScreen ? "fullscreen" : ""
                }`}
              >
                {imageIndex > 0 ? (
                  <FiChevronLeft
                    size={30}
                    color="white"
                    className="bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400"
                    onClick={() => handlePrevNext(imageIndex - 1)}
                  />
                ) : (
                  <span className="opacity-0">.</span>
                )}
                {imageIndex < allGalleryData?.results?.length - 1 && (
                  <FiChevronRight
                    size={30}
                    color="white"
                    className="bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400"
                    onClick={() => handlePrevNext(imageIndex + 1)}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="col-span-3 md:border-l-[0.5px] border-white/40 md:pl-6">
            <div className="border-b-2 pb-1 pt-4">
              <h1 className="font-bold text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-300 pb-4 text-center">
                Publication Photohouse Magazine
              </h1>
            </div>

            <div className="grid grid-cols-1 px-6 pr-8 mt-4">
              {currentGallery?.artists?.map((artist, i) => (
                <div
                  className="items-center bg-gray-800 rounded-lg shadow flex border-gray-600 py-2 my-1 px-4"
                  key={i}
                >
                  <Image
                    height={50}
                    width={50}
                    className="w-[50px] h-[50px] rounded-full ring ring-emerald-400"
                    src={
                      artist.photo ??
                      "https://photohouseapi.photohousemagazine.com/uploads/1727162592808-avatar.jpg"
                    }
                    alt={artist.name}
                  />
                  <div className="px-5">
                    <h3 className="text-sm font-bold tracking-tight text-white flex">
                      {artist.name}&nbsp;&nbsp;
                      {!!artist.flag && (
                        <Image
                          height={10}
                          width={10}
                          src={artist.flag}
                          alt="flag"
                          className="rounded-sm"
                          style={{ height: "10px", marginTop: "6px" }}
                        />
                      )}
                    </h3>
                    <small className="text-gray-400 text-xs block">
                      {artist.profession}
                    </small>
                    {!!artist.facebook && (
                      <a
                        href={artist.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook
                          className="inline mr-2 text-gray-200 hover:text-emerald-300 cursor-pointer"
                          size={13}
                        />
                      </a>
                    )}
                    {!!artist.instagram && (
                      <a
                        href={artist.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram
                          className="inline mx-2 text-gray-200 hover:text-emerald-300 cursor-pointer"
                          size={13}
                        />
                      </a>
                    )}
                    {!!artist.website && (
                      <a
                        href={artist.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe
                          className="inline mx-2 text-gray-200 hover:text-emerald-300 cursor-pointer"
                          size={13}
                        />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySlider;
