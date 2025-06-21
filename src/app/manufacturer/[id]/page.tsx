"use client";

import React from "react";
import data from "@/lib/data.json";
import SectionHeader from "@/components/SectionHeader.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button.tsx";
import { ShoppingCart, CheckCircle } from "lucide-react";

// TODO: GenerateStaticParams for when data is fetched
export async function generateStaticParams() {
  const posts = data;

  return posts.map((post) => ({
    id: post.id,
  }));
}

const productData = [0, 1, 2, 3, 4];

const ManufacturerPage = ({ params }: { params: { id: string } }) => {
  const manufacturer = data.find((m) => m.id === params.id);

  if (!manufacturer) {
    return <div>Manufacturer not found</div>;
  }

  return (
    <div className="col-span-12 grid grid-cols-12 gap-6">
      <SectionHeader type="Manufacturer" img={manufacturer.img} name={manufacturer.name}>
        {manufacturer.desc}
      </SectionHeader>

      <div className="col-span-12 lg:col-span-9 space-y-6">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Available Products</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productData.map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>PROD-{String(index + 1).padStart(4, '0')}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Active
                      </span>
                    </TableCell>
                    <TableCell>Warehouse A</TableCell>
                    <TableCell>{new Date().toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Purchase</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerPage;
