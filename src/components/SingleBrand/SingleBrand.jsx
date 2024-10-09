import React from 'react'
import { useLocation } from 'react-router-dom'
const SingleBrand = ({ Data }) => {
    const { pathname } = useLocation()
    const path = pathname.split("/")[2]
    const item = Data.find(item=> item?.path === path)
    console.log(item);
    
  return (
    <section className='w-[100%] flex justify-center'>
        <div className='flex flex-col rounded-md overflow-hidden shadow-lg bg-white'>
            <div className='relative min-h-[300px] h-[100%] w-[100%] p-8 flex justify-center'>
                <img src={item?.img} alt={item?.path} className='w-[100%] h-[100%] object-cover brightness-75 absolute top-0 left-0'/>
                <div className='relative max-w-[600px] flex flex-col items-center gap-4 text-white'>
                    <h2 className='text-[35px]'>{item?.title}</h2>
                    <p className='text-[20px]'>{item?.items[0]?.desc}</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-12 p-6'>
            {
                item?.items?.map((item,index)=> {
                    return <div key={index} className='flex gap-6 items-start'>
                        <img src={item?.img} alt={item?.title} className='max-h-[420px] max-w-[200px] object-contain'/>
                        <div className='flex flex-col gap-4'>
                            <h4 className='text-lg font-[500]'>{item?.title}</h4>
                            <p>{item?.desc}</p>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    </section>
  )
}

export default SingleBrand
