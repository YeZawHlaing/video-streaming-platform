// src/components/Layout.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* TOP */}
      <Navbar />

      {/* CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* BOTTOM */}
      <Footer />
    </div>
  );
}