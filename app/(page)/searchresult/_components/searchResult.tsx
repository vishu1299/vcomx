import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IoChevronDownOutline } from "react-icons/io5";
import SearchNavbar from "./searchnavbar";

const SearchResult = () => {
  return (
   <div className="py-4 md:px-0 px-4">
     <div className="flex justify-between items-center w-full">
     
     <p className="font-Oswald text-[#1F1D2B] font-semibold text-[24px]">Search Result</p>

     
     <div className="flex items-center gap-8">
       <p className="text-gray-500 text-sm">Sort by:</p>
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
           <Button variant="outline" className="text-black font-medium">
             Most Viewed <IoChevronDownOutline />
           </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
           <DropdownMenuItem>Most Viewed</DropdownMenuItem>
           <DropdownMenuItem>Newest</DropdownMenuItem>
           <DropdownMenuItem>Oldest</DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>
     </div>
   </div>
   <div>
    <SearchNavbar/>
   </div>
   </div>
  );
};

export default SearchResult;
