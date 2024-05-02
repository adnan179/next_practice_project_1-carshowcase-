"use client";

import { SearchManufacturer }from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchButton =({otherClasses}:{otherClasses: string})=>(
  <button className={`-ml-3 z-10 ${otherClasses}`} type="submit">
    <Image 
      src={"/magnifying-glass.svg"}
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"/>
  </button>
)

const SearchBar = () => {
  const [manufacturer,setManufacturer] = useState("");
  const [model,setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(manufacturer.trim() === "" && model.trim() === ""){
      return alert("Please provide some input")
    };

    updateSearchParams(model.toLocaleLowerCase(),manufacturer.toLocaleLowerCase());

  };

  const updateSearchParams =(model: string, manufacturer: string) => {
    // create a new URLSearchParams object using the current URL search params
    const searchParams = new URLSearchParams(window.location.search);

    //update or delete the model search params based on the model value
    if(model){
      searchParams.set("model",model);
    }else{
      searchParams.delete("model");
    };

    //update or delete the manufacturer search params based on the manufacturer value
    if(manufacturer){
      searchParams.set("manufacturer",manufacturer);
    }else{
      searchParams.delete("manufacturer");
    };

    //generate the new pathName with the update search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  }

  return (
    <form onSubmit={handleSearch} className='searchbar'>
      <div className="searchbar__item">
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}/>
        <SearchButton otherClasses="sm:hidden"/>
      </div>
      <div>
        <Image 
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] mi-4"
          alt="car model"
        />
        <input 
          type="text"
          name="model"
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"/>
          <SearchButton otherClasses="sm:hidden" />

      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
