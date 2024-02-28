import { Divider } from "@nextui-org/react";

const ServiceDetails = () => {
  return (
    <>
      <Divider />
      <div className="flex flex-row items-center justify-center lg:px-[5rem] lg:py-[3rem] p-[1rem] h-auto bg-white">
        <div>
          <img
            className="lg:w-[120rem] w-[80rem] lg:inline-block hidden rounded-3xl"
            src="https://images.unsplash.com/photo-1507849719189-4f15fa4c84e2?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-between lg:p-[3rem] px-[2rem] md:py-[2rem] py-[0.5rem]">
          <div className="py-[1rem]">
            <h1 className="text-2xl font-semibold ">Fencing & Retaining Walls</h1>
          </div>
          <div>
            <p className="text-gray-600 text-1xl">
              Our fencing and retaining wall services provide durable solutions to enhance the functionality and
              aesthetic appeal of your property. Whether you're looking to secure your perimeter, add privacy, or
              prevent soil erosion, our expert team delivers top-quality craftsmanship using premium materials. With a
              focus on both practicality and design, we tailor our solutions to meet your specific needs, ensuring
              long-lasting results that elevate your outdoor space.
            </p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-row items-center justify-center lg:px-[5rem] lg:py-[3rem] p-[1rem] h-auto bg-slate-200 gap-[3rem]">
        <div className="flex flex-col lg:items-end md:items-start justify-between lg:px-[3rem] px-[2rem]  md:py-[2rem] py-[0.5rem] ">
          <div className="py-[1rem]">
            <h1 className="text-2xl font-semibold ">Decking</h1>
          </div>
          <div>
            <p className="text-gray-600 text-1xl lg:text-end">
              Transform your outdoor space with our top-quality decking services. Our skilled team offers expert design
              and installation, ensuring your deck perfectly complements your home and lifestyle. From traditional wood
              to low-maintenance composite options, we provide a range of materials to suit your preferences and budget.
              Let us bring your vision to life and create a beautiful, functional outdoor oasis for relaxing,
              entertaining, and enjoying the great outdoors.
            </p>
          </div>
        </div>
        <div>
          <img
            className="lg:w-[120rem] w-[80rem] lg:inline-block hidden rounded-3xl bg-white"
            src="https://images.unsplash.com/9/barcelona-boardwalk.jpg?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <Divider />
      <div className="flex flex-row items-center justify-center lg:px-[5rem] lg:py-[3rem] p-[1rem] h-auto bg-white">
        <div>
          <img
            className="lg:w-[120rem] w-[80rem] lg:inline-block hidden rounded-3xl"
            src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-between lg:px-[3rem] px-[1rem] md:py-[2rem] py-[0.5rem]">
          <div className="py-[1rem]">
            <h1 className="text-2xl font-semibold ">Soil Maintenance</h1>
          </div>
          <div>
            <p className="text-gray-600 text-1xl">
              Our Soil Maintenance services ensure your landscape stays vibrant and healthy year-round. With a tailored
              approach, we assess soil composition, pH levels, and nutrient deficiencies to create a customized
              treatment plan. Our team utilizes eco-friendly methods and premium products to replenish vital nutrients,
              improve soil structure, and promote root growth. Trust us to rejuvenate your soil, enhancing the beauty
              and longevity of your outdoor spaces.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
