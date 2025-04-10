"use client";

import { ProductType } from "@/app/@types";
import React, { useEffect, useState } from "react";

const HomeProducts = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [counterStates, setCounterStates] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://67f74bcb42d6c71cca6499e0.mockapi.io/HilalMart_Products"
      );
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  const handleAddClick = (id: string) => {
    setCounterStates((prev) => ({ ...prev, [id]: 1 }));
  };

  const handleIncrease = (id: string) => {
    setCounterStates((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleDecrease = (id: string) => {
    setCounterStates((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 1) - 1),
    }));
  };

  return (
    <div className="py-7">
      <h3 className="font-bold text-[22px] mb-4">Yangi</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((value: ProductType) => (
          <div key={value.id} className="bg-white">
            <img
              className="max-w-[262px] max-h-[262px]"
              src={value.imgs}
              alt="product-image"
            />
            <div className="flex flex-col w-full gap-2 p-5">
              <p>{value.title}</p>
              <div className="flex items-center gap-3">
                <p>{value.price}</p>
                <del className="text-gray-300">{value.discount_price}</del>
              </div>

              <div className="w-full">
                {counterStates[value.id] === undefined ||
                counterStates[value.id] === 0 ? (
                  <button
                    onClick={() => handleAddClick(value.id)}
                    className="bg-[#F7F7F7] cursor-pointer w-full rounded-lg text-center  py-2 text-black"
                  >
                    {value.btn}
                  </button>
                ) : (
                  <div className="bg-[#009879] flex justify-between items-center w-full px-4 py-2 rounded-lg text-white font-semibold ">
                    <button
                      className="cursor-pointer"
                      onClick={() => handleDecrease(value.id)}
                    >
                      -
                    </button>
                    <span>{counterStates[value.id]}</span>
                    <button
                      className="cursor-pointer"
                      onClick={() => handleIncrease(value.id)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
