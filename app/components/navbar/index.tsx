import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "@images/svg/logo.svg";
import search from "@images/svg/search.svg";
import operator from "@images/svg/operator.svg";
import user from "@images/svg/user.svg";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="page_container ">
        <div className="flex items-center  justify-between py-5 gap-5">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" />
          </Link>
          <form className="border border-[#019E7F] p-2 flex items-center rounded-lg w-[50%]">
            <Image src={search} alt="search" />
            <input
              type="text"
              placeholder="Qidirish"
              className="border-none outline-none px-2"
            />
          </form>
          <Link
            href={"/faq"}
            className="flex items-center gap-1 underline"
          >
            <Image src={operator} alt="user" /> Boglanish
          </Link>
          <button className="border cursor-pointer py-2 px-4 rounded-lg text-[#019E7F] border-[#019E7F]">
            Payme
          </button>
          <select className="border border-gray-300 p-2 cursor-pointer">
            <option value="Uz / UZS">Uz / UZS </option>
            <option value="Uz / UZS">Uz / UZS </option>
            <option value="Uz / UZS">Uz / UZS </option>
          </select>
          <Link className="cursor-pointer" href={"/login"}>
            <Image src={user} alt="user" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
