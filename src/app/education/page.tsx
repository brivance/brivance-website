'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import Image from 'next/image';
import { useRef } from 'react';

export default function Education() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <>
      <div className="text-center">
        <p className="mt-24 text-5xl mb-16">Education</p>
        <p className="text-3xl mb-3">BRIGHAM YOUNG UNIVERSITY</p>
        <div className="mx-32">
          <div className="w-full h-[55vh] relative overflow-hidden shadow-lg">
            <motion.div style={{ y }} className="h-[70vh] w-full">
              <Image
                src="/education/byu-3.jpg"
                alt="byu"
                layout="fill"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        <p className="text-3xl mt-6">Bachelor&apos;s in Computer Science with a Data Science Emphasis</p>
        <p className="text-2xl mt-1">Minor in Mathematics</p>
        <p className="mt-1"><em>September 2019-June 2024</em></p>
      </div>
    </>
  );
}
