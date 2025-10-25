'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 shadow-soft backdrop-blur-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-white">N</span>
              </div>
              <span
                className={cn(
                  'font-display text-xl font-semibold transition-colors',
                  isScrolled ? 'text-primary' : 'text-white'
                )}
              >
                Nestcraft
              </span>
            </Link>

            <div className="hidden items-center space-x-8 lg:flex">
              <Link
                href="/properties"
                className={cn(
                  'font-medium transition-colors hover:text-accent',
                  isScrolled ? 'text-slate-dark' : 'text-white'
                )}
              >
                Properties
              </Link>

              <div className="group relative">
                <button
                  className={cn(
                    'flex items-center space-x-1 font-medium transition-colors hover:text-accent',
                    isScrolled ? 'text-slate-dark' : 'text-white'
                  )}
                >
                  <span>Locations</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible absolute left-0 top-full mt-2 w-48 rounded-xl bg-white p-2 opacity-0 shadow-soft-lg transition-all group-hover:visible group-hover:opacity-100">
                  <Link
                    href="/neighborhoods/banana-island"
                    className="block rounded-lg px-4 py-2 text-sm text-slate-dark hover:bg-paper"
                  >
                    Banana Island
                  </Link>
                  <Link
                    href="/neighborhoods/maitama"
                    className="block rounded-lg px-4 py-2 text-sm text-slate-dark hover:bg-paper"
                  >
                    Maitama
                  </Link>
                  <Link
                    href="/neighborhoods/ikoyi"
                    className="block rounded-lg px-4 py-2 text-sm text-slate-dark hover:bg-paper"
                  >
                    Ikoyi
                  </Link>
                  <Link
                    href="/neighborhoods/lekki"
                    className="block rounded-lg px-4 py-2 text-sm text-slate-dark hover:bg-paper"
                  >
                    Lekki
                  </Link>
                </div>
              </div>

              <Link
                href="/agents"
                className={cn(
                  'font-medium transition-colors hover:text-accent',
                  isScrolled ? 'text-slate-dark' : 'text-white'
                )}
              >
                Our Team
              </Link>

              <Link
                href="/about"
                className={cn(
                  'font-medium transition-colors hover:text-accent',
                  isScrolled ? 'text-slate-dark' : 'text-white'
                )}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={cn(
                  'font-medium transition-colors hover:text-accent',
                  isScrolled ? 'text-slate-dark' : 'text-white'
                )}
              >
                Contact
              </Link>
            </div>

            <div className="hidden items-center space-x-4 lg:flex">
              <Button variant={isScrolled ? 'outline' : 'ghost'} size="sm">
                List Property
              </Button>
              <Button variant={isScrolled ? 'primary' : 'accent'} size="sm">
                Get Started
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden',
                isScrolled ? 'text-primary' : 'text-white'
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}