'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Home } from 'lucide-react';
import { mockNeighborhoods } from '@/lib/mock-data';

export function Neighborhoods() {
  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Explore Prime Neighborhoods</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate">
            Discover Nigeria's most sought-after residential areas, each with
            its unique character and lifestyle
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mockNeighborhoods.map((neighborhood, index) => (
            <motion.div
              key={neighborhood.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/neighborhoods/${neighborhood.name.toLowerCase().replace(' ', '-')}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:shadow-soft-lg">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={neighborhood.image}
                      alt={neighborhood.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="mb-1 text-xl font-semibold text-white">
                        {neighborhood.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="mb-4 text-sm text-slate line-clamp-2">
                      {neighborhood.description}
                    </p>

                    <div className="mb-4 flex items-center justify-between text-sm">
                      <div className="flex items-center text-slate-dark">
                        <Home className="mr-1 h-4 w-4" />
                        {neighborhood.properties} Properties
                      </div>
                      <div className="font-semibold text-primary">
                        Avg. {neighborhood.avgPrice}
                      </div>
                    </div>

                    <div className="flex items-center text-sm font-semibold text-accent">
                      Explore Area
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}