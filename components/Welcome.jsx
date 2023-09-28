import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col  items-center text-[#343434] basis-full">
      <div className="text-[#343434] flex flex-col justify-center items-center text-center lg:max-w-[56%] lg:my-0 my-6 h-auto lg:h-[55vh]">
        <h2 className="font-[Anton-Regular] lg:text-[5rem] 2xl:text-[8.8rem] text-[3.5rem] uppercase">
          Bienvenidos!
        </h2>
        <div className=" flex flex-col gap-4  lg:text-[1rem] 2xl:text-[1.3rem] text-[1.05rem] px-6">
          <p className=" font-[300] leading-none">
            At Viva Jalisco, flavor and generous portions take center stage,
            setting it apart from the rest.
          </p>
          <p className=" font-[300] leading-none">
            {" "}
            What sets this restaurant apart is their unwavering commitment to
            preserving the authentic flavors of Mexico. Norma and Jose, the
            skilled chefs and owners, employ traditional cooking techniques that
            make all the difference in every dish they prepare.{" "}
          </p>
          <p className=" font-[300] leading-none">
            From the sizzling meats cooked to perfection, to the vibrant and
            aromatic salsas, every bite at Viva Jalisco is a testament to their
            dedication and passion for delivering an exceptional dining
            experience.
          </p>
        </div>
      </div>
      <div className="bg-[#67BFB1] flex w-full  h-[20vh] justify-center items-center">
        <p className="text-[#004857] font-[800] text-center lg:text-[1.3rem] 2xl:text-[1.7rem] leading-none">
          VIVA JALISCO MEXICAN RESTAURANT <br /> IS LOCATED IN BOTHELL,
          WASHINGTON
          <br />
          <span className="font-[300]"> 1715 228th St SE UNIT 102</span>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-[12rem] items-center h-auto lg:h-[25vh] bg-[#00ACCE]">
        <div className="text-center my-6 flex flex-col lg:flex-row items-center lg:text-left gap-4">
          <h2 className="uppercase lg:text-right text-center font-[Anton-Regular] text-[3rem] lg:text-[3.6rem] 2xl:text-[4.5rem] leading-none text-[#004857]">
            We are open <br /> 7 days a week
          </h2>
          <ul className="lg:text-[1.3rem] text-[#004857]">
            <li className="font-[700]">Monday through Saturday</li>
            <li>11:00 AM to 9:00 PM</li>
            <li className="font-[700]">Sundays</li>
            <li>11:00 AM to 8:00 PM</li>
          </ul>
        </div>
        <div className="text-center my-6 ">
          <h2 className="font-[Anton-Regular] text-[3rem] lg:text-[4rem]  text-[#fff] leading-[1.6rem] uppercase">
            Happy <span className="text-[#004857]">Hour </span> <br />
            <span className="text-[1rem] lg:text-[1.3rem] text-[#004857] tracking-[0.6rem] font-[Montserrat] font-[700]">
              every <span className="text-[#fff]">day!</span>
            </span>
          </h2>
          <p className="lg:text-[1.4rem] text-[#004857]">
            2:00 PM through 5:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
