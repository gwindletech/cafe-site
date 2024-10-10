import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

function Navbar({ sidebarIsOpen, setSidebarIsOpen }) {
  return (
    <nav className="absolute z-40 top-0 left-0 w-full text-white pt-10">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo */}
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className=" font-2xl font-semibold uppercase"
          >
            <span className="text-primary">Coffee</span> Place
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </motion.div>
          {/* hamburger */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
