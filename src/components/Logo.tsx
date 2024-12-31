import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-8"
    >
      <h1 className="text-2xl font-bold text-gray-900">ADHD Test</h1>
    </motion.div>
  );
};

export default Logo;