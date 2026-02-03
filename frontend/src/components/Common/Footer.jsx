import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-white">North American Metals</h3>
              <p className="text-sm text-gray-300 mt-1">operating as EUROSPEC</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Established in 1985, serving the automotive industry with precision tooling, stamping, mechanisms, and assemblies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm" data-testid="footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm" data-testid="footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm" data-testid="footer-services">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors text-sm" data-testid="footer-careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm" data-testid="footer-contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/tooling" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Tooling
                </Link>
              </li>
              <li>
                <Link to="/services/manufacturing" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/services/design" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Design & Development
                </Link>
              </li>
              <li>
                <Link to="/services/assembly" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Assembly
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>130 Harry Walker Parkway</p>
                  <p>Newmarket, Ontario, Canada</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+12482498130" className="text-sm text-gray-300 hover:text-white transition-colors">
                  (248) 249-8130
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:mwilley@eurospectooling.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  mwilley@eurospectooling.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} North American Metals / Eurospec Manufacturing Inc. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            IATF 16949 Certified
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
