import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-primary leading-tight">North American Metals</span>
              <span className="text-xs text-muted-foreground tracking-wide">operating as EUROSPEC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-gray-600'
                }`}
                data-testid={`nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ADP Portal Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="https://workforcenow.adp.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="adp-portal-btn"
            >
              <Button variant="outline" className="hidden sm:flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                ADP Portal
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" data-testid="mobile-menu-btn">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex flex-col">
                    <span className="font-serif text-lg font-bold text-primary">North American Metals</span>
                    <span className="text-xs text-muted-foreground">operating as EUROSPEC</span>
                  </div>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium py-2 border-b border-gray-100 transition-colors ${
                          isActive(link.path)
                            ? 'text-primary'
                            : 'text-gray-600 hover:text-primary'
                        }`}
                        data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  <a
                    href="https://workforcenow.adp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="mobile-adp-portal-btn"
                  >
                    <Button className="w-full bg-primary hover:bg-primary-800 flex items-center justify-center gap-2">
                      ADP Portal
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
