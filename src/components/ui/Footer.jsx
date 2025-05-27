import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ShieldCheck,
  Lock,
  RotateCcw,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Socials */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            SHOP<span className="text-yellow-600">APP</span>
          </h2>
          <p className="text-sm mb-4">
            Your one-stop shop for quality and affordability.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="hover:text-blue-500" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="hover:text-sky-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="hover:text-pink-500" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="hover:text-blue-300" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Policies */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Our Policies
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Lock size={16} />{" "}
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} />{" "}
              <Link to="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <RotateCcw size={16} />{" "}
              <Link to="/returns" className="hover:text-white">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@shopapp.com</p>
          <p className="text-sm">Phone: +123-456-7890</p>
          <p className="text-sm">Location: Nairobi, Kenya</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 text-center text-sm pt-4">
        &copy; {new Date().getFullYear()} shopapp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
