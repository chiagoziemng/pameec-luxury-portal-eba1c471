import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import pameecLokogoma from '@/assets/pameec-lokogoma.jpg';
import pameecUtako from '@/assets/pameec-utako.jpg';
import pameecPool from '@/assets/pameec-pool.jpg';
import pameecReception from '@/assets/pameec-reception.jpg';
import pameecRestaurant from '@/assets/pameec-restaurant.jpg';
import pameecHallInterior from '@/assets/pameec-hall-interior.jpg';
import pameecHallStage from '@/assets/pameec-hall-stage.jpg';
import pameecOutdoorBar from '@/assets/pameec-outdoor-bar.jpg';
import pameecTwinBuildings from '@/assets/pameec-twin-buildings.jpg';
import pameecEventHall from '@/assets/pameec-event-hall.jpg';
import pameecExclusiveApartment from '@/assets/pameec-exclusive-apartment.jpg';
import pameecExclusiveApartment2 from '@/assets/pameec-exclusive-apartment-2.jpg';
import pameecExclusiveTwin from '@/assets/pameec-exclusive-twin.jpg';
import pameecLuxurySuiteUtako from '@/assets/pameec-luxury-suite-utako.jpg';
import pameecRestaurantInterior from '@/assets/pameec-restaurant-interior.jpg';
import pameecRoomStandard from '@/assets/pameec-room-standard.jpg';
import pameecRoomSuperior from '@/assets/pameec-room-superior.jpg';
import pameecRoomLuxury from '@/assets/pameec-room-luxury.jpg';

const galleryImages = [
  { src: pameecTwinBuildings, alt: 'Pameec Luxury Suite twin buildings in Lokogoma', category: 'Exterior' },
  { src: pameecLokogoma, alt: 'Pameec Luxury Suite Lokogoma exterior', category: 'Exterior' },
  { src: pameecUtako, alt: 'Pameec Luxury Suite Utako exterior', category: 'Exterior' },
  { src: pameecEventHall, alt: 'Pameec Event Hall & Apartment building', category: 'Exterior' },
  { src: pameecExclusiveApartment, alt: 'Pameec Exclusive Apartment exterior view', category: 'Exterior' },
  { src: pameecExclusiveApartment2, alt: 'Pameec Exclusive Apartment building', category: 'Exterior' },
  { src: pameecExclusiveTwin, alt: 'Pameec Exclusive Apartment twin buildings', category: 'Exterior' },
  { src: pameecLuxurySuiteUtako, alt: 'Pameec Luxury Suite Utako front entrance', category: 'Exterior' },
  { src: pameecReception, alt: 'Reception area at Pameec Luxury Suite', category: 'Lobby' },
  { src: pameecPool, alt: 'Swimming pool at Pameec Lokogoma', category: 'Pool' },
  { src: pameecRestaurant, alt: 'Restaurant at Pameec', category: 'Dining' },
  { src: pameecOutdoorBar, alt: 'Outdoor bar area at Pameec', category: 'Dining' },
  { src: pameecRestaurantInterior, alt: 'Restaurant interior at Pameec', category: 'Dining' },
  { src: pameecHallInterior, alt: 'Event hall interior setup at Pameec', category: 'Events' },
  { src: pameecHallStage, alt: 'Event hall with stage at Pameec', category: 'Events' },
  { src: pameecRoomStandard, alt: 'Standard room at Pameec Luxury Suite', category: 'Rooms' },
  { src: pameecRoomSuperior, alt: 'Superior room at Pameec Luxury Suite', category: 'Rooms' },
  { src: pameecRoomLuxury, alt: 'Luxury suite at Pameec Luxury Suite', category: 'Rooms' },
];

const categories = ['All', 'Exterior', 'Lobby', 'Pool', 'Dining', 'Events', 'Rooms'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Photo Gallery | Pameec Luxury Suite Abuja</title>
        <meta name="description" content="Browse photos of Pameec Luxury Suite's elegant rooms, swimming pool, restaurants, event halls, and facilities. See why we're Abuja's premier luxury hotel." />
        <link rel="canonical" href="https://pameecluxurysuite.com/gallery" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground text-background">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary-light mb-4">Visual Tour</p>
            <h1 className="heading-display text-background mb-6">
              Gallery
            </h1>
            <p className="text-xl text-background/70 leading-relaxed">
              Take a visual journey through our properties and discover the luxury 
              and elegance that awaits you at Pameec Luxury Suite.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-sm ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className="relative aspect-[4/3] overflow-hidden rounded-sm group cursor-pointer"
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-primary-foreground text-sm">{image.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors"
            aria-label="Close gallery"
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Virtual Tour CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury text-center">
          <SectionHeader
            title="Want to See More?"
            description="Schedule a virtual tour or visit us in person to experience Pameec Luxury Suite firsthand."
          />
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://wa.me/2348131577816" target="_blank" rel="noopener noreferrer">
                Request Virtual Tour
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Ready to Experience This Luxury?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Book your stay at Pameec Luxury Suite and make these beautiful spaces your home away from home.
          </p>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
