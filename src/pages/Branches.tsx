import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Waves, Utensils, Car, Shield, Zap, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import pameecLokogoma from '@/assets/pameec-lokogoma.jpg';
import pameecLuxurySuiteUtako from '@/assets/pameec-luxury-suite-utako.jpg';
import pameecExclusiveApartment from '@/assets/pameec-exclusive-apartment.jpg';

const branches = [
  {
    id: 'lokogoma',
    name: 'Pameec Luxury Suite',
    location: 'Lokogoma',
    tagline: 'Our flagship property with swimming pool',
    address: 'Plot 354, Adjacent Sunshine Estate, Along Lokogoma/Apo, Apo Dutse District, Abuja, FCT, Nigeria',
    phone: '+234 816 606 5843',
    email: 'lokogoma@pameecluxurysuite.com',
    image: pameecLokogoma,
    description: 'Nestled in the serene residential district of Lokogoma, our flagship property offers a perfect blend of luxury and tranquility. This location features our signature swimming pool, making it ideal for guests seeking relaxation alongside premium accommodation.',
    features: [
      { icon: Waves, name: 'Swimming Pool', desc: 'Outdoor pool with lounging area' },
      { icon: Utensils, name: 'Restaurant & Bar', desc: 'Indoor and outdoor dining options' },
      { icon: Shield, name: '24/7 Security', desc: 'CCTV and security personnel' },
      { icon: Zap, name: 'Constant Power', desc: 'Generator and solar backup' },
      { icon: Car, name: 'Parking', desc: 'Spacious secure parking' },
      { icon: Wifi, name: 'Free WiFi', desc: 'High-speed internet' },
    ],
    rooms: ['Standard Room', 'Superior Room', 'Business Room', 'Luxury Suite', 'Executive Room', 'Diplomatic Room'],
    mapUrl: 'https://maps.google.com/?q=Plot+354+Adjacent+Sunshine+Estate+Along+Lokogoma+Apo+Apo+Dutse+District+Abuja',
  },
  {
    id: 'utako',
    name: 'Pameec Luxury Suite',
    location: 'Utako',
    tagline: 'Prime location for business travelers',
    address: 'No 36 Ajose Adeogun Street, opposite Peace Mass, Utako, Abuja 900108, FCT, Nigeria',
    phone: '+234 901 408 4741',
    email: 'utako@pameecluxurysuite.com',
    image: pameecLuxurySuiteUtako,
    description: 'Strategically located in the bustling Utako district, this property is perfect for business travelers and those who want to be in the heart of Abuja. With easy access to major business centers, government offices, and shopping areas, convenience meets luxury.',
    features: [
      { icon: Utensils, name: 'Restaurant & Bar', desc: 'Fine dining experience' },
      { icon: Shield, name: '24/7 Security', desc: 'CCTV and security personnel' },
      { icon: Zap, name: 'Constant Power', desc: 'Generator and solar backup' },
      { icon: Car, name: 'Parking', desc: 'Secure parking facility' },
      { icon: Wifi, name: 'Free WiFi', desc: 'High-speed internet' },
      { icon: Car, name: 'Airport Transfer', desc: 'Pickup and drop-off service' },
    ],
    rooms: ['Standard Room', 'Superior Room', 'Business Room', 'Luxury Suite', 'Executive Room'],
    mapUrl: 'https://maps.google.com/?q=No+36+Ajose+Adeogun+St+opposite+Peace+Mass+Utako+Abuja+900108',
  },
  {
    id: 'exclusive',
    name: 'Pameec Exclusive Apartment',
    location: 'Utako',
    tagline: 'Fully serviced apartments for extended stays',
    address: 'No 4 Henry Adefope Close, Utako, Abuja, FCT, Nigeria',
    phone: '+234 703 313 4119',
    email: 'exclusive@pameecluxurysuite.com',
    image: pameecExclusiveApartment,
    description: 'Perfect for extended stays, relocating families, and guests who prefer a home-away-from-home experience. Our exclusive apartments feature fully equipped kitchens, spacious living areas, and all the comforts of home combined with hotel-quality service.',
    features: [
      { icon: Utensils, name: 'Full Kitchen', desc: 'Equipped with modern appliances' },
      { icon: Shield, name: '24/7 Security', desc: 'CCTV and security personnel' },
      { icon: Zap, name: 'Constant Power', desc: 'Generator and solar backup' },
      { icon: Car, name: 'Parking', desc: 'Private parking space' },
      { icon: Wifi, name: 'Free WiFi', desc: 'High-speed internet' },
      { icon: Car, name: 'Housekeeping', desc: 'Regular cleaning service' },
    ],
    rooms: ['One-Bedroom Apartment', 'Two-Bedroom Apartment', 'Three-Bedroom Apartment'],
    mapUrl: 'https://maps.google.com/?q=4+Henry+Adefope+Close+Utako+Abuja',
  },
];

