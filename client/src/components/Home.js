import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Favorites from './Favorites';
import Recommendations from './Recommendations';
import Popular from "./Popular";
import Profile from "./Profile";

function Home() {
  const pathname = useLocation().pathname;
  return (
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        
      <Sidebar className="" />
          <div className="flex-1 flex flex-col items-center overflow-y-auto">
            <Routes>
              <Route path="/feed" element={<Feed />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
          </div>
          {pathname!=="/profile"?<Recommendations/>:null}
        </div>
      </div>
  );
}

export default Home;
