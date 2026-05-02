import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/video/${video.id}`);
  };

  return (
    <div
      className="cursor-pointer w-full"
      onClick={handleClick}
    >

      {/* THUMBNAIL */}
      <div className="w-full aspect-video overflow-hidden rounded-md bg-gray-200">

        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />

      </div>

      {/* TITLE */}
      <h3 className="mt-1 text-sm font-semibold line-clamp-2">
        {video.title}
      </h3>

      {/* DATE */}
      {/* <p className="text-xs text-gray-500">
        {new Date(video.createdAt).toLocaleDateString()}
      </p> */}

    </div>
  );
}