import { FaShop } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { FaBookOpen, FaUserAlt, FaUserCircle, FaGlobe } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { TbWritingSign } from "react-icons/tb";
import { GrCloudSoftware } from "react-icons/gr";

export const adminSidebarRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: MdSpaceDashboard,
  },
  {
    name: "Magazine",
    path: "magazine",
    icon: FaBookOpen,
  },

  // {
  //   name: "Shop",
  //   icon: FaShop,
  //   children: [
  //     {
  //       name: "Magazine",
  //       path: "magazine",
  //       icon: FaBookOpen,
  //     },
  //     {
  //       name: "Software",
  //       path: "software",
  //       icon: GrCloudSoftware,
  //     },
  //   ],
  // },
  {
    name: "Gallery",
    path: "gallery",
    icon: RiGalleryFill,
  },
  {
    name: "Interview",
    path: "interview",
    icon: TbWritingSign,
  },
  {
    name: "Global Links",
    path: "global-links",
    icon: FaGlobe,
  },
  {
    name: "User",
    path: "user",
    icon: FaUserAlt,
  },
  {
    name: "Profile",
    path: "profile",
    icon: FaUserCircle,
  },
];
