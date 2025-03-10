import React from "react";
import { MdOutlinePlayArrow } from "react-icons/md";

const AboutStore = () => {
  return (
    <div className=" ">
      <p className="font-semibold text-3xl md:text-4xl lg:text-[44px] font-Oswald text-[#121212]">
        About Store
      </p>
      <p className="text-[#88888C] font-Oswald text-base md:text-lg lg:text-[23px] font-normal mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
        ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
        Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
        iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci,
        mattis non efficitur id, ultricies vel nibh.
      </p>

      <div className="relative mt-4">
        <img
          src="/src/assets/Images/brandprofile/store.png"
          alt="Store"
          className="h-64 md:h-96 lg:h-[574px] w-full rounded-lg object-cover"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-4 w-12 md:w-16 h-12 md:h-16 rounded-full bg-[#FF6F3C]">
          <MdOutlinePlayArrow className="text-white text-2xl md:text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutStore;
