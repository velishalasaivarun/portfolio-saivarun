import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-20" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold font-display mb-6 text-cream">Let's build something.</h2>
        <p className="text-xl text-blue-200 mb-12 font-medium tracking-wide">Open to Software Developer roles.</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-lg font-medium bg-white/10 px-8 py-6 rounded-2xl backdrop-blur-sm w-full sm:w-auto">
          <a href="mailto:velishalasaivarun9@gmail.com" className="flex items-center gap-3 hover:text-gold transition-colors">
            <Mail className="w-6 h-6 text-gold" />
            <span className="break-all sm:break-normal">velishalasaivarun9@gmail.com</span>
          </a>
          <div className="hidden md:block w-px h-8 bg-white/20"></div>
          <a href="tel:+917671987670" className="flex items-center gap-3 hover:text-gold transition-colors whitespace-nowrap">
            <Phone className="w-6 h-6 text-gold" />
            +91 76719 87670
          </a>
          <div className="hidden md:block w-px h-8 bg-white/20"></div>
          <div className="flex items-center gap-3 text-white whitespace-nowrap">
            <MapPin className="w-6 h-6 text-gold" />
            Mahabubabad, India
          </div>
        </div>
        
        <div className="mt-16 text-sm text-blue-300/60 font-mono">
          © {new Date().getFullYear()} Velishala Sai Varun. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
