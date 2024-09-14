import "./App.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Listing from "./pages/Listing";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="px-[162px] py-[38px] border-b border-solid border-[#dbdbdb]">
          <img src="/redberry logo.png" alt="logo" />
        </header>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/AddListing" element={<Listing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
