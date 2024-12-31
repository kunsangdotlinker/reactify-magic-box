import { useState } from "react";
import { motion } from "framer-motion";

interface NameInputProps {
  onSubmit: (name: string) => void;
}

const NameInput = ({ onSubmit }: NameInputProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md"
    >
      <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            FULL NAME
          </label>
          <input
            type="text"
            id="fullName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            placeholder="Enter your full name"
            autoFocus
          />
        </div>
        
        <button type="submit" className="button-primary">
          CONTINUE
        </button>

        <div className="text-center text-sm text-gray-500">
          Existing user?{" "}
          <a href="#" className="text-primary hover:text-primary-hover font-medium">
            Sign in here
          </a>
        </div>
      </form>
    </motion.div>
  );
};

export default NameInput;