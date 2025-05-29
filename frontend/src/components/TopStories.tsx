
import StoryCard from "./StoryCard";

const TopStories = () => {
  const stories = [
    {
      id: 1,
      title: "Economic Recovery Accelerates Across Major Cities",
      summary: "New data shows significant improvement in employment rates and business activity in metropolitan areas worldwide.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      category: "Economics",
      timestamp: "45 minutes ago"
    },
    {
      id: 2,
      title: "Revolutionary Medical Treatment Shows Promise",
      summary: "Clinical trials demonstrate breakthrough results in treating previously incurable conditions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "Health",
      timestamp: "1 hour ago"
    },
    {
      id: 3,
      title: "Space Mission Discovers New Planetary System",
      summary: "Astronomers identify potentially habitable planets in distant solar system using advanced telescope technology.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
      category: "Science",
      timestamp: "2 hours ago"
    },
    {
      id: 4,
      title: "Cultural Festival Celebrates Global Diversity",
      summary: "International event brings together artists and performers from over 50 countries in spectacular showcase.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=250&fit=crop",
      category: "Culture",
      timestamp: "3 hours ago"
    },
    {
      id: 5,
      title: "Sustainable Agriculture Initiative Expands",
      summary: "Innovative farming techniques help communities achieve food security while protecting the environment.",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=250&fit=crop",
      category: "Environment",
      timestamp: "4 hours ago"
    },
    {
      id: 6,
      title: "Digital Education Program Reaches Milestone",
      summary: "Online learning platform successfully serves one million students across rural and urban areas.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      category: "Education",
      timestamp: "5 hours ago"
    }
  ];

  return (
    <section>
      <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
        TOP STORIES
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
};

export default TopStories;
