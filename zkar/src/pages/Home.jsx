import { useEffect, useState } from "react";
import { getVideos } from "../api/videoApi";
import LazyVideo from "../components/LazyVideo";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    const data = await getVideos();
    setVideos(data.content || data);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
      {videos.map((v) => (
        <LazyVideo key={v.id} video={v} />
      ))}
    </div>
  );
}