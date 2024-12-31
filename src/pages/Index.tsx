import { motion } from "framer-motion";
import { Check } from "lucide-react";
import BackButton from "../components/BackButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FF] p-6">
      <div className="max-w-6xl mx-auto">
        <BackButton />
        
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
          <h1 className="text-3xl font-bold text-foreground mb-3">Thanks Cameron.</h1>
          <p className="text-gray-600">Here are our services available in Warwick.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Medical Treatment Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-sm font-semibold text-[#1A1F2C] tracking-wider mb-4">
              MEDICAL TREATMENT
            </h2>
            <p className="text-gray-600 mb-6">
              Comprehensive medication and lifestyle guidance
            </p>
            
            <div className="mb-6">
              <div className="flex items-baseline mb-2">
                <span className="text-sm text-gray-500">£</span>
                <span className="text-4xl font-bold text-[#1A1F2C]">599</span>
                <span className="text-sm text-gray-500 ml-1">Initial appointment</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-sm text-gray-500">£</span>
                <span className="text-4xl font-bold text-[#1A1F2C]">29</span>
                <span className="text-sm text-gray-500 ml-1">Membership fees</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Check size={20} className="text-primary" />
                <span>Monthly follow up</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Check size={20} className="text-primary" />
                <span>From a psychiatric mental health nurse practitioner (PMHP) or Medical Doctor (MD)</span>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-primary-hover text-white rounded-lg py-3 font-medium transition-colors">
              BOOK AN APPOINTMENT
            </button>
          </motion.div>

          {/* ADHD Coaching Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-sm font-semibold text-[#1A1F2C] tracking-wider mb-4">
              ADHD COACHING + THERAPY
            </h2>
            <p className="text-gray-600 mb-6">
              Get personalised ADHD support, using proven strategies to help you thrive in daily life.
            </p>
            
            <div className="mb-6">
              <div className="flex items-baseline mb-2">
                <span className="text-sm text-gray-500">£</span>
                <span className="text-4xl font-bold text-[#1A1F2C]">59</span>
                <span className="text-sm text-gray-500 ml-1">Initial appointment</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-sm text-gray-500">£</span>
                <span className="text-4xl font-bold text-[#1A1F2C]">159</span>
                <span className="text-sm text-gray-500 ml-1">Membership fees</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Check size={20} className="text-primary" />
                <span>Weekly or biweekly 45 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Check size={20} className="text-primary" />
                <span>From licensed therapists or expert coaches</span>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-primary-hover text-white rounded-lg py-3 font-medium transition-colors">
              BOOK AN APPOINTMENT
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;