"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import manufacturers from "@/lib/data.json";

function App() {
  return (
    <div className="px-5 col-span-12 lg:col-span-9 py-12">
      <div className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-100 to-purple-200 bg-clip-text text-transparent">
        Featured Manufacturers
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {manufacturers.map((manufacturer) => (
          <div
            key={manufacturer.id}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={manufacturer.img}
                alt={manufacturer.name}
                width={400}
                height={300}
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{manufacturer.name}</h3>
            <p className="text-gray-400 mb-4 line-clamp-2">{manufacturer.desc}</p>
            <Link href={`/manufacturer/${manufacturer.id}`}>
              <div className="inline-flex items-center text-blue-400 hover:text-blue-300 hover:translate-x-1 transition-transform duration-200">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
