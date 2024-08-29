import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../plugins/changeLang";
import UZ from "../../assets/flags/uz.avif"
import EN from "../../assets/flags/en.jpg"
import RU from "../../assets/flags/ru.png"
const Navbar = () => {
    const {t} = useTranslation()
  const links = [
    { name: t("navbar.link1"), path: "/" },
    { name: t("navbar.link2"), path: "/about" },
    { name: t("navbar.link3"), path: "/brands" },
    { name: t("navbar.link4"), path: "/contact" },
  ];
  const switchLang = (value) => {
    changeLanguage(value)
  }
  const location = useLocation().pathname
  const Flags = [
    {img: UZ, value: "uz"},
    {img: EN, value: "en"},
    {img: RU, value: "ru"}
  ]
  return (
    <nav className="w-[100%] px-[20px] py-[10px] bg-violet-700 flex justify-center items-center">
      <div className="max-w-[1400px] w-[100%] flex justify-between items-center">
        <Link to={"/"} className=" text-[40px] text-white no-underline">
          F
        </Link>
        <ul className="flex items-center gap-[5px] mb-0 bg-white p-[2px] rounded-full">
          {links?.map((item, index) => {
            return (
              <li key={index} className={`${location === item?.path ? "bg-violet-700 text-white" : " text-violet-700"} hover:text-white hover:bg-violet-700 ease-in-out duration-300 relative w-[100%] px-[30px] py-[10px] rounded-full`}>
                <Link to={item?.path} className="no-underline font-[500]">{item?.name}</Link>
                <span className="h-[2px] w-[0] group-hover:w-[100%] ease-in-out duration-200 bg-white block"></span>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center gap-[20px]">
            <div className="flex items-center gap-[10px]">
              {
                Flags?.map((item,index)=> {
                  return <button key={index} onClick={()=>switchLang(item?.value)} className="h-[30px] w-[30px]">
                    <img src={item?.img} alt={item?.value} className="w-[100%] h-[100%] rounded-full"/>
                  </button>
                })
              }
            </div>
            <button className="text-[24px] text-white"><SlBasket/></button>
            <button className="text-[18px] text-white border px-[20px] py-[8px] rounded-md hover:bg-white hover:text-violet-700 ease-in-out duration-300">Log In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
