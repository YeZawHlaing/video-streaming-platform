import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideoById } from "../api/videoApi";
import VideoPlayer from "../components/VideoPlayer";

export default function VideoPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getVideoById(id);
    setVideo(data);
  };

  if (!video) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <VideoPlayer url={video.streamUrl} />

      <h1 className="text-xl font-bold mt-4">{video.title}</h1>
      <p className="text-gray-600">{video.description}</p>
    </div>
  );
}