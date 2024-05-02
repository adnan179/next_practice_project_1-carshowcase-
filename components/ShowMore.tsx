"use client";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { ShowMoreProps } from "@/types";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation=() => {
    const newList=(pageNumber+1)*10;

    const newPathname = updateSearchParams("limit",`${newList}`);

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton 
          btnType="button"
          title="Show more"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}/>
      )} 
    </div>
  )
}

export default ShowMore;
