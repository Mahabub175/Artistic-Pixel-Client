"use client";

import { useGetAllGlobalLinksQuery } from "@/redux/services/globalLinks/globalLinksApi";
import Image from "next/image";
import { FaEnvelope, FaFacebookF, FaGlobe, FaInstagram } from "react-icons/fa";
import ceo from "@/assets/images/CEO.jpg";
import co_ceo from "@/assets/images/photo_7.jpg";

const AboutLinks = () => {
  const { data } = useGetAllGlobalLinksQuery();

  return (
    <div>
      <div className="flex justify-between pt-10 text-center px-[5%] items-center">
        <div>
          <Image
            priority
            src={ceo}
            width={100}
            height={127}
            alt="ceo"
            className={`rounded-md animate-fade mx-auto`}
          />
          <p className="text-3xl font-bold pt-2">Sabbir Ashraf</p>
          <p className="text-slate-400 mb-2">Founder</p>
          <a
            href={data?.results?.sabbir_facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="inline mr-2" color="lightgray" size={20} />
          </a>
          <a
            href={data?.results?.sabbir_instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="inline mx-2" color="lightgray" size={20} />
          </a>
          <a
            href={`mailto:${data?.results?.sabbir_email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="inline mx-2" color="lightgray" size={20} />
          </a>
        </div>
        <div>
          <div className="w-[100px] h-[130px] relative m-auto">
            <Image
              priority
              src={co_ceo}
              width={100}
              height={127}
              alt="page7"
              className={`rounded-md animate-fade h-[127px] mx-auto`}
            />
          </div>
          <p className="text-3xl font-bold pt-2">PAGE7 Photo</p>
          <p className="text-slate-400 mb-2">Co-Founder</p>
          <a
            href={data?.results?.pagel_facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="inline mx-2" color="lightgray" size={20} />
          </a>
          <a
            href={data?.results?.pagel_instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="inline mx-2" color="lightgray" size={20} />
          </a>
          <a
            href={`mailto:${data?.results.pagel_email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="inline mx-2" color="lightgray" size={20} />
          </a>
          <a
            href={data?.results.pagel_web}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="inline mx-2" color="lightgray" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutLinks;
