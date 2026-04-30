import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/video/${video.id}`)}
      className="cursor-pointer"
    >
      {/* Thumbnail */}
      <img
        src={
          video.thumbnailUrl ||
          "https://via.placeholder.com/600x350"
        }
        className="w-full aspect-video object-cover rounded-lg"
      />

      {/* Title */}
      <h2 className="mt-2 font-semibold">{video.title}</h2>

      {/* Caption */}
      <p className="text-sm text-gray-500">
        {video.description || "No description"}
      </p>
    </div>
  );
}