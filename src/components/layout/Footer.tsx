import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const branches = [
  {
    name: 'Pameec Luxury Suite, Lokogoma',
    address: 'Plot 354 Apo/Lokogoma Express Way, Abuja',
    phone: '+234 816 606 5843',
  },
  {
    name: 'Pameec Luxury Suite, Utako',
    address: 'No 36 Ajose Adeogun Street, Abuja',
    phone: '+234 901 408 4741',
  },
  {
    name: 'Pameec Exclusive Apartment, Utako',
    address: 'No 4 Henry Adefope Close, Abuja',
    phone: '+234 703 313 4119',
  },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Rooms', href: '/rooms' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-semibold">Pameec</h3>
              <p className="text-xs uppercase tracking-widest text-background/60">Luxury Suite</p>
            </div>
            <p className="text-background/70 leading-relaxed">
              Experience unparalleled luxury and comfort in the heart of Abuja. 
              Three premium locations designed for discerning travelers.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Branches */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-lg font-medium mb-6">Our Branches</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              {branches.slice(0, 2).map((branch) => (
                <div key={branch.name} className="space-y-2">
                  <h5 className="font-medium text-background/90">{branch.name}</h5>
                  <p className="flex items-start gap-2 text-sm text-background/60">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    {branch.address}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-background/60">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    {branch.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-background/60">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+234 813 157 7816</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:pameechotel@gmail.com" className="hover:text-background transition-colors">pameechotel@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>24/7 Reception</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {currentYear} Pameec Luxury Suite. All rights reserved.</p>
            <p>
              Powered by{' '}
              <a 
                href="https://www.omarandblasius.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors font-medium"
              >
                Omar and Blasius
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
