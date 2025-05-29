
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, DollarSign, Clock } from "lucide-react";

const JobCareers = () => {
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "New York, NY",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      description: "Join our innovative team building next-generation web applications. 5+ years experience required.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Global Marketing Inc",
      location: "Los Angeles, CA",
      salary: "$80,000 - $100,000",
      type: "Full-time",
      description: "Lead marketing campaigns for fortune 500 clients. MBA preferred with 3+ years experience.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Remote",
      salary: "$100,000 - $130,000",
      type: "Remote",
      description: "Analyze complex datasets and build predictive models. Python and R expertise required.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Project Manager",
      company: "Construction Elite",
      location: "Chicago, IL",
      salary: "$90,000 - $110,000",
      type: "Full-time",
      description: "Manage large-scale construction projects. PMP certification and 5+ years experience required.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black mb-4">JOB CAREERS</h2>
          <p className="text-lg text-gray-600">Find Your Dream Career Opportunity</p>
        </div>

        {/* Job Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Search Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label htmlFor="job-title">Job Title</Label>
                <Input id="job-title" placeholder="e.g. Software Engineer" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g. New York, NY" />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="e.g. TechCorp" />
              </div>
            </div>
            <Button className="w-full md:w-auto">Search Jobs</Button>
          </CardContent>
        </Card>

        {/* Featured Jobs */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
            FEATURED JOB OPPORTUNITIES
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredJobs.map(job => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img 
                      src={job.image} 
                      alt={job.company}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-black mb-2">{job.title}</h4>
                      <p className="text-blue-600 font-semibold mb-2">{job.company}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      <Button className="w-full">Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Post a Job */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Briefcase className="w-6 h-6" />
              Post a Job Opening
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="job-post-title">Job Title *</Label>
                <Input id="job-post-title" placeholder="Enter job title" />
              </div>
              <div>
                <Label htmlFor="company-name">Company Name *</Label>
                <Input id="company-name" placeholder="Enter company name" />
              </div>
              <div>
                <Label htmlFor="job-location">Location *</Label>
                <Input id="job-location" placeholder="Enter location" />
              </div>
              <div>
                <Label htmlFor="salary-range">Salary Range</Label>
                <Input id="salary-range" placeholder="e.g. $50,000 - $70,000" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="job-description">Job Description *</Label>
                <Textarea 
                  id="job-description" 
                  placeholder="Describe the job responsibilities, requirements, and qualifications..."
                  className="min-h-32"
                />
              </div>
              <div>
                <Label htmlFor="contact-email">Contact Email *</Label>
                <Input id="contact-email" type="email" placeholder="hr@company.com" />
              </div>
              <div>
                <Label htmlFor="contact-phone">Contact Phone</Label>
                <Input id="contact-phone" placeholder="(555) 123-4567" />
              </div>
            </div>
            <Button className="mt-6 w-full md:w-auto">Post Job Opening</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default JobCareers;
