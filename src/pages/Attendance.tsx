import { Calendar, Clock, BookOpen, Search, RefreshCw, Menu } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const tabs = [
  { id: 'day-wise', title: 'Day Wise', icon: <Calendar size={20} /> },
  { id: 'overall', title: 'Overall', icon: <Clock size={20} /> },
  { id: 'subject-wise', title: 'Subject Wise', icon: <BookOpen size={20} /> },
];

export default function Attendance() {
  const [activeTab, setActiveTab] = useState('day-wise');

  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="pb-24 bg-gray-50 min-h-screen font-sans"
    >
      {/* Blue Header Section */}
      <div className="bg-[#4A90E2] pt-4 pb-12 px-4 rounded-b-[40px] shadow-lg">
        <div className="flex justify-around items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex flex-col items-center gap-2 px-6 py-4 rounded-3xl transition-all active:scale-95",
                activeTab === tab.id ? "bg-white text-[#4A90E2] shadow-md" : "text-white opacity-80"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center",
                activeTab === tab.id ? "bg-blue-50" : "bg-white/20"
              )}>
                {tab.icon}
              </div>
              <span className="text-xs font-light">{tab.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="px-4 -mt-6">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-gray-400 font-light text-lg mb-6">Day Wise Attendance</h3>
          
          <div className="space-y-6">
            <div>
              <label className="text-gray-400 text-xs font-light block mb-2">Academic Year</label>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 text-gray-600 font-light appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>2025-2026</option>
                  <option>2024-2025</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <Menu size={16} className="text-gray-400 rotate-90" />
                </div>
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-xs font-light block mb-2">Month</label>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 text-gray-600 font-light appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>April</option>
                  <option>March</option>
                  <option>February</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <Menu size={16} className="text-gray-400 rotate-90" />
                </div>
              </div>
            </div>

            <button className="w-full bg-[#4A90E2] text-white rounded-full py-4 font-light text-lg shadow-lg shadow-blue-200 active:scale-95 transition-transform mt-4">
              Search
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
