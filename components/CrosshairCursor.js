"use client";

import { useEffect, useRef } from "react";

/**
 * Custom crosshair cursor: 2 garis (horizontal + vertical) yang ngikutin
 * posisi mouse, plus titik kecil di tengah. Cuma aktif di device yang
 * punya mouse beneran (hover:hover + pointer:fine) — di HP/tablet gak
 * dipasang sama sekali, cursor normal device tetap jalan.
 */
export default function CrosshairCursor() {
  const hRef = useRef(null);
  const vRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    function handleMove(e) {
      if (hRef.current) hRef.current.style.transform = `translateY(${e.clientY}px)`;
      if (vRef.current) vRef.current.style.transform = `translateX(${e.clientX}px)`;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="crosshair" aria-hidden="true">
      <div ref={hRef} className="crosshair-line crosshair-h" />
      <div ref={vRef} className="crosshair-line crosshair-v" />
      <div ref={dotRef} className="crosshair-dot" />
    </div>
  );
}
