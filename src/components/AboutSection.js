import React, { useState, useEffect } from 'react';
import { CheckCircle, Users, MapPin, Star, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slideshow images
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600",
      alt: "Beautiful Indian architecture",
      caption: "Discover India's Rich Heritage"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      alt: "Scenic mountain landscape",
      caption: "Explore Majestic Landscapes"
    },
    {
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
      alt: "Traditional Indian culture",
      caption: "Experience Vibrant Culture"
    },
    {
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
      alt: "Tropical beaches",
      caption: "Relax on Pristine Beaches"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Travels.com
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
              Your trusted partner for exploring the incredible diversity of India with smart travel insights and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Slideshow Container */}
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                {slideImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p className="text-white text-lg font-semibold">{image.caption}</p>
                    </div>
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slideImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide
                          ? 'bg-white scale-110'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-4000 ease-linear"
                  style={{ 
                    width: `${((currentSlide + 1) / slideImages.length) * 100}%`,
                    animation: 'slideProgress 4000ms linear infinite'
                  }}
                />
              </div>

              <style jsx>{`
                @keyframes slideProgress {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(0%); }
                }
              `}</style>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Travels.com?
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                With over 15 years of experience and cutting-edge AI technology, we provide weather-informed travel planning and personalized destination recommendations for your perfect Indian adventure.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">Weather-Smart Planning</h4>
                    <p className="text-gray-600">Real-time weather data integration to help you plan the perfect trip at the right time</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <CheckCircle className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">AI-Powered Recommendations</h4>
                    <p className="text-gray-600">Advanced algorithms provide personalized suggestions based on your preferences and travel history</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <CheckCircle className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">24/7 Premium Support</h4>
                    <p className="text-gray-600">Round-the-clock expert assistance for all your travel needs and emergencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="text-white" size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">50,000+</h3>
              <p className="text-gray-600 font-medium">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="text-white" size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">25+</h3>
              <p className="text-gray-600 font-medium">Premium Destinations</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="text-white" size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">4.8★</h3>
              <p className="text-gray-600 font-medium">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="text-white" size={36} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">15+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;