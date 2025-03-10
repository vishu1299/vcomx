import React from "react";
import { IoCalendarOutline } from "react-icons/io5";

const posts = [
  {
    id: 1,
    category: "COSMETICS",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    date: "Jan 11, 2021",
    image: "/Assets/Images/post/post-img-1.jpeg",
    calendericon: <IoCalendarOutline />,
  },
];

const recentlyPosted = [
  {
    id: 1,
    category: "COSMETICS",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    date: "Jan 11, 2021",
    image: "/Assets/Images/post/recently-img-2.jpeg",
    calendericon: <IoCalendarOutline />,
  },
  {
    id: 1,
    category: "COSMETICS",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    date: "Jan 11, 2021",
    image: "/Assets/Images/post/recently-img-1.jpeg",
    calendericon: <IoCalendarOutline />,
  },
  {
    id: 1,
    category: "COSMETICS",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    date: "Jan 11, 2021",
    image: "/Assets/Images/post/recently-img-2.jpeg",
    calendericon: <IoCalendarOutline />,
  },
  {
    id: 1,
    category: "COSMETICS",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    date: "Jan 11, 2021",
    image: "/Assets/Images/post/recently-img-1.jpeg",
    calendericon: <IoCalendarOutline />,
  },
];

const PostStores = () => {
  return (
    <div className="px-4 md:px-8 xl:px-16">
      <div className="xl:mb-44 ">
        <p className="py-2 md:py-4 font-semibold text-[#121212] font-Oswald text-3xl md:text-4xl">
          Today
        </p>
        {posts.map((post, index) => (
          <div key={index} className="relative  ">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover md:h-[500px] xl:h-[705px] rounded-lg"
            />
            <div className="relative xl:absolute xl:-bottom-44 left-0 right-0 bg-white p-4 shadow-lg lg:mr-8">
              <p className="text-[#FF6F3C] text-lg md:text-xl font-Oswald font-semibold uppercase">
                {post.category}
              </p>
              <h2 className="text-[#111111] text-2xl md:text-4xl font-Oswald leading-tight font-normal">
                {post.title}
              </h2>
              <p className="text-[#333333] text-base md:text-lg font-normal font-Oswald mt-2">
                {post.description}
              </p>
              <div className="flex gap-4 md:gap-8 items-center mt-4 font-Oswald text-gray-500 text-sm md:text-lg">
                <p>{post.calendericon}</p>
                <p className="text-gray-400">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 md:mt-12  ">
        <p className="py-2 md:py-4 font-semibold text-[#121212] font-Oswald text-3xl md:text-4xl">
          Recently Posted
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
          {recentlyPosted.map((post, index) => (
            <div
              key={index}
              className="relative xl:mb-72  py-8 border-t-2 border-[#ECECEC] "
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover md:h-[350px] xl:h-[443px] rounded-lg"
              />
              <div className="   relative xl:absolute   xl:-bottom-64 -bottom-4 left-0 right-0 bg-white p-4 shadow-lg lg:mr-8 ">
                <p className="text-[#FF6F3C] text-lg md:text-xl font-Oswald font-semibold uppercase">
                  {post.category}
                </p>
                <h2 className="text-[#111111] text-2xl md:text-4xl font-Oswald leading-tight font-normal">
                  {post.title}
                </h2>
                <p className="text-[#333333] text-base md:text-lg font-normal font-Oswald mt-2">
                  {post.description}
                </p>
                <div className="flex gap-4 md:gap-8 items-center mt-4 font-Oswald text-gray-500 text-sm md:text-lg">
                  <p>{post.calendericon}</p>
                  <p className="text-gray-400">{post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostStores;
