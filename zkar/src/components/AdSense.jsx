// src/components/AdSense.jsx
import { useEffect } from "react";

export default function AdSense({ slotMobile, slotDesktop }) {

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {}
  }, []);

  return (
    <div className="w-full my-4">

      {/* 📱 MOBILE AD */}
      <div className="block md:hidden">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4171376341599297"
          data-ad-slot={slotMobile}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>

      {/* 💻 DESKTOP AD */}
      <div className="hidden md:block">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4171376341599297"
          data-ad-slot={slotDesktop}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>

    </div>
  );
}