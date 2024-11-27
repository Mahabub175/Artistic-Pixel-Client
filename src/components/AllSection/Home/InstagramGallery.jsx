"use client";

import CustomLoader from "@/components/Shared/CustomLoader";
import { useGetAllGlobalLinksQuery } from "@/redux/services/globalLinks/globalLinksApi";
import Image from "next/image";
import { useEffect, useState } from "react";

const InstagramGallery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const initialPostsToDisplay = 12;
  const postsToLoad = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useGetAllGlobalLinksQuery();

  const token = data?.results?.Insta_access_token;

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const url = `https://graph.instagram.com/me/media?fields=id,username,media_url,media_type,permalink,caption&access_token=${token}&pretty=1&limit=100`;

        const response = await fetch(url);
        const data = await response.json();

        const photoPosts = data?.data?.filter(
          (post) => post?.media_type !== "VIDEO"
        );

        setPosts(photoPosts);
        setDisplayedPosts(photoPosts?.slice(0, initialPostsToDisplay));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        setLoading(false);
      }
    };

    getPosts();
  }, [token]);

  const loadMorePosts = () => {
    const endIndex = displayedPosts?.length + postsToLoad;
    if (endIndex <= posts?.length) {
      setDisplayedPosts(posts?.slice(0, endIndex));
      setCurrentPage(currentPage + 1);
    }
  };

  const loadLessPosts = () => {
    if (currentPage > 1) {
      const startIndex = (currentPage - 2) * postsToLoad;
      const endIndex = startIndex + initialPostsToDisplay;
      setDisplayedPosts(posts?.slice(startIndex, endIndex));
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="px-5 mb-5 mx-auto">
      <div className="w-full flex flex-col items-center">
        <h1 className="md:text-5xl text-3xl tracking-normal font-bold pb-4 text-white">
          Instagram Feed
        </h1>
      </div>
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="text-center my-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] px-12 mt-12 justify-center items-center">
            {displayedPosts?.map((post) => (
              <a
                key={post?.id}
                href={post?.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                {post?.media_type === "VIDEO" ? (
                  <video
                    controls
                    className="rounded-sm object-fit max-w-[450px] max-h-[550px] mx-auto"
                  >
                    <source src={post?.media_url} type="video/mp4" />
                  </video>
                ) : (
                  <div className="relative">
                    <Image
                      width={430}
                      height={537}
                      className="rounded-sm"
                      src={post?.media_url}
                      alt={post?.caption}
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-black flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-500 hover:opacity-60 p-2">
                      <p className="text-xs"></p>
                    </div>
                  </div>
                )}
              </a>
            ))}
          </div>

          {currentPage < Math.ceil(posts?.length / postsToLoad) && (
            <div className="flex justify-center mt-6">
              <button
                onClick={loadMorePosts}
                className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold tracking-tighter text-white bg-[#00000055] border border-gray-400 rounded-2xl group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative">Load More</span>
              </button>
            </div>
          )}
          {currentPage > 1 && (
            <div className="flex justify-center mt-4 mb-10">
              <button
                onClick={loadLessPosts}
                className="mr-2 mb-2 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold tracking-tighter text-white bg-[#00000055] border border-gray-400 rounded-2xl group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative">Load Less</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InstagramGallery;
