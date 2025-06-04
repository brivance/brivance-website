'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import FunLinkCard from '../components/cards/FunLinkCard';
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
      <div className="text-center pt-14">
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
      <div className="flex flex-col items-center mt-40 mb-20 text-xl">
        While I was in school, I worked in a variety of projects. Some of them included...
      </div>
      <div>
        <div className="grid grid-cols-3 gap-6 w-11/12 mb-28 items-center mx-auto">
          <FunLinkCard title="Kanye West Tweets" description="Creating silly websites to learn JavaScript, HTML/CSS, and external API requests" image="/fun-links/kanye-west.jpeg" href="https://oldbrivance.netlify.app/fun-links/kanye-tweets/index.html/" />
          <a href={""} className="flex flex-col gap-4 justify-start items-center border border-gray-300 rounded-sm shadow-lg transition-transform duration-300 hover:scale-110">
            <p className="text-center text-2xl font-bold mt-2">Trained DNN for Image Styling</p>
            <p className="mx-5 text-center">Built and trained a DNN to make normal pictures look weird</p>
            <div className="flex mb-5 mx-3 mt-5">
              <div className="flex flex-col basis-1/2">
                <Image src={"/fun-links/content.png"} alt="image" width={85} height={85} />
                <Image src={"/fun-links/style.png"} alt="image" width={85} height={85} />
              </div>
              <div>
                <Image src={"/fun-links/styled-image.png"} alt="image" width={200} height={200} />
              </div>
            </div>
          </a>
          <a href={""} className="flex flex-col gap-1 justify-start items-center border border-gray-300 rounded-sm shadow-lg transition-transform duration-300 hover:scale-110">
            <p className="text-center text-2xl font-bold mt-2">DDPM</p>
            <p className="mx-5 text-center">Denoising Diffusion Probabilistic Models- take random noise and denoise the images</p>
            <div className="flex mb-5 mx-3 mt-5">
              <div>
                <Image src={"/fun-links/noised.png"} alt="image" width={100} height={100} />

                <Image src={"/fun-links/partially-denoised.png"} alt="image" width={100} height={100} />
              </div>
              <div>
                <Image src={"/fun-links/denoised.png"} alt="image" width={200} height={200} />
              </div>
            </div>
          </a>

        </div>
      </div>
    </>
  );
}
