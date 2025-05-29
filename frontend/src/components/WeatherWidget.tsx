
const WeatherWidget = () => {
  return (
    <section className="mt-12 bg-blue-50 p-6 rounded-lg">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <h4 className="text-lg font-bold text-black mb-2">TODAY'S WEATHER</h4>
          <div className="text-3xl font-bold text-blue-600">22°C</div>
          <div className="text-sm text-gray-600">Partly Cloudy</div>
          <div className="text-xs text-gray-500 mt-1">New York, NY</div>
        </div>
        
        <div className="text-center">
          <h4 className="text-lg font-bold text-black mb-2">MARKET UPDATE</h4>
          <div className="text-2xl font-bold text-green-600">+2.4%</div>
          <div className="text-sm text-gray-600">DOW 34,567</div>
          <div className="text-xs text-gray-500 mt-1">As of market close</div>
        </div>
        
        <div className="text-center">
          <h4 className="text-lg font-bold text-black mb-2">QUOTE OF THE DAY</h4>
          <blockquote className="text-sm italic text-gray-700">
            "The future belongs to those who believe in the beauty of their dreams."
          </blockquote>
          <div className="text-xs text-gray-500 mt-1">- Eleanor Roosevelt</div>
        </div>
      </div>
    </section>
  );
};

export default WeatherWidget;
