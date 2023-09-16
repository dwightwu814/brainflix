import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerPage from "./pages/Player/Player";
import UploadPage from "./pages/Upload/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayerPage />} />
        <Route path=":userName" element={<PlayerPage />} />
        <Route path="video/:videoId/" element={<PlayerPage />} />
        <Route path="video/:videoId/:userName" element={<PlayerPage />} />
        <Route path="upload/" element={<UploadPage />} />
        <Route path="upload/:userName" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
