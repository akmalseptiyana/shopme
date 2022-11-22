import clsx from "clsx";
import Image from "next/image";

export function CardMedia({ image, alt, width, height, className }) {
  return (
    <figure className={clsx("relative", width, height)}>
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "contain" }}
        className={className}
      />
    </figure>
  );
}
