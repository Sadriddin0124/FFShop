import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import BrandsImg1 from "../../assets/barg_t.jpg"
import BrandsImg2 from "../../assets/effetta_t.jpg"
import BrandsImg3 from "../../assets/amfiora_t.jpg"
import BrandsImg4 from "../../assets/exxper_t.jpg"
const BrandsSidebar = () => {
  const { t } = useTranslation()
  const title = t("brands.title")
  const brands = [
    {img: BrandsImg1, title: t("brands.title1"), path: "/brands/barg"},
    {img: BrandsImg2, title: t("brands.title2"), path: "/brands/effetta"},
    {img: BrandsImg3, title: t("brands.title3"), path: "/brands/amfiora"},
    {img: BrandsImg4, title: t("brands.title4"), path: "/brands/exxper"},
  ]
  return (
    <div className='max-w-[300px] w-[100%]'>
        <h2 className='text-[24px] font-[600] p-[20px] bg-orange-400 text-white rounded-t-md'>{title}</h2>
        <div className='flex flex-col bg-white rounded-b-md shadow-md'>
        {
            brands?.map((item,index)=> {
            return <div key={index} className='flex py-[10px] px-[15px] gap-[15px] items-center border-b group'>
                <img src={item?.img} alt={item?.title} className='p-[4px] border'/>
                <Link to={item?.path} className='text-[16px] font-[500] group-hover:text-orange-400'>{item?.title}</Link>
            </div>
            })
        }
        </div>
    </div>
  )
}

export default BrandsSidebar
