import { useEffect, useState } from "react";
import { getVideos } from "../api/videoApi";
import VideoCard from "../components/VideoCard";
import Layout from "../layout/Layout";
import AdSense from "../components/AdSense";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    loadVideos(page);
  }, [page]);

  const loadVideos = async (page) => {
    try {
      const data = await getVideos(page, 6);
      setVideos(data.content || []);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

return (
  <Layout>

    <div className="p-6 flex justify-center">

      {/* CENTERED CONTAINER */}
      <div className="max-w-10xl">

        {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
  {videos.map((video) => (
    <VideoCard key={video.id} video={video} />
  ))}
</div>
{/* ADS BELOW GRID */}
{/* <AdSense slot="5705189214" /> */}
<AdSense
  slotMobile="5705189214"
  slotDesktop="5705189214"
/>

        {/* PAGINATION */}
        <div className="flex justify-center mt-6 gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`px-3 py-1 rounded ${
                page === i ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

      </div>

    </div>

  </Layout>
);
}