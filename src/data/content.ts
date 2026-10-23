// Centralized static content for ALL INDIA TOURS
// All imagery uses real Pexels stock photo URLs

export const IMAGES = {
  intro: {
    mountain1: 'https://images.pexels.com/photos/32132398/pexels-photo-32132398.jpeg?auto=compress&cs=tinysrgb&w=1920',
    mountain2: 'https://images.pexels.com/photos/38902559/pexels-photo-38902559.jpeg?auto=compress&cs=tinysrgb&w=1920',
    valley: 'https://images.pexels.com/photos/37026801/pexels-photo-37026801.jpeg?auto=compress&cs=tinysrgb&w=1920',
    road: 'https://images.pexels.com/photos/8514722/pexels-photo-8514722.jpeg?auto=compress&cs=tinysrgb&w=1920',
    car: 'https://images.pexels.com/photos/37516593/pexels-photo-37516593.jpeg?auto=compress&cs=tinysrgb&w=1920',
    tunnel: 'https://images.pexels.com/photos/6342927/pexels-photo-6342927.jpeg?auto=compress&cs=tinysrgb&w=1920',
    destination: 'https://images.pexels.com/photos/12874496/pexels-photo-12874496.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  hero: 'https://images.pexels.com/photos/6083324/pexels-photo-6083324.jpeg?auto=compress&cs=tinysrgb&w=1920',
  charDham: 'https://images.pexels.com/photos/37763593/pexels-photo-37763593.jpeg?auto=compress&cs=tinysrgb&w=1920',
  about: 'https://images.pexels.com/photos/12932548/pexels-photo-12932548.jpeg?auto=compress&cs=tinysrgb&w=1920',
  finalCta: 'https://images.pexels.com/photos/39201461/pexels-photo-39201461.jpeg?auto=compress&cs=tinysrgb&w=1920',
  story: 'https://images.pexels.com/photos/22602467/pexels-photo-22602467.jpeg?auto=compress&cs=tinysrgb&w=1920',
} as const;

export interface Vehicle {
  id: string;
  name: string;
  image: string;
  seats: string;
  ac: boolean;
  luggage: string;
  driver: boolean;
  price: number;
  description: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    image: 'https://www.khivrajmotors.com/assets/images/cars/newdizire/colors/bluishblack.jpg',
    seats: '4+1 Seats',
    ac: true,
    luggage: '2 Bags',
    driver: true,
    price: 3000,
    description: 'Compact and efficient sedan perfect for short city rides, airport transfers, and small family trips. Economical yet comfortable.',
  },
  {
    id: 'Maruti Suzuki Ertiga ',
    name: 'Maruti Suzuki Ertiga ',
    image: 'https://imgd.aeplcdn.com/1200x900/n/cw/ec/115777/ertiga-exterior-right-front-three-quarter-10.png?isig=0&q=80',
    seats: '6+1 Seats',
    ac: true,
    luggage: '3 Bags',
    driver: true,
    price: 4000,
    description: 'Reliable and spacious MPV ideal for family travel and long-distance journeys. Known for comfort and durability on Indian roads.',
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/222736/innova-crysta-2026-exterior-right-front-three-quarter.png?isig=0&q=80&q=80',
    seats: '6+1 Seats',
    ac: true,
    luggage: '4 Bags',
    driver: true,
    price: 5500,
    description: 'Premium MPV with refined interiors and superior comfort. The preferred choice for long highway drives and Himalayan journeys.',
  },
  // {
  //   id: 'suv',
  //   name: 'Premium SUV',
  //   image: 'https://images.pexels.com/photos/14487752/pexels-photo-14487752.jpeg?auto=compress&cs=tinysrgb&w=1200',
  //   seats: '5+1 Seats',
  //   ac: true,
  //   luggage: '4 Bags',
  //   driver: true,
  //   price: 4500,
  //   description: 'Powerful SUV built for mountain roads and rough terrain. Excellent ground clearance for Himalayan and pilgrimage routes.',
  // },
  {
    id: 'tempo-12',
    name: 'Tempo Traveller 12 Seater',
    image: 'https://buscdn.cardekho.com/in/force/traveller-3700/force-traveller-3700.jpg',
    seats: '12 Seats',
    ac: true,
    luggage: 'Large Boot',
    driver: true,
    price: 7500,
    description: 'Spacious 12-seater perfect for group tours, family vacations, and pilgrimage groups. Comfortable pushback seats with ample legroom.',
  },
  {
    id: 'tempo-17',
    name: 'Tempo Traveller 17 Seater',
    image: 'https://buscdn.cardekho.com/in/force/traveller-3700/force-traveller-3700.jpg',
    seats: '17 Seats',
    ac: true,
    luggage: 'Roof Carrier',
    driver: true,
    price: 8500,
    description: 'Large 17-seater for bigger groups and tour packages. Ideal for Char Dham Yatra groups and corporate outings.',
  },
  {
    id: 'tempo-20',
    name: 'Tempo Traveller 20 Seater',
    image: 'https://buscdn.cardekho.com/in/force/traveller-3700/force-traveller-3700.jpg',
    seats: '20 Seats',
    ac: true,
    luggage: 'Roof Carrier',
    driver: true,
    price: 9500,
    description: 'Large 20-seater for bigger groups and tour packages. Ideal for Char Dham Yatra groups and corporate outings.',
  },
  {
    id: 'tempo-22',
    name: 'Tempo Traveller 22 Seater',
    image: 'https://buscdn.cardekho.com/in/force/traveller-3700/force-traveller-3700.jpg',
    seats: '22 Seats',
    ac: true,
    luggage: 'Roof Carrier',
    driver: true,
    price: 10500,
    description: 'Large 22-seater for bigger groups and tour packages. Ideal for Char Dham Yatra groups and corporate outings.',
  },
  {
    id: 'tempo-25',
    name: 'Tempo Traveller 25 Seater',
    image: 'https://buscdn.cardekho.com/in/force/traveller-3700/force-traveller-3700.jpg',
    seats: '25 Seats',
    ac: true,
    luggage: 'Roof Carrier',
    driver: true,
    price: 12500,
    description: 'Large 25-seater for bigger groups and tour packages. Ideal for Char Dham Yatra groups and corporate outings.',
  },
  // {
  //   id: 'luxury',
  //   name: 'Luxury Tourist Vehicle',
  //   image: 'https://images.pexels.com/photos/4909544/pexels-photo-4909544.jpeg?auto=compress&cs=tinysrgb&w=1200',
  //   seats: '4+1 Seats',
  //   ac: true,
  //   luggage: '4 Bags',
  //   driver: true,
  //   price: 7500,
  //   description: 'Top-tier luxury vehicle with premium leather interiors, ambient lighting, and first-class comfort for special occasions and VIP travel.',
  // },
];

