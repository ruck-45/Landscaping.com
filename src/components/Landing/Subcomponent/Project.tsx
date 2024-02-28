import React from "react";

const Project = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between lg:p-[5rem] p-[2rem] h-auto bg-white">
      <div className="flex flex-col items-start justify-between p-[2rem]">
        <div className="py-[1rem] ">
          <h1 className="text-3xl font-semibold font-sans">About Us</h1>
        </div>
        <div className="py-[0.5rem] md:px-[15rem] px-[8rem]  border-t-2 border-gray-600"></div>
        <div className="py-[1rem]">
          <h1 className="text-2xl font-semibold ">We Prioritize You</h1>
        </div>
        <div>
          <p className="text-gray-600 text-1xl">
            We're dedicated to preserving the vitality of your outdoor environment. With years of expertise in soil
            science and landscaping, our team is committed to delivering top-quality solutions tailored to your unique
            needs. We pride ourselves on using sustainable practices and premium products to rejuvenate soil health and
            promote lush, thriving landscapes. Whether it's residential or commercial properties, we go above and beyond
            to exceed expectations, ensuring our clients enjoy vibrant, sustainable outdoor spaces year-round. Trust Us
            for professional service and exceptional results that enhance the beauty and longevity of your outdoor
            environment.
          </p>
        </div>
      </div>
      <div>
        <img
          className="lg:w-[180rem] w-[120rem] lg:inline-block hidden"
          src="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Project;
