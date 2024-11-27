import { FaFacebook, FaLinkedin, FaInstagram, FaShare } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { HiX } from "react-icons/hi";
import { toast } from "sonner";
import { Modal } from "antd";
import { FaXTwitter } from "react-icons/fa6";
import MetaHead from "@/components/Shared/MetaHead";

const ShareModal = ({ modalOpen, setModalOpen, shareUrl, title, image }) => {
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const hashtag = encodeURIComponent("#PhotohouseMagazine");

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!");
  };

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${hashtag}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  return (
    <div>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => setModalOpen(true)}
          className="text-white bg-gray-700 p-2 rounded-full hover:scale-105 duration-300"
        >
          <FaShare />
        </button>
      </div>

      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        closeIcon={
          <HiX className="text-2xl text-gray-600 hover:text-gray-800" />
        }
        centered
      >
        <h2 className="text-lg font-bold mb-4 text-black">Share This Post</h2>
        <div className="flex justify-around mb-4 mt-10">
          <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 text-4xl" />
          </a>

          <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-black text-4xl" />
          </a>

          <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 text-4xl" />
          </a>

          <button
            onClick={handleCopyLink}
            className="flex items-center space-x-2 p-2 bg-gray-800 text-white rounded-lg"
          >
            <IoIosLink />
          </button>
        </div>
      </Modal>

      {/* Meta tags for social media */}
      <MetaHead shareUrl={shareUrl} title={title} image={image} />
    </div>
  );
};

export default ShareModal;
