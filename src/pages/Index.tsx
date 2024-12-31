import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      title: "MEDICATION",
      image: "/lovable-uploads/e01b1607-0f95-428e-aae1-cf2ff0ce3f88.png",
    },
    {
      title: "COACHING 1:1",
      image: "/lovable-uploads/e01b1607-0f95-428e-aae1-cf2ff0ce3f88.png",
    },
    {
      title: "GROUP THERAPY",
      image: "/lovable-uploads/e01b1607-0f95-428e-aae1-cf2ff0ce3f88.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FF] p-6">
      <div className="max-w-6xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 rounded-full bg-white shadow-sm transition-all duration-200"
        >
          <ChevronLeft size={20} />
          <span className="font-medium">BACK</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-16 mb-12"
        >
          <img
            src="/lovable-uploads/9fa8ca05-6efb-4e96-b988-d0dfb0e6b929.png"
            alt="ADHD Test Logo"
            className="h-12 mx-auto mb-12"
          />
          <h1 className="text-3xl font-bold text-[#1A1F2C] mb-4">
            We want to be super clear and transparent from the get go.
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            We know for many people, a diagnosis is all they are looking for, that's fine with us.
            Your clinician will be able to help work with you to figure out what you may need.
          </p>
          <p className="text-gray-600">
            Here are some of the things they might suggest:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h2 className="text-sm font-semibold text-center mb-6">
                {service.title}
              </h2>
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            We want to make sure you know this, going into it,
            so you can make choices that are right for you.
          </p>
          <Button
            className="bg-[#C026D3] hover:bg-[#A21CAF] text-white px-8 py-6 rounded-full text-lg font-medium"
          >
            BOOK AN APPOINTMENT
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;