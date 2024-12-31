import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

const BackButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 transition-all duration-200"
    >
      <ChevronLeft size={20} />
      <span>Back</span>
    </motion.button>
  );
};

export default BackButton;