import { ReactNode } from "react";
import productcard from "/public/Assets/Images/productcard.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import curateimage1 from "@/public/Assets/Images/curatedimage1.png";
import curateimage2 from "@/public/Assets/Images/curatedimage2.png";
import curateimage3 from "@/public/Assets/Images/curatedimage3.png";
import curateimage4 from "@/public/Assets/Images/curatedimage4.png";

import Return from "@/public/Assets/Images/Return.png";
import Delivery from "@/public/Assets/Images/Delivery-Truck.png";
import gurantee from "@/public/Assets/Images/guarantee.png";
import phone from "@/public/Assets/Images/phone-call.png"

import smallbanner1 from "@/public/Assets/Images/Image.png";
import smallbanner2 from "@/public/Assets/Images/Image2.png";



interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    imageUrl: string;
}

export interface Featuredata {
    id: number;
    label: string;
    heart: ReactNode;
    heading: string;
    rating: string;
    reviews: number;
    actualPrice: string;
    discountPrice: string;
    cart: ReactNode,
}

interface curatebrands {
    text: string,
    subText: string,
    image: string,
    color: string
}

export const products: Product[] = [
    {
        id: 1,
        name: "Wooden Wind-Up Deer",
        price: 28.76,
        originalPrice: 34.99,
        rating: 4,
        reviews: 2,
        imageUrl: productcard.src, 
    },
    {
        id: 2,
        name: "Handcrafted Wooden Fox",
        price: 24.50,
        originalPrice: 30.00,
        rating: 5,
        reviews: 5,
        imageUrl: productcard.src,
    },
    {
        id: 3,
        name: "Vintage Wooden Owl",
        price: 32.00,
        originalPrice: 40.00,
        rating: 3,
        reviews: 8,
        imageUrl: productcard.src,
    }
];


export const FeaturedProducts: Featuredata[] = [
    {
        id: 1,
        label: 'cosmetics',
        heart: <IoIosHeartEmpty />,
        heading: 'Garnier Skin Active BB Cream All In One Perfecting',
        rating: '02',
        reviews: 5,
        actualPrice: '$22.00',
        discountPrice: '$35.00',
        cart: <LiaCartArrowDownSolid />
    },
    {
        id: 2,
        label: 'cosmetics',
        heart: <IoIosHeartEmpty />,
        heading: 'Garnier Skin Active BB Cream All In One Perfecting',
        rating: '02',
        reviews: 5,
        actualPrice: '$22.00',
        discountPrice: '$35.00',
        cart: <LiaCartArrowDownSolid />
    },
    {
        id: 2,
        label: 'cosmetics',
        heart: <IoIosHeartEmpty />,
        heading: 'Garnier Skin Active BB Cream All In One Perfecting',
        rating: '02',
        reviews: 5,
        actualPrice: '$22.00',
        discountPrice: '$35.00',
        cart: <LiaCartArrowDownSolid />
    }
]


export const curatedbrands: curatebrands[] = [
    {
        text: 'Lorem',
        subText: '(200 items)',
        image: curateimage1.src,
        color: '#FE8787'
    },

    {
        text: 'Lorem',
        subText: '(200 items)',
        image: curateimage2.src,
        color: '#48647A'
    },

    {
        text: 'Lorem',
        subText: '(200 items)',
        image: curateimage3.src,
        color: '#EFAA7C'
    },

    {
        text: 'Lorem',
        subText: '(200 items)',
        image: curateimage4.src,
        color: '#53DE68'
    },
]


interface Follow {
    image: string,
    text: string,
    subtext: string
}


export const Followterm: Follow[] = [
    {
        image: phone.src,
        text: '24/7 Customer Service',
        subtext: 'We re here to help you with any questions or concerns you have, 24/7.'
    },

    {
        image: Return.src,
        text: '24/7 Customer Service',
        subtext: 'We re here to help you with any questions or concerns you have, 24/7.'
    },

    {
        image: Delivery.src,
        text: '24/7 Customer Service',
        subtext: 'We re here to help you with any questions or concerns you have, 24/7.'
    },

    {
        image: gurantee.src,
        text: '24/7 Customer Service',
        subtext: 'We re here to help you with any questions or concerns you have, 24/7.'
    },

]

interface smallbannersec {
    image: string;
    spantext: string;
    text1: string;
    text2: string;
    para: string;
}

export const smallbanner: smallbannersec[] = [
    {
        image: smallbanner1.src,
        spantext: 'Hot Deal',
        text1: "TOURS SAFE",
        text2: "TRUE DISCOUNT",
        para: 'Order Now'
    },
    {
        image: smallbanner2.src,
        spantext: 'Hot Deal',
        text1: "TOURS SAFE",
        text2: "TRUE DISCOUNT",
        para: 'Order Now'
    },
]