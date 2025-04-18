import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  image: string;
  href?: string;
}

const FunLinkCard = ({ title, description, image, href }: Props) => {
  return (
    <a href={href} className="flex flex-col gap-3 justify-between items-center border border-gray-300 rounded-sm shadow-lg transition-transform duration-300 hover:scale-110">
      <p className="text-xl font-bold mt-2">{title}</p>
      <p className="mx-5">{description}</p>
      <div className="mb-5"><Image src={image} alt="image" width={250} height={250} /></div>
    </a>
  );
};

export default FunLinkCard;
