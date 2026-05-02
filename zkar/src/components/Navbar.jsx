// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <div className="w-full bg-black shadow-md px-6 py-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">ZKAR Video</h1>

      <div className="flex gap-4">
        <button className="hover:text-blue-500">Home</button>
        <button className="hover:text-blue-500">Trending</button>
      </div>
    </div>
  );
}