import React from "react";
import HeaderPic from "../../public/header.jpg";
import Image from "next/image";
import { WalletSelector } from "@/components/aptos/WalletSelector.tsx";

export function Header() {
  return (
    <div className="col-span-12 min-h-[60vh] rounded-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 mix-blend-multiply" />
      <Image
        src={HeaderPic}
        alt={"Header picture"}
        width={1080}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 rounded-xl opacity-60 scale-105 transform hover:scale-110 transition-transform duration-700"
      />
      <div className="relative z-10 p-12 sm:p-24 flex flex-col justify-center items-start h-full max-w-6xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-200">
            AptoSupply: Revolutionizing Supply Chain Management
          </h1>
          <p className="text-lg font-normal max-w-screen-md text-gray-200 leading-relaxed">
            Experience the future of supply chain management powered by Aptos blockchain. 
            Seamlessly connect manufacturers and consumers through a secure, transparent, 
            and decentralized platform.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <WalletSelector />
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium cursor-pointer hover:shadow-lg transition-all duration-300">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
