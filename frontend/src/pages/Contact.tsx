import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "general",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "general",
      message: ""
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-8 border-b-4 border-black pb-6">
        <h1 className="text-4xl md:text-6xl font-bold text-black tracking-wide mb-2">
          CONTACT US
        </h1>
        <p className="text-lg text-gray-700 italic">
          Get in touch with Telangana's largest circulated newspaper
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="border-4 border-black p-6 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4 border-b-2 border-black pb-2">
              REACH OUT TO US
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-building text-black text-xl mt-1"></i>
                <div>
                  <h3 className="font-semibold text-black">HEAD OFFICE</h3>
                  <p className="text-gray-700">
                    WENSPAPER Publications<br />
                    123, Press Colony, Begumpet<br />
                    Hyderabad, Telangana - 500016
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-phone text-black text-xl mt-1"></i>
                <div>
                  <h3 className="font-semibold text-black">PHONE NUMBERS</h3>
                  <p className="text-gray-700">
                    Editorial: +91 40 2345 6789<br />
                    Advertising: +91 40 2345 6790<br />
                    Circulation: +91 40 2345 6791
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-envelope text-black text-xl mt-1"></i>
                <div>
                  <h3 className="font-semibold text-black">EMAIL ADDRESSES</h3>
                  <p className="text-gray-700">
                    General: info@wenspaper.com<br />
                    Editorial: editorial@wenspaper.com<br />
                    Advertising: ads@wenspaper.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <i className="fa-solid fa-clock text-black text-xl mt-1"></i>
                <div>
                  <h3 className="font-semibold text-black">OFFICE HOURS</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-4 border-black p-6 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4 border-b-2 border-black pb-2">
              FOLLOW US
            </h2>
            <div className="flex gap-4">
              <a href="#" className="bg-sky-500 p-3 rounded-lg hover:bg-sky-600 transition-colors">
                <i className="fa-brands fa-facebook text-white text-2xl"></i>
              </a>
              <a href="#" className="bg-sky-500 p-3 rounded-lg hover:bg-sky-600 transition-colors">
                <i className="fa-brands fa-whatsapp text-white text-2xl"></i>
              </a>
              <a href="#" className="bg-sky-500 p-3 rounded-lg hover:bg-sky-600 transition-colors">
                <i className="fa-brands fa-x-twitter text-white text-2xl"></i>
              </a>
              <a href="#" className="bg-sky-500 p-3 rounded-lg hover:bg-sky-600 transition-colors">
                <i className="fa-brands fa-instagram text-white text-2xl"></i>
              </a>
              <a href="#" className="bg-sky-500 p-3 rounded-lg hover:bg-sky-600 transition-colors">
                <i className="fa-brands fa-youtube text-white text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border-4 border-black p-6 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-black mb-4 border-b-2 border-black pb-2">
            SEND US A MESSAGE
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
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
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-black mb-1">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-1">
                  CATEGORY
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
                >
                  <option value="general">General Inquiry</option>
                  <option value="editorial">Editorial</option>
                  <option value="advertising">Advertising</option>
                  <option value="subscription">Subscription</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                SUBJECT *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500"
                placeholder="Enter message subject"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                MESSAGE *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full border-2 border-black p-2 focus:outline-none focus:border-sky-500 resize-none"
                placeholder="Enter your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-3 px-6 hover:bg-gray-800 transition-colors text-lg tracking-wide"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8 border-4 border-black bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-black mb-4 border-b-2 border-black pb-2">
            FIND US ON MAP
          </h2>
          <div className="bg-gray-200 h-64 flex items-center justify-center border-2 border-black">
            <div className="text-center text-gray-600">
              <i className="fa-solid fa-map-location-dot text-4xl mb-2"></i>
              <p className="font-semibold">Interactive Map</p>
              <p className="text-sm">123, Press Colony, Begumpet, Hyderabad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="border-2 border-black p-4 bg-white text-center hover:bg-gray-50 transition-colors">
          <i className="fa-solid fa-newspaper text-3xl text-black mb-2"></i>
          <h3 className="font-bold text-black mb-1">ADVERTISE WITH US</h3>
          <p className="text-sm text-gray-700">Reach millions of readers across Telangana</p>
        </div>
        
        <div className="border-2 border-black p-4 bg-white text-center hover:bg-gray-50 transition-colors">
          <i className="fa-solid fa-briefcase text-3xl text-black mb-2"></i>
          <h3 className="font-bold text-black mb-1">CAREER OPPORTUNITIES</h3>
          <p className="text-sm text-gray-700">Join our dynamic editorial team</p>
        </div>
        
        <div className="border-2 border-black p-4 bg-white text-center hover:bg-gray-50 transition-colors">
          <i className="fa-solid fa-envelope-open-text text-3xl text-black mb-2"></i>
          <h3 className="font-bold text-black mb-1">SUBMIT NEWS TIPS</h3>
          <p className="text-sm text-gray-700">Share breaking news and story ideas</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;