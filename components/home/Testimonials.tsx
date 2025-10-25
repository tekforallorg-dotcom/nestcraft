'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Adebayo Williams',
    role: 'Property Investor',
    image: 'https://i.pravatar.cc/150?img=12',
    content:
      'Nestcraft helped me find the perfect investment property in Lekki. Their market insights and professional guidance made the entire process seamless.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Chioma Okonkwo',
    role: 'First-Time Buyer',
    image: 'https://i.pravatar.cc/150?img=45',
    content:
      'As a first-time homebuyer, I was nervous about the process. The team at Nestcraft guided me every step of the way. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ibrahim Mohammed',
    role: 'Real Estate Developer',
    image: 'https://i.pravatar.cc/150?img=33',
    content:
      'Outstanding service and attention to detail. Nestcraft understands the Nigerian real estate market better than anyone else.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(180deg, rgba(248, 246, 242, 0.4) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(248, 246, 242, 0.4) 100%)' }}>
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-20 top-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-20 bottom-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-accent/20 bg-accent/5 px-6 py-2 backdrop-blur-sm"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Testimonials
            </span>
          </motion.div>
          <h2 className="mb-4">Client Success Stories</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate">
            Hear from our satisfied clients who found their dream properties
            with Nestcraft
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-primary/10 bg-white/70 p-8 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-white/90 hover:shadow-soft-lg">
                {/* Quote icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="absolute right-6 top-6 opacity-10"
                >
                  <Quote className="h-16 w-16 text-accent" />
                </motion.div>

                <div className="relative">
                  {/* Rating */}
                  <div className="mb-4 flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + 0.3 + i * 0.05,
                        }}
                      >
                        <Star className="h-5 w-5 fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="mb-6 text-slate leading-relaxed">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-accent/20 transition-all group-hover:ring-accent/40"
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-accent"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl border-2 border-accent bg-transparent px-8 py-3 font-semibold text-accent transition-all hover:bg-accent hover:text-white"
          >
            View More Testimonials
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}