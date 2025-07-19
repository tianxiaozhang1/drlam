// "use client";
// import React from 'react'; // No need for useState here anymore
// import Link from 'next/link';
// import { outfit } from '../fonts';
// // No need for Menu, X icons here anymore

// function Header() {
//   const navLinks = [
//     { href: '/', label: 'Home' },
//     { href: '/about', label: 'About Us' },
//     { href: '/services', label: 'Services' },
//     { href: '/new', label: 'New Patients' },
//     { href: '/information', label: 'Information' },
//     { href: '/contact', label: 'Contact Us' },
//   ];

//   return (
//     // The background color will now be handled by the HeroSection parent
//     <div className={`w-full ${outfit.className} 2xl:w-[1260px] mx-auto`}>
//       {/* Desktop Navigation - this part remains */}
//       <div className={`hidden lg:flex justify-between text-gray-100 text-sm px-2 lg:px-0 py-4 lg:text-2xl lg:py-4`}>
//         {navLinks.map((link) => (
//           <Link key={link.href} href={link.href}>
//             <div className='hover:text-white'>{link.label}</div>
//           </Link>
//         ))}
//       </div>

//       {/* Mobile-specific elements (hamburger, mobile menu) are removed from here.
//           They will be handled by the new HeroSection component. */}
//     </div>
//   );
// }

// export default Header;


"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { outfit } from '../fonts';
import { Menu, X } from 'lucide-react'; // Assuming you have lucide-react installed for icons

function Header() {
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
    <div className='bg-[#5DA39D]'>
      <div className={`w-full ${outfit.className} 2xl:w-[1260px] mx-auto`}>
            {/* Desktop Navigation */}
            <div className={`hidden lg:flex justify-between text-gray-100 text-sm px-2 lg:px-0 py-4 lg:text-2xl lg:py-4`}>
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                <div className='hover:text-white'>{link.label}</div>
                </Link>
            ))}
            </div>
      </div>
    </div>
  );
}

export default Header;