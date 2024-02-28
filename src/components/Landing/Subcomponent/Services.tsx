import React from "react";

const Services = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between lg:px-[5rem] lg:py-[3rem] p-[2rem] h-auto bg-slate-200">
      <div className="flex flex-col items-start justify-between p-[2rem]">
        <div className="py-[1rem] ">
          <h1 className="text-3xl font-semibold font-sans">Our Landscaping Service</h1>
        </div>
        <div className="py-[0.5rem] md:px-[15rem] px-[8rem]  border-t-2 border-gray-600"></div>
        <div className="py-[1rem]">
          <h1 className="text-2xl font-semibold ">Structural Landscaping</h1>
        </div>
        <div>
          <p className="text-gray-600 text-1xl">
            Transform your outdoor space with our expert structural landscaping services. From retaining walls to
            outdoor living areas, we specialize in creating functional and visually stunning landscapes that enhance the
            beauty and usability of your property. Our team of skilled professionals works closely with you to bring
            your vision to life, using high-quality materials and innovative design techniques. Experience the
            difference with our comprehensive structural landscaping solutions.
          </p>
        </div>
      </div>
      <div>
        <img
          className="lg:w-[120rem] w-[100rem] lg:inline-block hidden rounded-3xl"
          src="https://images.unsplash.com/photo-1597201278257-3687be27d954?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Services;
