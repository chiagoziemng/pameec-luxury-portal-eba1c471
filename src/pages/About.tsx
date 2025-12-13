import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import lobbyImage from '@/assets/hero-lobby.jpg';
import restaurantImage from '@/assets/restaurant.jpg';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in every aspect of our service delivery.',
  },
  {
    icon: Users,
    title: 'Guest-Centric',
    description: 'Your comfort and satisfaction are at the heart of everything we do.',
  },
  {
    icon: Globe,
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical business practices.',
  },
  {
    icon: Heart,
    title: 'Hospitality',
    description: 'Warm, genuine Nigerian hospitality that makes you feel at home.',
  },
];

const milestones = [
  { year: '2008', event: 'Pameec Luxury Suite established in Lokogoma' },
  { year: '2014', event: 'Expansion to Utako with second property' },
  { year: '2018', event: 'Launch of Pameec Exclusive Apartment' },
  { year: '2023', event: 'Major renovation and facility upgrades' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Pameec Luxury Suite | Premier Hotel in Abuja, Nigeria</title>
        <meta name="description" content="Learn about Pameec Luxury Suite, Abuja's premier hospitality brand with over 15 years of excellence. Discover our story, values, and commitment to luxury accommodation in Nigeria." />
        <link rel="canonical" href="https://pameecluxurysuite.com/about" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-foreground text-background">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-primary-light mb-4">About Us</p>
            <h1 className="heading-display text-background mb-6">
              Redefining Luxury Hospitality in Abuja
            </h1>
            <p className="text-xl text-background/70 leading-relaxed">
              For over 15 years, Pameec Luxury Suite has been the preferred choice for 
              discerning travelers seeking exceptional comfort, security, and world-class 
              service in Nigeria's capital city.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Our Story"
                title="A Legacy of Excellence"
                align="left"
              />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Pameec Luxury Suite was born from a vision to create a hospitality experience 
                  that combines international standards with authentic Nigerian warmth. Founded 
                  in 2008, our first property in Lokogoma quickly became a landmark destination 
                  for business travelers, government officials, and tourists alike.
                </p>
                <p>
                  Today, with three premium properties strategically located across Abuja, we 
                  continue to set the benchmark for luxury accommodation in Nigeria. Our 
                  commitment to excellence extends beyond beautiful rooms—it encompasses every 
                  interaction, every service, and every moment of your stay.
                </p>
                <p>
                  Whether you're visiting for business, attending a conference, celebrating a 
                  special occasion, or simply seeking a peaceful retreat, Pameec Luxury Suite 
                  offers an experience that exceeds expectations.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={lobbyImage} 
                alt="Pameec Luxury Suite elegant lobby interior" 
                className="w-full h-[500px] object-cover rounded-sm shadow-luxury-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <SectionHeader
            label="Our Values"
            title="What We Stand For"
            description="Our core values guide every decision and define our commitment to you."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value) => (
              <div key={value.title} className="bg-background p-8 rounded-sm shadow-luxury">
                <div className="w-14 h-14 mb-6 bg-primary-light rounded-full flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary text-primary-foreground p-10 rounded-sm">
              <h2 className="font-heading text-2xl font-medium mb-6">Our Mission</h2>
              <p className="text-primary-foreground/90 leading-relaxed">
                To provide exceptional hospitality experiences that combine luxury, comfort, 
                and authentic Nigerian warmth, while exceeding the expectations of every guest 
                who walks through our doors.
              </p>
            </div>
            <div className="bg-foreground text-background p-10 rounded-sm">
              <h2 className="font-heading text-2xl font-medium mb-6">Our Vision</h2>
              <p className="text-background/90 leading-relaxed">
                To be recognized as Nigeria's leading hospitality brand, setting new standards 
                for luxury accommodation and becoming the benchmark for excellence in the 
                African hospitality industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <SectionHeader
            label="Our Journey"
            title="Milestones & Achievements"
          />
          
          <div className="max-w-3xl mx-auto mt-16">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <span className="text-primary font-heading text-xl font-semibold">{milestone.year}</span>
                    <p className="text-muted-foreground mt-2">{milestone.event}</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center md:-translate-x-1/2">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={restaurantImage} 
                alt="Pameec Luxury Suite team providing excellent service" 
                className="w-full h-[400px] object-cover rounded-sm shadow-luxury-lg"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader
                label="Our Team"
                title="Dedicated to Your Comfort"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Behind every exceptional stay at Pameec is a team of passionate hospitality 
                professionals committed to making your experience memorable. From our 
                experienced management to our attentive front desk staff, housekeeping team, 
                and culinary experts—every team member is dedicated to exceeding your expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our staff undergoes continuous training to ensure they deliver the highest 
                standards of service, combining international hospitality best practices with 
                genuine Nigerian warmth.
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">
                  Join Our Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Experience the Pameec Difference
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Discover why guests choose Pameec Luxury Suite for their stay in Abuja.
          </p>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/contact">Book Your Stay</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
