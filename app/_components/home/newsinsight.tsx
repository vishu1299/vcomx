
import React from "react";

const NewsInsight = () => {
  const newsinsight = [
    {
      image: "/assets/Images/newsinsight/newsinsight-1.jpg",
      buttionNew: "Sport",
      title:
        "Exploring the World of Organic Beauty: Tips and Trends for a Natural Glow",
    nameNews: "by Tony Nguyen ",
      dateNews: "Oct 12, 2023",
    },
    {
      image: "/assets/Images/newsinsight/newsinsight-2.jpg",
      buttionNew: "Sport",
      title:
        "Exploring the World of Organic Beauty: Tips and Trends for a Natural Glow",
      nameNews: "by Tony Nguyen ",
      dateNews: "Oct 12, 2023",
    },
    {
      image: "/assets/Images/newsinsight/newsinsight-3.jpg",
      buttionNew: "Sport",
      title:
        "Exploring the World of Organic Beauty: Tips and Trends for a Natural Glow",
      nameNews: "by Tony Nguyen ",
      dateNews: "Oct 12, 2023",
    },
  ];
  return (
    <div>
      <div className="  flex flex-col items-center mt-4">
        <p className=" text-[14px] font-Oswald  font-medium text-[#121212] bg-[#FF6F3C]  p-1  w-fit">
          Latest News
        </p>
        <p className=" text-[44px] font-Oswald  font-semibold text-[#121212] ">
          News insight
        </p>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
        {newsinsight?.map((item, index) => (
          <div key={index} className="">
            <div className=" ">
              <img
                src={item.image}
                alt={item.title || "News image"}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div>
              <button className=" bg-[#121212] py-1 px-2 rounded-md text-[#FF6F3C] text-[14px] font-medium mt-2 ">
                Sport
              </button>
            </div>
            <div>
              <p className="  font-Oswald font-medium text-[#121212] text-[24px]">
                Exploring the World of Organic Beauty: Tips and Trends for a
                Natural Glow
              </p>
            </div>
            <div className=" text-[#5E6267]  font-Oswald font-normal text-[14px] flex gap-4  items-center">
              <p>{item.nameNews}</p>
              <div className=" w-6 h-1  border-b border-[#121212]"></div>
              <p>{item.dateNews}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsInsight;
