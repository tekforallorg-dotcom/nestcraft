'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Maximize, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { MockProperty } from '@/lib/mock-data';
import { useRef } from 'react';

interface PropertyCardProps {
  property: MockProperty;
  index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000000) {
      return `₦${(price / 1000000000).toFixed(2)}B`;
    }
    return `₦${(price / 1000000).toFixed(0)}M`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000"
    >
      <Link href={`/properties/${property.id}`}>
        <div className="group overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:shadow-soft-lg">
          <div className="relative h-64 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
            </motion.div>
            {property.badge && (
              <motion.div 
                className="absolute left-4 top-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <Badge variant={property.badge}>
                  {property.badge === 'new'
                    ? 'New Listing'
                    : property.badge === 'featured'
                      ? 'Featured'
                      : 'Price Reduced'}
                </Badge>
              </motion.div>
            )}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </div>

          <div className="p-6">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-xl font-semibold text-primary line-clamp-1">
                {property.title}
              </h3>
            </div>

            <div className="mb-4 flex items-center text-sm text-slate">
              <MapPin className="mr-1 h-4 w-4" />
              {property.location}
            </div>

            <div className="mb-4 flex items-center space-x-4 text-sm text-slate-dark">
              <div className="flex items-center">
                <Bed className="mr-1 h-4 w-4" />
                {property.bedrooms} Beds
              </div>
              <div className="flex items-center">
                <Bath className="mr-1 h-4 w-4" />
                {property.bathrooms} Baths
              </div>
              <div className="flex items-center">
                <Maximize className="mr-1 h-4 w-4" />
                {property.sqm} m²
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-paper pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">
                  {formatPrice(property.price)}
                </div>
                <div className="text-xs text-slate">{property.type}</div>
              </div>
              <motion.button 
                className="rounded-xl bg-accent px-6 py-2 font-semibold text-white transition-colors hover:bg-accent-dark"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}