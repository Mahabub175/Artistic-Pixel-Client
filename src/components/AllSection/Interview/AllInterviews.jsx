"use client";

import ShareModal from "@/components/Reusable/Modal/ShareModal";
import CustomLoader from "@/components/Shared/CustomLoader";
import { useGetAllInterviewsQuery } from "@/redux/services/interview/interviewApi";
import { base_url_client } from "@/utilities/configs/base_api";
import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShare } from "react-icons/fa";

const AllInterviews = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isFetching } = useGetAllInterviewsQuery();

  const activeInterviews = data?.results?.filter(
    (item) => item?.status === "Active"
  );

  const filteredInterviews = activeInterviews
    ?.filter((interview) =>
      interview.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reverse();

  const handleShareClick = (url, title, image) => {
    setCurrentUrl(url);
    setCurrentTitle(title);
    setCurrentImage(image);
    setModalOpen(true);
  };

  return (
    <div>
      <div className="flex justify-between mt-10 relative">
        <div></div>
        <div>
          <Input
            size="large"
            label="Search..."
            value={searchTerm}
            className="bg-white/70"
            placeholder="Search Interviews..."
            suffix={<CiSearch className="text-black text-2xl" />}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {isFetching ? (
        <CustomLoader />
      ) : filteredInterviews?.length === 0 ? (
        <div className="flex items-center justify-center h-[300px]">
          <h2 className="text-gray-300 text-xl">
            Stay Connected To See Upcoming Interviews!
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-16 max-w-[1800px] mx-auto lg:ml-10">
          {filteredInterviews?.map((item) => {
            const shareUrl = `${base_url_client}/interviews/${item?.slug}`;
            const thumbnailImage =
              item?.thumbnail_image || "https://i.ibb.co/PNQkmRf/cont.jpg";

            return (
              <div
                key={item?._id}
                className="relative rounded-xl group flex gap-4"
              >
                <div className="relative">
                  <Image
                    src={thumbnailImage}
                    alt={item?.title}
                    width={200}
                    height={250}
                    className="lg:w-[200px] lg:h-[250px] rounded-xl object-contain"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        </div>
      )}

      <ShareModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        shareUrl={currentUrl}
        title={currentTitle}
        image={currentImage}
      />
    </div>
  );
};

export default AllInterviews;