export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  days: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'kedarnath',
    name: 'Kedarnath',
    location: 'Uttarakhand',
    image: 'https://images.pexels.com/photos/16152405/pexels-photo-16152405.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'One of the holiest shrines dedicated to Lord Shiva, nestled in the Garhwal Himalayas at 3,583m elevation.',
    days: '3 Days',
  },
  {
    id: 'badrinath',
    name: 'Badrinath',
    location: 'Uttarakhand',
    image: 'https://images.pexels.com/photos/19019326/pexels-photo-19019326.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Sacred temple of Lord Vishnu on the banks of the Alaknanda River, surrounded by Neelkanth peak.',
    days: '3 Days',
  },
  {
    id: 'gangotri',
    name: 'Gangotri',
    location: 'Uttarakhand',
    image: 'https://images.pexels.com/photos/12990547/pexels-photo-12990547.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'The source of the holy River Ganga, set amidst breathtaking mountain scenery and glacial valleys.',
    days: '4 Days',
  },
  {
    id: 'yamunotri',
    name: 'Yamunotri',
    location: 'Uttarakhand',
    image: 'https://images.pexels.com/photos/33921762/pexels-photo-33921762.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'The first stop of Char Dham Yatra, dedicated to Goddess Yamuna, with natural hot water springs.',
    days: '4 Days',
  },
  {
    id: 'char-dham',
    name: 'Char Dham Yatra',
    location: 'Uttarakhand',
    image: 'https://images.pexels.com/photos/18590571/pexels-photo-18590571.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Complete spiritual journey covering Yamunotri, Gangotri, Kedarnath, and Badrinath in one sacred trip.',
    days: '10-12 Days',
  },
  {
    id: 'kainchi-dham',
    name: 'Kainchi Dham',
    location: 'Nainital, Uttarakhand',
    image: 'https://images.pexels.com/photos/35536243/pexels-photo-35536243.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'The renowned ashram of Neem Karoli Baba, surrounded by lush forests and serene hills.',
    days: '2 Days',
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    location: 'Uttar Pradesh',
    image: 'https://images.pexels.com/photos/17869831/pexels-photo-17869831.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'One of the oldest living cities in the world, sacred ghats on the Ganges, and spiritual heart of India.',
    days: '2-3 Days',
  },
  {
    id: 'prayagraj',
    name: 'Prayagraj',
    location: 'Uttar Pradesh',
    image: 'https://images.pexels.com/photos/31022593/pexels-photo-31022593.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'The holy Triveni Sangam where the Ganga, Yamuna, and Saraswati rivers meet. Home of the Kumbh Mela.',
    days: '2 Days',
  },
  {
    id: 'naimisharanya',
    name: 'Naimisharanya Dham',
    location: 'Uttar Pradesh',
    image: 'https://images.pexels.com/photos/37735983/pexels-photo-37735983.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Ancient sacred forest mentioned in the Puranas, home to numerous temples and spiritual sites.',
    days: '2 Days',
  },
];

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  { id: 'car-rental', icon: 'Car', title: 'Car Rental', description: 'Self-drive or chauffeured cars for every occasion and distance.' },
  { id: 'car-driver', icon: 'UserCog', title: 'Car With Driver', description: 'Experienced drivers who know the roads, culture, and routes.' },
  { id: 'tempo', icon: 'Bus', title: 'Tempo Traveller', description: 'Spacious group travel for families, friends, and tour groups.' },
  { id: 'one-way', icon: 'ArrowRightLeft', title: 'One Way Taxi', description: 'Quick point-to-point taxi service at transparent pricing.' },
  { id: 'round-trip', icon: 'RefreshCw', title: 'Round Trip', description: 'Complete to-and-fro journeys with flexible stopovers.' },
  { id: 'tour-packages', icon: 'MapPin', title: 'Tour Packages', description: "Curated holiday packages across India's most scenic routes." },
  { id: 'yatra', icon: 'Mountain', title: 'Yatra Packages', description: 'Spiritual pilgrimage journeys to sacred Himalayan destinations.' },
  { id: 'hotel', icon: 'Hotel', title: 'Hotel Booking', description: 'Comfortable hotel arrangements at every stop along your journey.' },
];

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Sameer Sourav', location: 'Hajipur', rating: 5, text: 'Excellent service and very comfortable journey to Kedarnath. The driver was experienced and knew the mountain roads well. Highly recommended!' },
  { id: '2', name: 'Anup Kumar', location: 'Delhi', rating: 5, text: 'Driver was professional and the vehicle was very clean. We did the Char Dham Yatra and everything was perfectly organized.' },
  { id: '3', name: 'SK Manjur Alam', location: 'Kolkata', rating: 5, text: 'Very good experience with our Kashmir Tour. The Innova Crysta was comfortable and the driver was friendly and safe.' },
  { id: '4', name: 'Dev Anurag', location: 'lucknow', rating: 5, text: 'Booked a Tempo Traveller for our family of 14. Spacious, clean, and the journey to Varanasi was smooth and enjoyable.' },
  { id: '5', name: 'Anuj Kumar Gupta', location: 'Patna', rating: 5, text: 'Best travel agency for pilgrimage tours. They took care of everything from car to hotels. Truly your journey, their responsibility.' },
];

