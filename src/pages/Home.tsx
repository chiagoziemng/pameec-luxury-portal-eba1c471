import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, MapPin, Users, Wifi, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import heroImage from '@/assets/pameec-twin-buildings.jpg';
import roomImage from '@/assets/pameec-reception.jpg';
import poolImage from '@/assets/pameec-pool.jpg';
import restaurantImage from '@/assets/pameec-restaurant.jpg';
import eventHallImage from '@/assets/pameec-hall-interior.jpg';

const branches = [
  {
    name: 'Pameec Luxury Suite',
    location: 'Lokogoma',
    description: 'Our flagship property featuring a stunning swimming pool, spacious event halls, and premium suites in a serene residential district.',
    features: ['Swimming Pool', 'Event Halls', 'Restaurant & Bar'],
    href: '/branches#lokogoma',
  },
  {
    name: 'Pameec Luxury Suite',
    location: 'Utako',
    description: 'Strategically located in the heart of Utako, perfect for business travelers seeking convenience and luxury.',
    features: ['Business Center', 'Conference Rooms', 'Fine Dining'],
    href: '/branches#utako',
  },
  {
    name: 'Pameec Exclusive Apartment',
    location: 'Utako',
    description: 'Fully serviced apartments with equipped kitchens, ideal for extended stays and families.',
    features: ['Full Kitchen', 'Living Room', 'Long-Stay Packages'],
    href: '/branches#exclusive',
  },
];

const features = [
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'CCTV-enabled security with professional personnel ensuring your safety round the clock.',
  },
  {
    icon: Zap,
    title: 'Constant Power',
    description: 'Uninterrupted power supply with Mikano generators and solar backup systems.',
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Complimentary high-speed internet access throughout all our properties.',
  },
  {
    icon: Car,
    title: 'Airport Transfer',
    description: 'Hotel taxi pickup and drop-off services for your convenience.',
  },
];

