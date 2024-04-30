import React from "react";
import { star } from "../assets/icons";
import purchase from "../assets/icons/purchase.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt="popular products"
        className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex flex-col justify-start gap-0.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
        <h3 className="mt-0.5 text-2xl leading-normal font-semibold font-palanquin ">
          {name}
        </h3>
        <p className="mt-0.5 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
        <div>
          <Link
           to="productdetails">
            <Button label="Purchase Now" iconURL={purchase} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
