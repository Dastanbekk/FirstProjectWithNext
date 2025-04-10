import { Plus } from "lucide-react";
import React from "react";

const FAQ = () => {
  return (
    <div className="h-[80vh] bg-[#F7F7F7] w-full flex justify-center pt-15">
      <div className="w-full">
        <h3 className="font-bold text-center text-2xl mb-5">F. A. Q</h3>

        <div className=" mx-auto flex flex-col gap-4 w-[60%]">
          <div className="flex bg-white w-full justify-between border-gray-200 border rounded-lg px-8 py-4 shadow-lg items-center">
            <p className="font-bold text-center text-md">
              Ayirboshlash siyosati
            </p>
            <Plus />
          </div>
          <div className="flex bg-white w-full justify-between border-gray-200 border rounded-lg px-8 py-4 shadow-lg items-center">
            <p className="font-bold text-center text-md">
              Pulni qaytarish siyosati
            </p>
            <Plus />
          </div>
          <div className="flex bg-white w-full justify-between border-gray-200 border rounded-lg px-8 py-4 shadow-lg items-center">
            <p className="font-bold text-center text-md">
              Veb-sayt vaqt talab qilmoqda, uni qanday yaxshilash kerak?
            </p>
            <Plus />
          </div>
          <div className="flex bg-white w-full justify-between border-gray-200 border rounded-lg px-8 py-4 shadow-lg items-center">
            <p className="font-bold text-center text-md">
              Hisob qaydnomasini qanday yarataman?
            </p>
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
