'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Users,
  TrendingUp,
  Award,
  Clock,
  HeartHandshake,
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified Listings',
    description:
      'Every property undergoes rigorous verification to ensure authenticity and legal compliance.',
  },
  {
    icon: Users,
    title: 'Expert Agents',
    description:
      'Work with licensed professionals who have deep knowledge of local markets.',
  },
  {
    icon: TrendingUp,
    title: 'Market Insights',
    description:
      'Access real-time data and trends to make informed investment decisions.',
  },
  {
    icon: Award,
    title: '15 Years Excellence',
    description:
      'Award-winning service recognized across the real estate industry.',
  },
  {
    icon: Clock,
    title: 'Fast Transactions',
    description:
      'Streamlined processes ensure quick and hassle-free property transactions.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-First',
    description:
      'Your satisfaction is our priority. We are with you every step of the way.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)',
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
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
            className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-6 py-2 backdrop-blur-sm"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Why Choose Us
            </span>
          </motion.div>
          <h2 className="mb-4 text-white">Why Choose Nestcraft</h2>
          <p className="mx-auto max-w-2xl text-lg text-paper/90">
            Most trusted real estate platform, combining technology with
            personal service
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 shadow-soft backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/20 hover:shadow-soft-lg">
                  
                  {/* Gradient shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
                  </div>

                  <div className="relative">
                    {/* Icon container with glass effect */}
                    <motion.div
                      className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/20 group-hover:scale-110"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-8 w-8 text-white transition-colors group-hover:text-accent" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="mb-3 text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-paper/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent-light"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl border-2 border-accent bg-accent px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl"
          >
            Explore All Properties
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}