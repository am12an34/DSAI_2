
import { NavLink } from 'react-router-dom';
import { Github, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dsai-dark-lighter py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <NavLink to="/" className="text-3xl font-bold tracking-tighter mb-6 block">
              DSAI<span className="text-dsai-green">.</span>
            </NavLink>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering students with data science and artificial intelligence skills
              through workshops, projects, and a collaborative learning environment.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/dsai-nita" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dsai-green transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dsai-green transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/dsai_nita/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dsai-green transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/dsai-nita" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dsai-green transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:officialdatascienceaiclub.nita@gmail.com" className="text-gray-400 hover:text-dsai-green transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-dsai-green transition-colors">Home</NavLink>
              </li>
              <li>
                <NavLink to="/events" className="text-gray-400 hover:text-dsai-green transition-colors">Events</NavLink>
              </li>
              <li>
                <NavLink to="/innovations" className="text-gray-400 hover:text-dsai-green transition-colors">Innovations</NavLink>
              </li>
              <li>
                <NavLink to="/team" className="text-gray-400 hover:text-dsai-green transition-colors">DSAI Squad</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-dsai-green transition-colors">About Club</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">NIT Agartala Campus</p>
            <p className="text-gray-400 mb-2">Jirania, Tripura - 799046</p>
            <p className="text-gray-400 mb-2">India</p>
            <a href="mailto:officialdatascienceaiclub.nita@gmail.com" className="text-dsai-green hover:underline">officialdatascienceaiclub.nita@gmail.com</a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} | ALL RIGHTS RESERVED | DESIGNED & DEVELOPED BY
            <span
              onClick={() => window.open('https://www.instagram.com/aman_is_loading', '_blank')}
              className="text-dsai-green font-semibold cursor-pointer transition-colors duration-300 hover:text-dsai-green-light ml-1"
              aria-label="Visit Aman Mishra's Instagram"
            >
              AMAN MISHRA
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
