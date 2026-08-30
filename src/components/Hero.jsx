import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const PROFILE_PHOTO_URL = '/profile.jpg';

const Hero = () => {
  return (
    <section className="bg-cream py-20 lg:py-32" id="hero">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              Velishala Sai Varun
            </h1>
            <h2 className="text-xl sm:text-2xl text-navy font-semibold mb-6">
              Full Stack Software Engineer
            </h2>
            <p className="text-lg text-slate mb-8 max-w-2xl mx-auto lg:mx-0">
              I build end-to-end web and mobile products — React front ends, Node/Express APIs, relational data models, and the auth layers that hold them together.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-slate mb-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-navy" />
                <span>velishalasaivarun9@gmail.com</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-navy" />
                <span>+91 76719 87670</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate mb-8 justify-center lg:justify-start">
              <MapPin className="w-5 h-5 text-navy" />
              <span>Mahabubabad, Telangana, India</span>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/velishala-sai-varun/" className="flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-navy/90 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
              <a href="https://github.com/velishalasaivarun" className="flex items-center gap-2 border border-gray-300 text-ink px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Back card (Gold) */}
              <div className="absolute top-4 left-4 w-full h-full bg-gold rounded-2xl transform rotate-3 transition-transform hover:rotate-6"></div>
              {/* Middle card (Navy) */}
              <div className="absolute top-2 left-2 w-full h-full bg-navy rounded-2xl transform -rotate-2 transition-transform hover:-rotate-3"></div>
              {/* Front Image Frame */}
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden flex items-center justify-center border-4 border-white z-10">
                {PROFILE_PHOTO_URL ? (
                  <img src={PROFILE_PHOTO_URL} alt="Velishala Sai Varun" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-6xl font-bold text-navy font-display">SV</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
