"use client";
import Image from "next/image";
import React from "react";

/**
 * This component refer form Aceternity UI
 *
 * Source: [https://ui.aceternity.com/components/animated-tooltip by Manu Arora]
 *
 */

export const UserImage = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  return (
    <>
      {items.map((item, idx) => (
        <div className="-mr-4  relative group" key={item.name}>
          <Image
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full size-10 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};
