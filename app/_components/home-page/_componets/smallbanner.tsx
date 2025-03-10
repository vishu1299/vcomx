
import { smallbanner } from '@/data/Home/home';
import React from 'react'

const Adver = () => {
  return (
    <div className='flex justify-between items-center gap-[30px]'>

      {smallbanner?.map((item, index) => (
        <div key={index} className='h-[400px] w-[100%] bg-cover ' style={{backgroundImage : `url(${item.image})`}}>

          <span>{item.spantext}</span>

        </div>
      ))}

    </div>
  )
}

export default Adver;
