import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h2 className="text-xl font-semibold">Job Hunt</h2>
          <p className="text-sm text-gray-400 mt-2">
            Your ultimate job-hunting platform, helping job seekers and recruiters connect seamlessly.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/jobs" className="hover:text-white">Find Jobs</a></li>
            <li><a href="/companies" className="hover:text-white">Top Companies</a></li>
            
          </ul>
        </div>

        {/* Column 3: Social & Contact */}
        <div>
          <h2 className="text-xl font-semibold">Stay Connected</h2>
          <p className="text-sm text-gray-400 mt-2">Follow us on social media</p>
          <div className="flex space-x-4 mt-3">
            <a href="https://facebook.com" className="hover:text-blue-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-300">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-500">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Job Hunt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
