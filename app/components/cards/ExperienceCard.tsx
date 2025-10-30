'use client';

import Image from 'next/image';
import { KeyboardArrowDown } from '../../../public/icons/KeyboardArrowDown';
import { KeyboardArrowUp } from '../../../public/icons/KeyboardArrowUp';
import { useState } from 'react';

interface Props {
  title: string;
  subtitle?: string;
  description: string;
  moreInformation?: string | React.ReactNode;
  image?: string;
}

const ExperienceCard = ({ title, subtitle, description, moreInformation, image }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border border-gray-100 rounded-lg p-4 shadow-lg"
    >
      <div className="flex flex-col md:flex-row w-full gap-8 items-center">
        <div className="sm:w-full md:flex-shrink-0">
          {image && (
            <Image
              src={image}
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              className="max-w-96 w-full md:w-60 h-auto"
            />
          )}        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2 justify-between">
            <div className="flex flex-row justify-between items-center">
              <div className="text-xl font-bold mt-2">{title}</div>
              <button
                className="flex items-start"
                onClick={() => setIsOpen(prev => !prev)}
              >
                {isOpen ? <KeyboardArrowUp className="text-blackish h-8 w-8" /> : <KeyboardArrowDown className="h-8 w-8" />}
              </button>
            </div>
            {subtitle && <div className="text-sm">{subtitle}</div>}
            <div>{description}</div>
          </div>
        </div>
      </div>
      {
        moreInformation &&
        <div
          className={`transition-all duration-700 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="mt-4 text-gray-700 flex justify-start overflow-visible">
            {moreInformation}
          </div>
        </div>
      }
    </div >
  );
};

export default ExperienceCard;
