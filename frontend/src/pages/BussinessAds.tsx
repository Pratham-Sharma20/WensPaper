import { useState, useEffect } from "react";

interface BusinessAd {
  id: number;
  title: string;
  business: string;
  category: string;
  location: string;
  contact: string;
  description: string;
  image: string;
  price: string;
  type: string;
  featured: boolean;
  urgent: boolean;
  postedDate: string;
  rating: number;
  reviews: number;
}

interface AdPackage {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  color: string;
  popular: boolean;
}

const BusinessAds = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAd, setSelectedAd] = useState<BusinessAd | null>(null);
  const [activeTab, setActiveTab] = useState('browse');
  const [animationClass, setAnimationClass] = useState('');
  const [showPackages, setShowPackages] = useState(false);

  // Mock business ads data
  const businessAds: BusinessAd[] = [
    {
      id: 1,
      title: "Premium Web Development Services",
      business: "TechSolutions Hyderabad",
      category: "technology",
      location: "Hyderabad",
      contact: "+91 98765 43210",
      description: "Professional website development, mobile apps, and digital solutions for businesses of all sizes.",
      image: "/api/placeholder/300/200",
      price: "₹15,000 - ₹50,000",
      type: "service",
      featured: true,
      urgent: false,
      postedDate: "2 days ago",
      rating: 4.8,
      reviews: 45
    },
    {
      id: 2,
      title: "Fresh Organic Vegetables Daily",
      business: "Green Valley Farms",
      category: "food",
      location: "Warangal",
      contact: "+91 87654 32109",
      description: "Farm-fresh organic vegetables delivered daily to your doorstep. Chemical-free and healthy produce.",
      image: "/api/placeholder/300/200",
      price: "₹500 - ₹2,000",
      type: "product",
      featured: false,
      urgent: true,
      postedDate: "1 day ago",
      rating: 4.6,
      reviews: 32
    },
    {
      id: 3,
      title: "Professional Photography Studio",
      business: "Capture Moments Studio",
      category: "services",
      location: "Nizamabad",
      contact: "+91 76543 21098",
      description: "Wedding photography, portrait sessions, corporate events. High-quality professional photography services.",
      image: "/api/placeholder/300/200",
      price: "₹10,000 - ₹25,000",
      type: "service",
      featured: true,
      urgent: false,
      postedDate: "3 days ago",
      rating: 4.9,
      reviews: 67
    },
    {
      id: 4,
      title: "Handmade Furniture Collection",
      business: "Woodcraft Artisans",
      category: "furniture",
      location: "Karimnagar",
      contact: "+91 65432 10987",
      description: "Custom handmade furniture, wooden crafts, and home decor items. Quality craftsmanship guaranteed.",
      image: "/api/placeholder/300/200",
      price: "₹5,000 - ₹30,000",
      type: "product",
      featured: false,
      urgent: false,
      postedDate: "1 week ago",
      rating: 4.7,
      reviews: 28
    },
    {
      id: 5,
      title: "Digital Marketing Agency",
      business: "BoostUp Marketing",
      category: "marketing",
      location: "Hyderabad",
      contact: "+91 54321 09876",
      description: "Complete digital marketing solutions - SEO, social media, PPC campaigns, and brand management.",
      image: "/api/placeholder/300/200",
      price: "₹20,000 - ₹75,000",
      type: "service",
      featured: true,
      urgent: true,
      postedDate: "4 days ago",
      rating: 4.5,
      reviews: 89
    },
    {
      id: 6,
      title: "Traditional Saree Collection",
      business: "Heritage Textiles",
      category: "fashion",
      location: "Warangal",
      contact: "+91 43210 98765",
      description: "Authentic handwoven sarees, designer blouses, and traditional wear for all occasions.",
      image: "/api/placeholder/300/200",
      price: "₹2,000 - ₹15,000",
      type: "product",
      featured: false,
      urgent: false,
      postedDate: "5 days ago",
      rating: 4.4,
      reviews: 23
    }
  ];

  const categories = [
    { id: 'all', name: 'ALL ADS', count: businessAds.length, color: 'bg-gray-600', icon: 'fa-th-large' },
    { id: 'technology', name: 'TECHNOLOGY', count: businessAds.filter(ad => ad.category === 'technology').length, color: 'bg-blue-600', icon: 'fa-laptop-code' },
    { id: 'food', name: 'FOOD & BEVERAGE', count: businessAds.filter(ad => ad.category === 'food').length, color: 'bg-green-600', icon: 'fa-utensils' },
    { id: 'services', name: 'SERVICES', count: businessAds.filter(ad => ad.category === 'services').length, color: 'bg-purple-600', icon: 'fa-handshake' },
    { id: 'furniture', name: 'FURNITURE', count: businessAds.filter(ad => ad.category === 'furniture').length, color: 'bg-orange-600', icon: 'fa-couch' },
    { id: 'marketing', name: 'MARKETING', count: businessAds.filter(ad => ad.category === 'marketing').length, color: 'bg-pink-600', icon: 'fa-bullhorn' },
    { id: 'fashion', name: 'FASHION', count: businessAds.filter(ad => ad.category === 'fashion').length, color: 'bg-indigo-600', icon: 'fa-tshirt' }
  ];

  const locations = [
    { id: 'all', name: 'ALL LOCATIONS' },
    { id: 'hyderabad', name: 'HYDERABAD' },
    { id: 'warangal', name: 'WARANGAL' },
    { id: 'nizamabad', name: 'NIZAMABAD' },
    { id: 'karimnagar', name: 'KARIMNAGAR' }
  ];

  const adPackages: AdPackage[] = [
    {
      id: 'basic',
      name: 'BASIC',
      price: '₹999',
      duration: '7 days',
      features: ['Standard listing', 'Text description', 'Contact details', 'Basic visibility'],
      color: 'bg-blue-500',
      popular: false
    },
    {
      id: 'featured',
      name: 'FEATURED',
      price: '₹2,499',
      duration: '15 days',
      features: ['Featured listing', 'Image gallery', 'Priority placement', 'Social media boost', 'Analytics dashboard'],
      color: 'bg-green-500',
      popular: true
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      price: '₹4,999',
      duration: '30 days',
      features: ['Top placement', 'Multiple images', 'Video support', 'Premium badge', 'Dedicated support', 'Advanced analytics'],
      color: 'bg-purple-500',
      popular: false
    }
  ];

  const filteredAds = businessAds.filter(ad => {
    const matchesCategory = selectedCategory === 'all' || ad.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || ad.location.toLowerCase() === selectedLocation;
    const matchesSearch = ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ad.business.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ad.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLocation && matchesSearch;
  });

  useEffect(() => {
    setAnimationClass('animate-fadeIn');
    const timer = setTimeout(() => setAnimationClass(''), 500);
    return () => clearTimeout(timer);
  }, [selectedCategory, activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setAnimationClass('animate-slideIn');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fa-solid fa-star ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      ></i>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      
      {/* Header */}
      <div className="text-center mb-8 border-b-4 border-black pb-6">
        <h1 className="text-4xl md:text-6xl font-bold text-black tracking-wide mb-2 animate-pulse">
          BUSINESS ADS
        </h1>
        <p className="text-lg text-gray-700 italic">
          Promote your business in Telangana - Reach thousands of potential customers
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white border-4 border-black p-1 shadow-lg">
          <div className="flex flex-wrap">
            <button
              onClick={() => handleTabChange('browse')}
              className={`px-4 py-3 font-bold transition-all duration-300 ${
                activeTab === 'browse' 
                  ? 'bg-blue-600 text-white transform scale-105' 
                  : 'bg-white text-black hover:bg-blue-100'
              }`}
            >
              <i className="fa-solid fa-search mr-2"></i>
              BROWSE ADS
            </button>
            <button
              onClick={() => handleTabChange('post')}
              className={`px-4 py-3 font-bold transition-all duration-300 ${
                activeTab === 'post' 
                  ? 'bg-green-600 text-white transform scale-105' 
                  : 'bg-white text-black hover:bg-green-100'
              }`}
            >
              <i className="fa-solid fa-plus mr-2"></i>
              POST AD
            </button>
            <button
              onClick={() => handleTabChange('packages')}
              className={`px-4 py-3 font-bold transition-all duration-300 ${
                activeTab === 'packages' 
                  ? 'bg-purple-600 text-white transform scale-105' 
                  : 'bg-white text-black hover:bg-purple-100'
              }`}
            >
              <i className="fa-solid fa-crown mr-2"></i>
              PACKAGES
            </button>
            <button
              onClick={() => handleTabChange('analytics')}
              className={`px-4 py-3 font-bold transition-all duration-300 ${
                activeTab === 'analytics' 
                  ? 'bg-orange-600 text-white transform scale-105' 
                  : 'bg-white text-black hover:bg-orange-100'
              }`}
            >
              <i className="fa-solid fa-chart-bar mr-2"></i>
              ANALYTICS
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'browse' && (
        <div className={`transition-all duration-500 ${animationClass}`}>
          {/* Search and Filter Controls */}
          <div className="border-4 border-black bg-white p-4 mb-6 shadow-lg">
            <div className="grid md:grid-cols-3 gap-4 items-center">
              <div>
                <label className="block text-sm font-semibold text-black mb-1">
                  SEARCH BUSINESS ADS
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Business name, service, or product..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border-2 border-black p-3 pl-10 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <i className="fa-solid fa-search absolute left-3 top-4 text-gray-400"></i>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-1">
                  LOCATION
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full border-2 border-black p-3 focus:outline-none focus:border-blue-500 transition-colors"
                >
                  {locations.map(location => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-1">
                  QUICK FILTERS
                </label>
                <div className="flex space-x-2">
                  <button className="bg-red-500 text-white font-bold py-2 px-3 text-sm hover:bg-red-600 transition-colors transform hover:scale-105">
                    <i className="fa-solid fa-fire mr-1"></i>
                    URGENT
                  </button>
                  <button className="bg-yellow-500 text-white font-bold py-2 px-3 text-sm hover:bg-yellow-600 transition-colors transform hover:scale-105">
                    <i className="fa-solid fa-star mr-1"></i>
                    FEATURED
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 font-bold border-2 border-black transition-all duration-300 transform hover:scale-105 flex items-center ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                <i className={`fa-solid ${category.icon} mr-2`}></i>
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Business Ads Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {filteredAds.map((ad, index) => (
              <div
                key={ad.id}
                onClick={() => setSelectedAd(ad)}
                className={`border-4 border-black bg-white cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-slideUp ${
                  ad.featured ? 'bg-gradient-to-br from-yellow-50 to-orange-50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <i className="fa-solid fa-image text-4xl text-gray-400"></i>
                  </div>
                  <div className="absolute top-2 left-2 flex space-x-1">
                    {ad.urgent && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 animate-pulse">
                        URGENT
                      </span>
                    )}
                    {ad.featured && (
                      <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-black text-white text-xs font-bold px-2 py-1">
                      {ad.type.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                    {ad.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-700 flex items-center">
                      <i className="fa-solid fa-building mr-2 text-blue-600"></i>
                      {ad.business}
                    </p>
                    <p className="text-gray-700 flex items-center">
                      <i className="fa-solid fa-location-dot mr-2 text-red-600"></i>
                      {ad.location}
                    </p>
                    <p className="text-gray-700 flex items-center">
                      <i className="fa-solid fa-rupee-sign mr-2 text-green-600"></i>
                      {ad.price}
                    </p>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {ad.description}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      {renderStars(ad.rating)}
                      <span className="text-sm text-gray-600 ml-2">
                        ({ad.reviews} reviews)
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{ad.postedDate}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="bg-blue-600 text-white font-bold py-2 px-4 hover:bg-blue-700 transition-colors transform hover:scale-105">
                      <i className="fa-solid fa-phone mr-2"></i>
                      CONTACT
                    </button>
                    <button className="text-green-600 hover:text-green-800 font-semibold transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ad Detail Modal */}
          {selectedAd && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
              <div className="bg-white border-4 border-black max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto animate-slideUp">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-black">{selectedAd.title}</h2>
                    <button
                      onClick={() => setSelectedAd(null)}
                      className="text-gray-500 hover:text-black text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-semibold text-black mb-2">Business:</p>
                      <p className="text-gray-700">{selectedAd.business}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-2">Location:</p>
                      <p className="text-gray-700">{selectedAd.location}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-2">Price Range:</p>
                      <p className="text-gray-700">{selectedAd.price}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-2">Contact:</p>
                      <p className="text-gray-700">{selectedAd.contact}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-black mb-2">Description:</p>
                    <p className="text-gray-700">{selectedAd.description}</p>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1">
                      {renderStars(selectedAd.rating)}
                      <span className="text-sm text-gray-600 ml-2">
                        {selectedAd.rating} ({selectedAd.reviews} reviews)
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">Posted {selectedAd.postedDate}</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white font-bold py-3 px-6 hover:bg-blue-700 transition-colors transform hover:scale-105">
                      <i className="fa-solid fa-phone mr-2"></i>
                      CALL NOW
                    </button>
                    <button className="bg-green-600 text-white font-bold py-3 px-6 hover:bg-green-700 transition-colors transform hover:scale-105">
                      <i className="fa-solid fa-envelope mr-2"></i>
                      EMAIL
                    </button>
                    <button className="bg-purple-600 text-white font-bold py-3 px-6 hover:bg-purple-700 transition-colors transform hover:scale-105">
                      <i className="fa-solid fa-heart mr-2"></i>
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'post' && (
        <div className={`transition-all duration-500 ${animationClass}`}>
          <div className="border-4 border-black bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">POST YOUR BUSINESS AD</h2>
            <p className="text-gray-700 text-center mb-8">Fill out the form below to promote your business across Telangana</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  BUSINESS NAME
                </label>
                <input
                  type="text"
                  placeholder="Enter your business name"
                  className="w-full border-2 border-black p-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  AD TITLE
                </label>
                <input
                  type="text"
                  placeholder="Create an attractive title"
                  className="w-full border-2 border-black p-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  CATEGORY
                </label>
                <select className="w-full border-2 border-black p-3 focus:outline-none focus:border-blue-500 transition-colors">
                  <option>Select Category</option>
                  <option>Technology</option>
                  <option>Food & Beverage</option>
                  <option>Services</option>
                  <option>Furniture</option>
                  <option>Marketing</option>
                  <option>Fashion</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  LOCATION
                </label>
                <select className="w-full border-2 border-black p-3 focus:outline-none focus:border-blue-500 transition-colors">
                  <option>Select Location</option>
                  <option>Hyderabad</option>
                  <option>Warangal</option>
                  <option>Nizamabad</option>
                  <option>Karimnagar</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  CONTACT NUMBER
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border-2 border-black p-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  PRICE RANGE
                </label>
                <input
                  type="text"
                  placeholder="₹1,000 - ₹5,000"
                  className="w-full border-2 border-black p-3 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-semibold text-black mb-2">
                DESCRIPTION
              </label>
              <textarea
                rows={4}
                placeholder="Describe your business, products, or services..."
                className="w-full border-2 border-black p-3 focus:outline-none focus:border-blue-500 transition-colors"
              ></textarea>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-semibold text-black mb-2">
                UPLOAD IMAGE
              </label>
              <div className="border-2 border-dashed border-black p-8 text-center">
                <i className="fa-solid fa-cloud-upload text-4xl text-gray-400 mb-4"></i>
                <p className="text-gray-600">Click to upload or drag and drop your image here</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-green-600 text-white font-bold py-4 px-8 hover:bg-green-700 transition-colors transform hover:scale-105">
                <i className="fa-solid fa-rocket mr-2"></i>
                PUBLISH AD
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'packages' && (
        <div className={`transition-all duration-500 ${animationClass}`}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">CHOOSE YOUR AD PACKAGE</h2>
            <p className="text-gray-700">Select the perfect package to promote your business effectively</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {adPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`border-4 border-black bg-white p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-slideUp ${
                  pkg.popular ? 'bg-gradient-to-br from-green-50 to-blue-50 relative' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white font-bold px-4 py-1 text-sm animate-bounce">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-black mb-2">{pkg.price}</div>
                  <p className="text-gray-600">for {pkg.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <i className="fa-solid fa-check text-green-500 mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full ${pkg.color} text-white font-bold py-3 px-6 hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                  <i className="fa-solid fa-rocket mr-2"></i>
                  CHOOSE {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className={`transition-all duration-500 ${animationClass}`}>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="border-4 border-black bg-white p-6">
              <h3 className="text-xl font-bold text-black mb-4">AD PERFORMANCE</h3>
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <i className="fa-solid fa-chart-line text-4xl text-gray-400"></i>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">1,248</p>
                  <p className="text-sm text-gray-600">Views</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">87</p>
                  <p className="text-sm text-gray-600">Contacts</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">23%</p>
                  <p className="text-sm text-gray-600">Conversion</p>
                </div>
              </div>
            </div>

            <div className="border-4 border-black bg-white p-6">
              <h3 className="text-xl font-bold text-black mb-4">DEMOGRAPHICS</h3>
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <i className="fa-solid fa-users text-4xl text-gray-400"></i>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-600">65%</p>
                  <p className="text-sm text-gray-600">Male</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-pink-600">35%</p>
                  <p className="text-sm text-gray-600">Female</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-indigo-600">25-34</p>
                  <p className="text-sm text-gray-600">Top Age</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-4 border-black bg-white p-6 mt-6">
            <h3 className="text-xl font-bold text-black mb-4">TOP PERFORMING ADS</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3">Ad Title</th>
                    <th className="text-left p-3">Views</th>
                    <th className="text-left p-3">Contacts</th>
                    <th className="text-left p-3">CTR</th>
                    <th className="text-left p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {businessAds.slice(0, 5).map((ad) => (
                    <tr key={ad.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 font-medium">{ad.title}</td>
                      <td className="p-3">{Math.floor(Math.random() * 1000) + 500}</td>
                      <td className="p-3">{Math.floor(Math.random() * 100) + 20}</td>
                      <td className="p-3">{Math.floor(Math.random() * 20) + 5}%</td>
                      <td className="p-3">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-12 border-t-4 border-black pt-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-black hover:text-blue-600 transition-colors">
            <i className="fa-brands fa-facebook-f text-xl"></i>
          </a>
          <a href="#" className="text-black hover:text-blue-400 transition-colors">
            <i className="fa-brands fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-black hover:text-red-600 transition-colors">
            <i className="fa-brands fa-instagram text-xl"></i>
          </a>
          <a href="#" className="text-black hover:text-blue-800 transition-colors">
            <i className="fa-brands fa-linkedin-in text-xl"></i>
          </a>
        </div>
        <p className="text-gray-700 mb-2">
          © 2023 Business Ads Telangana. All rights reserved.
        </p>
        <p className="text-gray-600 text-sm">
          Promoting local businesses across Telangana
        </p>
      </div>
    </div>
  );
};

export default BusinessAds;