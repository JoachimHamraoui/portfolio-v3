"use client";

import { createContext, useContext, useState } from "react";

type CursorContextType = {
  isHovered: boolean;
  setHovered: (state: boolean) => void;
};

const CursorContext = createContext<CursorContextType | null>(null);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CursorContext.Provider value={{ isHovered, setHovered: setIsHovered }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) throw new Error("useCursor must be used within CursorProvider");
  return context;
};
