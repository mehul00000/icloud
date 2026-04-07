import { Palmtree, Bell } from "lucide-react";
import { motion } from "motion/react";

export function Holidays() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-32 px-8 text-center"
    >
      <div className="w-24 h-24 bg-cyan-50 rounded-full flex items-center justify-center mb-6">
        <Palmtree size={48} className="text-cyan-500" />
      </div>
      <h3 className="text-gray-600 font-medium text-xl mb-2">Holidays</h3>
      <p className="text-gray-400 font-light">No upcoming holidays found.</p>
    </motion.div>
  );
}

export function Notifications() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-32 px-8 text-center"
    >
      <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6">
        <Bell size={48} className="text-orange-500" />
      </div>
      <h3 className="text-gray-600 font-medium text-xl mb-2">Notifications</h3>
      <p className="text-gray-400 font-light">You're all caught up!</p>
    </motion.div>
  );
}
