import Banner from "./_componets/banner";
import FollowedStores from "./_componets/Followedstories";
import Livenow from "./_componets/livenow";
import FeaturedProductment from "./_componets/FeaturedProducts";
import BestSellers from "./_componets/bestSellers";
import CuratedBrands from "./_componets/curatedBrands";
import CustomersComments from "./_componets/customersComments";
import NewsInsights from "./_componets/newInsight";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#F8F8F8] pt-[50px]">
        <div className="  w-[85%] mx-auto   ">
          <Banner />
        </div>
      </div>

      <div className="bg-[#F8F8F8] pt-[50px]">
        <div className="w-[85%] mx-auto   ">
          <FollowedStores />
        </div>
      </div>

      <div className="bg-[#F8F8F8] pt-[50px] pb-[120px]">
        <div className="w-[85%] mx-auto ">
          <Livenow />
        </div>
      </div>
      <div className="bg-[#FFE9E2] md:pt-[80px] pt-4">
        <div className="w-[85%] mx-auto  ">
          <FeaturedProductment />
        </div>
      </div>
      <div className="">
        <div className="w-[85%] mx-auto ">
          <BestSellers />
        </div>
      </div>

      <div>
        <div className="w-[85%] mx-auto">
          <CuratedBrands />
        </div>
      </div>

      <div className="bg-[#FCEEE7]">
        <div className="w-[85%] mx-auto ">
          <CustomersComments />
        </div>
      </div>
      <div>
        <div className="w-[85%] mx-auto">
          <NewsInsights />
        </div>
      </div>
    </>
  );
};

export default HomePage;
