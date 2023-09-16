import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerPage from "./pages/Player/Player";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayerPage />} />
        <Route path="home" element={<PlayerPage />} />
        <Route path="video/:videoId" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
