// Enhanced travel packages data with 15 destinations
export const travelPackages = [
  {
    id: 1,
    name: "Golden Triangle Tour",
    location: "Delhi-Agra-Jaipur",
    city: "Delhi",
    duration: "6 Days / 5 Nights",
    price: "₹25,999",
    originalPrice: "₹35,999",
    rating: 4.8,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400",
    highlights: ["Taj Mahal Visit", "Red Fort", "Hawa Mahal", "City Palace"],
    description: "Experience the iconic Golden Triangle covering Delhi's heritage, Agra's Taj Mahal, and Jaipur's royal palaces.",
    season: "winter",
    category: "heritage"
  },
  {
    id: 2,
    name: "Kerala Backwaters",
    location: "Alleppey-Kumarakom",
    city: "Kochi",
    duration: "4 Days / 3 Nights",
    price: "₹18,499",
    originalPrice: "₹25,499",
    rating: 4.9,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400",
    highlights: ["Houseboat Stay", "Backwater Cruise", "Spice Gardens", "Ayurvedic Massage"],
    description: "Relax in Kerala's serene backwaters with luxury houseboat stays and authentic local experiences.",
    season: "monsoon",
    category: "nature"
  },
  {
    id: 3,
    name: "Goa Beach Paradise",
    location: "North & South Goa",
    city: "Goa",
    duration: "5 Days / 4 Nights",
    price: "₹22,999",
    originalPrice: "₹32,999",
    rating: 4.7,
    reviews: 445,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400",
    highlights: ["Beach Resorts", "Water Sports", "Portuguese Heritage", "Nightlife"],
    description: "Enjoy pristine beaches, vibrant nightlife, and Portuguese colonial architecture in Goa.",
    season: "winter",
    category: "beach"
  },
  {
    id: 4,
    name: "Himachal Hill Stations",
    location: "Shimla-Manali-Dharamshala",
    city: "Shimla",
    duration: "7 Days / 6 Nights",
    price: "₹28,999",
    originalPrice: "₹38,999",
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    highlights: ["Snow-capped Mountains", "Adventure Sports", "Buddhist Monasteries", "Apple Orchards"],
    description: "Explore the scenic hill stations of Himachal Pradesh with adventure activities and mountain views.",
    season: "summer",
    category: "mountain"
  },
  {
    id: 5,
    name: "Rajasthan Royal Tour",
    location: "Udaipur-Jodhpur-Jaisalmer",
    city: "Jaipur",
    duration: "8 Days / 7 Nights",
    price: "₹45,999",
    originalPrice: "₹65,999",
    rating: 4.8,
    reviews: 298,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400",
    highlights: ["Desert Safari", "Palace Hotels", "Folk Performances", "Camel Rides"],
    description: "Experience royal Rajasthan with palace stays, desert safaris, and rich cultural heritage.",
    season: "winter",
    category: "heritage"
  },
  {
    id: 6,
    name: "Kashmir Valley",
    location: "Srinagar-Gulmarg-Pahalgam",
    city: "Srinagar",
    duration: "6 Days / 5 Nights",
    price: "₹35,999",
    originalPrice: "₹48,999",
    rating: 4.9,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=400",
    highlights: ["Houseboat Stay", "Shikara Rides", "Ski Resort", "Mughal Gardens"],
    description: "Discover paradise on earth with Kashmir's pristine valleys, lakes, and snow-capped peaks.",
    season: "summer",
    category: "mountain"
  },
  {
    id: 7,
    name: "Ladakh Adventure",
    location: "Leh-Nubra Valley-Pangong",
    city: "Leh",
    duration: "9 Days / 8 Nights",
    price: "₹52,999",
    originalPrice: "₹72,999",
    rating: 4.7,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400",
    highlights: ["High Altitude Desert", "Monasteries", "Pangong Lake", "Camel Safari"],
    description: "Adventure through the dramatic landscapes of Ladakh with high-altitude lakes and ancient monasteries.",
    season: "summer",
    category: "adventure"
  },
  {
    id: 8,
    name: "Andaman Islands",
    location: "Port Blair-Havelock-Neil",
    city: "Port Blair",
    duration: "6 Days / 5 Nights",
    price: "₹38,999",
    originalPrice: "₹55,999",
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
    highlights: ["Crystal Clear Waters", "Scuba Diving", "Coral Reefs", "Beach Resorts"],
    description: "Tropical paradise with pristine beaches, coral reefs, and incredible marine life.",
    season: "winter",
    category: "beach"
  },
  {
    id: 9,
    name: "Tamil Nadu Temple Trail",
    location: "Chennai-Madurai-Rameswaram",
    city: "Chennai",
    duration: "7 Days / 6 Nights",
    price: "₹24,999",
    originalPrice: "₹34,999",
    rating: 4.6,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400",
    highlights: ["Ancient Temples", "Classical Music", "Traditional Cuisine", "Cultural Shows"],
    description: "Explore magnificent Dravidian temples and rich Tamil culture through historic cities.",
    season: "winter",
    category: "heritage"
  },
  {
    id: 10,
    name: "Uttarakhand Char Dham",
    location: "Haridwar-Rishikesh-Kedarnath",
    city: "Haridwar",
    duration: "8 Days / 7 Nights",
    price: "₹31,999",
    originalPrice: "₹44,999",
    rating: 4.5,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400",
    highlights: ["Sacred Temples", "Yoga Capital", "River Rafting", "Mountain Views"],
    description: "Spiritual journey through sacred temples nestled in the Himalayan foothills.",
    season: "summer",
    category: "spiritual"
  },
  {
    id: 11,
    name: "Karnataka Explorer",
    location: "Bangalore-Mysore-Coorg",
    city: "Bangalore",
    duration: "5 Days / 4 Nights",
    price: "₹21,999",
    originalPrice: "₹30,999",
    rating: 4.6,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400",
    highlights: ["Coffee Plantations", "Palace Tours", "Wildlife", "Spice Gardens"],
    description: "Explore Karnataka's royal heritage, coffee estates, and lush hill stations.",
    season: "winter",
    category: "nature"
  },
  {
    id: 12,
    name: "Northeast Discovery",
    location: "Shillong-Cherrapunji-Kaziranga",
    city: "Shillong",
    duration: "8 Days / 7 Nights",
    price: "₹42,999",
    originalPrice: "₹58,999",
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1687724252002-88365a719561?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Living Root Bridges", "One-Horned Rhino", "Waterfalls", "Tribal Culture"],
    description: "Discover the hidden gems of Northeast India with unique wildlife and pristine landscapes.",
    season: "winter",
    category: "nature"
  },
  {
    id: 13,
    name: "Mumbai Bollywood Tour",
    location: "Mumbai-Pune-Lonavala",
    city: "Mumbai",
    duration: "4 Days / 3 Nights",
    price: "₹19,999",
    originalPrice: "₹28,999",
    rating: 4.4,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400",
    highlights: ["Film Studios", "Gateway of India", "Hill Station", "Street Food"],
    description: "Experience the glamour of Bollywood and explore Maharashtra's commercial capital.",
    season: "winter",
    category: "cultural"
  },
  {
    id: 14,
    name: "Spiritual Varanasi",
    location: "Varanasi-Sarnath-Allahabad",
    city: "Varanasi",
    duration: "4 Days / 3 Nights",
    price: "₹16,999",
    originalPrice: "₹24,999",
    rating: 4.7,
    reviews: 189,
    image: "https://media.istockphoto.com/id/1752927355/photo/colourful-scene-showing-boats-on-the-sacred-ganges-river-at-dashashwamedh-ghat-in-varanasi.webp?a=1&b=1&s=612x612&w=0&k=20&c=ToXa4gyKDSoGXIEsydLxVKdKGQdJLf2guAjUIA21Eeg=",
    highlights: ["Ganga Aarti", "Ancient Temples", "Boat Rides", "Buddhist Sites"],
    description: "Immerse yourself in the spiritual heart of India along the sacred Ganges River.",
    season: "winter",
    category: "spiritual"
  },
  {
    id: 15,
    name: "Wildlife Safari Circuit",
    location: "Ranthambore-Bharatpur-Agra",
    city: "Jaipur",
    duration: "6 Days / 5 Nights",
    price: "₹34,999",
    originalPrice: "₹47,999",
    rating: 4.5,
    reviews: 156,
    image: "https://plus.unsplash.com/premium_photo-1661895052895-c7163da980cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Tiger Safari", "Bird Sanctuary", "Wildlife Photography", "Taj Mahal"],
    description: "Combine wildlife adventures with heritage sites in this exciting safari circuit.",
    season: "winter",
    category: "wildlife"
  }
];

