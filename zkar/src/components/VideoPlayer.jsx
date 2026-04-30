import Hls from "hls.js";
import { useEffect, useRef } from "react";

export default function VideoPlayer({ url }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!url) return;

    const video = videoRef.current;
    let hls;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
    } else {
      video.src = url;
    }

    return () => hls && hls.destroy();
  }, [url]);

  return (
    <video
      ref={videoRef}
      controls
      className="w-full aspect-video rounded-lg bg-black"
    />
  );
}