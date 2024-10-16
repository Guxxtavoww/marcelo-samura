'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

import { email } from '@/data/faq.data';

const phoneNumber = '+55 19 989.507.221';

export function Contact() {
  return (
    <motion.section
      className="w-full text-center space-y-4 flex flex-col pb-10"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }} 
    >
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Contato
      </motion.h2>
      <motion.h3
        className="section-heading !text-2xl"
        initial={{ opacity: 0, y: -50 }} // Start from above
        whileInView={{ opacity: 1, y: 0 }} // Animate into view
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Fale conosco
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link
          href={`tel:${phoneNumber}`}
          className="font-semibold text-3xl hover:underline text-[#a73520]"
        >
          {phoneNumber}
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link
          href={`mailto:${email}`}
          className="font-semibold text-3xl hover:underline text-[#264653]"
        >
          {email}
        </Link>
      </motion.div>
    </motion.section>
  );
}
