"use client";

import { useState } from "react";
import { useGetAllMagazinesQuery } from "@/redux/services/magazine/magazineApi";
import Image from "next/image";
import CustomLoader from "@/components/Shared/CustomLoader";

const MagazineTab = () => {
  const { data, isLoading } = useGetAllMagazinesQuery();
  const [isSpecialView, setIsSpecialView] = useState(false);
  const [fade, setFade] = useState(false);

  const handleTabChange = (isSpecial) => {
    setFade(true);
    setTimeout(() => {
      setIsSpecialView(isSpecial);
      setFade(false);
    }, 300);
  };

  const activeMagazines = data?.results?.filter(
    (item) => item.status === "Active"
  );

  const filteredMagazines = activeMagazines?.filter((item) =>
    isSpecialView ? item?.is_special === "true" : item?.is_special !== "true"
  );

  return (
    <div className="mt-6 mx-auto mb-0 md:mb-24">
      <div className="flex justify-center mb-6 border-b-gray-500 border-b-2 pb-10">
        <button
          className={`px-4 py-2 mx-2 font-semibold rounded-lg ${
            !isSpecialView
              ? "bg-gray-500 text-white border-gray-500"
              : "bg-transparent text-white border border-gray-500 hover:bg-gray-400 duration-300"
          }`}
          onClick={() => handleTabChange(false)}
        >
          Regular Edition
        </button>
        <button
          className={`px-4 py-2 mx-2 font-semibold rounded-lg ${
            isSpecialView
              ? "bg-gray-500 text-white border-gray-500"
              : "bg-transparent text-white border border-gray-500 hover:bg-gray-400 duration-300"
          }`}
          onClick={() => handleTabChange(true)}
        >
          Special Edition
        </button>
      </div>

      {isLoading ? (
        <CustomLoader />
      ) : (
        <>
          {filteredMagazines?.length === 0 ? (
            <p className="text-center text-white mt-10">
              {isSpecialView
                ? "No special magazines available."
                : "No regular magazines available."}
            </p>
          ) : (
            <div
              className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 mt-10 transition-opacity duration-300 md:px-20 ${
                fade ? "opacity-20" : "opacity-100"
              }`}
            >
              {filteredMagazines?.map((item) => (
                <div
                  className="my-3 m-auto animate-fade relative"
                  key={item?._id}
                >
                  <a
                    target="_blank"
                    href={item?.redirect_link}
                    rel="noreferrer"
                    className="relative"
                  >
                    <Image
                      src={item?.image}
                      height={344}
                      width={265}
                      alt="Magazines image"
                      className="cursor-pointer rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-black flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-500 hover:opacity-60 p-2 text-bold">
                      Buy Now
                    </div>
                  </a>
                  <p className="text-white text-xs text-center mt-2 font-semibold">
                    {item?.name.split("-")[0]} - {item?.name.split("-")[1]}{" "}
                    <br /> {item?.name.split("-")[2]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MagazineTab;
