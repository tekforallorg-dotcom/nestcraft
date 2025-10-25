'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-primary/80 backdrop-blur-sm transition-opacity lg:hidden',
          isOpen
            ? 'opacity-100'
            : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-[280px] bg-white shadow-soft-lg transition-transform duration-300 lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-paper p-6">
            <span className="font-display text-xl font-semibold text-primary">
              Menu
            </span>
            <button
              onClick={onClose}
              className="text-slate-dark hover:text-primary"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-6">
            <div className="space-y-1">
              <Link
                href="/properties"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 font-medium text-slate-dark hover:bg-paper hover:text-primary"
              >
                Properties
              </Link>

              <div className="space-y-1 pl-4">
                <Link
                  href="/neighborhoods/banana-island"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-2 text-sm text-slate hover:bg-paper hover:text-primary"
                >
                  Banana Island
                </Link>
                <Link
                  href="/neighborhoods/maitama"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-2 text-sm text-slate hover:bg-paper hover:text-primary"
                >
                  Maitama
                </Link>
                <Link
                  href="/neighborhoods/ikoyi"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-2 text-sm text-slate hover:bg-paper hover:text-primary"
                >
                  Ikoyi
                </Link>
                <Link
                  href="/neighborhoods/lekki"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-2 text-sm text-slate hover:bg-paper hover:text-primary"
                >
                  Lekki
                </Link>
              </div>

              <Link
                href="/agents"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 font-medium text-slate-dark hover:bg-paper hover:text-primary"
              >
                Our Team
              </Link>

              <Link
                href="/about"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 font-medium text-slate-dark hover:bg-paper hover:text-primary"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 font-medium text-slate-dark hover:bg-paper hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Footer CTAs */}
          <div className="space-y-3 border-t border-paper p-6">
            <Button variant="outline" size="md" className="w-full">
              List Property
            </Button>
            <Button variant="primary" size="md" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}