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
import React, { useEffect, useState } from "react";

import HomeProducts, { ProductType } from "..";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  const [data, setData] = useState<ProductType | any>({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://67f74bcb42d6c71cca6499e0.mockapi.io/HilalMart_Products/${id}`);
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [id]);

  console.log(data);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

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
          <span className="text-gray-700">Kokand halva</span>
        </div>
      </div>

      {/* Product Detail */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img
                src={data.imgs}
                alt="Kokand halva"
                width={400}
                height={400}
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-medium">{data.title}</h1>

            <div className="text-2xl font-bold text-green-600">
              {data.price}sum
            </div>

            <div className="space-y-4">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md inline-block">
                In Stock
              </div>

              <div className="flex items-center gap-3">
                <Select defaultValue="1">
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="Qty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
                  Add to cart
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 p-3 rounded-md">
                <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">
                  ℹ️
                </div>
                <div>If package ordered before 11:00 am - 13000 won+</div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-gray-600">Name:</span>
                <span className="col-span-2">Kokand halva</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-gray-600">Weight:</span>
                <span className="col-span-2">250 g</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-gray-600">Ingredients:</span>
                <span className="col-span-2">Wheat flour, vegetable oil</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-gray-600">Expiration:</span>
                <span className="col-span-2">6 months from date (27)</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="text-gray-600">Food certification:</span>
                <span className="col-span-2">Halal certified</span>
              </div>
            </div>

            <div className="space-y-3 pt-4 text-sm text-gray-700">
              <p>
                Please make sure you are prepared to accept the item from the
                courier. The delivery person will call you when they arrive at
                your address.
              </p>
              <p>
                Please fully inspect the product at the time of delivery. If
                there is any damage or the product is not as described, please
                notify us.
              </p>
              <p>
                If you have any questions about the product, please contact us.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="font-medium">Delivery</h3>
              <p className="text-sm text-gray-700">
                Standard delivery in two days
              </p>
              <p className="text-sm text-gray-700">
                It takes about two days from the day of order to receive halva
                from a warehouse in Korea.
              </p>
              <p className="text-sm text-gray-700">
                For direct purchases from Korea, the 14-day waiting period.
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h2 className="text-xl font-medium mb-4">Reviews</h2>
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-500 text-sm">No reviews yet</p>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-xl font-medium mb-6">
            O&apos;xshash mahsulotlar
          </h2>
          <HomeProducts />
        </div>
      </main>
    </div>
  );
}
