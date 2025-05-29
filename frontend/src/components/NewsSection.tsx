
interface Article {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  timestamp: string;
}

interface NewsSectionProps {
  title: string;
  articles: Article[];
}

const NewsSection = ({ title, articles }: NewsSectionProps) => {
  return (
    <section className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-black mb-4 border-b-2 border-black pb-2">
        {title}
      </h3>
      <div className="space-y-4">
        {articles.map(article => (
          <article key={article.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-32 object-cover rounded mb-3"
            />
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                {article.category}
              </span>
              <span className="text-xs text-gray-500">
                {article.timestamp}
              </span>
            </div>
            <h4 className="text-base font-bold text-black mb-2 leading-tight hover:text-blue-600 cursor-pointer">
              {article.title}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {article.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
