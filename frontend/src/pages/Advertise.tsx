import { useState } from "react";

const Advertise = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    adType: '',
    budget: '',
    message: ''
  });

  const adPackages = [
    {
      id: 'premium',
      name: 'PREMIUM PACKAGE',
      price: '₹2,50,000',
      duration: 'per month',
      features: [
        'Full Page Color Advertisement',
        'Front Page Premium Placement',
        'Digital Edition Inclusion',
        'Social Media Promotion',
        'Website Banner (1 Month)',
        'Dedicated Account Manager',
        'Performance Analytics Report'
      ],
      popular: true
    },
    {
      id: 'business',
      name: 'BUSINESS PACKAGE',
      price: '₹1,25,000',
      duration: 'per month',
      features: [
        'Half Page Color Advertisement',
        'Business Section Placement',
        'Digital Edition Inclusion',
        'Social Media Mention',
        'Website Listing',
        'Monthly Performance Report'
      ],
      popular: false
    },
    {
      id: 'startup',
      name: 'STARTUP PACKAGE',
      price: '₹65,000',
      duration: 'per month',
      features: [
        'Quarter Page Advertisement',
        'Classified Section Premium',
        'Digital Edition Inclusion',
        'Basic Social Media Share',
        'Website Directory Listing'
      ],
      popular: false
    },
    {
      id: 'classified',
      name: 'CLASSIFIED PACKAGE',
      price: '₹15,000',
      duration: 'per month',
      features: [
        'Multiple Classified Ads',
        'Bold Text Highlighting',
        'Digital Edition Inclusion',
        'Extended Run Duration',
        'Category Priority Placement'
      ],
      popular: false
    }
  ];

  const adFormats = [
    {
      name: 'FULL PAGE',
      dimensions: '25cm x 35cm',
      description: 'Maximum impact with full page coverage',
      price: 'From ₹2,00,000',
      icon: 'fa-solid fa-square'
    },
    {
      name: 'HALF PAGE',
      dimensions: '25cm x 17.5cm',
      description: 'Prominent placement with substantial visibility',
      price: 'From ₹1,00,000',
      icon: 'fa-solid fa-square-minus'
    },
    {
      name: 'QUARTER PAGE',
      dimensions: '12.5cm x 17.5cm',
      description: 'Cost-effective option with good visibility',
      price: 'From ₹50,000',
      icon: 'fa-regular fa-square'
    },
    {
      name: 'BANNER',
      dimensions: '25cm x 8cm',
      description: 'Horizontal banner for brand awareness',
      price: 'From ₹35,000',
      icon: 'fa-solid fa-minus'
    },
    {
      name: 'COLUMN',
      dimensions: '8cm x 17.5cm',
      description: 'Vertical column advertisement',
      price: 'From ₹40,000',
      icon: 'fa-solid fa-bars'
    },
    {
      name: 'CLASSIFIED',
      dimensions: 'Text Based',
      description: 'Text-based classified advertisements',
      price: 'From ₹500',
      icon: 'fa-solid fa-list'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    alert("Thank you for your interest! Our advertising team will contact you within 24 hours.");
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      adType: '',
      budget: '',
      message: ''
    });
    setShowQuoteForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-8 border-b-4 border-black pb-6">
        <h1 className="text-4xl md:text-6xl font-bold text-black tracking-wide mb-2">
          ADVERTISE WITH US
        </h1>
        <p className="text-lg text-gray-700 italic">
          Reach millions of readers across Telangana with WENSPAPER
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="border-4 border-black bg-white p-6 text-center shadow-lg">
          <i className="fa-solid fa-users text-4xl text-sky-500 mb-3"></i>
          <h3 className="text-2xl font-bold text-black">2.5M+</h3>
          <p className="text-gray-700 font-semibold">Daily Readers</p>
        </div>
        <div className="border-4 border-black bg-white p-6 text-center shadow-lg">
          <i className="fa-solid fa-map-location-dot text-4xl text-sky-500 mb-3"></i>
          <h3 className="text-2xl font-bold text-black">150+</h3>
          <p className="text-gray-700 font-semibold">Cities Covered</p>
        </div>
        <div className="border-4 border-black bg-white p-6 text-center shadow-lg">
          <i className="fa-solid fa-newspaper text-4xl text-sky-500 mb-3"></i>
          <h3 className="text-2xl font-bold text-black">4</h3>
          <p className="text-gray-700 font-semibold">Regional Editions</p>
        </div>
        <div className="border-4 border-black bg-white p-6 text-center shadow-lg">
          <i className="fa-solid fa-chart-line text-4xl text-sky-500 mb-3"></i>
          <h3 className="text-2xl font-bold text-black">95%</h3>
          <p className="text-gray-700 font-semibold">Brand Recall Rate</p>
        </div>
      </div>

      {/* Why Advertise Section */}
      <div className="border-4 border-black bg-white p-8 mb-8 shadow-lg">
        <h2 className="text-3xl font-bold text-black mb-6 text-center border-b-2 border-black pb-4">
          WHY CHOOSE WENSPAPER FOR YOUR ADVERTISING?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <i className="fa-solid fa-crown text-5xl text-yellow-500 mb-4"></i>
            <h3 className="text-xl font-bold text-black mb-2">MARKET LEADER</h3>
            <p className="text-gray-700">
              Telangana's largest circulated newspaper with the highest readership across all demographics.
            </p>
          </div>
          <div className="text-center">
            <i className="fa-solid fa-bullseye text-5xl text-red-500 mb-4"></i>
            <h3 className="text-xl font-bold text-black mb-2">TARGETED REACH</h3>
            <p className="text-gray-700">
              Precise audience targeting across urban and rural areas with detailed demographic insights.
            </p>
          </div>
          <div className="text-center">
            <i className="fa-solid fa-handshake text-5xl text-green-500 mb-4"></i>
            <h3 className="text-xl font-bold text-black mb-2">TRUSTED BRAND</h3>
            <p className="text-gray-700">
              Over 25 years of credibility and trust among readers, ensuring your message gets noticed.
            </p>
          </div>
        </div>
      </div>

      {/* Advertisement Formats */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-6 text-center border-b-2 border-black pb-4">
          ADVERTISEMENT FORMATS
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {adFormats.map((format, index) => (
            <div key={index} className="border-2 border-black bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <i className={`${format.icon} text-4xl text-sky-500 mb-3`}></i>
                <h3 className="text-xl font-bold text-black">{format.name}</h3>
                <p className="text-sm text-gray-600">{format.dimensions}</p>
              </div>
              <p className="text-gray-700 text-center mb-4">{format.description}</p>
              <p className="text-lg font-bold text-center text-sky-600">{format.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Packages */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-6 text-center border-b-2 border-black pb-4">
          ADVERTISING PACKAGES
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`border-4 ${pkg.popular ? 'border-sky-500 bg-sky-50' : 'border-black bg-white'} p-6 relative shadow-lg hover:shadow-xl transition-shadow`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sky-500 text-white px-4 py-1 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-black mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-sky-600">{pkg.price}</div>
                <div className="text-sm text-gray-600">{pkg.duration}</div>
              </div>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fa-solid fa-check text-green-500 mr-2 mt-1 text-sm"></i>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => {
                  setSelectedPackage(pkg.id);
                  setShowQuoteForm(true);
                }}
                className={`w-full py-3 px-4 font-bold transition-colors ${
                  pkg.popular 
                    ? 'bg-sky-500 text-white hover:bg-sky-600' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                GET QUOTE
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white border-4 border-black max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-black">REQUEST QUOTE</h3>
                <button
                  onClick={() => setShowQuoteForm(false)}
                  className="text-2xl text-gray-600 hover:text-black"
                >
                  <i className="fa-solid fa-times"></i>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-black mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-1">
                    COMPANY NAME *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
                    placeholder="Enter company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-1">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-1">
                    ADVERTISEMENT TYPE
                  </label>
                  <select
                    name="adType"
                    value={formData.adType}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
                  >
                    <option value="">Select ad type</option>
                    <option value="full-page">Full Page</option>
                    <option value="half-page">Half Page</option>
                    <option value="quarter-page">Quarter Page</option>
                    <option value="banner">Banner</option>
                    <option value="classified">Classified</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-1">
                    BUDGET RANGE
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₹50,000</option>
                    <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                    <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                    <option value="above-2l">Above ₹2,00,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-1">
                    ADDITIONAL MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500 resize-none"
                    placeholder="Tell us about your advertising requirements..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-sky-500 text-white font-bold py-3 px-4 hover:bg-sky-600 transition-colors"
                  >
                    SUBMIT REQUEST
                  </button>
                  <button
                    onClick={() => setShowQuoteForm(false)}
                    className="flex-1 bg-gray-500 text-white font-bold py-3 px-4 hover:bg-gray-600 transition-colors"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="border-4 border-black bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-4 border-b-2 border-black pb-2">
            ADVERTISING DEPARTMENT
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <i className="fa-solid fa-phone text-sky-500 text-xl mr-3"></i>
              <div>
                <p className="font-semibold">Direct Line</p>
                <p className="text-gray-700">+91 40 2345 6790</p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-envelope text-sky-500 text-xl mr-3"></i>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-700">ads@wenspaper.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-user-tie text-sky-500 text-xl mr-3"></i>
              <div>
                <p className="font-semibold">Advertising Manager</p>
                <p className="text-gray-700">Mr. Rajesh Kumar</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-4 border-black bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-4 border-b-2 border-black pb-2">
            QUICK FACTS
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <i className="fa-solid fa-star text-yellow-500 mr-2 mt-1"></i>
              <span className="text-gray-700">Established in 1998 - 25+ years of excellence</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-award text-yellow-500 mr-2 mt-1"></i>
              <span className="text-gray-700">Winner of Best Regional Newspaper Award 2023</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-globe text-yellow-500 mr-2 mt-1"></i>
              <span className="text-gray-700">Available in print and digital formats</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-clock text-yellow-500 mr-2 mt-1"></i>
              <span className="text-gray-700">24/7 customer support for advertisers</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="border-4 border-black bg-sky-50 p-8 text-center shadow-lg">
        <h2 className="text-3xl font-bold text-black mb-4">
          READY TO ADVERTISE WITH WENSPAPER?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Join thousands of successful businesses who trust WENSPAPER for their advertising needs
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={() => setShowQuoteForm(true)}
            className="bg-sky-500 text-white font-bold py-3 px-8 hover:bg-sky-600 transition-colors text-lg"
          >
            <i className="fa-solid fa-calculator mr-2"></i>
            GET FREE QUOTE
          </button>
          <button className="bg-black text-white font-bold py-3 px-8 hover:bg-gray-800 transition-colors text-lg">
            <i className="fa-solid fa-phone mr-2"></i>
            CALL NOW: +91 40 2345 6790
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertise;