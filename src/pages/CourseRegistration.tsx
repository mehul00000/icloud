import { useState } from "react";
import { motion } from "motion/react";

export default function CourseRegistration() {
  const [selectedClass, setSelectedClass] = useState(0);

  const classes = [
    { id: 0, name: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4" },
    { id: 1, name: "B.Tech CSE (AI & ML)_2024-2028_2_Sem 2 Sem 2" },
    { id: 2, name: "B.Tech CSE (AI & ML)_2024-2028_3_Sem 3 Sem 3" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#f5f7fb] min-h-screen font-sans flex flex-col pb-20"
    >
      {/* Blue Banner */}
      <div className="bg-[#4A90E2] px-6 py-6 h-32 flex items-start">
        <h2 className="text-white text-xl font-light mt-2">Student Course Registration</h2>
      </div>

      {/* Student Info Card */}
      <div className="px-4 -mt-12">
        <div className="bg-white rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50">
          <div className="flex gap-4 mb-4">
            <div className="w-24 h-28 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
              <img 
                src="https://icloudems.com/images/student_photo.png" 
                alt="Student" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Mehul";
                }}
              />
            </div>
            <div className="flex-1 space-y-1">
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Student Name</p>
                <p className="text-gray-700 text-sm font-medium">MEHUL</p>
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Class Name</p>
                <p className="text-gray-600 text-[11px] leading-tight">
                  B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 SectionD-AI-and-ML
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-gray-700 text-[10px] font-medium leading-tight">
                BACHELOR OF TECHNOLOGY - COMPUTER SCIENCE & ENGINEERING (ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Academic Year</p>
                <p className="text-gray-600 text-xs">2025-2026</p>
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Semester</p>
                <p className="text-gray-600 text-xs">Sem 4</p>
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Reg. No</p>
                <p className="text-gray-600 text-xs">2401730266</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Note Card */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-50 text-center space-y-2">
          <p className="text-gray-400 text-sm font-light">
            Note:- Max credit allowed 26.
          </p>
          <p className="text-gray-500 text-sm font-light">
            Credit Request Finalised.
          </p>
        </div>
      </div>

      {/* Class Selection */}
      <div className="mt-6 px-4">
        <p className="text-gray-500 text-sm font-light mb-3">Select your class-</p>
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {classes.map((cls, index) => (
            <div 
              key={cls.id}
              onClick={() => setSelectedClass(index)}
              className={`min-w-[160px] max-w-[160px] p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-center text-center ${
                selectedClass === index 
                ? "bg-[#E3F2FD] border-[#90CAF9] text-[#1E88E5]" 
                : "bg-white border-gray-200 text-gray-500"
              }`}
            >
              <p className="text-[11px] font-light leading-snug">
                {cls.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