// Enhanced weather data for more cities
export const mockWeatherData = {
  "Delhi": { temp: 28, condition: "sunny", humidity: 60, windSpeed: 15 },
  "Mumbai": { temp: 32, condition: "cloudy", humidity: 78, windSpeed: 12 },
  "Goa": { temp: 30, condition: "sunny", humidity: 70, windSpeed: 8 },
  "Shimla": { temp: 15, condition: "cloudy", humidity: 65, windSpeed: 20 },
  "Jaipur": { temp: 35, condition: "sunny", humidity: 45, windSpeed: 18 },
  "Srinagar": { temp: 12, condition: "rainy", humidity: 85, windSpeed: 25 },
  "Kochi": { temp: 29, condition: "rainy", humidity: 80, windSpeed: 10 },
  "Leh": { temp: 8, condition: "sunny", humidity: 30, windSpeed: 22 },
  "Port Blair": { temp: 31, condition: "cloudy", humidity: 82, windSpeed: 14 },
  "Chennai": { temp: 33, condition: "sunny", humidity: 75, windSpeed: 16 },
  "Haridwar": { temp: 26, condition: "cloudy", humidity: 68, windSpeed: 12 },
  "Bangalore": { temp: 24, condition: "cloudy", humidity: 72, windSpeed: 8 },
  "Shillong": { temp: 18, condition: "rainy", humidity: 88, windSpeed: 18 },
  "Varanasi": { temp: 29, condition: "sunny", humidity: 65, windSpeed: 14 }
};

