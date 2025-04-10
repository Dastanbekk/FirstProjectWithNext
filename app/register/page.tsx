"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-[#F7F7F7]">
      <div className="page_container">
        <div className="flex justify-center  w-full h-screen pt-15">
          <div>
            <h3 className="font-bold text-center text-2xl mb-8">
              Buyurtmani rasmiylashtirish
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              <div className="bg-white shadow-md rounded-md  p-10">
                <h2 className="text-center text-lg font-semibold text-gray-800">
                  Tizimga kirish
                </h2>
                <p className="text-center text-sm text-gray-600 mb-4">
                  Telefon raqamingiz va parolingiz bilan kiring.
                </p>

                <div className="space-y-4">
                  {/* Telefon */}
                  <input
                    type="text"
                    placeholder="Ismingiz"
                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-green-300"
                  />
                  <input
                    type="text"
                    placeholder="Emailingiz "
                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-green-300"
                  />
                  <input
                    type="text"
                    placeholder="010 6534 2345"
                    className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-green-300"
                  />

                  {/* Parol */}
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Parolingiz"
                      className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-green-300 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-2 right-3 text-gray-500"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {/* Button */}
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold transition">
                    Kirish
                  </button>

                  {/* Ro'yxatdan o'tish */}
                  <p className="text-center text-sm text-gray-600">
                    Akkountingiz yo‘qmi?{" "}
                    <Link
                      href={"/register"}
                      className="text-green-600 font-semibold hover:underline"
                    >
                      Ro‘yxatdan o‘ting!
                    </Link>
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-md p-10">
                <h2 className="text-center text-lg font-semibold text-gray-800">
                  Mehmon foydalanuvchi
                </h2>
                <p className="text-sm text-red-600 font-medium mt-2">
                  Eslatma:{" "}
                  <span className="text-gray-700 font-normal">
                    Mehmon foydalanuvchilar buyurtmani kuzatish va ular haqidagi
                    ma’lumotlarni saqlash imkoniyatiga ega emas!
                  </span>
                </p>
                <p className="text-sm text-gray-700 mt-4">
                  Davom etish tugmasini bosib siz buyurtmani mehmon
                  foydalanuvchi sifatida rasmiylashtirasiz.
                </p>
                <button className="mt-6 w-full border border-green-600 text-green-600 hover:bg-green-50 py-2 rounded-md text-sm font-semibold transition">
                  Davom etish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
