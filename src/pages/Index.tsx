import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import NameInput from "../components/NameInput";

const Index = () => {
  const [name, setName] = useState("");

  const handleNameSubmit = (submittedName: string) => {
    setName(submittedName);
    // Here we would typically move to the next step
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary-light to-background p-6"
    >
      <BackButton />
      
      <div className="w-full max-w-md space-y-8">
        <Logo />
        
        <AnimatePresence mode="wait">
          <NameInput onSubmit={handleNameSubmit} />
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Index;