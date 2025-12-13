import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import { useToast } from '@/hooks/use-toast';

const branches = [
  {
    name: 'Pameec Luxury Suite, Lokogoma',
    address: 'Plot 123, Lokogoma District, Abuja, FCT, Nigeria',
    phone: '+234 800 000 0001',
    email: 'lokogoma@pameecluxurysuite.com',
    hours: '24/7 Reception',
  },
  {
    name: 'Pameec Luxury Suite, Utako',
    address: 'Plot 456, Utako District, Abuja, FCT, Nigeria',
    phone: '+234 800 000 0002',
    email: 'utako@pameecluxurysuite.com',
    hours: '24/7 Reception',
  },
  {
    name: 'Pameec Exclusive Apartment, Utako',
    address: 'Plot 789, Utako District, Abuja, FCT, Nigeria',
    phone: '+234 800 000 0003',
    email: 'exclusive@pameecluxurysuite.com',
    hours: '24/7 Reception',
  },
];

const inquiryTypes = [
  'Room Reservation',
  'Event Hall Booking',
  'Corporate Inquiry',
  'Long-Stay Apartment',
  'General Inquiry',
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    branch: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      branch: '',
      checkIn: '',
      checkOut: '',
      guests: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact & Reservations | Pameec Luxury Suite Abuja</title>
        <meta name="description" content="Contact Pameec Luxury Suite for reservations, event bookings, and inquiries. Reach us by phone, email, or visit our locations in Lokogoma and Utako, Abuja." />
        <meta name="keywords" content="book hotel Abuja, hotel reservation Abuja, contact Pameec, hotel phone number Abuja" />
        <link rel="canonical" href="https://pameecluxurysuite.com/contact" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Pameec Luxury Suite",
            "telephone": "+234 800 000 0000",
            "email": "info@pameecluxurysuite.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Abuja",
              "addressRegion": "FCT",
              "addressCountry": "Nigeria"
            }
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground text-background">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary-light mb-4">Get in Touch</p>
            <h1 className="heading-display text-background mb-6">
              Contact & Reservations
            </h1>
            <p className="text-xl text-background/70 leading-relaxed">
              Ready to book your stay or have questions? Our team is here to help 
              24/7. Reach out through any of our channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionHeader
                title="Make a Reservation"
                description="Fill out the form below and we'll get back to you within 24 hours."
                align="left"
              />
              
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-luxury"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-luxury"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-luxury"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="input-luxury"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="branch" className="block text-sm font-medium mb-2">
                      Preferred Branch
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="input-luxury"
                    >
                      <option value="">Select branch</option>
                      <option value="lokogoma">Lokogoma</option>
                      <option value="utako">Utako (Luxury Suite)</option>
                      <option value="exclusive">Utako (Exclusive Apartment)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      className="input-luxury"
                      placeholder="2"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="input-luxury"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="input-luxury"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-luxury resize-none"
                    placeholder="Any special requests or additional information..."
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-secondary p-8 rounded-sm mb-8">
                <h3 className="font-heading text-xl font-medium mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+2348000000000" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    +234 800 000 0000
                  </a>
                  <a 
                    href="mailto:info@pameecluxurysuite.com" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    info@pameecluxurysuite.com
                  </a>
                  <a 
                    href="https://wa.me/2348000000000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Chat on WhatsApp
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <Button variant="whatsapp" className="w-full" asChild>
                    <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Us Now
                    </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {branches.map((branch) => (
                  <div key={branch.name} className="p-6 border border-border rounded-sm">
                    <h4 className="font-heading font-medium mb-3">{branch.name}</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                        {branch.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href={`tel:${branch.phone}`} className="hover:text-primary">{branch.phone}</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                        {branch.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-secondary py-16">
        <div className="container-luxury">
          <div className="bg-muted h-[400px] rounded-sm flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Google Maps Integration</p>
              <p className="text-sm text-muted-foreground/60">Coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Prefer to Book by Phone?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Call us directly for immediate assistance with your reservation.
          </p>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="tel:+2348000000000">
              <Phone className="h-5 w-5" />
              +234 800 000 0000
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
