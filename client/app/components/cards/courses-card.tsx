import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ course }: any) => {
  const { img, title, description, url } = course;

  return (
    <Link href="/">
      <article className="w-72 h-96 mx-auto md:mx-0 border rounded-lg overflow-hidden flex flex-col justify-between shadow-lg shadow-black/10 hover:shadow-xl transition duration-300 hover:translate-y-[2px]">
        <div className="w-full h-2/3 relative">
          {" "}
          <Image
            src={img}
            alt={title}
            width={0}
            height={0}
            className="w-full h-full "
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="p-2 flex flex-col gap-1  h-1/3">
          <h4 className="font-bold">{title}</h4>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
