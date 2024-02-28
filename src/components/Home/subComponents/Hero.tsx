// Dependencies
import { FaArrowCircleRight } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { RiTreeFill } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io";

// Local Files
import "./Hero.css";

const Hero = () => {
  return (
    <div className="HeroSection flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[1rem] w-[100%] px-[3rem] py-[2rem]">
        <RiTreeFill className="text-white text-[5rem] txtShadow" />
        <p className="txtShadow text-[white] text-2xl font-semibold">Finest Landscaping Service</p>

        <div className="flex flex-col items-center text-center text-[3rem] lg:text-[3.5rem] font-['Roboto'] font-bold leading-[3.4rem] lg:leading-[4rem] txtShadow">
          <span className="text-[white]">
            Transform your <span className="text-[#F5A524]">outdoor space</span> with
          </span>
          <span className="text-[white]">
            <span className="text-[#F5A524]">our expert </span>landscaping services !
          </span>
        </div>

        <p className="text-white font-semibold italic txtShadow max-w-[55rem] text-center">
          Elevate your outdoor oasis! Unlock exclusive bonuses and rewards when you invest in our premier landscaping
          services. Act now for special offers on projects, upgrades, and more – available for a limited time!
        </p>

        <p className="text-default-200 flex txtShadow gap-[0.5rem]">
          <IoIosInformationCircle className="mt-[0.3rem]" /> Limitations and terms apply
        </p>

        <Button
          color="warning"
          variant="shadow"
          radius="none"
          endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Hero;
