// components/SwiperBanner.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Phone } from "lucide-react";

const SwiperHome = () => {
  return (
    <div className="w-full px-4 md:px-8 mt-4">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={true}
        className="rounded-lg bg-[#C4EAD2] p-6 "
      >
        <SwiperSlide className="!p-10">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-lg md:text-2xl font-bold max-w-[572px] px-10">
              Yangi royxatdan otgan mijozlarga ilk buyurtma bepul yetkazib
              beriladi!
            </h2>
            <div className="flex items-center gap-2 text-sm px-10">
              <Phone size={16} />
              <span>1833-2178</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="pt-10 px-10 pb-20">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-lg md:text-2xl font-bold max-w-[572px] px-10">
              Yangi royxatdan otgan mijozlarga ilk buyurtma bepul yetkazib
              beriladi!
            </h2>
            <div className="flex items-center gap-2 text-sm px-10">
              <Phone size={16} />
              <span>1833-2178</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
