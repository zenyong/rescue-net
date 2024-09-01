import React from "react";
import Banner from "../components/home/Banners";

const Home = () => {
  return (
    <div className="scrool-smooth flex flex-col items-center justify-center gap-y-16">
      <div className="mainSection w-full flex items-center justify-center" style={{position:"relative"}}>
      <img src="https://images.news18.com/ibnlive/uploads/2023/12/chennai-rain-cyclone-michaung-updates-2023-12-72be5ff2bf0fc193b289a0be1167868c.jpg?impolicy=website&width=640&height=480" style={{height:"100%", width:"100%", position:"absolute", top:"0", left:"0", zIndex:"9"}}/>
        <div style={{height:"100%", width:"100%", position:"absolute", top:"0", left:"0", background:"#000000a0", zIndex:"99"}}/>
        <div style={{position:"absolute", zIndex:"999"}} className="md:w-6/12 sm:w-full text-center flex flex-col gap-y-6 items-center justify-center">
          <p className="font-serif 2xl:h-32 h-full md:text-6xl sm:text-3xl text-6xl overflow-hidden block font-bold text-white">
            Connect and Coordinate During Calamities
          </p>
          <p className="w-8/12 sm:mb-40 md:mb-0 font-roborto sm:text-sm md:text-lg overflow-hidden 2xl:block opacity-80 text-white">
            RescueNet is a comprehensive web application designed to
            facilitate coordination and location display for rescue agencies
            during both natural disasters and man-made emergencies. calamities.
          </p>
        </div>
      </div>

      <div className="text-gray-800 sm:text-2xl md:text-5xl font-serif 2xl:h-16 overflow-hidden text-center font-bold">
        {`"Empowering Heroes During Crisis Situations"`}
      </div>

      <Banner />
    </div>
  );
};

export default Home;

// Connect and Coordinate During Calamities
// RescueNet is a Web Application that help rescue agencies coordinate and display their locations during natural or man-made calamaties
