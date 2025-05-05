"use client";

import Lottie from "lottie-react";
import { FC } from "react";

interface LottieClientOnlyProps {
  animationData: object;
  loop?: boolean;
  className?: string;
}

const LottieClientOnly: FC<LottieClientOnlyProps> = ({
  animationData,
  loop = true,
  className,
}) => {
  return (
    <Lottie animationData={animationData} loop={loop} className={className} />
  );
};

export default LottieClientOnly;
