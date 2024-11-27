"use client";

import Lottie from "lottie-react";
import animation from "@/assets/not-found.json";

const NotFoundAnimation = () => {
  return <Lottie animationData={animation} loop={true} className="w-1/2" />;
};

export default NotFoundAnimation;
