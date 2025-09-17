import React from 'react';
import { Sun, Cloud, CloudRain, Thermometer, Eye, Wind } from 'lucide-react';
import { mockWeatherData } from '../data/constants';

const WeatherCard = ({ city, weather }) => {
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'sunny': return <Sun className="text-yellow-500" size={24} />;
      case 'cloudy': return <Cloud className="text-gray-500" size={24} />;
      case 'rainy': return <CloudRain className="text-blue-500" size={24} />;
      default: return <Sun className="text-yellow-500" size={24} />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800 text-lg">{city}</h3>
        {getWeatherIcon(weather.condition)}
      </div>
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Thermometer size={18} className="mr-3 text-red-500" />
          <span className="font-medium">{weather.temp}°C</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Eye size={18} className="mr-3 text-blue-500" />
          <span>{weather.humidity}% Humidity</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Wind size={18} className="mr-3 text-green-500" />
          <span>{weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};

const WeatherSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Weather Forecast
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Check current weather conditions for popular Indian destinations to plan your perfect trip with real-time data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Object.entries(mockWeatherData).map(([city, weather]) => (
            <WeatherCard key={city} city={city} weather={weather} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Smart Weather Travel Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
            <div className="flex items-start bg-white p-4 rounded-xl shadow-md">
              <Sun className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Sunny Weather</h4>
                <p className="text-sm">Perfect for sightseeing and outdoor activities. Don't forget sunscreen and hydration.</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-4 rounded-xl shadow-md">
              <Cloud className="text-gray-500 mr-4 mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Cloudy Weather</h4>
                <p className="text-sm">Ideal for walking tours and photography. Comfortable temperatures expected.</p>
              </div>
            </div>
            <div className="flex items-start bg-white p-4 rounded-xl shadow-md">
              <CloudRain className="text-blue-500 mr-4 mt-1 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Rainy Weather</h4>
                <p className="text-sm">Great for indoor attractions and spa treatments. Pack waterproof gear.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;