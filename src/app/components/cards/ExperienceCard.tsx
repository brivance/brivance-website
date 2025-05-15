'use client';

import Image from 'next/image';
import { KeyboardArrowDown } from '@components/icons/KeyboardArrowDown';
import { KeyboardArrowUp } from '@components/icons/KeyboardArrowUp';
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
    <a
      className="p-8 flex flex-col border border-gray-300 rounded-sm shadow-lg"
      onClick={() => setIsOpen(prev => !prev)}
    >
      <div className="flex justify-between w-full gap-8">
        <div className="flex justify-start gap-6">
          {image && <Image src={image} alt="image" width={250} height={250} />}
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold mt-2">{title}</div>
            {subtitle && <div className="text-sm">{subtitle}</div>}
            <div>{description}</div>
          </div>
        </div>
        {moreInformation &&
          <div>
            {isOpen ? <KeyboardArrowUp className="text-blackish h-8 w-8" /> : <KeyboardArrowDown className="text-blackish h-8 w-8" />}
          </div>
        }
      </div>
      {moreInformation &&
        <div
          className={`transition-all duration-700 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="mt-4 text-gray-700 flex justify-start overflow-visible">
            {moreInformation}
          </div>
        </div>
      }
    </a>
  );
};

export default ExperienceCard;
