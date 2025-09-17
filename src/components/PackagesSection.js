import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { travelPackages } from '../data/constants';
import PackageCard from './PackageCard';

const PackagesSection = ({ onBookNow, onViewDetails, selectedLocation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPackages, setFilteredPackages] = useState(travelPackages);
  const [filterCategory, setFilterCategory] = useState('all');

  useEffect(() => {
    let filtered = travelPackages;
    
    if (selectedLocation) {
      filtered = filtered.filter(pkg =>
        pkg.location.toLowerCase().includes(selectedLocation.toLowerCase()) ||
        pkg.city.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }
    
    if (searchTerm) {
      filtered = filtered.filter(pkg =>
        pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterCategory !== 'all') {
      filtered = filtered.filter(pkg => pkg.category === filterCategory);
    }
    
    setFilteredPackages(filtered);
  }, [searchTerm, selectedLocation, filterCategory]);

  const categories = ['all', 'heritage', 'nature', 'beach', 'mountain', 'adventure', 'spiritual', 'wildlife', 'leisure', 'cultural'];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore Our Travel Packages
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover India's most beautiful destinations with our carefully crafted travel packages designed for every type of traveler
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1 max-w-md mx-auto lg:mx-0">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                  filterCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {selectedLocation && (
          <div className="mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
              🎯 Showing results for: {selectedLocation}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPackages.map(pkg => (
            <PackageCard key={pkg.id} package={pkg} onBookNow={onBookNow} onViewDetails={onViewDetails} />
          ))}
        </div>
        
        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No packages found</h3>
            <p className="text-gray-600 text-lg">Try adjusting your search criteria or browse all destinations</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackagesSection;