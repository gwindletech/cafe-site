import { FaFacebook, FaGoogle, FaInstagram, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 flex flex-col"
          >
            <h1 className="text-3xl font-bold uppercase text-center md:text-start">
              Coffee Place
            </h1>
            <p className="text-sm text-center md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="flex flex-col items-center md:items-start">
              <p className="flex gap-2">
                <FaPhone />
                (01) 2345 6789
              </p>
              <p className="flex gap-2 mt-2">
                <FaMapLocation />
                1234 Coffee Place, Brisbane
              </p>
            </div>
          </motion.div>
          {/* footer links section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold text-center">Quick Links</h1>
            <div className="grid grid-cols-2 gap-6 px-12">
              {/* first column section */}
              <div className="flex justify-end">
                <ul className="space-y-2 text-center">
                  <li className="text-sm">Home</li>
                  <li className="text-sm">About</li>
                  <li className="text-sm">Contact</li>
                </ul>
              </div>
              {/* second column section */}
              <div className="flex justify-start">
                <ul className="space-y-2 text-center">
                  <li className="text-sm">Home</li>
                  <li className="text-sm">About</li>
                  <li className="text-sm">Contact</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* social links section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6 text-center"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex justify-center items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white p-2 rounded-full"
              >
                <FaFacebook className="text-primary text-2xl" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white p-2 rounded-full"
              >
                <FaInstagram className="text-primary text-2xl" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white p-2 rounded-full"
              >
                <FaGoogle className="text-primary text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright &copy; 2024 Coffee Place
        </p>
      </div>
    </div>
  );
}

export default Footer;
