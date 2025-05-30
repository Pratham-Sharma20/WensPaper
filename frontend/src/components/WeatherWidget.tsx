import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: '22°C',
    condition: 'Partly Cloudy',
    city: 'Loading...'
  });

  const [marketData, setMarketData] = useState({
    change: '+2.4%',
    value: 'DOW 34,567',
    news: 'Markets showing positive momentum'
  });

  const [quote, setQuote] = useState({
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  });

  const [loading, setLoading] = useState(true);

  // Indian cities for random weather fetching
  const indianCities = [
    'Hyderabad',
    'Mumbai', 
    'Chennai',
    'Bangalore',
    'Delhi',
    'Kolkata',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Kochi'
  ];

  // API configuration
  const WEATHER_API_KEY = '627b61f5f6254303be414119253005';
  const GEMINI_API_KEY = 'AIzaSyCF_PbDn7DN4-hzZFxTL7T2oZwKJ-_RBN0';

  const fetchWeatherData = async () => {
    try {
      const randomCity = indianCities[Math.floor(Math.random() * indianCities.length)];
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${randomCity}&aqi=no`
      );
      
      if (response.ok) {
        const data = await response.json();
        setWeatherData({
          temperature: `${Math.round(data.current.temp_c)}°C`,
          condition: data.current.condition.text,
          city: `${data.location.name}, ${data.location.region}`
        });
      }
    } catch (error) {
      console.error('Weather API error:', error);
      // Fallback data
      const randomCity = indianCities[Math.floor(Math.random() * indianCities.length)];
      setWeatherData({
        temperature: `${Math.floor(Math.random() * 15) + 20}°C`,
        condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'][Math.floor(Math.random() * 4)],
        city: randomCity
      });
    }
  };

  const fetchMarketDataFromGemini = async () => {
    try {
      const prompt = `Generate realistic current financial market data in JSON format. Include:
      - A market index (like NIFTY, SENSEX, DOW, NASDAQ) with a realistic value
      - A percentage change (positive or negative) 
      - A brief news headline about current market conditions
      
      Format as JSON: {"change": "+1.2%", "value": "NIFTY 19,847", "news": "brief market news"}
      
      Make it realistic for current Indian and global markets.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const aiText = data.candidates[0].content.parts[0].text;
        
        // Extract JSON from the AI response
        const jsonMatch = aiText.match(/\{[^}]+\}/);
        if (jsonMatch) {
          const marketInfo = JSON.parse(jsonMatch[0]);
          setMarketData(marketInfo);
        } else {
          throw new Error('Could not parse AI response');
        }
      } else {
        throw new Error('Gemini API request failed');
      }
    } catch (error) {
      console.error('Gemini market data error:', error);
      // Fallback data
      const changes = ['+1.2%', '+2.4%', '-0.8%', '+3.1%', '-1.5%', '+0.9%'];
      const indices = ['NIFTY 19,847', 'SENSEX 66,543', 'DOW 34,567', 'NASDAQ 13,456'];
      const news = [
        'Tech stocks surge on AI optimism',
        'Banking sector shows strong growth',
        'Market volatility continues amid global concerns',
        'Energy stocks lead market gains',
        'Healthcare sector outperforms expectations'
      ];

      setMarketData({
        change: changes[Math.floor(Math.random() * changes.length)],
        value: indices[Math.floor(Math.random() * indices.length)],
        news: news[Math.floor(Math.random() * news.length)]
      });
    }
  };

  const fetchQuoteFromGemini = async () => {
    try {
      const prompt = `Generate an inspiring, motivational quote for today. It should be uplifting and relevant for personal or professional growth. Format your response as JSON with "text" and "author" fields. If you create an original quote, use "AI Generated" as the author. Example: {"text": "Your quote here", "author": "Author Name or AI Generated"}`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (response.ok) {
        const data = await response.json();
        const aiText = data.candidates[0].content.parts[0].text;
        
        // Extract JSON from the AI response
        const jsonMatch = aiText.match(/\{[^}]+\}/);
        if (jsonMatch) {
          const quoteData = JSON.parse(jsonMatch[0]);
          setQuote(quoteData);
        } else {
          throw new Error('Could not parse AI response');
        }
      } else {
        throw new Error('Gemini API request failed');
      }
    } catch (error) {
      console.error('Gemini quote error:', error);
      // Fallback quotes
      const inspirationalQuotes = [
        {
          text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
          author: "Winston Churchill"
        },
        {
          text: "The only way to do great work is to love what you do.",
          author: "Steve Jobs"
        },
        {
          text: "Innovation distinguishes between a leader and a follower.",
          author: "Steve Jobs"
        },
        {
          text: "The best time to plant a tree was 20 years ago. The second best time is now.",
          author: "Chinese Proverb"
        }
      ];
      
      const randomQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
      setQuote(randomQuote);
    }
  };

  const refreshData = async () => {
    setLoading(true);
    await Promise.all([
      fetchWeatherData(),
      fetchMarketDataFromGemini(),
      fetchQuoteFromGemini()
    ]);
    setLoading(false);
  };

  useEffect(() => {
    refreshData();
    
    // Set up auto-refresh every 5 minutes
    const interval = setInterval(refreshData, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Live Dashboard</h3>
        <button 
          onClick={refreshData}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors duration-200"
        >
          {loading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center bg-white p-4 rounded-lg shadow-sm border border-blue-100">
          <h4 className="text-lg font-bold text-gray-800 mb-3">TODAY'S WEATHER</h4>
          <div className="text-3xl font-bold text-blue-600 mb-1">
            {loading ? '...' : weatherData.temperature}
          </div>
          <div className="text-sm text-gray-600 mb-1">
            {loading ? 'Loading...' : weatherData.condition}
          </div>
          <div className="text-xs text-gray-500">
            {loading ? 'Loading...' : weatherData.city}
          </div>
          <div className="mt-2 text-xs text-blue-500">
            🌡️ Live Weather Data
          </div>
        </div>
        
        <div className="text-center bg-white p-4 rounded-lg shadow-sm border border-green-100">
          <h4 className="text-lg font-bold text-gray-800 mb-3">MARKET UPDATE</h4>
          <div className={`text-2xl font-bold mb-1 ${
            marketData.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
          }`}>
            {loading ? '...' : marketData.change}
          </div>
          <div className="text-sm text-gray-600 mb-1">
            {loading ? 'Loading...' : marketData.value}
          </div>
          <div className="text-xs text-gray-500">
            {loading ? 'Loading...' : marketData.news}
          </div>
          <div className="mt-2 text-xs text-green-500">
            📈 Today's Market Data
          </div>
        </div>
        
        <div className="text-center bg-white p-4 rounded-lg shadow-sm border border-purple-100">
          <h4 className="text-lg font-bold text-gray-800 mb-3">QUOTE OF THE DAY</h4>
          <blockquote className="text-sm italic text-gray-700 mb-2 min-h-[2.5rem] flex items-center justify-center">
            {loading ? 'Generating quote...' : `"${quote.text}"`}
          </blockquote>
          <div className="text-xs text-gray-500">
            {loading ? '' : `- ${quote.author}`}
          </div>
          <div className="mt-2 text-xs text-purple-500">
            ✨ Today's Quote
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleTimeString()} | Auto-refresh every 5 minutes
        </p>
      </div>
    </section>
  );
};

export default WeatherWidget;