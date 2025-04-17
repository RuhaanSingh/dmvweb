
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
    <footer className="bg-navy-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold font-poppins flex items-center">
              <span className="text-purple-500">DMV</span>
              <span className="ml-1">Web Designs</span>
            </Link>
            <p className="mt-4 text-gray-300 max-w-sm">
              Creating modern, responsive, and visually impressive websites for individuals and businesses.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-purple-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple-500 transition-colors">
                  Portfolio Websites
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple-500 transition-colors">
                  Business Websites
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple-500 transition-colors">
                  E-Commerce Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple-500 transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-purple-500 transition-colors">
                  Website Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-purple-500 mt-1" />
                <span className="text-gray-300">123 Web Street, Design City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-purple-500" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-purple-500 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-purple-500" />
                <a href="mailto:info@dmvwebdesigns.com" className="text-gray-300 hover:text-purple-500 transition-colors">
                  info@dmvwebdesigns.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} DMV Web Designs. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-500 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
