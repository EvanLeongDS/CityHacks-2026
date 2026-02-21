"use client";

import { PanoramicGeoJSON } from "@/types/geojson";
import { useEffect, useState } from "react";

export default function PanoramicViewer({
  data,
}: {
  data: PanoramicGeoJSON[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowUp") {
        setCurrentIndex((i) => Math.min(i + 1, data.length));
      }
      if (event.key === "ArrowDown") {
        setCurrentIndex((i) => Math.max(i - 1, 0));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <iframe
      src={data[currentIndex].image_url}
      className="w-screen h-screen overflow-hidden"
    />
  );
}
