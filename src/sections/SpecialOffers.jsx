import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <section
      id="about-us"
      className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 w-full max-container"
    >
      <div
      className="flex flex-1 ">
        <img 
        src={offer} 
        alt="offer"
        width={773} 
        height={687}
        className="object-contain w-full"
        />
      </div>
       <div
      className="flex flex-1 flex-col">
          <h2
          className="font-palaquin text-4xl capitalize font-bold lg:max-w-xl"><span
            className="text-coral-red">
              Special  
            </span> Offer
          </h2>
          <p className="mt-4 lg:max-w-xl info-text w-full">
            Embark on a shoping journey that redefines your experience with unbeatible deals. From premier sections to incredible savings, we offer unparalled value that sets up apart.
          </p>

          <p
          className="mt-6 lg:max-w-xl info-text">
            Navigate a realm of possibilities designed to fullfill your unique desires, surpassing the loftiest experiences. Your journey with us is nothing short of exceptional.
          </p>
          <div
          className="mt-9 flex flex-wrap gap-4   ">
            <Button 
            label="Shop now"
            icoURL={arrowRight}
            />
            <Button 
            label= "Learn more"
            spOffer = "true"
            />
          </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
