import React from 'react';
import { X, MapPin, Clock, Star, Users, Calendar, Thermometer, Camera, Utensils, Car, Bed, Shield, ArrowRight, Heart, Share2 } from 'lucide-react';
import { mockWeatherData } from '../data/constants';

const PackageDetailsModal = ({ package: pkg, onClose, onBookNow }) => {
  if (!pkg) return null;

  const getSeasonIcon = (season) => {
    switch (season) {
      case 'winter': return '❄️';
      case 'summer': return '☀️';
      case 'monsoon': return '🌧️';
      case 'spring': return '🌸';
      default: return '🌤️';
    }
  };

  const inclusions = [
    { icon: <Bed size={20} />, text: 'Hotel Accommodation' },
    { icon: <Car size={20} />, text: 'Transportation' },
    { icon: <Utensils size={20} />, text: 'Meals as per itinerary' },
    { icon: <Camera size={20} />, text: 'Sightseeing Tours' },
    { icon: <Users size={20} />, text: 'Professional Guide' },
    { icon: <Shield size={20} />, text: 'Travel Insurance' }
  ];

  const dayByDayItinerary = [
    { day: 1, title: 'Arrival & Check-in', description: 'Arrive at destination, hotel check-in, welcome dinner, and orientation.' },
    { day: 2, title: 'Main Attractions', description: 'Visit primary tourist attractions, guided tours, and cultural experiences.' },
    { day: 3, title: 'Adventure Activities', description: 'Engage in adventure sports, nature walks, and local experiences.' },
    { day: 4, title: 'Leisure & Shopping', description: 'Free time for shopping, spa treatments, and relaxation.' },
    { day: 5, title: 'Departure', description: 'Check-out, final sightseeing, and departure transfer.' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Header Section */}
        <div className="relative">
          <img src={pkg.image} alt={pkg.name} className="w-full h-64 object-cover rounded-t-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl"></div>
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
          >
            <X size={24} />
          </button>

          {/* Action Buttons */}
          <div className="absolute top-4 left-4 flex gap-2">
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300">
              <Heart size={20} />
            </button>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300">
              <Share2 size={20} />
            </button>
          </div>

          {/* Package Info Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <h1 className="text-3xl font-bold mb-2">{pkg.name}</h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                {pkg.location}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {pkg.duration}
              </div>
              <div className="flex items-center">
                <Star size={16} className="mr-1 fill-current" />
                {pkg.rating} ({pkg.reviews} reviews)
              </div>
            </div>
          </div>

          {/* Weather Badge */}
          {mockWeatherData[pkg.city] && (
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
              <div className="flex items-center text-gray-800">
                <Thermometer size={16} className="mr-2 text-red-500" />
                <span className="font-bold">{mockWeatherData[pkg.city].temp}°C</span>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Trip</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{pkg.description}</p>
                <p className="text-gray-600 leading-relaxed">
                  This carefully crafted journey offers the perfect blend of culture, adventure, and relaxation. 
                  Experience authentic local traditions, stunning landscapes, and create memories that will last a lifetime.
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Trip Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Day-by-Day Itinerary</h3>
                <div className="space-y-4">
                  {dayByDayItinerary.map((day, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-1">{day.title}</h4>
                          <p className="text-gray-600 text-sm">{day.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {inclusions.map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="text-green-600 mr-3">{item.icon}</div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 shadow-lg">
                
                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">{pkg.price}</div>
                  <div className="text-lg text-gray-500 line-through mb-2">{pkg.originalPrice}</div>
                  <div className="text-sm text-gray-600">per person</div>
                  <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block">
                    Save ₹{parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))}
                  </div>
                </div>

                {/* Trip Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{pkg.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Best Season:</span>
                    <span className="font-medium capitalize flex items-center">
                      {getSeasonIcon(pkg.season)} {pkg.season}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium capitalize">{pkg.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-medium">2-8 people</span>
                  </div>
                </div>

                {/* Booking Button */}
                <button
                  onClick={() => onBookNow(pkg)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                >
                  Book This Package
                  <ArrowRight size={20} className="ml-2" />
                </button>

                {/* Contact Info */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm mb-2">Need help with booking?</p>
                  <p className="text-blue-600 font-semibold">📞 +91 98765 43210</p>
                  <p className="text-gray-500 text-xs mt-2">Available 24/7</p>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Shield size={14} className="mr-1 text-green-500" />
                      Secure Booking
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 text-blue-500" />
                      Free Cancellation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsModal;