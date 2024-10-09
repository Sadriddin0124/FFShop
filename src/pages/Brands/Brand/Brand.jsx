import React from 'react'
import BargBg from "../../../assets/Barg/barg_bg.jpg"
import EffettaBg from "../../../assets/Effetta/effetta_bg.jpg"
import AmfioraBg from "../../../assets/Amfiora/amfiora_bg.jpg"
import ExxperBg from "../../../assets/Exxper/exxper_bg.jpg"
import { useTranslation } from 'react-i18next'
import SingleBrand from '../../../components/SingleBrand/SingleBrand'
import { BargData } from '../../../data/brands/Barg'
import { EffettaData } from '../../../data/brands/Effetta'
import { AmfioraData } from '../../../data/brands/Amfiora'
import BrandsSidebar from '../../../components/BrandsSidebar/BrandsSidebar'
import { ExxperData } from '../../../data/brands/Exxper'
const Brand = () => {
    const { t } = useTranslation()
    const Data = [
        { path: "barg", title: t("barg.title"), img: BargBg, items:  BargData(t)},
        { path: "effetta", title: t("effetta.title"), img: EffettaBg, items:  EffettaData(t)},
        { path: "amfiora", title: t("amfiora.title"), img: AmfioraBg, items:  AmfioraData(t)},
        { path: "exxper", title: t("exxper.title"), img: ExxperBg, items:  ExxperData(t)},
    ]
    console.log(Data);
  return (
    <section className='w-[100%] flex justify-center'>
      <div className='max-w-[1200px] w-[100%] flex justify-between gap-10 py-12'>
        <SingleBrand Data={Data}/>
        <BrandsSidebar/>
      </div>
    </section>
  )
}

export default Brand
