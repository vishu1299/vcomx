import { Followterm } from '@/data/Home/home';
import Image from 'next/image';
import React from 'react'

const Formterm = () => {
    return (
        <>

            <div className='bg-[#fff] flex justify-between items-center p-[30px] gap-[15px] '>
                {
                    Followterm.map((item, index) => {
                        return (
                            <div key={index} className='text-center'>
                                <div className='flex justify-center items-center p-[20px] h-[85px]'>
                                    <Image src={item.image} alt='' width={56} height={56} />
                                </div>
                                <h3 className='font-oswald font-bold text-[20px] leading-[28px]'>{item.text}</h3>
                                <p className='font-oswald font-light text-[14px] mt-[15px]'>{item.subtext}</p>

                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Formterm;