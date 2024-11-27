"use client";

import CustomLoader from "@/components/Shared/CustomLoader";
import { useGetAllMagazinesQuery } from "@/redux/services/magazine/magazineApi";
import { useGetAllGalleriesQuery } from "@/redux/services/gallery/galleryApi";
import { useGetAllInterviewsQuery } from "@/redux/services/interview/interviewApi";
import { useGetAllUsersQuery } from "@/redux/services/auth/authApi";

import { FaBookOpen, FaUserAlt } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { TbWritingSign } from "react-icons/tb";
import { useEffect } from "react";
import scrollToTop from "@/utilities/lib/scrollToTop";

const AdminDashboard = () => {
  const { data: magazineData, isLoading } = useGetAllMagazinesQuery();
  const { data: galleryData } = useGetAllGalleriesQuery();
  const { data: interviewData } = useGetAllInterviewsQuery();
  const { data: userData } = useGetAllUsersQuery();

  useEffect(() => {
    scrollToTop();
  });

  return (
    <section>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-xl shadow-xl text-2xl font-bold text-end flex justify-around items-center gap-5">
            <FaBookOpen className="text-[100px] text-[#1677ff]" />
            <div>
              <p>Total Magazines</p>
              <p className="text-7xl mt-2">
                {magazineData?.results?.length ?? "0"}
              </p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-xl text-2xl font-bold text-end flex justify-around items-center gap-5">
            <RiGalleryFill className="text-[100px] text-[#1677ff]" />
            <div>
              <p>Total Gallery Photo</p>
              <p className="text-7xl mt-2">
                {galleryData?.results?.length ?? "0"}
              </p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-xl text-2xl font-bold text-end flex justify-around items-center gap-5">
            <TbWritingSign className="text-[100px] text-[#1677ff]" />
            <div>
              <p>Total Interviews</p>
              <p className="text-7xl mt-2">
                {interviewData?.results?.length ?? "0"}
              </p>
            </div>
          </div>
          <div className="hidden lg:block"></div>
          <div className="bg-white p-10 rounded-xl shadow-xl text-2xl font-bold text-end flex justify-around items-center gap-5">
            <FaUserAlt className="text-[100px] text-[#1677ff]" />
            <div>
              <p>Total Users</p>
              <p className="text-7xl mt-2">
                {userData?.results?.length ?? "0"}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminDashboard;
