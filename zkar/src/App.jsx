import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}