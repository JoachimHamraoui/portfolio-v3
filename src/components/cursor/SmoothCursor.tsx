"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useCursor } from "../../context/CursorContext";

type Props = {
  cursor: React.ReactNode;
};

export function SmoothCursor({ cursor }: Props) {
  const { isHovered } = useCursor();

  // Use MotionValues instead of state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 9999,
        pointerEvents: "none",
        willChange: "transform",
      }}
      animate={{
        scale: isHovered ? 4 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {cursor}
    </motion.div>
  );
}
