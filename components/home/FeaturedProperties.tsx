'use client';

import { mockProperties } from '@/lib/mock-data';
import { PropertyCard } from './PropertyCard';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function FeaturedProperties() {
  return (
    <section className="bg-paper py-20">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Featured Properties</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate">
            Handpicked selection of our most exceptional properties across
            Nigeria's premier locations
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            View All Properties
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}