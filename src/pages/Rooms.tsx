import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Check, Users, Bed, Bath, Wifi, Tv, Wind, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import roomImage from '@/assets/room-suite.jpg';

const roomCategories = [
  {
    id: 'standard',
    name: 'Standard Suite',
    description: 'Comfortable and well-appointed rooms perfect for short business trips and solo travelers.',
    price: 'From ₦45,000',
    priceNote: 'per night',
    size: '25 sqm',
    occupancy: '1-2 guests',
    bedType: 'King or Twin',
    amenities: ['Free WiFi', 'Air Conditioning', 'Flat-screen TV', 'En-suite Bathroom', 'Work Desk', 'Room Service'],
    features: ['Daily housekeeping', 'Complimentary breakfast', '24/7 reception'],
    available: ['Lokogoma', 'Utako'],
  },
  {
    id: 'business',
    name: 'Business Suite',
    description: 'Designed for the modern business traveler with dedicated workspace and premium amenities.',
    price: 'From ₦65,000',
    priceNote: 'per night',
    size: '32 sqm',
    occupancy: '1-2 guests',
    bedType: 'King Bed',
    amenities: ['Free WiFi', 'Air Conditioning', 'Smart TV', 'En-suite Bathroom', 'Executive Desk', 'Mini Bar', 'Coffee Maker'],
    features: ['Daily housekeeping', 'Complimentary breakfast', 'Priority check-in', 'Business center access'],
    available: ['Lokogoma', 'Utako'],
  },
  {
    id: 'superior',
    name: 'Superior Room',
    description: 'Spacious rooms with enhanced comfort and city views, perfect for extended stays.',
    price: 'From ₦55,000',
    priceNote: 'per night',
    size: '28 sqm',
    occupancy: '2 guests',
    bedType: 'King Bed',
    amenities: ['Free WiFi', 'Air Conditioning', 'Flat-screen TV', 'En-suite Bathroom', 'Sitting Area', 'Room Service'],
    features: ['Daily housekeeping', 'Complimentary breakfast', 'Late checkout (subject to availability)'],
    available: ['Lokogoma', 'Utako'],
  },
  {
    id: 'diplomatic',
    name: 'Diplomatic Suite',
    description: 'Our premium offering with separate living area, perfect for VIPs and diplomatic guests.',
    price: 'From ₦120,000',
    priceNote: 'per night',
    size: '55 sqm',
    occupancy: '2-4 guests',
    bedType: 'King Bed + Living Room',
    amenities: ['Free WiFi', 'Air Conditioning', 'Smart TV', 'En-suite Bathroom', 'Living Room', 'Mini Bar', 'Coffee Maker', 'Safe'],
    features: ['Daily housekeeping', 'Complimentary breakfast', 'Airport transfer', 'Dedicated concierge', 'Late checkout'],
    available: ['Lokogoma'],
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    description: 'Luxurious suite with premium furnishings and exclusive amenities for discerning guests.',
    price: 'From ₦95,000',
    priceNote: 'per night',
    size: '45 sqm',
    occupancy: '2-3 guests',
    bedType: 'King Bed + Sitting Room',
    amenities: ['Free WiFi', 'Air Conditioning', 'Smart TV', 'En-suite Bathroom', 'Sitting Room', 'Mini Bar', 'Coffee Maker'],
    features: ['Daily housekeeping', 'Complimentary breakfast', 'Priority check-in', 'Room upgrade (subject to availability)'],
    available: ['Lokogoma', 'Utako'],
  },
];

