"use client";

import { useEffect, useState } from "react";

import { ArrowBackward } from "../components/icons/ArrowBackward";
import { ArrowForward } from "../components/icons/ArrowForward";
import ProjectCard from "../components/cards/ProjectCard";
import { motion } from "framer-motion";

const realProjects = [
  {
    title: "Chord Generator",
    description:
      "A transformer, trained on musical chord progressions of 1,000 songs. It's purpose is to give you chord sequence suggestions.",
    image: "/projects/musical_notes.jpg",
    href: "https://brivance.github.io/projects/chord-gen/",
  },
  {
    title: "CAPTCHA Recognition",
    description:
      "A Resnet50 trained on captcha images and texts to pass self-made CAPTCHA tests.",
    image: "/projects/traffic_light.jpg",
    href: "https://github.com/brivance/captcha_recognition/",
  },
  {
    title: "Counter Sweeper",
    description:
      "The car that cleans your counters so you don't have to.",
    image: "/projects/sweeper_car_assembly.jpg",
    href: "https://brivance.github.io/projects/counter-sweeper/",
  },
  {
    title: "Maternal Health Complications",
    description:
      "A Linear Regression model and KNN model trained on ER patients records and demographics. It predicts whether or not a patient walking in to the ER is there for maternal complications.",
    image: "/projects/hospital.jpg",
    href: "https://brivance.github.io/projects/maternal-health-comp/",
  },
];

const projects = [
  realProjects[realProjects.length - 1],
  ...realProjects,
  realProjects[0],
];

export default function Projects() {
  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);

  const handlePrev = () => setIndex((prev) => prev - 1);
  const handleNext = () => setIndex((prev) => prev + 1);

  useEffect(() => {
    if (index === 0) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(projects.length - 2);
      }, 300);
    } else if (index === projects.length - 1) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(1);
      }, 300);
    } else {
      setAnimate(true);
    }
  }, [index]);

  return (
    <div className="w-full flex flex-col items-center">

      <div className="relative mt-14 w-full max-w-5xl flex items-center justify-center">
        <button onClick={handlePrev} className="absolute left-0 z-10 p-2">
          <ArrowBackward className="text-blackish h-8 w-8" />
        </button>

        <div className="w-full overflow-hidden flex justify-center">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={animate ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
            style={{ width: `${projects.length * 100}%` }}
          >
            {projects.map((project, i) => (
              <div key={i} className="w-full flex-shrink-0 flex justify-center px-4">
                <div className="w-1/2 mb-32">
                  <ProjectCard {...project} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <button onClick={handleNext} className="absolute right-0 z-10 p-2">
          <ArrowForward className="text-blackish h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
