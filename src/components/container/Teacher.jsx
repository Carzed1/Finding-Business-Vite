import React from "react";
import expert1 from "../../assets/expert1.png";
import expert2 from "../../assets/expert2.png";
// import { accordions } from "../../Data";
// import Accordion from "./Accordion";

const Expert = () => {
  return (
    <div className="section" id="expert">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Get <span className="text-Teal">Expert Advice</span> <br /> on Our
            Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Our consulting services offer expertise similar to industry leaders
            providing strategic insights and helping businesses make informed
            decisions through our team of experienced professionals.
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={expert1} alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Find <span className="text-Teal">The Perfect</span> <br /> Business
            Location
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Our AI software is revolutionizing location-based business
            optimization. By analyzing crucial factors such as foot traffic,
            transportation accessibility, and other pertinent metrics, we assist
            businesses in identifying the most suitable locations. We understand
            that location is more than just geographic positioning; it's also
            about targeting the appropriate audience.
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={expert2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Expert;
