// pages/index.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function NewsInsights() {
  const articles = [
    {
      id: 1,
      category: "SPIRIT",
      categoryColor: "bg-black",
      title:
        "Exploring The World Of Organic Beauty: Tips And Trends For A Natural Glow",
      image: "/src/Assets/Images/newsinsight/newsinsight-1.jpg",
      author: "Tony Nguyen",
      date: "Oct 12, 2023",
    },
    {
      id: 2,
      category: "FASHION",
      categoryColor: "bg-black",
      title: "The Benefits Of Going Organic: A Guide To Healthier Living",
      image: "/src/Assets/Images/newsinsight/newsinsight-2.jpg",
      author: "Tony Nguyen",
      date: "Oct 12, 2023",
    },
    {
      id: 3,
      category: "FITNESS",
      categoryColor: "bg-black",
      title: "How To Create A Sustainable Home With Organic Products",
      image: "/src/Assets/Images/newsinsight/newsinsight-3.jpg",
      author: "Michelle Chen",
      date: "Oct 12, 2023",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-sm font-semibold bg-orange max-w-fit mx-auto p-2 rounded-lg  text-black mb-2">
          LATEST NEWS
        </p>
        <h2 className="text-3xl font-bold">NEWS INSIGHT</h2>
      </div>

      {/* Article Grid */}
      <div className="flex w-full justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[80%] ">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden  shadow-none border-none bg-transparent"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardContent className="pt-4 px-0">
                <span
                  className={`${article.categoryColor} text-orange text-xs font-medium px-2 py-1 rounded`}
                >
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold mt-3 line-clamp-2">
                  <Link href={`/article/${article.id}`}>{article.title}</Link>
                </h3>
              </CardContent>
              <CardFooter className="text-sm text-gray-500 pt-0 px-0">
                <span>by {article.author}</span>
                <span className="mx-2">—</span>
                <span>{article.date}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
