import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-dark text-white">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-white">N</span>
              </div>
              <span className="font-display text-xl font-semibold">Nestcraft</span>
            </div>
            <p className="mb-6 text-sm text-slate-300">
              Premier real estate platform connecting you with exceptional properties.
            </p>
            <div className="flex space-x-4">
              <span className="text-slate-300 transition-colors hover:text-accent cursor-default" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </span>
              <span className="text-slate-300 transition-colors hover:text-accent cursor-default" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </span>
              <span className="text-slate-300 transition-colors hover:text-accent cursor-default" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </span>
              <span className="text-slate-300 transition-colors hover:text-accent cursor-default" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Properties</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="text-slate-300 cursor-default">Buy Property</span></li>
              <li><span className="text-slate-300 cursor-default">Rent Property</span></li>
              <li><span className="text-slate-300 cursor-default">Shortlet</span></li>
              <li><span className="text-slate-300 cursor-default">Neighborhoods</span></li>
              <li><span className="text-slate-300 cursor-default">Featured Listings</span></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="text-slate-300 cursor-default">About Us</span></li>
              <li><span className="text-slate-300 cursor-default">Our Team</span></li>
              <li><span className="text-slate-300 cursor-default">Careers</span></li>
              <li><span className="text-slate-300 cursor-default">Blog</span></li>
              <li><span className="text-slate-300 cursor-default">Contact</span></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-slate-300">123 Adeola Odeku St, Victoria Island, Lagos</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-slate-300 cursor-default">+234 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-slate-300 cursor-default">info@nestcraft.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="mb-2 text-sm font-semibold text-white">Newsletter</h5>
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  disabled
                  className="flex-1 rounded-lg border-0 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent cursor-not-allowed" 
                />
                <button 
                  type="button"
                  disabled
                  className="whitespace-nowrap rounded-lg bg-accent px-4 py-1 text-sm font-semibold text-white transition-colors hover:bg-accent-dark cursor-not-allowed opacity-70"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-slate-400 md:flex-row md:space-y-0">
            <div>© 2025 Nestcraft. All rights reserved.</div>
            <div className="flex space-x-6">
              <span className="cursor-default">Privacy Policy</span>
              <span className="cursor-default">Terms of Service</span>
              <span className="cursor-default">Cookies</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}