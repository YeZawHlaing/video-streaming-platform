// src/components/VideoPlayer.jsx
import Hls from "hls.js";
import { useEffect, useRef } from "react";

export default function VideoPlayer({ url }) {
  const videoRef = useRef();

  useEffect(() => {
    if (!url) return;

    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);

      return () => hls.destroy();
    } else {
      video.src = url;
    }
  }, [url]);

  return (
    <video
      ref={videoRef}
      controls
      className="w-full rounded-xl"
    />
  );
}