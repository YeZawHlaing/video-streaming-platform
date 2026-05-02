import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <div className="w-full bg-black shadow-md px-6 py-4 flex justify-between items-center text-white">

        {/* LOGO */}
        <h1
          onClick={() => go("/")}
          className="text-xl font-bold cursor-pointer"
        >
          ရှယ်ထု
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6">
          <button onClick={() => go("/item")} className="hover:text-blue-400">
            အပြာစာပေ
          </button>

          <button onClick={() => go("/vip")} className="hover:text-blue-400">
            VIP
          </button>

          <button onClick={() => go("/uc")} className="hover:text-blue-400">
            Leaks
          </button>

          <button onClick={() => go("/diamonds")} className="hover:text-blue-400">
            မြမြ
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <Menu
            onClick={() => setOpen(true)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-bold">ရှယ်ထု</h2>
          <X
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* LINKS */}
        <div className="flex flex-col p-4 gap-4">
          <button onClick={() => go("/item")} className="text-left">
            အပြာစာပေ
          </button>

          <button onClick={() => go("/vip")} className="text-left">
            VIP
          </button>

          <button onClick={() => go("/uc")} className="text-left">
            Leaks
          </button>

          <button onClick={() => go("/diamonds")} className="text-left">
            မြမြ
          </button>
        </div>
      </div>
    </>
  );
}