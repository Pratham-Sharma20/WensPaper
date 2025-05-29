
const Headline = () => {
  return (
    <section className="border-b-2 border-gray-300 pb-8 mb-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold">
            BREAKING NEWS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 leading-tight">
            Global Climate Summit Reaches Historic Agreement on Carbon Emissions
          </h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            World leaders unite in unprecedented commitment to reduce global carbon emissions by 50% within the next decade, marking a pivotal moment in the fight against climate change.
          </p>
          <div className="text-sm text-gray-500 mt-4">
            Published 15 minutes ago | International News
          </div>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop" 
            alt="Climate Summit" 
            className="w-full h-80 object-cover rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Headline;
