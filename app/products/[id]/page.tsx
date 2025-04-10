"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

import HomeProducts, { ProductType } from "..";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://67f74bcb42d6c71cca6499e0.mockapi.io/HilalMart_Products/${params.id}`
      );
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [params.id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">
            Home page
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/" className="hover:text-green-600">
            Products
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-700">{data.title}</span>
        </div>
      </div>

      {/* Product Info va boshqa qismlar */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img
                src={data.imgs}
                alt={data.title}
                width={400}
                height={400}
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-medium">{data.title}</h1>
            <div className="text-2xl font-bold text-green-600">
              {data.price}sum
            </div>
            {/* ...qolgan info qismlar */}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-xl font-medium mb-6">O'xshash mahsulotlar</h2>
          <HomeProducts />
        </div>
      </main>
    </div>
  );
}
