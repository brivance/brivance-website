import Image from "next/image";

type ImageHoverBlurProps = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
  title?: string;
};
export const ImageHoverBlur = ({
  src,
  width,
  height,
  alt,
  className,
  title,
}: ImageHoverBlurProps) => {
  return (
    <div className={`relative group shadow-2xl`} style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src={src}
        alt={alt ?? ""}
        width={width}
        height={height}
        className={`shadow-2xl transition duration-100 ease-in-out group-hover:blur-xs group-hover:scale-105 ${className}`}
      />
      <div className={`text-center absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-2xl font-bold opacity-0 ease-in-out duration-100 group-hover:opacity-100`}>
        {title ?? ""}
      </div>
    </div>
  );
};