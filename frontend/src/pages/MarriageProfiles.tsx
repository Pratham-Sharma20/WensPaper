
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Briefcase, GraduationCap } from "lucide-react";

const MarriageProfiles = () => {
  const profiles = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      profession: "Software Engineer",
      education: "Masters in Computer Science",
      location: "San Francisco, CA",
      interests: "Reading, hiking, cooking",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 32,
      profession: "Marketing Director",
      education: "MBA in Marketing",
      location: "New York, NY",
      interests: "Travel, photography, music",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Priya Patel",
      age: 26,
      profession: "Doctor",
      education: "MD in Internal Medicine",
      location: "Chicago, IL",
      interests: "Yoga, classical dance, volunteer work",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Rodriguez",
      age: 30,
      profession: "Architect",
      education: "Masters in Architecture",
      location: "Austin, TX",
      interests: "Art, cycling, sustainable design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black mb-4">MARRIAGE PROFILES</h2>
          <p className="text-lg text-gray-600">Find Your Perfect Life Partner</p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Find Profiles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div>
                <Label htmlFor="age-range">Age Range</Label>
                <Input id="age-range" placeholder="e.g. 25-35" />
              </div>
              <div>
                <Label htmlFor="profession-search">Profession</Label>
                <Input id="profession-search" placeholder="e.g. Engineer" />
              </div>
              <div>
                <Label htmlFor="location-search">Location</Label>
                <Input id="location-search" placeholder="e.g. New York" />
              </div>
              <div>
                <Label htmlFor="education-search">Education</Label>
                <Input id="education-search" placeholder="e.g. Masters" />
              </div>
            </div>
            <Button className="w-full md:w-auto">Search Profiles</Button>
          </CardContent>
        </Card>

        {/* Featured Profiles */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
            FEATURED PROFILES
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map(profile => (
              <Card key={profile.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img 
                    src={profile.image} 
                    alt={profile.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-bold text-black mb-2">{profile.name}</h4>
                  <p className="text-gray-600 mb-2">Age: {profile.age}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-1 text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      {profile.profession}
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-600">
                      <GraduationCap className="w-4 h-4" />
                      {profile.education}
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {profile.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mt-3 text-sm">{profile.interests}</p>
                  <Button className="mt-4 w-full">View Profile</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Create Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Create Your Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="full-name">Full Name *</Label>
                <Input id="full-name" placeholder="Enter your full name" />
              </div>
              <div>
                <Label htmlFor="age">Age *</Label>
                <Input id="age" type="number" placeholder="Enter your age" />
              </div>
              <div>
                <Label htmlFor="profession">Profession *</Label>
                <Input id="profession" placeholder="e.g. Software Engineer" />
              </div>
              <div>
                <Label htmlFor="education">Education *</Label>
                <Input id="education" placeholder="e.g. Masters in Computer Science" />
              </div>
              <div>
                <Label htmlFor="profile-location">Location *</Label>
                <Input id="profile-location" placeholder="City, State" />
              </div>
              <div>
                <Label htmlFor="height">Height</Label>
                <Input id="height" placeholder="e.g. 5 feet 8 inches" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="about-yourself">About Yourself *</Label>
                <Textarea 
                  id="about-yourself" 
                  placeholder="Tell us about yourself, your interests, and what you're looking for..."
                  className="min-h-32"
                />
              </div>
              <div>
                <Label htmlFor="partner-preferences">Partner Preferences</Label>
                <Textarea 
                  id="partner-preferences" 
                  placeholder="Describe your ideal partner..."
                  className="min-h-24"
                />
              </div>
              <div>
                <Label htmlFor="contact-info">Contact Information *</Label>
                <Input id="contact-info" placeholder="Email or phone number" />
              </div>
            </div>
            <Button className="mt-6 w-full md:w-auto">Create Profile</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default MarriageProfiles;
