// components/Navbar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'}`}>
      <div className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" passHref>
              <div className="flex items-center">
                <div className="mr-2 relative h-10 w-10">
                  <Image 
                    src="/images/logo.png" 
                    alt="AboTax Logo" 
                    width={40} 
                    height={40}
                  />
                </div>
                <span className="font-bold text-2xl">AboTax</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/mechanism" passHref>
              <span className="hover:text-purple-300 transition-colors duration-300">Mechanizm</span>
            </Link>
            <Link href="/benefits" passHref>
              <span className="hover:text-purple-300 transition-colors duration-300">Korzyści</span>
            </Link>
            <Link href="/comparison" passHref>
              <span className="hover:text-purple-300 transition-colors duration-300">Porównanie</span>
            </Link>
            <Link href="/faq" passHref>
              <span className="hover:text-purple-300 transition-colors duration-300">FAQ</span>
            </Link>
            <Link href="/support" passHref>
              <button className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${isScrolled ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-white text-purple-700 hover:bg-gray-100'}`}>
                Popieram
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/mechanism" passHref>
                <span className="hover:text-purple-600 transition-colors duration-300 py-2" onClick={() => setIsMobileMenuOpen(false)}>Mechanizm</span>
              </Link>
              <Link href="/benefits" passHref>
                <span className="hover:text-purple-600 transition-colors duration-300 py-2" onClick={() => setIsMobileMenuOpen(false)}>Korzyści</span>
              </Link>
              <Link href="/comparison" passHref>
                <span className="hover:text-purple-600 transition-colors duration-300 py-2" onClick={() => setIsMobileMenuOpen(false)}>Porównanie</span>
              </Link>
              <Link href="/faq" passHref>
                <span className="hover:text-purple-600 transition-colors duration-300 py-2" onClick={() => setIsMobileMenuOpen(false)}>FAQ</span>
              </Link>
              <Link href="/support" passHref>
                <button className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-lg font-medium transition-colors duration-300 w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  Popieram
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}