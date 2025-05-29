
interface Story {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  timestamp: string;
}

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  return (
    <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
      <img 
        src={story.image} 
        alt={story.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {story.category}
          </span>
          <span className="text-xs text-gray-500">
            {story.timestamp}
          </span>
        </div>
        <h4 className="text-lg font-bold text-black mb-2 leading-tight hover:text-blue-600 cursor-pointer">
          {story.title}
        </h4>
        <p className="text-sm text-gray-700 leading-relaxed">
          {story.summary}
        </p>
      </div>
    </article>
  );
};

export default StoryCard;
