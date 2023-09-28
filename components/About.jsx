import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row relative basis-full lg:justify-center justify-evenly items-center">
      <div className="lg:basis-[72%] justify-center flex z-10 px-[1.4rem]">
        <Image src="/img/person.jpg" width={1200} height={40}></Image>
      </div>
      <div className="lg:basis-[28%] relative z-10 lg:pr-[5rem] px-12 leading-none ">
        <h2 className="font-[Anton-Regular] uppercase text-[5.5rem] lg:text-[3rem] 2xl:text-[7.2rem] text-[#fff]">About <span className="text-[#004857]">Us</span> </h2>
        <p className="lg:text-[1rem] 2xl:text-[1.3rem] text-[1.05rem] text-justify font-[300] text-[#004857]">
          Allow me to introduce Norma and Jose, the passionate owners of Viva
          Jalisco, a typical Mexican restaurant located in Bothell, Washington.
          Hailing from Tototlán, Jalisco, they bring with them the rich cultural
          heritage of this enchanting region, known as the cradle of Mexican
          culture. <br />  <br />
          Jalisco, the birthplace of tequila, mariachi music, and
          charrerias, has a deep-rooted tradition of celebrating life and
          embracing its unique flavors. Norma and Joses journey from Tototlán
          to Bothell is a testament to their love for sharing the authentic
          taste of their homeland with the local community.
        </p>
        
      </div>
      <div className="bg-[#00ACCE] w-[15rem] lg:w-[27rem] h-screen absolute right-0"></div>
        <div className="bg-[#67BFB1] w-[8rem] lg:w-[15rem] h-screen absolute right-[15rem] lg:right-[27rem]"></div>
    </div>
  );
};

export default About;
