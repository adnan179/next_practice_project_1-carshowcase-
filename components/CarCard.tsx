"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import CarDetails from "./CarDetails";

interface CardCardProps{
  car:CarProps;
}
const CarCard = ({ car }:CardCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    // main cont
    <div className="car-card group">
      {/* car name */}
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      {/* rent */}
      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-semibold">/day</span>
      </p>
      {/* car Image */}
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src="/hero.png" alt="car image" fill priority className="object-contain"
        />
      </div>

      {/* fuel,mpg,type */}
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full       justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic":"Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="card-card__icon-text">
              {drive.toUpperCase()}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="card-card__icon-text">
              {city_mpg}
            </p>
          </div>
        </div>
        {/* view more btn */}
        <div className="car-card__btn-container">
        <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModel ={() => setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard
