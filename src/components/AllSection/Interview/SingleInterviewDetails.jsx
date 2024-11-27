"use client";

import ShareModal from "@/components/Reusable/Modal/ShareModal";
import CustomLoader from "@/components/Shared/CustomLoader";
import {
  useGetAllInterviewsQuery,
  useGetSingleInterviewBySlugQuery,
} from "@/redux/services/interview/interviewApi";
import { base_url_client } from "@/utilities/configs/base_api";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaShare,
  FaUser,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import RelatedInterViewSlider from "./RelatedInterViewSlider";

const SingleInterviewDetails = ({ param }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentImage, setCurrentImage] = useState("");

  const { data, isFetching } = useGetSingleInterviewBySlugQuery(param);
  const { data: allInterviewData } = useGetAllInterviewsQuery();

  const filteredInterviews = allInterviewData?.results
    ?.filter((item) => item?.status === "Active" && data?.slug !== item?.slug)
    .reverse();

  const shareUrl = `https://www.photohousemagazine.com/interviews/${data?.slug}`;

  const handleShareClick = (url, title, image) => {
    setCurrentUrl(url);
    setCurrentTitle(title);
    setCurrentImage(image);
    setModalOpen(true);
  };

  return (
    <div>
      {isFetching ? (
        <CustomLoader />
      ) : (
        <div className="max-w-[1000px] mx-auto mt-14 lg:mt-20 px-5">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-6">
              <div>
                {data?.interviewer_name && (
                  <p className="font-semibold flex items-center gap-2 mb-2">
                    <FaUser />
                    {data?.interviewer_name}
                  </p>
                )}
              </div>
              <p className="flex items-center gap-2">
                <IoIosTime />
                {moment(data?.published_at).format("MMM Do, YYYY")}
              </p>
            </div>
            <button
              onClick={() => handleShareClick(shareUrl)}
              className="text-white bg-gray-700 p-2 rounded-full hover:scale-105 duration-300 -mt-2"
            >
              <FaShare />
            </button>
          </div>
          <h1 className="text-white sm:text-5xl text-3xl tracking-normal font-bold my-10">
            {data?.title}
          </h1>
          <div className="flex justify-center">
            <Image
              src={
                data?.thumbnail_image
                  ? `${data?.thumbnail_image}`
                  : "https://i.ibb.co/PNQkmRf/cont.jpg"
              }
              alt={data?.title || "Interview Thumbnail"}
              width={710}
              height={500}
              className="rounded-xl"
              priority
            />
          </div>
          <div className="flex-1 mt-10">
            <div
              className="mt-4 mb-10"
              dangerouslySetInnerHTML={{
                __html: data?.content,
              }}
            />
            <div className="border-y py-4 lg:mt-10 text-center flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-4 lg:mb-0">
                <div className="flex flex-wrap leading-[25px] md:justify-center items-center gap-4">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      shareUrl
                    )}&quote=${encodeURIComponent(
                      currentTitle
                    )}&picture=${encodeURIComponent(currentImage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="inline text-[27px] hover:bg-white hover:text-black px-2 rounded-full duration-300 mr-1" />
                  </a>
                  <a
                    href={`https://x.com/intent/tweet?url=${encodeURIComponent(
                      shareUrl
                    )}&text=${encodeURIComponent(
                      currentTitle
                    )}&via=YourTwitterHandle`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="inline text-[32px] hover:bg-white hover:text-black px-2 rounded-full duration-300 mr-1" />
                  </a>
                  <a
                    href={`https://www.instagram.com/?url=${encodeURIComponent(
                      shareUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="inline text-[32px] hover:bg-white hover:text-black px-2 rounded-full duration-300" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      shareUrl
                    )}&title=${encodeURIComponent(
                      currentTitle
                    )}&summary=${encodeURIComponent(
                      currentTitle
                    )}&source=YourWebsite&image=${encodeURIComponent(
                      currentImage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="inline text-[32px] hover:bg-white hover:text-black px-2 rounded-full duration-300" />
                  </a>
                </div>
              </div>
              <Link href={"/interviews"}>
                <span className="font-bold hover:text-gray-400 duration-300">
                  {" "}
                  Interviews
                </span>
              </Link>
            </div>
          </div>
          <ShareModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            shareUrl={shareUrl}
            title={currentTitle}
            image={currentImage}
          />
        </div>
      )}
      <div className="my-10 lg:my-32 px-10 lg:px-20">
        <div className="flex items-center justify-between">
          <h3 className="mb-10 lg:text-xl font-bold">Related Interviews</h3>
          <Link href={`/interviews`}>
            <h3 className="mb-10 lg:text-xl font-bold hover:text-white/70 duration-300">
              See All
            </h3>
          </Link>
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
          <div className=" my-16 max-w-[1800px] mx-auto lg:ml-10">
            <RelatedInterViewSlider
              data={filteredInterviews}
              handleShareClick={handleShareClick}
            />
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
    </div>
  );
};

export default SingleInterviewDetails;
