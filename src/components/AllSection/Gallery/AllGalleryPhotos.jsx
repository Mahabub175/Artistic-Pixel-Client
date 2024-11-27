"use client";

import CustomLoader from "@/components/Shared/CustomLoader";
import { useGetAllGalleriesQuery } from "@/redux/services/gallery/galleryApi";
import Image from "next/image";
import Link from "next/link";
import { IoCameraOutline } from "react-icons/io5";

const AllGalleryPhotos = () => {
  const { data, isLoading } = useGetAllGalleriesQuery();

  const activeGalleryData = data?.results?.filter(
    (item) => item.status === "Active"
  );

  return (
    <section className="mb-20">
      {isLoading ? (
        <CustomLoader />
      ) : (
        <div className="columns-2 md:columns-4 mt-5 lg:mt-10 px-5">
          {activeGalleryData?.reverse()?.map((item) => (
            <div key={item._id}>
              <div className="mb-1">
                <div className="group relative block overflow-hidden transition-all duration-500">
                  <Link
                    href={`/gallery/${item?._id}`}
                    className="relative transition-all duration-500 group-hover:scale-105 cursor-pointer"
                  >
                    <Image
                      src={item?.image}
                      alt="gallery image"
                      height={200}
                      width={500}
                      className="w-full mb-3 object-cover"
                    />
                  </Link>
                  <div className="absolute -bottom-52 group-hover:bottom-4 right-2 left-2 transition-all duration-500 bg-black/60 p-4 rounded shadow shadow-gray-700">
                    <a className="hover:text-primary-600 text-lg transition duration-500 font-medium flex items-center">
                      <IoCameraOutline size={18} className="mr-2" />:{" "}
                      {item?.click}
                      {!!item?.flag && (
                        <Image
                          src={item?.flag}
                          alt="flag"
                          height={13}
                          width={13}
                          className="rounded-sm ml-2"
                        />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllGalleryPhotos;
