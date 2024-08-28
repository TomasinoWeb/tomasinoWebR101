import React, { useState, useEffect } from "react";

export const isDesktop = useViewportWidth(1024);
export const isTablet = useViewportWidth(768);
export const isMobile = useViewportWidth(768);

// Hook for checking viewport width
export function useViewportWidth(targetWidth: number) {
  const [isWidthMet, setIsWidthMet] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsWidthMet(window.innerWidth >= targetWidth);
      };

      // Initial check for viewport width
      handleResize();

      // Monitor window resize
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [targetWidth]);

  return isWidthMet;
}
