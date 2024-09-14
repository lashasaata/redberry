import "./App.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./pages/landing";
import Listing from "./pages/Listing";

function App() {
  const apiUrl =
    "https://api.real-estate-manager.redberryinternship.ge/api/regions";
  const token = "9d025c29-ad91-40fa-bad6-c361841343ce"; // Replace with your actual token

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl, token]);
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
