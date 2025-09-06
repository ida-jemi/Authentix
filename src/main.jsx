import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FakeNews from "./pages/FakeNews";
import LegalAnalyzer from "./pages/LegalAnalyzer";
import BiasCheck from "./pages/BiasCheck";
import PrivacyScan from "./pages/PrivacyScan";
import History from "./pages/History";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fake-news" element={<FakeNews />} />
        <Route path="/legal-analyzer" element={<LegalAnalyzer />} />
        <Route path="/bias-check" element={<BiasCheck />} />
        <Route path="/privacy-scan" element={<PrivacyScan />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
