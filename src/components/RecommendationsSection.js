import React, { useState } from 'react';
import { Cloud, Star } from 'lucide-react';
import { touristRecommendations } from '../data/constants';
import RecommendationCard from './RecommendationCard';

const RecommendationsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('heritage');
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            AI-Powered Recommendations
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover amazing places to visit based on your interests and current weather conditions with our smart recommendation system
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(touristRecommendations).map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 capitalize text-lg ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(touristRecommendations).map(([category, places]) => (
            <RecommendationCard key={category} category={category} places={places} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Our Smart Recommendations?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Cloud className="text-blue-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-800 text-lg">Weather-Based Planning</h4>
              </div>
              <p>We analyze real-time weather data to recommend destinations that offer the best experience during your planned visit dates.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Star className="text-purple-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-800 text-lg">Personalized Suggestions</h4>
              </div>
              <p>Our AI considers your preferences, travel history, and interests to suggest destinations that match your unique travel style.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;