const roomTypes = [
  { name: 'Standard Suite', price: 'From ₦45,000/night' },
  { name: 'Business Suite', price: 'From ₦65,000/night' },
  { name: 'Superior Room', price: 'From ₦55,000/night' },
  { name: 'Diplomatic Suite', price: 'From ₦120,000/night' },
  { name: 'Executive Suite', price: 'From ₦95,000/night' },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Pameec Luxury Suite | Premium Hotels in Abuja, Nigeria</title>
        <meta name="description" content="Experience luxury accommodation in Abuja at Pameec Luxury Suite. Three premium locations in Lokogoma and Utako offering world-class rooms, event halls, and serviced apartments. Book your stay today." />
        <meta name="keywords" content="hotels in Abuja, luxury hotel in Abuja, best hotel in Lokogoma Abuja, hotels in Utako Abuja, serviced apartments in Abuja, event halls in Abuja" />
        <link rel="canonical" href="https://pameecluxurysuite.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pameec Luxury Suite | Premium Hotels in Abuja, Nigeria" />
        <meta property="og:description" content="Experience luxury accommodation in Abuja at Pameec Luxury Suite. Three premium locations offering world-class rooms, event halls, and serviced apartments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pameecluxurysuite.com" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Pameec Luxury Suite",
            "description": "Premium luxury hotel in Abuja, Nigeria with three branches offering world-class accommodation, event halls, and serviced apartments.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Abuja",
              "addressRegion": "FCT",
              "addressCountry": "Nigeria"
            },
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Swimming Pool" },
              { "@type": "LocationFeatureSpecification", "name": "Restaurant" },
              { "@type": "LocationFeatureSpecification", "name": "Conference Rooms" },
              { "@type": "LocationFeatureSpecification", "name": "24-Hour Power Supply" },
              { "@type": "LocationFeatureSpecification", "name": "Free WiFi" }
            ],
            "starRating": { "@type": "Rating", "ratingValue": "4" }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat scale-150"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: 'center 25%'
          }}
        >
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        
        <div className="relative z-10 container-luxury text-center text-primary-foreground py-32">
          <p className="text-sm uppercase tracking-widest mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            Welcome to Pameec Luxury Suite
          </p>
          <h1 className="heading-display mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Experience Luxury in the<br />Heart of Abuja
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/90 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            Three premium locations offering world-class accommodation, exceptional service, and unforgettable experiences in Nigeria's capital city.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book Your Stay</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/rooms">Explore Rooms</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="About Us"
                title="Abuja's Premier Luxury Hospitality"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pameec Luxury Suite stands as a beacon of premium hospitality in Abuja, Nigeria. 
                With three strategically located properties, we cater to discerning travelers, 
                government officials, business executives, and families seeking exceptional comfort 
                and world-class service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our commitment to excellence is reflected in every aspect of your stay—from our 
                elegantly appointed rooms to our state-of-the-art facilities and personalized service.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={roomImage} 
                alt="Luxury suite interior at Pameec Luxury Suite Abuja" 
                className="w-full h-[500px] object-cover rounded-sm shadow-luxury-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-sm shadow-lg">
                <p className="text-4xl font-heading font-semibold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <SectionHeader
            label="Our Locations"
            title="Three Premium Properties in Abuja"
            description="Each Pameec property offers a unique experience while maintaining our signature standards of luxury and comfort."
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {branches.map((branch, index) => (
              <article 
                key={branch.location + index}
                className="bg-background rounded-sm overflow-hidden shadow-luxury card-hover"
              >
                <div className="h-48 bg-muted flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-muted-foreground" />
                </div>
                <div className="p-8">
                  <p className="text-sm text-primary font-medium mb-2">{branch.location}</p>
                  <h3 className="font-heading text-xl font-medium mb-3">{branch.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{branch.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {branch.features.map((feature) => (
                      <span key={feature} className="text-xs bg-secondary px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={branch.href}
                    className="text-primary font-medium text-sm link-underline"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionHeader
            label="Why Choose Us"
            title="World-Class Amenities & Services"
            description="We provide everything you need for a comfortable, secure, and memorable stay in Abuja."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-light rounded-full flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-medium mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary-light mb-4">Accommodations</p>
              <h2 className="heading-section text-background mb-4">Rooms & Suites</h2>
              <div className="w-16 h-0.5 bg-primary mb-6" />
              <p className="text-background/70 leading-relaxed mb-8">
                From elegant single rooms to spacious multi-bedroom apartments, our accommodations 
                are designed to meet the needs of every guest. Each room features premium amenities 
                and modern comforts.
              </p>
              
              <div className="space-y-4 mb-8">
                {roomTypes.map((room) => (
                  <div key={room.name} className="flex justify-between items-center py-3 border-b border-background/10">
                    <span className="font-medium">{room.name}</span>
                    <span className="text-background/60 text-sm">{room.price}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" asChild>
                <Link to="/rooms">View All Rooms</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={roomImage} 
                alt="Luxury hotel room in Abuja" 
                className="w-full h-[600px] object-cover rounded-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={eventHallImage} 
                alt="Event hall at Pameec Luxury Suite Abuja" 
                className="w-full h-[500px] object-cover rounded-sm shadow-luxury-lg"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader
                label="Events & Conferences"
                title="Host Your Next Event With Us"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our multipurpose halls accommodate 500 to 1,000 guests, making them perfect for 
                weddings, corporate conferences, seminars, and special celebrations.
              </p>
              <ul className="space-y-3 mb-8">
                {['State-of-the-art audio/visual equipment', 'Professional event coordination', 'Customizable catering options', 'Ample parking space'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" asChild>
                <Link to="/facilities#events">
                  Reserve a Hall
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pool & Restaurant */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-sm overflow-hidden group">
              <img 
                src={poolImage} 
                alt="Swimming pool at Pameec Luxury Suite Lokogoma" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="overlay-gradient" />
              <div className="absolute bottom-8 left-8 text-primary-foreground">
                <h3 className="font-heading text-2xl font-medium mb-2">Swimming Pool</h3>
                <p className="text-primary-foreground/80">Available at Lokogoma branch</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-sm overflow-hidden group">
              <img 
                src={restaurantImage} 
                alt="Fine dining restaurant at Pameec Luxury Suite" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="overlay-gradient" />
              <div className="absolute bottom-8 left-8 text-primary-foreground">
                <h3 className="font-heading text-2xl font-medium mb-2">Dining & Bars</h3>
                <p className="text-primary-foreground/80">Indoor & outdoor options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Book your stay at Pameec Luxury Suite today and discover why we're Abuja's 
            preferred choice for discerning travelers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/2348131577816" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section for Local SEO */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about staying with us."
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {[
              {
                q: 'Is Pameec Luxury Suite near Abuja city center?',
                a: 'Yes, our Utako branches are located in the heart of Abuja, just 15 minutes from the city center. The Lokogoma branch offers a more serene environment while still being accessible to major attractions.'
              },
              {
                q: 'Do you have event halls for conferences and weddings?',
                a: 'Yes, we have multipurpose halls that can accommodate 500 to 1,000 guests, perfect for corporate events, weddings, and conferences in Abuja.'
              },
              {
                q: 'Is there constant power supply at Pameec hotels?',
                a: 'Absolutely. All our properties feature 24/7 power supply backed by Mikano generators and solar backup systems.'
              },
              {
                q: 'Do you offer airport pickup services?',
                a: 'Yes, we provide hotel taxi pickup and drop-off services from Nnamdi Azikiwe International Airport and other locations in Abuja.'
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-border pb-6">
                <h3 className="font-heading text-lg font-medium mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
