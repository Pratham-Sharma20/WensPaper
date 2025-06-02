import { useState } from "react";

const Epaper = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedEdition, setSelectedEdition] = useState('hyderabad');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('single'); // single, double, thumbnail
  const [zoomLevel, setZoomLevel] = useState(100);

  // Mock data for different editions and dates
  const editions = [
    { id: 'hyderabad', name: 'HYDERABAD EDITION', pages: 16 },
    { id: 'warangal', name: 'WARANGAL EDITION', pages: 12 },
    { id: 'nizamabad', name: 'NIZAMABAD EDITION', pages: 12 },
    { id: 'karimnagar', name: 'KARIMNAGAR EDITION', pages: 14 }
  ];

  const currentEdition = editions.find(ed => ed.id === selectedEdition) || editions[0];
  const totalPages = currentEdition.pages;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    setCurrentPage(1); // Reset to first page when date changes
  };

  const handleEditionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEdition(e.target.value);
    setCurrentPage(1); // Reset to first page when edition changes
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleZoomChange = (newZoom: number) => {
    setZoomLevel(Math.max(50, Math.min(200, newZoom)));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", { 
      day: "2-digit", 
      month: "long", 
      year: "numeric", 
      weekday: "long" 
    }).toUpperCase();
  };

  const generatePageThumbnails = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-8 border-b-4 border-black pb-6">
        <h1 className="text-4xl md:text-6xl font-bold text-black tracking-wide mb-2">
          ePAPERS
        </h1>
        <p className="text-lg text-gray-700 italic">
          Read WENSPAPER digitally - Current and archived editions
        </p>
      </div>

      {/* Controls Panel */}
      <div className="border-4 border-black bg-white p-4 mb-6 shadow-lg">
        <div className="grid md:grid-cols-4 gap-4 items-center">
          {/* Date Selector */}
          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              SELECT DATE
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              max={new Date().toISOString().split('T')[0]}
              className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Edition Selector */}
          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              EDITION
            </label>
            <select
              value={selectedEdition}
              onChange={handleEditionChange}
              className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
            >
              {editions.map(edition => (
                <option key={edition.id} value={edition.id}>
                  {edition.name}
                </option>
              ))}
            </select>
          </div>

          {/* View Mode */}
          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              VIEW MODE
            </label>
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value)}
              className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
            >
              <option value="single">SINGLE PAGE</option>
              <option value="double">DOUBLE PAGE</option>
              <option value="thumbnail">THUMBNAIL VIEW</option>
            </select>
          </div>

          {/* Download Button */}
          <div className="flex flex-col">
            <label className="block text-sm font-semibold text-black mb-1">
              DOWNLOAD
            </label>
            <button className="bg-sky-500 text-white font-bold py-2 px-4 hover:bg-sky-600 transition-colors">
              <i className="fa-solid fa-download mr-2"></i>
              PDF
            </button>
          </div>
        </div>
      </div>

      {/* Paper Info */}
      <div className="bg-gray-100 border-2 border-black p-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-black">
              WENSPAPER - {currentEdition.name}
            </h2>
            <p className="text-gray-700">{formatDate(selectedDate)}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">TOTAL PAGES: {totalPages}</p>
            <p className="text-sm text-gray-600">Current Page: {currentPage}</p>
          </div>
        </div>
      </div>

      {/* Viewer Controls */}
      {viewMode !== 'thumbnail' && (
        <div className="flex justify-between items-center mb-4 bg-white border-2 border-black p-3">
          {/* Page Navigation */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="fa-solid fa-angles-left"></i>
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>
            
            <span className="px-4 py-1 border border-black bg-gray-100 font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleZoomChange(zoomLevel - 10)}
              className="px-3 py-1 border border-black hover:bg-gray-100"
            >
              <i className="fa-solid fa-magnifying-glass-minus"></i>
            </button>
            <span className="px-3 py-1 border border-black bg-gray-100 font-semibold min-w-16 text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={() => handleZoomChange(zoomLevel + 10)}
              className="px-3 py-1 border border-black hover:bg-gray-100"
            >
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </button>
            <button
              onClick={() => handleZoomChange(100)}
              className="px-3 py-1 border border-black hover:bg-gray-100"
            >
              Fit
            </button>
          </div>
        </div>
      )}

      {/* Newspaper Viewer */}
      <div className="border-4 border-black bg-white shadow-lg">
        {viewMode === 'thumbnail' ? (
          /* Thumbnail View */
          <div className="p-6">
            <h3 className="text-xl font-bold text-black mb-4 border-b-2 border-black pb-2">
              ALL PAGES - {currentEdition.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {generatePageThumbnails().map(pageNum => (
                <div
                  key={pageNum}
                  onClick={() => {
                    setCurrentPage(pageNum);
                    setViewMode('single');
                  }}
                  className="cursor-pointer border-2 border-black hover:border-sky-500 transition-colors"
                >
                  <div className="aspect-[3/4] bg-gray-100 flex flex-col justify-center items-center text-center p-2">
                    <i className="fa-regular fa-newspaper text-3xl text-gray-600 mb-2"></i>
                    <p className="font-semibold">Page {pageNum}</p>
                    <p className="text-xs text-gray-600">
                      {pageNum === 1 ? 'FRONT PAGE' : 
                       pageNum === totalPages ? 'BACK PAGE' : 
                       pageNum <= 4 ? 'NEWS' : 
                       pageNum <= 8 ? 'SPORTS' : 'CLASSIFIED'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Single/Double Page View */
          <div className="p-6 text-center">
            <div 
              className="inline-block bg-white border-2 border-gray-300 shadow-xl"
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
            >
              {viewMode === 'double' && currentPage < totalPages ? (
                /* Double Page Spread */
                <div className="flex">
                  <div className="w-96 h-[500px] bg-gray-50 border-r border-gray-300 flex flex-col justify-center items-center">
                    <i className="fa-regular fa-newspaper text-6xl text-gray-400 mb-4"></i>
                    <h3 className="text-xl font-bold text-gray-600 mb-2">PAGE {currentPage}</h3>
                    <p className="text-gray-500 text-center px-4">
                      {currentPage === 1 ? 'FRONT PAGE - Latest News & Headlines' :
                       currentPage <= 4 ? 'NEWS SECTION - Local & National Updates' :
                       currentPage <= 8 ? 'SPORTS & ENTERTAINMENT' :
                       'CLASSIFIEDS & ADVERTISEMENTS'}
                    </p>
                  </div>
                  <div className="w-96 h-[500px] bg-gray-50 flex flex-col justify-center items-center">
                    <i className="fa-regular fa-newspaper text-6xl text-gray-400 mb-4"></i>
                    <h3 className="text-xl font-bold text-gray-600 mb-2">PAGE {currentPage + 1}</h3>
                    <p className="text-gray-500 text-center px-4">
                      {currentPage + 1 <= 4 ? 'NEWS SECTION - Regional Coverage' :
                       currentPage + 1 <= 8 ? 'BUSINESS & LIFESTYLE' :
                       currentPage + 1 === totalPages ? 'BACK PAGE - Sports & Weather' :
                       'CLASSIFIEDS & BUSINESS ADS'}
                    </p>
                  </div>
                </div>
              ) : (
                /* Single Page View */
                <div className="w-96 h-[500px] bg-gray-50 flex flex-col justify-center items-center">
                  <i className="fa-regular fa-newspaper text-6xl text-gray-400 mb-4"></i>
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">PAGE {currentPage}</h3>
                  <p className="text-gray-500 text-center px-8">
                    {currentPage === 1 ? 'FRONT PAGE - Breaking News & Top Headlines from Telangana' :
                     currentPage === totalPages ? 'BACK PAGE - Sports Results & Weather Forecast' :
                     currentPage <= 4 ? 'NEWS SECTION - Regional News & Government Updates' :
                     currentPage <= 8 ? 'SPORTS & ENTERTAINMENT - Cricket, Cinema & Lifestyle' :
                     'CLASSIFIEDS - Job Opportunities, Business Ads & Personal Announcements'}
                  </p>
                  <div className="mt-4 text-sm text-gray-400">
                    <p>{formatDate(selectedDate)}</p>
                    <p>{currentEdition.name}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              Click and drag to pan • Use zoom controls above • Double-click to fit page
            </div>
          </div>
        )}
      </div>

      {/* Archive Section */}
      <div className="mt-8 border-4 border-black bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-black mb-4 border-b-2 border-black pb-2">
          NEWSPAPER ARCHIVE
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border-2 border-black p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <i className="fa-solid fa-calendar-days text-3xl text-black mb-2"></i>
            <h3 className="font-bold text-black mb-1">TODAY'S EDITION</h3>
            <p className="text-sm text-gray-700">Latest newspaper edition</p>
          </div>
          
          <div className="border-2 border-black p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <i className="fa-solid fa-calendar-week text-3xl text-black mb-2"></i>
            <h3 className="font-bold text-black mb-1">THIS WEEK</h3>
            <p className="text-sm text-gray-700">Last 7 days editions</p>
          </div>
          
          <div className="border-2 border-black p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <i className="fa-solid fa-box-archive text-3xl text-black mb-2"></i>
            <h3 className="font-bold text-black mb-1">FULL ARCHIVE</h3>
            <p className="text-sm text-gray-700">Complete newspaper archive</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="border-2 border-black p-6 bg-white">
          <h3 className="text-xl font-bold text-black mb-3 flex items-center">
            <i className="fa-solid fa-mobile-screen-button mr-2"></i>
            MOBILE FRIENDLY
          </h3>
          <p className="text-gray-700">
            Read WENSPAPER on any device. Our ePaper is optimized for smartphones, tablets, and desktops with responsive design and touch-friendly controls.
          </p>
        </div>
        
        <div className="border-2 border-black p-6 bg-white">
          <h3 className="text-xl font-bold text-black mb-3 flex items-center">
            <i className="fa-solid fa-download mr-2"></i>
            OFFLINE READING
          </h3>
          <p className="text-gray-700">
            Download PDF versions of any edition for offline reading. Perfect for travelers or areas with limited internet connectivity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Epaper;