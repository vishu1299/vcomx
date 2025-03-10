import { LuUsers } from "react-icons/lu";
import { AiOutlineEye } from "react-icons/ai";
import { WiTime7 } from "react-icons/wi";
import { IoIosNotificationsOutline } from "react-icons/io";

import React from "react";
const eventsData = [
  {
    image: "/src/Assets/Images/upcomming/img.png",
    id: 1,
    name: "lorem",
    shop: "Beauty & Makeup",
    title: "Summer Makeup Trends & Tips",
    userIcon: <LuUsers />,
    intrested: "2.5k intrested",
    eyeIcon: <AiOutlineEye />,
    reminder: "26 reminders",
    timeIcon: <WiTime7 />,
    time: "19:30 GMT",
    notificationIcon: <IoIosNotificationsOutline />,
    setReminder: "Set Reminder",
  },
  {
    image: "/src/Assets/Images/upcomming/img.png",
    id: 1,
    name: "lorem",
    shop: "Beauty & Makeup",
    title: "Summer Makeup Trends & Tips",
    userIcon: <LuUsers />,
    intrested: "2.5k intrested",
    eyeIcon: <AiOutlineEye />,
    reminder: "26 reminders",
    timeIcon: <WiTime7 />,
    time: "19:30 GMT",
    notificationIcon: <IoIosNotificationsOutline />,
    setReminder: "Set Reminder",
  },
  {
    image: "/src/Assets/Images/upcomming/img.png",
    id: 1,
    name: "lorem",
    shop: "Beauty & Makeup",
    title: "Summer Makeup Trends & Tips",
    userIcon: <LuUsers />,
    intrested: "2.5k intrested",
    eyeIcon: <AiOutlineEye />,
    reminder: "26 reminders",
    timeIcon: <WiTime7 />,
    time: "19:30 GMT",
    notificationIcon: <IoIosNotificationsOutline />,
    setReminder: "Set Reminder",
  },
  {
    image: "/src/Assets/Images/upcomming/img.png",
    id: 1,
    name: "lorem",
    shop: "Beauty & Makeup",
    title: "Summer Makeup Trends & Tips",
    userIcon: <LuUsers />,
    intrested: "2.5k intrested",
    eyeIcon: <AiOutlineEye />,
    reminder: "26 reminders",
    timeIcon: <WiTime7 />,
    time: "19:30 GMT",
    notificationIcon: <IoIosNotificationsOutline />,
    setReminder: "Set Reminder",
  },
  {
    image: "/src/Assets/Images/upcomming/img.png",
    id: 1,
    name: "lorem",
    shop: "Beauty & Makeup",
    title: "Summer Makeup Trends & Tips",
    userIcon: <LuUsers />,
    intrested: "2.5k intrested",
    eyeIcon: <AiOutlineEye />,
    reminder: "26 reminders",
    timeIcon: <WiTime7 />,
    time: "19:30 GMT",
    notificationIcon: <IoIosNotificationsOutline />,
    setReminder: "Set Reminder",
  },
  {
    image: "/src/Assets/Images/upcomming/img.png",
    id: 1,
    name: "lorem",
    shop: "Beauty & Makeup",
    title: "Summer Makeup Trends & Tips",
    userIcon: <LuUsers />,
    intrested: "2.5k intrested",
    eyeIcon: <AiOutlineEye />,
    reminder: "26 reminders",
    timeIcon: <WiTime7 />,
    time: "19:30 GMT",
    notificationIcon: <IoIosNotificationsOutline />,
    setReminder: "Set Reminder",
  },
  {
    image: "/src/Assets/Images/upcomming/img.png",
    id: 1,
    name: "lorem",
    shop: "Beauty & Makeup",
    title: "Summer Makeup Trends & Tips",
    userIcon: <LuUsers />,
    intrested: "2.5k intrested",
    eyeIcon: <AiOutlineEye />,
    reminder: "26 reminders",
    timeIcon: <WiTime7 />,
    time: "19:30 GMT",
    notificationIcon: <IoIosNotificationsOutline />,
    setReminder: "Set Reminder",
  },
  {
    image: "/src/Assets/Images/upcomming/img.png",
    id: 1,
    name: "lorem",
    shop: "Beauty & Makeup",
    title: "Summer Makeup Trends & Tips",
    userIcon: <LuUsers />,
    intrested: "2.5k intrested",
    eyeIcon: <AiOutlineEye />,
    reminder: "26 reminders",
    timeIcon: <WiTime7 />,
    time: "19:30 GMT",
    notificationIcon: <IoIosNotificationsOutline />,
    setReminder: "Set Reminder",
  },
];

const UpcommingDetails = () => {
  return (
    <div className="">
      <div className="mt-4">
        <p className="font-Oswald font-semibold text-[#121212] text-3xl md:text-4xl lg:text-[44px]">
          About This Stream
        </p>
        <p className="font-Oswald text-[#88888C] text-base md:text-lg lg:text-[23px] font-normal mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat. In iaculis arcu eros, eget tempus orci facilisis id.
          Praesent lorem orci, mattis non efficitur id, ultricies vel nibh.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">
        <p className="font-Oswald font-semibold text-[#121212] text-3xl md:text-4xl lg:text-[44px]">
          More Upcoming Streams
        </p>
        <div className="flex items-center gap-2 md:gap-4 flex-wrap">
          <button className="bg-[#FF6F3C] text-white px-4 py-2 rounded-xl text-sm md:text-base">
            Today
          </button>
          <button className="bg-[#F3F4F6] px-4 py-2 rounded-xl text-[#4B5563] text-sm md:text-base">
            Tomorrow
          </button>
          <button className="bg-[#F3F4F6] px-4 py-2 rounded-xl text-[#4B5563] text-sm md:text-base">
            This week
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  w-full mt-6 ">
          {eventsData.map((item, index) => (
            <div key={index} className="">
              <div className="relative rounded-xl">
                <img src={item.image} alt="" className="w-full  rounded-t-lg" />

                <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#FF6F3C] text-white px-3 py-1 rounded-full text-sm">
                  {item.timeIcon}
                  <span>{item.time}</span>
                </div>
              </div>

              <div className="mt-4  ">
                <div className=" bg-white  shadow-md p-4 ">
                  <p className="text-[#121212] text-[16px] font-Oswald  font-normal">
                    {item.name}
                  </p>
                  <p className="text-[#88888C] text-[16px] font-Oswald  font-normal ">
                    {item.shop}
                  </p>
                  <p className="text-[17px]  font-Oswald  font-normal text-[#121212] py-2">
                    {item.title}
                  </p>

                  <div className="flex gap-8 mt-3  text-[13px] font-normal  text-[#888888]">
                    <div className="flex items-center gap-1">
                      {item.userIcon}
                      <span>{item.intrested}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {item.eyeIcon}
                      <span>{item.reminder}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full flex  font-Oswald font-normal items-center justify-center gap-2 border border-[#FF6F3C] text-[#FF6F3C] py-2 rounded-lg ">
                    {item.notificationIcon}
                    {item.setReminder}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcommingDetails;
