import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [visitCount, setVisitCount] = useState(
    parseInt(localStorage.getItem("visitCount") || "0")
  );

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const newCount = visitCount + 1;
    setVisitCount(newCount);
    localStorage.setItem("visitCount", newCount.toString());
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="border-b-4 border-black bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-start">
          {/* Clock & Visit Counter */}
          <div className="text-sm text-center p-3 border border-black rounded-full w-36 h-36 flex flex-col justify-center items-center shadow-md">
            
            <div className="text-xs text-gray-600">({visitCount} Views)</div>
            <div className="mt-2 text-black text-sm">{time.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })}</div>
            <div className="text-xs mt-1">(IST)</div>
          </div>

          {/* Center Title */}
          <div className="text-center flex-1">
            <div className="text-sm text-gray-600 mb-2">
              ENGLISH EDITION | {time.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric", weekday: "long", timeZone: "Asia/Kolkata" }).toUpperCase()} | TELANGANA
            </div>
            <Link to="/" className="block">
              <h1 className="text-6xl md:text-8xl font-bold text-black tracking-wide hover:text-gray-800 transition-colors">
                WENSPAPER
              </h1>
            </Link>
            <div className="text-sm text-gray-700 mt-2 italic">
              The Largest Circulated Paper In Telangana Connecting
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 p-3 bg-sky-500 rounded-xl shadow-md">
            <a href="#"><i className="fa-brands fa-facebook text-white text-xl"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp text-white text-xl"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter text-white text-xl"></i></a>
            <a href="#"><i className="fa-brands fa-instagram text-white text-xl"></i></a>
            <a href="#"><i className="fa-brands fa-youtube text-white text-xl"></i></a>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="mt-6 border-t border-b border-black py-2">
          <div className="flex justify-center space-x-8 text-sm font-semibold">
            <Link to="/" className="hover:bg-gray-100 px-3 py-1 cursor-pointer">
              SUCCESS STORIES
            </Link>
            <Link to="/job-careers" className="hover:bg-gray-100 px-3 py-1 cursor-pointer">
              JOB CAREERS
            </Link>
            <Link to="/marriage-profiles" className="hover:bg-gray-100 px-3 py-1 cursor-pointer">
              MARRIAGE PROFILES
            </Link>
            <Link to="/business-brands" className="hover:bg-gray-100 px-3 py-1 cursor-pointer">
              BUSINESS BRANDS
            </Link>
          </div>
        </nav>

        {/* Secondary Nav Menu */}
        <div className="grid grid-cols-4 md:grid-cols-9 text-xs md:text-sm font-semibold text-center mt-4 border border-black divide-x divide-black">
          <Link to="/" className="py-2 px-1 hover:bg-gray-100">HOME<br />PAGE</Link>
          <Link to="/about" className="py-2 px-1 hover:bg-gray-100">ABOUT<br />WENSPAPER</Link>
          <Link to="/success-stories" className="py-2 px-1 hover:bg-gray-100">SUCCESS<br />STORIES</Link>
          <Link to="/jobs-careers" className="py-2 px-1 hover:bg-gray-100">JOBS & CAREER<br />OPPORTUNITIES</Link>
          <Link to="/marriage-profiles" className="py-2 px-1 hover:bg-gray-100">MARRIAGE<br />PROFILES</Link>
          <Link to="/business-ads" className="py-2 px-1 hover:bg-gray-100">BUSINESS<br />ADS</Link>
          <Link to="/epapers" className="py-2 px-1 hover:bg-gray-100">ePAPERS</Link>
          <Link to="/advertise" className="py-2 px-1 hover:bg-gray-100">ADVERTISE WITH US</Link>
          <Link to="/contact" className="py-2 px-1 hover:bg-gray-100">Contact us</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
