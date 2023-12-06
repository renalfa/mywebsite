import { generateIcon } from "@/app/func";
import { motion } from "framer-motion";

const OtherToolContent = ({ label, data }) => {
  return (
    <div>
      <h5 className="text-xl font-bold mb-2">{label}</h5>
      <motion.ul
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="grid gap-3 grid-cols-2 md:grid-cols-4"
      >
        {data.map((item, i) => (
          <motion.li
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  y: { stiffness: 1000, velocity: -100 },
                },
              },
            }}
            className="px-4 py-1 gap-2 flex items-center justify-center bg-gray-300 text-black rounded-full"
            key={i}
          >
            {generateIcon(item.icon)}
            {item.title}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default OtherToolContent;
