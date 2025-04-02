
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dsai-dark/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="text-3xl font-bold tracking-tighter">
            DSAI<span className="text-dsai-green">.</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="nav-link" end>
              HOME
            </NavLink>
            <NavLink to="/events" className="nav-link">
              EVENTS
            </NavLink>
            <NavLink to="/innovations" className="nav-link">
              INNOVATIONS
            </NavLink>
            <NavLink to="/team" className="nav-link">
              DSAI SQUAD
            </NavLink>
            <NavLink to="/about" className="nav-link">
              ABOUT CLUB
            </NavLink>
          </div>

          <Button asChild className="hidden md:flex bg-dsai-green hover:bg-dsai-green-light text-black font-semibold transition-all duration-300 rounded-full px-6">
            <NavLink to="https://chat.whatsapp.com/IZtjxNyjq6L5d9dYudzo5K">
              JOIN NOW
            </NavLink>
          </Button>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
          } ${isMenuOpen ? 'h-auto py-6' : 'h-0 py-0'} overflow-hidden`}
        >
          <div className="flex flex-col space-y-4">
            <NavLink to="/" className="nav-link" onClick={toggleMenu} end>
              HOME
            </NavLink>
            <NavLink to="/events" className="nav-link" onClick={toggleMenu}>
              EVENTS
            </NavLink>
            <NavLink to="/innovations" className="nav-link" onClick={toggleMenu}>
              INNOVATIONS
            </NavLink>
            <NavLink to="/team" className="nav-link" onClick={toggleMenu}>
              DSAI SQUAD
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={toggleMenu}>
              ABOUT CLUB
            </NavLink>
            <Button asChild className="bg-dsai-green hover:bg-dsai-green-light text-black font-semibold transition-all w-full justify-center">
              <NavLink to="/join" onClick={toggleMenu}>
                JOIN NOW
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
