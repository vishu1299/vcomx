import React from 'react'

interface ButtonProps {
    View: string
}
const Button: React.FC<ButtonProps> = ({ View }) => {
    return (
        <>
            <div className=''>
                <button className='bg-[#FF6F3C] text-[#fff] px-[24px] py-[12px] rounded-[30px]'>
                    {View}
                </button>
            </div>
        </>
    )
}

export default Button;