// Enhanced popular locations list
export const popularLocations = [
  "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad",
  "Goa", "Jaipur", "Udaipur", "Shimla", "Manali", "Kerala", "Kashmir",
  "Agra", "Varanasi", "Rishikesh", "Haridwar", "Darjeeling", "Ooty",
  "Leh", "Ladakh", "Port Blair", "Andaman", "Madurai", "Rameswaram",
  "Mysore", "Coorg", "Hampi", "Nashik", "Lonavala", "Ahmedabad",
  "Shillong", "Cherrapunji", "Gangtok", "Kaziranga", "Pune", "Sarnath",
  "Allahabad", "Ranthambore", "Bharatpur", "Nubra Valley", "Pangong",
  "Gulmarg", "Pahalgam", "Havelock", "Neil Island", "Kedarnath"
];

// Tourist recommendations
export const touristRecommendations = {
  heritage: ["Red Fort Delhi", "Taj Mahal Agra", "Amber Fort Jaipur", "Mysore Palace", "Khajuraho Temples", "Hampi Ruins"],
  nature: ["Valley of Flowers", "Munnar Tea Gardens", "Coorg Hills", "Sundarbans", "Living Root Bridges", "Kaziranga National Park"],
  beach: ["Radhanagar Beach", "Varkala Beach", "Arambol Beach", "Marina Beach", "Palolem Beach", "Neil Island"],
  mountain: ["Rohtang Pass", "Tiger Hill Darjeeling", "Nainital Lake", "Mount Abu", "Kanchenjunga Base", "Tawang Monastery"],
  adventure: ["River Rafting Rishikesh", "Trekking in Ladakh", "Scuba Diving Andaman", "Paragliding Bir Billing", "Wildlife Safari Ranthambore", "Rock Climbing Hampi"],
  spiritual: ["Golden Temple Amritsar", "Kedarnath Temple", "Vaishno Devi", "Bodh Gaya", "Somnath Temple", "Tirupati Temple"],
  wildlife: ["Ranthambore Tiger Reserve", "Jim Corbett National Park", "Kaziranga Rhino Sanctuary", "Bharatpur Bird Sanctuary", "Periyar Wildlife Sanctuary", "Gir Lion Sanctuary"],
  cultural: ["Bollywood Studios Mumbai", "Classical Dance Kerala", "Folk Music Rajasthan", "Tribal Art Northeast", "Temple Festivals Tamil Nadu", "Sufi Music Delhi"]
};

// Razorpay Configuration
export const razorpayConfig = {
  // Test Key - Replace with your actual Razorpay Key ID
  keyId: process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_9WkzpQSRQEF7az',
  
  // Company Details
  companyName: 'GT Holidays',
  companyLogo: '/logo192.png',
  brandColor: '#3B82F6',
  
  // Default Options
  currency: 'INR',
  
  // Notes Template for Orders
  getOrderNotes: (pkg, bookingData) => ({
    package_id: pkg.id,
    package_name: pkg.name,
    location: pkg.location,
    duration: pkg.duration,
    travelers: bookingData.travelers,
    travel_date: bookingData.date,
    customer_name: bookingData.name,
    customer_email: bookingData.email,
    customer_phone: bookingData.phone
  }),
  
  // Prefill Template
  getPrefillData: (bookingData) => ({
    name: bookingData.name,
    email: bookingData.email,
    contact: bookingData.phone
  })
};

// Payment Status Constants
export const paymentStatus = {
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILED: 'failed',
  CANCELLED: 'cancelled'
};

// Helper function to calculate total amount
export const calculateTotalAmount = (pkg, travelers) => {
  const basePrice = parseInt(pkg.price.replace('₹', '').replace(',', ''));
  return basePrice * parseInt(travelers);
};