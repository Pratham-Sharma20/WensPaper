import { useState, useEffect } from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  postedDate: string;
  category: string;
  urgent: boolean;
  featured: boolean;
}

interface CareerTip {
  id: number;
  title: string;
  content: string;
  category: string;
  readTime: string;
}

const JobsCareers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [activeTab, setActiveTab] = useState('jobs');
  const [animationClass, setAnimationClass] = useState('');
  const [jobForm, setJobForm] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    type: 'Full-time',
    experience: '',
    description: '',
    requirements: '',
    category: 'technology',
    urgent: false,
    featured: false
  });

  // Mock job data
  const jobs: Job[] = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Hyderabad",
      location: "Hyderabad, Telangana",
      salary: "₹12-18 LPA",
      type: "Full-time",
      experience: "3-5 years",
      description: "We are looking for a skilled Senior Software Engineer to join our dynamic team in developing cutting-edge web applications.",
      requirements: ["React.js, Node.js", "5+ years experience", "Team leadership skills", "Agile methodology"],
      postedDate: "2 days ago",
      category: "technology",
      urgent: true,
      featured: true
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Digital Solutions Pvt Ltd",
      location: "Warangal, Telangana",
      salary: "₹8-12 LPA",
      type: "Full-time",
      experience: "2-4 years",
      description: "Lead marketing campaigns and drive brand awareness for our growing digital marketing agency.",
      requirements: ["Digital marketing expertise", "Campaign management", "Analytics tools", "Creative thinking"],
      postedDate: "1 week ago",
      category: "marketing",
      urgent: false,
      featured: true
    },
    {
      id: 3,
      title: "Financial Analyst",
      company: "InvestCorp",
      location: "Nizamabad, Telangana",
      salary: "₹6-10 LPA",
      type: "Full-time",
      experience: "1-3 years",
      description: "Analyze financial data and provide insights to support business decision-making processes.",
      requirements: ["Financial modeling", "Excel proficiency", "Data analysis", "CFA preferred"],
      postedDate: "3 days ago",
      category: "finance",
      urgent: false,
      featured: false
    },
    {
      id: 4,
      title: "Content Writer",
      company: "Media House International",
      location: "Karimnagar, Telangana",
      salary: "₹4-6 LPA",
      type: "Part-time",
      experience: "1-2 years",
      description: "Create engaging content for digital platforms and traditional media outlets.",
      requirements: ["Excellent writing skills", "SEO knowledge", "Research abilities", "Portfolio required"],
      postedDate: "5 days ago",
      category: "media",
      urgent: true,
      featured: false
    }
  ];

  const careerTips: CareerTip[] = [
    {
      id: 1,
      title: "How to Write a Winning Resume in 2025",
      content: "Your resume is your first impression. Learn the latest trends and formatting tips that will make recruiters notice your application.",
      category: "Resume Tips",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mastering Virtual Job Interviews",
      content: "With remote work becoming the norm, virtual interviews are here to stay. Discover best practices for video interviews.",
      category: "Interview Tips",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Salary Negotiation Strategies",
      content: "Learn how to confidently negotiate your salary and benefits package to get the compensation you deserve.",
      category: "Career Growth",
      readTime: "6 min read"
    }
  ];

  const categories = [
    { id: 'all', name: 'ALL JOBS', count: jobs.length, color: 'bg-gray-600' },
    { id: 'technology', name: 'TECHNOLOGY', count: jobs.filter(j => j.category === 'technology').length, color: 'bg-blue-600' },
    { id: 'marketing', name: 'MARKETING', count: jobs.filter(j => j.category === 'marketing').length, color: 'bg-green-600' },
    { id: 'finance', name: 'FINANCE', count: jobs.filter(j => j.category === 'finance').length, color: 'bg-purple-600' },
    { id: 'media', name: 'MEDIA', count: jobs.filter(j => j.category === 'media').length, color: 'bg-orange-600' }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
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

  const handleJobFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setJobForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmitJob = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitting job:', jobForm);
    alert('Job posted successfully!');
    setJobForm({
      title: '',
      company: '',
      location: '',
      salary: '',
      type: 'Full-time',
      experience: '',
      description: '',
      requirements: '',
      category: 'technology',
      urgent: false,
      featured: false
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8 border-b-4 border-black pb-6">
        <h1 className="text-4xl md:text-6xl font-bold text-black tracking-wide mb-2 animate-pulse">
          JOBS & CAREERS
        </h1>
        <p className="text-lg text-gray-700 italic">
          Find your dream job in Telangana - Current opportunities and career guidance
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white border-4 border-black p-1 shadow-lg">
          <div className="flex">
            <button
              onClick={() => handleTabChange('jobs')}
              className={`px-6 py-3 font-bold transition-all duration-300 ${
                activeTab === 'jobs' 
                  ? 'bg-blue-600 text-white transform scale-105' 
                  : 'bg-white text-black hover:bg-blue-100'
              }`}
            >
              <i className="fa-solid fa-briefcase mr-2"></i>
              JOB LISTINGS
            </button>
            <button
              onClick={() => handleTabChange('tips')}
              className={`px-6 py-3 font-bold transition-all duration-300 ${
                activeTab === 'tips' 
                  ? 'bg-green-600 text-white transform scale-105' 
                  : 'bg-white text-black hover:bg-green-100'
              }`}
            >
              <i className="fa-solid fa-lightbulb mr-2"></i>
              CAREER TIPS
            </button>
            <button
              onClick={() => handleTabChange('post')}
              className={`px-6 py-3 font-bold transition-all duration-300 ${
                activeTab === 'post' 
                  ? 'bg-purple-600 text-white transform scale-105' 
                  : 'bg-white text-black hover:bg-purple-100'
              }`}
            >
              <i className="fa-solid fa-plus mr-2"></i>
              POST A JOB
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'jobs' && (
        <div className={`transition-all duration-500 ${animationClass}`}>
          {/* Search and Filter Controls */}
          <div className="border-4 border-black bg-white p-4 mb-6 shadow-lg">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block text-sm font-semibold text-black mb-1">
                  SEARCH JOBS
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Job title, company, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border-2 border-black p-3 pl-10 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <i className="fa-solid fa-search absolute left-3 top-4 text-gray-400"></i>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-1">
                  QUICK ACTIONS
                </label>
                <div className="flex space-x-2">
                  <button className="bg-red-500 text-white font-bold py-2 px-4 hover:bg-red-600 transition-colors transform hover:scale-105">
                    <i className="fa-solid fa-fire mr-2"></i>
                    URGENT JOBS
                  </button>
                  <button className="bg-yellow-500 text-white font-bold py-2 px-4 hover:bg-yellow-600 transition-colors transform hover:scale-105">
                    <i className="fa-solid fa-star mr-2"></i>
                    FEATURED
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 font-bold border-2 border-black transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className={`border-4 border-black bg-white p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-slideUp ${
                  job.featured ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex space-x-2">
                    {job.urgent && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 animate-pulse">
                        URGENT
                      </span>
                    )}
                    {job.featured && (
                      <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{job.postedDate}</span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2 hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-700 flex items-center">
                    <i className="fa-solid fa-building mr-2 text-blue-600"></i>
                    {job.company}
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <i className="fa-solid fa-location-dot mr-2 text-red-600"></i>
                    {job.location}
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <i className="fa-solid fa-rupee-sign mr-2 text-green-600"></i>
                    {job.salary}
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1">
                      {job.type}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1">
                      {job.experience}
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Job Detail Modal */}
          {selectedJob && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
              <div className="bg-white border-4 border-black max-w-2xl w-full m-4 max-h-96 overflow-y-auto animate-slideUp">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-black">{selectedJob.title}</h2>
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="text-gray-500 hover:text-black text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-semibold text-black mb-2">Company:</p>
                      <p className="text-gray-700">{selectedJob.company}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-2">Location:</p>
                      <p className="text-gray-700">{selectedJob.location}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-2">Salary:</p>
                      <p className="text-gray-700">{selectedJob.salary}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-2">Experience:</p>
                      <p className="text-gray-700">{selectedJob.experience}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-black mb-2">Description:</p>
                    <p className="text-gray-700">{selectedJob.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="font-semibold text-black mb-2">Requirements:</p>
                    <ul className="list-disc list-inside text-gray-700">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white font-bold py-3 px-6 hover:bg-blue-700 transition-colors transform hover:scale-105">
                      <i className="fa-solid fa-paper-plane mr-2"></i>
                      APPLY NOW
                    </button>
                    <button className="bg-green-600 text-white font-bold py-3 px-6 hover:bg-green-700 transition-colors transform hover:scale-105">
                      <i className="fa-solid fa-heart mr-2"></i>
                      SAVE JOB
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'tips' && (
        <div className={`transition-all duration-500 ${animationClass}`}>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Career Tips */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                CAREER GUIDANCE
              </h2>
              <div className="space-y-6">
                {careerTips.map((tip, index) => (
                  <div
                    key={tip.id}
                    className={`border-4 border-black bg-white p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-slideUp`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1">
                        {tip.category}
                      </span>
                      <span className="text-xs text-gray-500">{tip.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 hover:text-purple-600 transition-colors cursor-pointer">
                      {tip.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{tip.content}</p>
                    <button className="text-purple-600 hover:text-purple-800 font-semibold transition-colors">
                      Read More →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Market Stats */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
                JOB MARKET INSIGHTS
              </h2>
              <div className="space-y-4">
                <div className="border-4 border-black bg-gradient-to-r from-blue-50 to-blue-100 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-black">Technology Sector</h3>
                    <i className="fa-solid fa-laptop-code text-2xl text-blue-600"></i>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 mb-1">45% Growth</p>
                  <p className="text-sm text-gray-700">Highest demand in software development</p>
                </div>

                <div className="border-4 border-black bg-gradient-to-r from-green-50 to-green-100 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-black">Average Salary</h3>
                    <i className="fa-solid fa-chart-line text-2xl text-green-600"></i>
                  </div>
                  <p className="text-2xl font-bold text-green-600 mb-1">₹8.5 LPA</p>
                  <p className="text-sm text-gray-700">Across all sectors in Telangana</p>
                </div>

                <div className="border-4 border-black bg-gradient-to-r from-purple-50 to-purple-100 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-black">Remote Jobs</h3>
                    <i className="fa-solid fa-home text-2xl text-purple-600"></i>
                  </div>
                  <p className="text-2xl font-bold text-purple-600 mb-1">30% Available</p>
                  <p className="text-sm text-gray-700">Work from home opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'post' && (
        <div className={`transition-all duration-500 ${animationClass}`}>
          <div className="max-w-2xl mx-auto">
            <div className="border-4 border-black bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-black mb-6 text-center">
                POST A JOB OPPORTUNITY
              </h2>
              
              <form onSubmit={handleSubmitJob}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                      Job Title*
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={jobForm.title}
                      onChange={handleJobFormChange}
                      required
                      className="w-full border-2 border-black p-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                      Company Name*
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={jobForm.company}
                      onChange={handleJobFormChange}
                      required
                      className="w-full border-2 border-black p-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                      Location*
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={jobForm.location}
                      onChange={handleJobFormChange}
                      required
                      className="w-full border-2 border-black p-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                      Salary Range*
                    </label>
                    <input
                      type="text"
                      name="salary"
                      value={jobForm.salary}
                      onChange={handleJobFormChange}
                      required
                      className="w-full border-2 border-black p-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                      Job Type*
                    </label>
                    <select
                      name="type"
                      value={jobForm.type}
                      onChange={handleJobFormChange}
                      className="w-full border-2 border-black p-2 focus:outline-none focus:border-blue-500"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                      Experience Level*
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={jobForm.experience}
                      onChange={handleJobFormChange}
                      required
                      className="w-full border-2 border-black p-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-black mb-1">
                    Job Description*
                  </label>
                  <textarea
                    name="description"
                    value={jobForm.description}
                    onChange={handleJobFormChange}
                    required
                    rows={4}
                    className="w-full border-2 border-black p-2 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-black mb-1">
                    Requirements (comma separated)*
                  </label>
                  <textarea
                    name="requirements"
                    value={jobForm.requirements}
                    onChange={handleJobFormChange}
                    required
                    rows={2}
                    className="w-full border-2 border-black p-2 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                      Category*
                    </label>
                    <select
                      name="category"
                      value={jobForm.category}
                      onChange={handleJobFormChange}
                      className="w-full border-2 border-black p-2 focus:outline-none focus:border-blue-500"
                    >
                      <option value="technology">Technology</option>
                      <option value="marketing">Marketing</option>
                      <option value="finance">Finance</option>
                      <option value="media">Media</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="urgent"
                      checked={jobForm.urgent}
                      onChange={handleJobFormChange}
                      className="mr-2 h-5 w-5 border-2 border-black"
                    />
                    <label className="text-sm font-semibold text-black">
                      Mark as Urgent
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={jobForm.featured}
                      onChange={handleJobFormChange}
                      className="mr-2 h-5 w-5 border-2 border-black"
                    />
                    <label className="text-sm font-semibold text-black">
                      Featured Listing
                    </label>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white font-bold py-3 px-8 hover:bg-purple-700 transition-colors transform hover:scale-105"
                  >
                    <i className="fa-solid fa-rocket mr-2"></i>
                    PUBLISH JOB (₹1000)
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateX(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default JobsCareers;