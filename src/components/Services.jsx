import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-3 cursor-pointer hover:shadow-xl">
        <div className={`w-5 h-5 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-3 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
                {subtitle}
            </p>
        </div>
    </div>
);

const Services = () => (
    <div className="flex w-full justify-center items-center gradient-bg-services">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-2 py-1 px-4">
            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="Movie Reviews"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="A one stop where you can find and write all movie reviews"
                />
                <ServiceCard
                    color="bg-[#8945F8]"
                    title="Casting"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Can check casts of all movies"
                />
                <ServiceCard
                    color="Directors"
                    title="Fastest transactions"
                    icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="Can check Directors of all Movies"
                />
            </div>
        </div>
    </div>
);

export default Services;