export interface JourneyStep {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  { id: 'plan', label: 'Plan', description: 'Share your travel dreams and requirements with us.', icon: 'MapPinned' },
  { id: 'book', label: 'Book', description: 'Choose your vehicle and confirm your journey.', icon: 'CalendarCheck' },
  { id: 'travel', label: 'Travel', description: 'Relax as our experienced driver takes you safely.', icon: 'Car' },
  { id: 'explore', label: 'Explore', description: 'Discover breathtaking destinations and sacred sites.', icon: 'Camera' },
  { id: 'remember', label: 'Remember', description: 'Take home memories that last a lifetime.', icon: 'Heart' },
];

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  { id: 'drivers', icon: 'BadgeCheck', title: 'Experienced Drivers', description: 'Licensed, background-checked drivers who know every route.' },
  { id: 'clean', icon: 'Sparkles', title: 'Clean & Comfortable', description: 'Well-maintained vehicles sanitized before every trip.' },
  { id: 'safe', icon: 'ShieldCheck', title: 'Safe Travel', description: 'Safety-first approach with GPS tracking and 24×7 support.' },
  { id: 'pricing', icon: 'Tags', title: 'Transparent Pricing', description: 'No hidden charges. What you see is what you pay.' },
  { id: 'support', icon: 'Headphones', title: '24×7 Support', description: 'Round-the-clock customer support for peace of mind.' },
  { id: 'flexible', icon: 'CalendarClock', title: 'Flexible Plans', description: 'Customize your itinerary, stops, and schedule anytime.' },
  { id: 'trips', icon: 'ArrowRightLeft', title: 'One-Way & Round Trips', description: 'Flexible trip options to suit your travel needs.' },
  { id: 'specialists', icon: 'Mountain', title: 'Yatra Specialists', description: 'Experts in pilgrimage and holiday tour packages.' },
];

export const CONTACT_INFO = {
  phone: '+91 63958 13702',
  whatsapp: '+91 63958 13702',
  email: 'rsaharawat700@gmail.com',
  address: 'Opposite Dandi Ashram, Shukaratal, Muzzaffarnagar, Uttar Pradesh, India',
};
