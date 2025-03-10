import React from 'react'

interface HeadingProps {
    heading: string;
  }

  const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <>
            <h2 className='font-Oswald font-bold text-[44px] leading-[50px] '>{heading}</h2>
    </>
  )
}

export default Heading;