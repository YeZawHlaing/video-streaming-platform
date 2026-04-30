import { useEffect, useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function LazyVideo({ video }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      {show ? (
        <>
          <VideoPlayer url={video.streamUrl} />

          {/* Info section */}
          <div className="mt-2 px-1">
            <h2 className="font-semibold text-lg">
              {video.title}
            </h2>

            {/* <p className="text-sm text-gray-500">
              {video.description || "No caption"}
            </p> */}

            {/* DATE */}
            <p className="text-xs text-black-400 mt-1">
              {video.createdAt
                ? formatDate(video.createdAt)
                : "Unknown date"}
            </p>
          </div>
        </>
      ) : (
        <div className="w-full aspect-video bg-black animate-pulse rounded-lg" />
      )}
    </div>
  );
}