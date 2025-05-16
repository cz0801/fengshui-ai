import Image from 'next/image';

export default function BlogImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="my-4 w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-sm">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg shadow max-w-full h-auto"
        />
      </div>
      <figcaption className="max-w-sm mt-2 text-sm text-center text-default-500">
        {alt}
      </figcaption>
    </figure>
  );
}