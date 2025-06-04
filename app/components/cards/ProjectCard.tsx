'use client';

import { ArrowOutward } from "../../../public/icons/ArrowOutward";
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  image?: string;
  href?: string;
}

const ProjectCard = ({ title, description, image, href }: Props) => {
  return (
    <a href={href} >
      <div className="mt-5 flex flex-col gap-4 items-center text-center hover:transition-transform duration-300 hover:scale-110">
        {image && <Image src={image} alt="image" width={250} height={250} />}
        <div className="flex items-center gap-2 mt-2">
          <p className="text-xl font-bold">{title}</p>
          <ArrowOutward className="h-5 w-5" />
        </div>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
