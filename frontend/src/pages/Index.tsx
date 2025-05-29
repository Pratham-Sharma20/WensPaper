
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import TopStories from "@/components/TopStories";
import NewsSection from "@/components/NewsSection";
import WeatherWidget from "@/components/WeatherWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Headline />
        <TopStories />
        
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <NewsSection 
            title="SPORTS" 
            articles={[
              {
                id: 1,
                title: "Champions League Final Set for Historic Showdown",
                summary: "Two European giants prepare for what promises to be one of the most anticipated finals in recent memory.",
                image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=250&fit=crop",
                category: "Football",
                timestamp: "2 hours ago"
              },
              {
                id: 2,
                title: "Tennis Championships Begin This Weekend",
                summary: "World's top players gather for the season's most prestigious tournament.",
                image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop",
                category: "Tennis",
                timestamp: "4 hours ago"
              }
            ]}
          />
          
          <NewsSection 
            title="TECHNOLOGY" 
            articles={[
              {
                id: 3,
                title: "AI Revolution Transforms Healthcare Industry",
                summary: "New artificial intelligence systems are revolutionizing patient care and medical diagnosis worldwide.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
                category: "Healthcare Tech",
                timestamp: "1 hour ago"
              },
              {
                id: 4,
                title: "Breakthrough in Quantum Computing Announced",
                summary: "Scientists achieve new milestone in quantum processing capabilities.",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
                category: "Innovation",
                timestamp: "3 hours ago"
              }
            ]}
          />
          
          <NewsSection 
            title="BUSINESS" 
            articles={[
              {
                id: 5,
                title: "Global Markets Show Strong Recovery",
                summary: "International stock exchanges report positive trends as economic indicators improve across major economies.",
                image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=250&fit=crop",
                category: "Markets",
                timestamp: "30 minutes ago"
              },
              {
                id: 6,
                title: "Green Energy Investments Reach Record High",
                summary: "Renewable energy sector attracts unprecedented funding as companies shift towards sustainability.",
                image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop",
                category: "Energy",
                timestamp: "5 hours ago"
              }
            ]}
          />
        </div>
        
        <WeatherWidget />
      </main>
    </div>
  );
};

export default Index;