export default function Branches() {
  return (
    <>
      <Helmet>
        <title>Our Branches | Pameec Luxury Suite Locations in Abuja</title>
        <meta name="description" content="Explore Pameec Luxury Suite's three premium locations in Abuja: Lokogoma (with swimming pool), Utako (prime business location), and Exclusive Apartments for extended stays." />
        <link rel="canonical" href="https://pameecluxurysuite.com/branches" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Pameec Luxury Suite",
            "url": "https://pameecluxurysuite.com",
            "location": branches.map(branch => ({
              "@type": "Hotel",
              "name": `${branch.name}, ${branch.location}`,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": branch.address,
                "addressLocality": "Abuja",
                "addressRegion": "FCT",
                "addressCountry": "Nigeria"
              },
              "telephone": branch.phone,
              "email": branch.email
            }))
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground text-background">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary-light mb-4">Our Locations</p>
            <h1 className="heading-display text-background mb-6">
              Three Premium Properties in Abuja
            </h1>
            <p className="text-xl text-background/70 leading-relaxed">
              Each Pameec property offers a unique experience tailored to different needs, 
              while maintaining our signature standards of luxury and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Branches */}
      {branches.map((branch, index) => (
        <section 
          key={branch.id} 
          id={branch.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}
        >
          <div className="container-luxury">
            <div className={`grid lg:grid-cols-2 gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative">
                  <img 
                    src={branch.image} 
                    alt={`${branch.name} ${branch.location} - Luxury hotel in Abuja`}
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-sm shadow-luxury-lg"
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 rounded-sm">
                    <span className="text-sm font-medium">{branch.location}</span>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="text-sm uppercase tracking-widest text-primary mb-2">{branch.tagline}</p>
                <h2 className="heading-subsection mb-2">{branch.name}</h2>
                <p className="text-lg text-muted-foreground mb-6">{branch.location}, Abuja</p>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {branch.description}
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-8 p-6 bg-card rounded-sm border border-border">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`tel:${branch.phone}`} className="text-sm hover:text-primary transition-colors">
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`mailto:${branch.email}`} className="text-sm hover:text-primary transition-colors">
                      {branch.email}
                    </a>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  {branch.features.map((feature) => (
                    <div key={feature.name} className="flex items-center gap-2">
                      <feature.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature.name}</span>
                    </div>
                  ))}
                </div>

                {/* Room Types */}
                <div className="mb-8">
                  <h3 className="font-medium mb-3">Available Accommodations:</h3>
                  <div className="flex flex-wrap gap-2">
                    {branch.rooms.map((room) => (
                      <span key={room} className="text-sm bg-secondary px-3 py-1.5 rounded-sm">
                        {room}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/contact">Book This Location</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer">
                      <MapPin className="h-4 w-4" />
                      View on Map
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Map Placeholder Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-luxury text-center">
          <h2 className="heading-section text-background mb-6">Find Us Easily</h2>
          <p className="text-background/70 max-w-2xl mx-auto mb-10">
            All our properties are strategically located in accessible areas of Abuja, 
            with easy access to major roads, business districts, and attractions.
          </p>
          <div className="bg-muted/10 rounded-sm h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-background/60">Interactive Google Maps coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Not Sure Which Location is Right for You?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Contact our team and we'll help you choose the perfect Pameec property for your needs.
          </p>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
