import React from "react";
import Image from "next/image";

interface SectionHeaderProps {
  type: string;
  img: string;
  name: string;
  children: React.ReactNode;
}

export default function SectionHeader({ type, img, name, children }: SectionHeaderProps) {
  return (
    <div className="col-span-12 lg:col-span-3 glass-card rounded-xl overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent z-10" />
        <Image
          src={img}
          alt={name}
          width={600}
          height={400}
          className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div>
            <div className="text-sm text-blue-400 mb-2">{type}</div>
            <h2 className="text-2xl font-bold text-white">{name}</h2>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-400 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}
