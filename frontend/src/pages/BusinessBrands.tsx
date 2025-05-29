
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Globe, Phone, Star } from "lucide-react";

const BusinessBrands = () => {
  const businesses = [
    {
      id: 1,
      name: "TechFlow Solutions",
      category: "Technology Services",
      location: "Silicon Valley, CA",
      rating: 4.9,
      description: "Leading provider of cloud computing and AI solutions for enterprises worldwide.",
      website: "www.techflow.com",
      phone: "(555) 123-4567",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Green Earth Consulting",
      category: "Environmental Services",
      location: "Portland, OR",
      rating: 4.8,
      description: "Sustainable business solutions and environmental consulting for a greener future.",
      website: "www.greenearth.com",
      phone: "(555) 234-5678",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Urban Design Studio",
      category: "Architecture & Design",
      location: "New York, NY",
      rating: 4.7,
      description: "Award-winning architectural firm specializing in modern urban development projects.",
      website: "www.urbandesign.com",
      phone: "(555) 345-6789",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      name: "Elite Marketing Group",
      category: "Marketing & Advertising",
      location: "Los Angeles, CA",
      rating: 4.6,
      description: "Full-service marketing agency helping brands reach their target audience effectively.",
      website: "www.elitemarketing.com",
      phone: "(555) 456-7890",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    }
  ];

  const categories = [
    "Technology Services",
    "Healthcare",
    "Financial Services",
    "Real Estate",
    "Education",
    "Retail & E-commerce",
    "Food & Beverage",
    "Construction",
    "Legal Services",
    "Marketing & Advertising"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black mb-4">BUSINESS BRANDS</h2>
          <p className="text-lg text-gray-600">Discover Top Businesses & Promote Your Brand</p>
        </div>

        {/* Business Search */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Find Businesses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label htmlFor="business-name">Business Name</Label>
                <Input id="business-name" placeholder="e.g. TechFlow Solutions" />
              </div>
              <div>
                <Label htmlFor="business-category">Category</Label>
                <Input id="business-category" placeholder="e.g. Technology" />
              </div>
              <div>
                <Label htmlFor="business-location">Location</Label>
                <Input id="business-location" placeholder="e.g. San Francisco" />
              </div>
            </div>
            <Button className="w-full md:w-auto">Search Businesses</Button>
          </CardContent>
        </Card>

        {/* Featured Businesses */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
            FEATURED BUSINESSES
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {businesses.map(business => (
              <Card key={business.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img 
                      src={business.image} 
                      alt={business.name}
                      className="w-20 h-20 rounded object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-black">{business.name}</h4>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold">{business.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-blue-600 font-semibold mb-2">{business.category}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {business.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          {business.website}
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {business.phone}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{business.description}</p>
                      <div className="flex gap-2">
                        <Button className="flex-1">Contact Business</Button>
                        <Button variant="outline" className="flex-1">View Details</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Business Categories */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
            BUSINESS CATEGORIES
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Building2 className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="font-semibold text-sm">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* List Your Business */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Building2 className="w-6 h-6" />
              List Your Business
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="business-name-form">Business Name *</Label>
                <Input id="business-name-form" placeholder="Enter your business name" />
              </div>
              <div>
                <Label htmlFor="business-category-form">Category *</Label>
                <Input id="business-category-form" placeholder="e.g. Technology Services" />
              </div>
              <div>
                <Label htmlFor="business-address">Address *</Label>
                <Input id="business-address" placeholder="Full business address" />
              </div>
              <div>
                <Label htmlFor="business-phone">Phone Number *</Label>
                <Input id="business-phone" placeholder="(555) 123-4567" />
              </div>
              <div>
                <Label htmlFor="business-email">Email Address *</Label>
                <Input id="business-email" type="email" placeholder="info@business.com" />
              </div>
              <div>
                <Label htmlFor="business-website">Website</Label>
                <Input id="business-website" placeholder="www.yourbusiness.com" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="business-description">Business Description *</Label>
                <Textarea 
                  id="business-description" 
                  placeholder="Describe your business, services, and what makes you unique..."
                  className="min-h-32"
                />
              </div>
              <div>
                <Label htmlFor="business-hours">Business Hours</Label>
                <Input id="business-hours" placeholder="e.g. Mon-Fri: 9AM-6PM" />
              </div>
              <div>
                <Label htmlFor="business-founded">Year Founded</Label>
                <Input id="business-founded" placeholder="e.g. 2010" />
              </div>
            </div>
            <Button className="mt-6 w-full md:w-auto">List My Business</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BusinessBrands;
