// components/Footer.tsx
import Image from "next/image";
import logo from "@images/svg/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-700 ">
      <div className="page_container">
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo va ilovalar */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Image src={logo} alt="HilalMart Logo" />
            </div>
            <p className="font-bold text-[18px]">HilalMart © 2021</p>
            <p>Barcha huquqlar kafolatlangan</p>
            <div className="flex space-x-3 mt-3">
              <button className="bg-black text-white py-1.5 px-4 font-bold rounded-md">
                Google play
              </button>
              <button className="bg-black text-white py-1.5 px-4 font-bold rounded-md">
                App Store
              </button>
            </div>
          </div>

          {/* Foydali havolalar */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Foydali havolalar</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Yordam kerakmi?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Foydalanish shartlari
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Maxfiylik siyosati
                </a>
              </li>
            </ul>
          </div>

          {/* Biz haqimizda */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Biz haqimizda</h3>
            <p>
              <strong>Manzil:</strong> #214, G-dong, Lotte castle, 347 Jongno,
              Jongno-gu, Seoul, 03113, Crescent Trade ltd
            </p>
            <p>
              <strong>Korxona nomi:</strong> Crescent trade llc
            </p>
            <p>
              <strong>Korxona rahbari:</strong> DADAJONOV RAKHIMJON
            </p>
            <p>
              <strong>Registratsiya raqami:</strong> 433-62-00377
            </p>
            <p>
              <strong>Telefon raqam:</strong> 1833-2178 | 02-3670-6808
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
