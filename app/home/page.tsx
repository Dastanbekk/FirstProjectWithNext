import { ChevronRightIcon } from "lucide-react";
import React from "react";
import SwiperHome from "../components/home-children/swiper";
import HomeProducts from "../products";

const Home = () => {
  return (
    <div className="max-w-[1840px] mx-auto w-full">
      <div className="grid grid-cols-[20%_minmax(80%,_1fr)]">
        <div className="flex flex-col ">
          <p className="flex items-center justify-between px-7 py-4 hover:bg-gray-200 cursor-pointer">
            Ozbekistonga yetkazish <ChevronRightIcon />{" "}
          </p>
          <p className="flex items-center justify-between px-7 py-4 hover:bg-gray-200 cursor-pointer">
            Gosht va Baliq <ChevronRightIcon />{" "}
          </p>
          <p className="flex items-center justify-between px-7 py-4 hover:bg-gray-200 cursor-pointer">
            Asosiy oziq-ovqatlar <ChevronRightIcon />{" "}
          </p>
          <p className="flex items-center justify-between px-7 py-4 hover:bg-gray-200 cursor-pointer">
            Tayyor oziq-ovqatlar <ChevronRightIcon />{" "}
          </p>
          <p className="flex items-center justify-between px-7 py-4 hover:bg-gray-200 cursor-pointer">
            Ichimliklar <ChevronRightIcon />{" "}
          </p>
          <p className="flex items-center justify-between px-7 py-4 hover:bg-gray-200 cursor-pointer">
            Mobil telefon va kompyuter... <ChevronRightIcon />{" "}
          </p>
          <p className="flex items-center justify-between px-7 py-4 hover:bg-gray-200 cursor-pointer">
            Gozallik & Soglik <ChevronRightIcon />{" "}
          </p>
          <p className="flex items-center justify-between px-7 py-4 hover:bg-gray-200 cursor-pointer">
            Oilaviy dokon <ChevronRightIcon />{" "}
          </p>
          <p className="flex items-center justify-between px-7 py-4 hover:bg-gray-200 cursor-pointer">
            Kitoblar <ChevronRightIcon />{" "}
          </p>
          <p className="flex items-center justify-between px-7 py-4 hover:bg-gray-200 cursor-pointer">
            Shirinliklar <ChevronRightIcon />{" "}
          </p>
        </div>
        <div className="bg-[#F7F7F7]">
          <div className="page_container">
            <SwiperHome />
            <HomeProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
