import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ExternalLink } from 'lucide-react'
import { Button } from '../ui/button'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-primary leading-tight">North American Metals</span>
              <span className="text-xs text-gray-500 tracking-wide">operating as EUROSPEC</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://workforcenow.adp.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="hidden sm:flex items-center gap-2">
                ADP Portal
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>

            <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 ${
                    isActive(link.path) ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="https://workforcenow.adp.com" target="_blank" rel="noopener noreferrer">
                <Button className="w-full">ADP Portal</Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
