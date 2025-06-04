import { ArrowOutward } from "./icons/ArrowOutward";

interface Props {
  text: string;
  href: string;
  className?: string;
}

const ExternalLinkHoverEffect = ({ text, href, className }: Props) => {
  return (
    <div className="flex gap-4 group">
      <a className={`transition-transform duration-300 group-hover:font-bold group-hover:scale-120 ${className}`} href={href}>{text}</a>
      <div className="mt-1 opacity-0 scale-0 origin-bottom-left transition-transform duration-400 group-hover:opacity-100 group-hover:scale-100">
        <ArrowOutward className="text-blackish h-6 w-6" />
      </div>
    </div>
  );
};

export default ExternalLinkHoverEffect;
