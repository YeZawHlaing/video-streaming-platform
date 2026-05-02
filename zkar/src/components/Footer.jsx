// src/components/Footer.jsx
export default function Footer() {
  return (
    <div className="w-full bg-black text-center py-4 mt-10 text-sm text-white">
      © {new Date().getFullYear()} ZKAR Video. All rights reserved.
    </div>
  );
}