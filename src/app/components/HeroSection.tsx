"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { outfit } from '../fonts'; // Assuming 'outfit' font is defined here
import Header from './Header'; // Import the simplified Header component

// Define types for the props
interface HeroSectionProps {
  pageTitle: string; // The main title for the page (e.g., "Our Services", "Contact Us")
  children?: React.ReactNode; // Optional additional content for the hero section
  // Optional: If you want a different background color for the hero section
  // compared to the default #5DA39D, you can add a prop here.
  // heroBgColor?: string;
}

const sectionWrapperClasses = 'px-4 lg:px-0 2xl:w-[1260px] mx-auto';

const HeroSection: React.FC<HeroSectionProps> = ({ pageTitle, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [ // Duplicated from Header for mobile menu, could be centralized if needed
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/new', label: 'New Patients' },
    { href: '/information', label: 'Information' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <div className={`w-full bg-[#5DA39D] ${outfit.className}`}>
      {/* Desktop Header and Title */}
      <div className="hidden lg:block">
        <Header /> {/* Desktop navigation is rendered here */}
        <div className={`${sectionWrapperClasses} lg:pb-8 lg:pt-2`}>
          <div className='lg:pt-2 text-center text-5xl lg:text-7xl text-white'>Dr. Wai-man Lam & Associates</div>
          <div className='text-center text-2xl lg:text-4xl text-white my-2 pb-4 lg:pb-0'>Dental care for the whole family - since 1997</div>
        </div>
      </div>

      {/* Mobile Header (Title + Menu Button) */}
      <div className="lg:hidden">
        <div className={`${sectionWrapperClasses} pt-6`}>
          <div className="flex justify-between items-center px-4"> {/* Added px-4 for mobile padding */}
            {/* Brand Name on Left (Mobile) */}
            <div className='text-gray-100 text-3xl w-4/5'>Dr. Wai-man Lam & Associates</div>
            {/* Mobile Menu Button on Right */}
            <button onClick={toggleMobileMenu} className='text-gray-100 focus:outline-none border-2 border-[#88BFB8] rounded-xl p-1'>
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
          {/* Mobile Tagline */}
          <div className='text-center text-xl text-white my-2 pb-4 px-6'>Dental care for the whole family - since 1997</div>
        </div>
      </div>

      {/* Page-specific Title (for both mobile and desktop) */}
      <div className={`${sectionWrapperClasses} py-4 lg:py-18`}> {/* Adjusted padding */}
        <div className='text-4xl lg:text-9xl lg:mb-4 pb-4 lg:pb-0 text-white'>{pageTitle}</div>
        {/* Optional children content for the hero section */}
        {children && (
          <div className={`text-xl lg:text-2xl font-light mt-0 lg:mt-12 lg:py-12 px-8 lg:px-24 py-8 rounded-4xl bg-[#12507B] text-gray-100`}>
            {children}
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='lg:hidden fixed inset-0 bg-[#5DA39D] z-50 flex flex-col items-center justify-center space-y-8'>
          <button onClick={toggleMobileMenu} className='absolute top-4 right-4 text-gray-100 focus:outline-none border-2 border-[#88BFB8] rounded-xl p-1 mt-6'>
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={toggleMobileMenu}>
              <div className='text-gray-100 text-4xl hover:text-white transition-colors duration-200'>
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
