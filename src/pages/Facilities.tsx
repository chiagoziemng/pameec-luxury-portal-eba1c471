import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Waves, Utensils, Wine, Users, Shield, Zap, Wifi, Car, 
  Dumbbell, Shirt, Phone, Clock, MapPin, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import pameecPool from '@/assets/pameec-pool.jpg';
import pameecOutdoorBar from '@/assets/pameec-outdoor-bar.jpg';
import pameecHallInterior from '@/assets/pameec-hall-interior.jpg';
import pameecRestaurantInterior from '@/assets/pameec-restaurant-interior.jpg';

const mainFacilities = [
  {
    icon: Waves,
    title: 'Swimming Pool',
    description: 'Outdoor swimming pool with comfortable loungers, perfect for relaxation and leisure. Available at our Lokogoma branch.',
    image: pameecPool,
    location: 'Lokogoma',
  },
  {
    icon: Utensils,
    title: 'Restaurant',
    description: 'Fine dining experience with a menu featuring local Nigerian cuisine and international dishes prepared by our expert chefs.',
    image: pameecRestaurantInterior,
    location: 'All Branches',
  },
  {
    icon: Wine,
    title: 'Bar & Lounge',
    description: 'Indoor and outdoor bars serving premium beverages, cocktails, and light refreshments in a sophisticated atmosphere.',
    image: pameecOutdoorBar,
    location: 'All Branches',
  },
  {
    icon: Users,
    title: 'Event Halls',
    description: 'Multipurpose halls accommodating 500-1,000 guests, ideal for weddings, conferences, seminars, and corporate events.',
    image: pameecHallInterior,
    location: 'Lokogoma & Utako',
  },
];

const amenities = [
  { icon: Wifi, name: 'High-Speed WiFi', description: 'Complimentary internet throughout the property' },
  { icon: Zap, name: '24/7 Power Supply', description: 'Mikano generators and solar backup' },
  { icon: Shield, name: 'CCTV Security', description: 'Round-the-clock surveillance and security' },
  { icon: Car, name: 'Parking', description: 'Spacious and secure parking facilities' },
  { icon: Car, name: 'Airport Transfer', description: 'Taxi pickup and drop-off services' },
  { icon: Shirt, name: 'Laundry Service', description: 'Professional dry cleaning and laundry' },
  { icon: Phone, name: 'Concierge', description: 'Personalized guest assistance' },
  { icon: Clock, name: '24/7 Reception', description: 'Always available front desk service' },
  { icon: Sparkles, name: 'Housekeeping', description: 'Daily room cleaning and turndown service' },
  { icon: MapPin, name: 'Tour Assistance', description: 'Help with local tours and attractions' },
];

const eventFeatures = [
  'State-of-the-art audio/visual equipment',
  'Professional event coordination',
  'Customizable catering menus',
  'Flexible room configurations',
  'On-site parking for guests',
  'Bridal suite for weddings',
  'Technical support staff',
  'Climate-controlled spaces',
];

export default function Facilities() {
  return (
    <>
      <Helmet>
        <title>Facilities & Services | Pameec Luxury Suite Abuja</title>
        <meta name="description" content="Discover world-class facilities at Pameec Luxury Suite: swimming pool, restaurants, bars, event halls for 500-1000 guests, 24/7 power supply, CCTV security, and premium amenities in Abuja." />
        <meta name="keywords" content="hotel facilities Abuja, event halls Abuja, conference halls Abuja, swimming pool hotel Abuja, hotel restaurant Abuja" />
        <link rel="canonical" href="https://pameecluxurysuite.com/facilities" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground text-background">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary-light mb-4">Amenities</p>
            <h1 className="heading-display text-background mb-6">
              Facilities & Services
            </h1>
            <p className="text-xl text-background/70 leading-relaxed">
              From our stunning swimming pool to state-of-the-art event halls, we offer 
              everything you need for a comfortable and memorable stay in Abuja.
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionHeader
            label="Premium Facilities"
            title="World-Class Amenities"
            description="Experience luxury and comfort with our top-tier facilities designed for your pleasure."
          />
          
          <div className="space-y-20 mt-16">
            {mainFacilities.map((facility, index) => (
              <article 
                key={facility.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-sm">
                    <img 
                      src={facility.image}
                      alt={`${facility.title} at Pameec Luxury Suite Abuja`}
                      className="w-full h-[400px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-sm text-sm">
                      {facility.location}
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-14 h-14 mb-6 bg-primary-light rounded-full flex items-center justify-center">
                    <facility.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="heading-subsection mb-4">{facility.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {facility.description}
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Events & Conferences"
                title="Host Memorable Events"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our multipurpose event halls are designed to accommodate gatherings of all 
                sizes, from intimate corporate meetings to grand wedding celebrations. 
                With capacities ranging from 500 to 800 guests, our venues offer 
                flexibility and elegance.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {eventFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/contact">Reserve a Hall</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://wa.me/2348131577816" target="_blank" rel="noopener noreferrer">
                    Get a Quote
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src={pameecHallInterior}
                alt="Event hall at Pameec Luxury Suite for conferences and weddings in Abuja"
                className="w-full h-[500px] object-cover rounded-sm shadow-luxury-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Amenities Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionHeader
            label="Guest Services"
            title="Everything You Need"
            description="We've thought of everything to ensure your stay is comfortable and hassle-free."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-16">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="p-6 bg-secondary rounded-sm text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-light rounded-full flex items-center justify-center">
                  <amenity.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium mb-2">{amenity.name}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={pameecOutdoorBar}
                alt="Fine dining restaurant at Pameec Luxury Suite Abuja"
                className="w-full h-[500px] object-cover rounded-sm"
                loading="lazy"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-widest text-primary-light mb-4">Dining</p>
              <h2 className="heading-section text-background mb-4">Culinary Excellence</h2>
              <div className="w-16 h-0.5 bg-primary mb-6" />
              <p className="text-background/70 leading-relaxed mb-6">
                Our restaurants offer a delightful culinary journey featuring the best of 
                Nigerian cuisine alongside international favorites. Whether you prefer 
                indoor elegance or outdoor ambiance, we have the perfect setting for every meal.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-background/70">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Breakfast, lunch, and dinner service
                </li>
                <li className="flex items-center gap-3 text-background/70">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  24-hour room service available
                </li>
                <li className="flex items-center gap-3 text-background/70">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Private dining for special occasions
                </li>
                <li className="flex items-center gap-3 text-background/70">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Customized menus for events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Experience Our Facilities
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Book your stay today and enjoy world-class amenities and services at Pameec Luxury Suite.
          </p>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
