import * as React from 'react';

function Footer() {
    return ( 
        <footer className="bg-gray-50 py-8 px-4 border-t-2 border-gray-300 mt-12">
          <div className="max-w-6xl mx-auto">
            {/* Ethics Statement */}
            <div className="text-center mb-6">
              <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                THIS WEBSITE and OUR ePAPERS FOLLOW HUMAN VALUES and PROFESSIONAL ETHICS
              </p>
            </div>

            {/* Social Media Icons - Positioned to the right */}
            <div className="flex justify-end mb-6">
              <div className="flex gap-2 p-2 bg-sky-500 rounded-lg shadow-sm">
                <a href="#" className="hover:scale-110 transition-transform">
                  <i className="fa-brands fa-facebook text-white text-lg"></i>
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <i className="fa-brands fa-whatsapp text-white text-lg"></i>
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <i className="fa-brands fa-x-twitter text-white text-lg"></i>
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <i className="fa-brands fa-instagram text-white text-lg"></i>
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <i className="fa-brands fa-youtube text-white text-lg"></i>
                </a>
              </div>
            </div>

            {/* Subscription Banner */}
            <div className="text-center mb-6">
              <div className="inline-block border-2 border-gray-800 px-6 py-3 cursor-pointer hover:bg-white hover:shadow-md transition-all duration-200 bg-gray-100">
                <span className="text-sm font-semibold text-gray-800">
                  Subscribe here to get our ePaper edition on you eMail and Whatsapp for free
                </span>
              </div>
            </div>

            {/* Copyright and Disclaimer */}
            <div className="text-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="text-xs text-gray-700 leading-relaxed">
                © 2017 – 2025, All Rights Reserved. 
                <span className="font-bold text-gray-900"> Disclaimer:</span> Readers are suggested to do verification before responding to any Ads. 
                WENSPAPER or its Management are not responsible / liable for the ads provided. 
                Printed and Published in Hyderabad.
              </p>
            </div>
          </div>
        </footer>
    );
}

export default Footer;