import { motion } from "framer-motion";
import servicesPicCoffeeMachine from "../../assets/services-pic-coffee-machine.png";
import servicesPicMilkshake from "../../assets/services-pic-milkshake.png";
import servicesPicFood from "../../assets/services-pic-food.png";

const servicesData = [
  {
    id: 1,
    height: 40,
    image: servicesPicCoffeeMachine,
    title: "Coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin metus elit, faucibus eu congue in, aliquet a nulla. Suspendisse sed tellus enim.",
  },
  {
    id: 2,
    height: 40,
    image: servicesPicMilkshake,
    title: "Milkshakes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin metus elit, faucibus eu congue in, aliquet a nulla. Suspendisse sed tellus enim.",
  },
  {
    id: 3,
    height: 40,
    image: servicesPicFood,
    title: "Food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin metus elit, faucibus eu congue in, aliquet a nulla. Suspendisse sed tellus enim.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

function Services() {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">tasty</span> coffee
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin metus
          elit, faucibus eu congue in, aliquet a nulla. Suspendisse sed tellus
          enim.{" "}
        </motion.p>
      </div>
      {/* card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => (
          <motion.div
            variants={cardVariants}
            key={service.id}
            className="text-center p-4 space-y-6"
          >
            <img
              src={service.image}
              alt={service.title}
              className={`h-${service.height} img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer`}
            />
            <div className="space-y-2 text-center">
              <h2 className="text-2xl text-primary font-bold">
                {service.title}
              </h2>
              <p className="text-darkGray">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
