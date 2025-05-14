"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Trigger initial value

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  if (!hasMounted) return null; // Avoid rendering on server

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-white z-50 transition-all duration-100 ease-in-out"
      role="progressbar"
      aria-valuenow={scrollProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll Progress"
      aria-valuetext={`${Math.round(scrollProgress)}%`}
      style={{ width: `${scrollProgress}%` }}
    />
  );
}
