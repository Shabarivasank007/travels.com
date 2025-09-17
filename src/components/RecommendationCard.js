import React from 'react';
import { Award, Mountain, Waves, Camera, Star, Navigation } from 'lucide-react';

const RecommendationCard = ({ category, places }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'heritage': return <Award className="text-orange-500" size={24} />;
      case 'nature': return <Mountain className="text-green-500" size={24} />;
      case 'beach': return <Waves className="text-blue-500" size={24} />;
      case 'mountain': return <Mountain className="text-purple-500" size={24} />;
      case 'adventure': return <Camera className="text-red-500" size={24} />;
      case 'spiritual': return <Star className="text-yellow-500" size={24} />;
      default: return <Navigation className="text-blue-500" size={24} />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        {getCategoryIcon(category)}
        <h3 className="font-bold text-gray-800 ml-3 text-lg capitalize">{category} Destinations</h3>
      </div>
      <div className="space-y-3">
        {places.map((place, index) => (
          <div key={index} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
            <Navigation size={16} className="mr-3 text-blue-500 flex-shrink-0" />
            <span className="font-medium">{place}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationCard;