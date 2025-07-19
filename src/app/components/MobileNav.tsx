"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Assuming you have lucide-react installed for icons

function MobileNav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/new', label: 'New Patients' },
    { href: '/information', label: 'Information' },
    { href: '/contact', label: 'Contact Us' },
    ];

    return (
        <div>
            {/* Mobile Header (Hamburger Icon) */}
        <div className='lg:hidden flex justify-between items-center px-4 py-4'>
          <Link href='/'>
            <div className='hidden text-gray-100 text-2xl font-bold'>Dr. Wai-man Lam & Associates</div> {/* Your logo/brand name */}
          </Link>
          <button onClick={toggleMobileMenu} className='text-gray-100 focus:outline-none border-2 border-[#88BFB8] rounded-xl p-1'>
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
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
    )
}

export default MobileNav
