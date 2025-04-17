
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-2 glass-navy shadow-lg" 
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold font-poppins text-white flex items-center"
            >
              <span className="text-purple-500">DMV</span>
              <span className="ml-1">Web Designs</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden glass-navy p-4 ${
          isOpen ? "block animate-fade-in" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white block px-3 py-2 text-base font-medium hover:bg-purple-500/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-3 justify-center"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