const apartmentTypes = [
  {
    id: 'one-bed',
    name: 'One-Bedroom Apartment',
    description: 'Fully furnished apartment with bedroom, living room, and equipped kitchen for independent stays.',
    price: 'From ₦80,000',
    priceNote: 'per night',
    size: '50 sqm',
    occupancy: '2 guests',
    bedType: 'King Bed',
    amenities: ['Full Kitchen', 'Living Room', 'Free WiFi', 'Air Conditioning', 'Smart TV', 'En-suite Bathroom', 'Dining Area'],
    features: ['Weekly housekeeping', 'Self-catering', 'Long-stay discounts available'],
    available: ['Exclusive Apartment'],
  },
  {
    id: 'two-bed',
    name: 'Two-Bedroom Apartment',
    description: 'Spacious apartment ideal for families or groups, with two bedrooms and full amenities.',
    price: 'From ₦120,000',
    priceNote: 'per night',
    size: '80 sqm',
    occupancy: '4 guests',
    bedType: '2 King Beds',
    amenities: ['Full Kitchen', 'Living Room', 'Free WiFi', 'Air Conditioning', 'Smart TV', '2 Bathrooms', 'Dining Area', 'Balcony'],
    features: ['Weekly housekeeping', 'Self-catering', 'Long-stay discounts available', 'Laundry facilities'],
    available: ['Exclusive Apartment'],
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Free WiFi': Wifi,
  'Air Conditioning': Wind,
  'Flat-screen TV': Tv,
  'Smart TV': Tv,
  'Coffee Maker': Coffee,
};

export default function Rooms() {
  return (
    <>
      <Helmet>
        <title>Rooms & Suites | Luxury Accommodation in Abuja | Pameec</title>
        <meta name="description" content="Explore our range of luxury rooms and suites at Pameec Luxury Suite Abuja. From Standard Suites to Diplomatic Suites and serviced apartments. Book your perfect accommodation today." />
        <meta name="keywords" content="hotel rooms Abuja, luxury suites Abuja, serviced apartments Abuja, business hotel Abuja, diplomatic suite Abuja" />
        <link rel="canonical" href="https://pameecluxurysuite.com/rooms" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Pameec Luxury Suite",
            "containsPlace": roomCategories.map(room => ({
              "@type": "HotelRoom",
              "name": room.name,
              "description": room.description,
              "occupancy": {
                "@type": "QuantitativeValue",
                "value": room.occupancy
              },
              "amenityFeature": room.amenities.map(a => ({
                "@type": "LocationFeatureSpecification",
                "name": a
              }))
            }))
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground text-background">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary-light mb-4">Accommodations</p>
            <h1 className="heading-display text-background mb-6">
              Rooms & Suites
            </h1>
            <p className="text-xl text-background/70 leading-relaxed">
              From elegant single rooms to spacious apartments, discover the perfect 
              accommodation for your stay in Abuja. All rooms feature premium amenities 
              and our signature attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionHeader
            label="Hotel Rooms"
            title="Suites & Rooms"
            description="Experience comfort and luxury in our thoughtfully designed accommodations."
          />
          
          <div className="space-y-16 mt-16">
            {roomCategories.map((room, index) => (
              <article 
                key={room.id}
                id={room.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <img 
                      src={roomImage}
                      alt={`${room.name} at Pameec Luxury Suite Abuja`}
                      className="w-full h-[350px] object-cover rounded-sm shadow-luxury"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-sm">
                      <p className="font-heading text-xl font-semibold text-primary">{room.price}</p>
                      <p className="text-xs text-muted-foreground">{room.priceNote}</p>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-heading text-2xl font-medium mb-3">{room.name}</h3>
                  <p className="text-muted-foreground mb-6">{room.description}</p>
                  
                  {/* Room Info */}
                  <div className="flex flex-wrap gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-primary" />
                      <span>{room.bedType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{room.occupancy}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-4 w-4 text-primary" />
                      <span>{room.size}</span>
                    </div>
                  </div>
                  
                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Amenities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity) => (
                        <span key={amenity} className="text-xs bg-secondary px-3 py-1.5 rounded-sm">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Includes:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {room.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Availability */}
                  <p className="text-xs text-muted-foreground mb-6">
                    Available at: {room.available.join(', ')}
                  </p>
                  
                  <Button asChild>
                    <Link to="/contact">Book This Room</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Apartments Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <SectionHeader
            label="Extended Stay"
            title="Serviced Apartments"
            description="Fully equipped apartments for guests who prefer a home-away-from-home experience."
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {apartmentTypes.map((apt) => (
              <article key={apt.id} className="bg-background rounded-sm overflow-hidden shadow-luxury">
                <div className="relative h-64">
                  <img 
                    src={roomImage}
                    alt={`${apt.name} at Pameec Exclusive Apartment Abuja`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-sm">
                    <p className="font-heading text-lg font-semibold">{apt.price}</p>
                    <p className="text-xs">{apt.priceNote}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-heading text-xl font-medium mb-3">{apt.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{apt.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-primary" />
                      <span>{apt.bedType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{apt.occupancy}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {apt.amenities.slice(0, 6).map((amenity) => (
                      <span key={amenity} className="text-xs bg-secondary px-2 py-1 rounded-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="w-full" asChild>
                    <Link to="/contact">Inquire Now</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Our team is ready to help you find the perfect accommodation for your needs and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
