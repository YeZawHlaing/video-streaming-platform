export default function Navbar() {
  return (
    <nav className="bg-black text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">VideoStream</h1>

      <input
        placeholder="Search videos..."
        className="px-3 py-1 rounded text-black w-40 md:w-80"
      />
    </nav>
  );
}