import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Main Content */}
      <div className="border-2 border-black p-8">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center tracking-wide mb-4">
          About Wenspaper
        </h1>
        <p className="text-lg text-gray-700 text-center italic mb-8">
          Reimagining news for the digital age
        </p>

        {/* Mission Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg">
            Wenspaper stands as Telangana's premier digital news platform, bridging traditional journalism with modern connectivity. Founded with a vision to transform how our community accesses and engages with news, we've become the largest circulated paper in the region.
          </p>

          <p className="text-lg">
            Our platform uniquely combines success stories, career opportunities, matrimonial services, and business promotions, creating a comprehensive community hub that goes beyond conventional news reporting. We believe in empowering our readers with information that directly impacts their lives and opportunities.
          </p>

          {/* Key Features Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="border border-black p-4 text-center">
              <i className="fa-solid fa-newspaper text-3xl text-sky-500 mb-3"></i>
              <h3 className="font-semibold mb-2">Digital First</h3>
              <p className="text-sm">Delivering real-time updates and breaking news across all digital platforms</p>
            </div>

            <div className="border border-black p-4 text-center">
              <i className="fa-solid fa-users text-3xl text-sky-500 mb-3"></i>
              <h3 className="font-semibold mb-2">Community Focused</h3>
              <p className="text-sm">Connecting people through success stories, careers, and relationships</p>
            </div>

            <div className="border border-black p-4 text-center">
              <i className="fa-solid fa-handshake text-3xl text-sky-500 mb-3"></i>
              <h3 className="font-semibold mb-2">Business Growth</h3>
              <p className="text-sm">Supporting local businesses with targeted advertising solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;