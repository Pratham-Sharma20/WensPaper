import { useState } from "react";
import StoryCard from "./StoryCard";

export interface Story {
  id: number;
  title: string;
  summary: string;
  fullContent: string;
  image: string;
  category: string;
  timestamp: string;
  author: string;
  location: string;
}

const TopStories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const stories: Story[] = [
    {
      id: 1,
      title: "Economic Recovery Accelerates Across Major Cities",
      summary: "New data shows significant improvement in employment rates and business activity in metropolitan areas worldwide.",
      fullContent: "Economic indicators across major metropolitan areas are showing unprecedented improvement as businesses reopen and employment rates surge to pre-pandemic levels. The latest quarterly report from the Global Economic Council reveals that cities like New York, London, Tokyo, and Mumbai have experienced a 15% increase in business activity over the past six months. Employment rates have risen by 12%, with particular strength in technology, healthcare, and renewable energy sectors. Small businesses, which were hit hardest during the economic downturn, are now reporting increased consumer confidence and spending. Local governments have implemented targeted support programs that have proven effective in accelerating recovery. The data suggests that urban centers are not only recovering but are positioned for sustainable long-term growth, with new job creation outpacing pre-crisis levels in many regions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      category: "Economics",
      timestamp: "45 minutes ago",
      author: "Sarah Chen",
      location: "Global"
    },
    {
      id: 2,
      title: "Revolutionary Medical Treatment Shows Promise",
      summary: "Clinical trials demonstrate breakthrough results in treating previously incurable conditions.",
      fullContent: "A groundbreaking medical treatment developed through collaborative research between leading universities has shown remarkable success in Phase III clinical trials. The innovative therapy, which combines gene editing technology with personalized medicine approaches, has demonstrated a 78% success rate in treating conditions that were previously considered incurable. Over 500 patients participated in the trials across 12 countries, with minimal side effects reported. The treatment targets specific genetic markers and has shown particular promise for rare diseases affecting children. Dr. Maria Rodriguez, lead researcher at the International Medical Research Institute, describes the results as 'transformative for modern medicine.' The therapy is expected to receive regulatory approval within the next 18 months, potentially offering hope to millions of patients worldwide. Healthcare systems are already preparing for implementation, with training programs being developed for medical professionals.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "Health",
      timestamp: "1 hour ago",
      author: "Dr. James Mitchell",
      location: "Boston, USA"
    },
    {
      id: 3,
      title: "Space Mission Discovers New Planetary System",
      summary: "Astronomers identify potentially habitable planets in distant solar system using advanced telescope technology.",
      fullContent: "The International Space Observatory has announced the discovery of a remarkable planetary system located 127 light-years from Earth in the constellation Lyra. Using the latest generation of space telescopes, astronomers have identified seven planets orbiting a sun-like star, with three falling within the habitable zone where liquid water could exist. The system, designated Kepler-438, shows striking similarities to our own solar system. Advanced spectroscopic analysis has detected water vapor in the atmospheres of two planets, along with potential biosignatures that could indicate the presence of life. Professor Elena Vasquez, director of the observatory, explains that this discovery represents the most Earth-like system ever found. The findings will guide future space missions and may revolutionize our understanding of planetary formation. Plans are already underway for more detailed observations using next-generation telescopes scheduled for launch in 2026.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
      category: "Science",
      timestamp: "2 hours ago",
      author: "Prof. Elena Vasquez",
      location: "International Space Observatory"
    },
    {
      id: 4,
      title: "Cultural Festival Celebrates Global Diversity",
      summary: "International event brings together artists and performers from over 50 countries in spectacular showcase.",
      fullContent: "The World Unity Cultural Festival has concluded its most successful year yet, bringing together artists, musicians, dancers, and storytellers from 52 countries in a vibrant celebration of global diversity. Held simultaneously in major cities worldwide, the festival featured over 200 performances, art exhibitions, and cultural workshops. Traditional crafts were displayed alongside contemporary art installations, creating unique fusion experiences for visitors. The festival's highlight was the Global Music Symphony, where musicians from different continents performed together virtually, creating harmonious compositions that blended traditional and modern styles. Cultural exchange programs facilitated meaningful connections between artists, leading to collaborative projects that will continue throughout the year. Festival director Ahmed Al-Rashid noted that attendance exceeded 2 million people across all locations, with millions more participating through digital platforms. The event successfully raised $3 million for cultural preservation programs worldwide.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=250&fit=crop",
      category: "Culture",
      timestamp: "3 hours ago",
      author: "Ahmed Al-Rashid",
      location: "Multiple Cities Worldwide"
    },
    {
      id: 5,
      title: "Sustainable Agriculture Initiative Expands",
      summary: "Innovative farming techniques help communities achieve food security while protecting the environment.",
      fullContent: "The Global Sustainable Agriculture Initiative has expanded to 30 countries, introducing revolutionary farming techniques that increase crop yields while reducing environmental impact. The program combines traditional farming wisdom with cutting-edge technology, including precision agriculture, vertical farming, and drought-resistant crop varieties. Participating farmers have reported average yield increases of 40% while reducing water usage by 30% and eliminating harmful pesticides. Solar-powered irrigation systems and AI-driven crop monitoring have made sustainable farming accessible to small-scale farmers in developing regions. The initiative has successfully established seed banks preserving 500 heritage crop varieties, ensuring genetic diversity for future generations. Community training programs have educated over 100,000 farmers in sustainable practices. The program's success has attracted $2 billion in additional funding from international development organizations, enabling expansion to reach an additional 5 million farmers by 2026.",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=250&fit=crop",
      category: "Environment",
      timestamp: "4 hours ago",
      author: "Dr. Priya Sharma",
      location: "New Delhi, India"
    },
    {
      id: 6,
      title: "Digital Education Program Reaches Milestone",
      summary: "Online learning platform successfully serves one million students across rural and urban areas.",
      fullContent: "The Universal Education Access Platform has achieved a significant milestone by successfully serving over one million students across 40 countries, bridging the digital divide between rural and urban educational opportunities. The platform offers interactive courses in 25 languages, covering subjects from basic literacy to advanced technical skills. Innovative features include AI-powered personalized learning paths, virtual reality field trips, and peer-to-peer mentoring programs. Students in remote areas can now access the same quality education as their urban counterparts through satellite internet connections and solar-powered learning centers. The program has achieved a 92% course completion rate, significantly higher than traditional online platforms. Success stories include rural students gaining admission to prestigious universities and adults acquiring new skills for better employment opportunities. Government partnerships have enabled the platform to operate free of charge, funded through a combination of public investment and private donations. Plans are underway to reach 5 million students by 2027.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      category: "Education",
      timestamp: "5 hours ago",
      author: "Lisa Thompson",
      location: "San Francisco, USA"
    }
  ];

  const handleStoryClick = (story: Story): void => {
    setSelectedStory(story);
  };

  const handleBackToList = (): void => {
    setSelectedStory(null);
  };

  if (selectedStory) {
    return (
      <section>
        <button 
          onClick={handleBackToList}
          className="mb-4 px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-200 font-semibold"
        >
          ← Back to Stories
        </button>
        
        <article className="max-w-4xl">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-black text-white text-sm font-semibold mb-2">
              {selectedStory.category}
            </span>
            <div className="text-sm text-gray-600 mb-2">
              By {selectedStory.author} • {selectedStory.location} • {selectedStory.timestamp}
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-black mb-6 leading-tight">
            {selectedStory.title}
          </h1>
          
          <img 
            src={selectedStory.image} 
            alt={selectedStory.title}
            className="w-full h-96 object-cover mb-6 rounded-lg"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6 font-medium leading-relaxed">
              {selectedStory.summary}
            </p>
            <p className="text-gray-800 leading-relaxed text-lg">
              {selectedStory.fullContent}
            </p>
          </div>
        </article>
      </section>
    );
  }

  return (
    <section>
      <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
        TOP STORIES
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map(story => (
          <div 
            key={story.id}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => handleStoryClick(story)}
          >
            <StoryCard story={story} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopStories;