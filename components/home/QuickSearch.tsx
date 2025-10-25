'use client';

import { useState } from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export function QuickSearch() {
  const [activeTab, setActiveTab] = useState('buy');
  const [formData, setFormData] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality will be implemented later
    console.log('Search submitted:', formData);
  };

  return (
    <div className="mx-auto max-w-5xl">
      {/* Tab buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex justify-center space-x-2 rounded-full bg-white/15 p-1.5 backdrop-blur-md"
      >
        {['buy', 'rent', 'shortlet'].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full px-8 py-2.5 text-sm font-semibold capitalize transition-all ${
              activeTab === tab
                ? 'bg-accent text-white shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      {/* Search form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSearch}
        className="rounded-2xl bg-white/90 p-3 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid gap-3 md:grid-cols-4">
          {/* Location Input */}
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            <input
              type="text"
              placeholder="Location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className="h-12 w-full rounded-xl border-2 border-transparent bg-paper pl-10 pr-4 text-sm font-medium transition-all placeholder:text-slate focus:border-accent focus:bg-white focus:outline-none"
            />
          </div>

          {/* Property Type */}
          <div className="relative">
            <Home className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            <select
              value={formData.propertyType}
              onChange={(e) =>
                setFormData({ ...formData, propertyType: e.target.value })
              }
              className="h-12 w-full appearance-none rounded-xl border-2 border-transparent bg-paper pl-10 pr-4 text-sm font-medium transition-all focus:border-accent focus:bg-white focus:outline-none"
            >
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="duplex">Duplex</option>
              <option value="land">Land</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="relative">
            <DollarSign className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            <select
              value={formData.priceRange}
              onChange={(e) =>
                setFormData({ ...formData, priceRange: e.target.value })
              }
              className="h-12 w-full appearance-none rounded-xl border-2 border-transparent bg-paper pl-10 pr-4 text-sm font-medium transition-all focus:border-accent focus:bg-white focus:outline-none"
            >
              <option value="">Price Range</option>
              <option value="0-50m">Under ₦50M</option>
              <option value="50m-100m">₦50M - ₦100M</option>
              <option value="100m-200m">₦100M - ₦200M</option>
              <option value="200m-500m">₦200M - ₦500M</option>
              <option value="500m-1b">₦500M - ₦1B</option>
              <option value="1b+">Above ₦1B</option>
            </select>
          </div>

          {/* Search Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-12 items-center justify-center space-x-2 rounded-xl bg-accent px-6 font-semibold text-white shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl"
          >
            <Search className="h-4 w-4" />
            <span className="text-sm">Search</span>
          </motion.button>
        </div>
      </motion.form>

      {/* Quick filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 flex flex-wrap justify-center gap-2"
      >
        {[
          'Banana Island',
          'Ikoyi',
          'Lekki Phase 1',
          'Victoria Island',
          'Maitama',
        ].map((area) => (
          <button
            key={area}
            onClick={(e) => {
              e.preventDefault();
              setFormData({ ...formData, location: area });
            }}
            className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50"
          >
            {area}
          </button>
        ))}
      </motion.div>
    </div>
  );
}