import React from 'react';
import { MapPin, Star, Heart, Thermometer, ArrowRight } from 'lucide-react';
import { mockWeatherData } from '../data/constants';

const PackageCard = ({ package: pkg, onBookNow, onViewDetails }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
    <div className="relative">
      <img src={pkg.image} alt={pkg.name} className="w-full h-56 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute top-4 right-4">
        <Heart className="text-white hover:text-red-500 cursor-pointer transition-colors" size={24} />
      </div>
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur">
        {pkg.duration}
      </div>
      {mockWeatherData[pkg.city] && (
        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full flex items-center shadow-lg backdrop-blur">
          <Thermometer size={14} className="mr-1 text-red-500" />
          <span className="text-sm font-bold text-gray-800">{mockWeatherData[pkg.city].temp}°C</span>
        </div>
      )}
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
        <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
          <Star className="text-yellow-400 fill-current" size={16} />
          <span className="text-sm font-bold text-gray-700 ml-1">{pkg.rating}</span>
          <span className="text-xs text-gray-500 ml-1">({pkg.reviews})</span>
        </div>
      </div>
      <div className="flex items-center text-gray-600 mb-3">
        <MapPin size={16} className="mr-2 text-blue-500" />
        <span className="text-sm font-medium">{pkg.location}</span>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {pkg.highlights.slice(0, 3).map((highlight, index) => (
          <span key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 text-xs px-3 py-1 rounded-full font-medium border border-blue-200">
            {highlight}
          </span>
        ))}
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
            <span className="text-sm text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => onViewDetails && onViewDetails(pkg)}
            className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          >
            View Details
          </button>
          <button
            onClick={() => onBookNow(pkg)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            Book Now
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default PackageCard;