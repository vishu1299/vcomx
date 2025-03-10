const HomeData = {
  featuredProducts: [
    {
      id: 1,
      name: "Product 1",
      image: "/src/Assets/Images/productcard.png",
      price: "$99.99",
      rating: 4.5, // ⭐ Rating add kiya wapas
    },
    {
      id: 2,
      name: "Curated Product 1",
      image: "/src/Assets/Images/curatedimage1.png",
      price: "$109.99",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Curated Product 2",
      image: "/src/Assets/Images/curatedimage2.png",
      price: "$89.99",
      rating: 4.2,
    },
    {
      id: 4,
      name: "Curated Product 3",
      image: "/src/Assets/Images/curatedimage3.png",
      price: "$79.99",
      rating: 4.0,
    },
    {
      id: 5,
      name: "Curated Product 4",
      image: "/src/Assets/Images/curatedimage4.png",
      price: "$119.99",
      rating: 4.8,
    },
  ],
  services: [
    {
      id: 1,
      name: "Easy Return",
      image: "/src/Assets/Images/Return.png",
    },
    {
      id: 2,
      name: "Fast Delivery",
      image: "/src/Assets/Images/Delivery-Truck.png",
    },
    {
      id: 3,
      name: "Quality Guarantee",
      image: "/src/Assets/Images/guarantee.png",
    },
    {
      id: 4,
      name: "24/7 Support",
      image: "/src/Assets/Images/phone-call.png",
    },
  ],
  banners: [
    {
      id: 1,
      image: "/src/Assets/Images/Image.png",
    },
    {
      id: 2,
      image: "/src/Assets/Images/Image2.png",
    },
  ],
};

export default HomeData;

interface Follow {
  image: string;
  text: string;
  subtext: string;
}

export const Followterm: Follow[] = [
  {
    image: "/src/Assets/Images/phone-call.png",
    text: "24/7 Customer Service",
    subtext:
      "We re here to help you with any questions or concerns you have, 24/7.",
  },

  {
    image: "/src/Assets/Images/Return.png",
    text: "24/7 Customer Service",
    subtext:
      "We re here to help you with any questions or concerns you have, 24/7.",
  },

  {
    image: "/src/Assets/Images/Delivery.png",
    text: "24/7 Customer Service",
    subtext:
      "We re here to help you with any questions or concerns you have, 24/7.",
  },

  {
    image: "/src/Assets/Images/guarantee.png",
    text: "24/7 Customer Service",
    subtext:
      "We re here to help you with any questions or concerns you have, 24/7.",
  },
];

interface smallbannersec {
  image: string;
  spantext: string;
  text1: string;
  text2: string;
  para: string;
}

export const smallbanner: smallbannersec[] = [
  {
    image: "/src/Assets/Images/Image.png",
    spantext: "Hot Deal",
    text1: "TOURS SAFE",
    text2: "TRUE DISCOUNT",
    para: "Order Now",
  },
  {
    image: "/Assets/Images/Image2.png",
    spantext: "Hot Deal",
    text1: "TOURS SAFE",
    text2: "TRUE DISCOUNT",
    para: "Order Now",
  },
];
