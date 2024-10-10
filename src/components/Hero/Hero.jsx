import BgImage from "../../assets/bg-slate.png";
import HeroImage from "../../assets/hero-image.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function Hero() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar */}
          <Navbar
            sidebarIsOpen={sidebarIsOpen}
            setSidebarIsOpen={setSidebarIsOpen}
          />
          {/* Hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                className="text-7xl font-bold leading-tight ml-14"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
              >
                Coffee Place
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Some heading</h1>
                  <h1 className="text-sml opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* hero image section */}
            <div className="relative md:top-[150px] md:left-[20px]">
              <motion.img
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={HeroImage}
                alt="hero"
                className="relative z-40 img-shadow object-contain md:w-full w-[60%] left-20 md:left-0"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.6,
                }}
                className="h-[180px] w-[180px] z-10 border-[20px] absolute top-0 right-10 md:-top-28 md:-right-16 border-primary rounded-full"
              ></motion.div>
              <p className="md:translate-y-10 -translate-y-14 translate-x-4 text-gray-500 ">
                Image by freepik
              </p>
              <div className="absolute -top-[330px] left-80 md:-left-20 md:-top-[300px] lg:-top-[320px] lg:left-[200px] z-[1]">
                <motion.h2
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1.2,
                  }}
                  className="text-[100px] md:text-[140px] scale-150 font-bold text-darkGray/40 leading-none"
                >
                  Coffee Place
                </motion.h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-lightOrange pl-20 space-y-36 hidden lg:block"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Coffee Place
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Some other heading</h1>
                  <h1 className="text-sml opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>
        {/* sidebar menu section */}
        {sidebarIsOpen && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>

                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="h-60"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

export default Hero;
