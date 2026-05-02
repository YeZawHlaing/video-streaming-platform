import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVideos } from "../api/videoApi";
import VideoPlayer from "../components/VideoPlayer";
import Layout from "../layout/Layout";

export default function VideoPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    loadVideo();
  }, []);

  const loadVideo = async () => {
    try {
      const data = await getVideos(0, 100);
      const found = data.content.find(v => v.id == id);
      setVideo(found);
    } catch (err) {
      console.error(err);
    }
  };

  if (!video) {
    return (
      <Layout>
        <div className="p-6">Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>

      <div className="p-6 max-w-5xl mx-auto">

        {/* VIDEO PLAYER */}
        <VideoPlayer url={video.streamUrl} />

        {/* INFO */}
        <h1 className="text-2xl font-bold mt-4">
          {video.title}
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          {new Date(video.createdAt).toLocaleDateString()}
        </p>

      </div>

    </Layout>
  );
}