"use client";

import { useRef, useState, useEffect } from "react";
import BlurImage from "./blur-image";
import { MoveDiagonal2, Redo } from "lucide-react";

export default function AvatarNav() {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [showControles, setShowControls] = useState(true);
  const [position, setPosition] = useState({ x: 50, y: 18 });
  const [rotate, setRotate] = useState(180);
  const [scale, setScale] = useState(1);
  const [dragMode, setDragMode] = useState<"rotate" | "scale" | "move" | null>(null);
  const [startMouse, setStartMouse] = useState<{ x: number; y: number } | null>(null);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);

  const getClientPosition = (e: MouseEvent | TouchEvent) => {
    if ("touches" in e) {
      return {
        x: e.touches[0]?.clientX ?? 0,
        y: e.touches[0]?.clientY ?? 0,
      };
    } else {
      return {
        x: e.clientX,
        y: e.clientY,
      };
    }
  };


  const getAngle = (center: DOMRect, mouseX: number, mouseY: number) => {
    const dx = mouseX - (center.left + center.width / 2);
    const dy = mouseY - (center.top + center.height / 2);
    return (Math.atan2(dy, dx) * 180) / Math.PI;
  };

  const getScale = (center: DOMRect, mouseX: number, mouseY: number) => {
    const dx = mouseX - (center.left + center.width / 2);
    const dy = mouseY - (center.top + center.height / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return Math.min(Math.max(distance / 40, 0.5), 5); // clamp
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!dragMode || !nodeRef.current) return;

      const { x: clientX, y: clientY } = getClientPosition(e);
      const bounds = nodeRef.current.getBoundingClientRect();

      if (dragMode === "rotate") {
        const angle = getAngle(bounds, clientX, clientY);
        setRotate(angle);
      } else if (dragMode === "scale") {
        const newScale = getScale(bounds, clientX, clientY);
        setScale(newScale);
      } else if (dragMode === "move" && startMouse && startPos) {
        const dx = clientX - startMouse.x;
        const dy = clientY - startMouse.y;
        setPosition({ x: startPos.x + dx, y: startPos.y + dy });
      }
    };


    const stopDrag = () => {
      setDragMode(null);
      setStartMouse(null);
      setStartPos(null);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [dragMode, startMouse, startPos]);

  return (
    <section className="w-full flex justify-center items-center gap-5 sticky top-0 py-4 z-10 md:hidden bg-slate-900/5 backdrop-blur-lg">
      <div
        ref={nodeRef}
        className="relative cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onMouseDown={(e) => {
          if (!dragMode) {
            setDragMode("move");
            setStartMouse({ x: e.clientX, y: e.clientY });
            setStartPos({ ...position });
          }
        }}
        onTouchStart={(e) => {
          const touch = e.touches[0];
          if (touch && !dragMode) {
            setDragMode("move");
            setStartMouse({ x: touch.clientX, y: touch.clientY });
            setStartPos({ ...position });
          }
        }}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          position: "absolute",
          transform: `rotate(${rotate}deg) scale(${scale})`,
          transformOrigin: "center center",
        }}


      >
        <BlurImage
          src="/profile2.jpeg"
          alt="Sobit Prasad"
          width={300}
          height={300}
          blurDataURL="/profile2.jpeg"
          className="rounded-lg w-12 h-12 object-cover"
        />

        {showControles && (
          <>
            {/* Rotate handle */}
            <div
              onMouseDown={(e) => {
                e.stopPropagation();
                setDragMode("rotate");
              }}
              onMouseLeave={() => setShowControls(false)}
              className="absolute -top-2 -right-2 w-3 h-3"
            >
              <Redo className="w-3 h-3 text-white rotate-[55deg]" />
            </div>

            {/* Scale handle */}
            <div
              onMouseDown={(e) => {
                e.stopPropagation();
                setDragMode("scale");
              }}
              onMouseLeave={() => setShowControls(false)}
              className="absolute -bottom-2 -right-2 w-2 h-3 "
            >
              <MoveDiagonal2 className="w-3 h-3 text-white " />
            </div>
          </>
        )}
      </div>

      <section className="flex flex-col items-start ml-20">
        <h1 className="text-2xl font-bold text-slate-300">
          Sobit Prasad
        </h1>
        <p className="text-xs text-slate-400">
          Software Developer{" "}
          <a href="https://woxsen.edu.in/" target="_blank" rel="noreferrer">
            @Woxsen University
          </a>
        </p>
      </section>
    </section>
  );
}
