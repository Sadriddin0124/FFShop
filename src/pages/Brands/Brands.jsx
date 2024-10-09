import React from 'react'
import BrandsImg from "../../assets/brands_img.jpg"
import BrandsSidebar from '../../components/BrandsSidebar/BrandsSidebar'
import { useTranslation } from 'react-i18next'
const Brands = () => {
  const { t } = useTranslation()
  const title = t("brands.title")
  const desc = t("brands.desc")
  return (
    <div className='w-[100%] flex justify-center px-[16px] sm:px-[20px] py-[100px]'>
      <div className='max-w-[1200px] w-[100%] flex gap-[20px] justify-between'>
        <div className='flex flex-col bg-white max-w-[600px] rounded-md shadow-md overflow-hidden cursor-pointer'>
          <div className='w-[100%] h-[350px] group overflow-hidden'>
            <img src={BrandsImg} alt="BrandsImg" className='w-[100%] h-[100%] object-cover brightness-50 group-hover:brightness-100 ease-in-out duration-300 group-hover:scale-110'/>
          </div>
          <div className='flex flex-col p-[20px]'>
            <h5 className='text-[35px] font-[600]'>{title}</h5>
            <p className='text-[24px]'>{desc}</p>
          </div>
        </div>
        <BrandsSidebar/>
      </div>
    </div>
  )
}

export default Brands
