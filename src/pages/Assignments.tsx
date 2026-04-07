import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Assignments() {
  const [academicYear, setAcademicYear] = useState("2026-2027");

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#f5f7fb] min-h-screen font-sans flex flex-col"
    >
      {/* Blue Banner */}
      <div className="bg-[#4A90E2] px-6 py-6 h-32 flex items-start">
        <h2 className="text-white text-xl font-light mt-2">View Assignments</h2>
      </div>

      {/* Search Card */}
      <div className="px-4 -mt-12">
        <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50">
          <div className="space-y-5">
            <div>
              <label className="text-gray-400 text-xs mb-2 block font-light">
                Academic Year <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <select
                  value={academicYear}
                  onChange={(e) => setAcademicYear(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-xl py-3 px-4 text-gray-600 text-sm appearance-none focus:outline-none focus:border-blue-400 transition-colors"
                >
                  <option value="2026-2027">2026-2027</option>
                  <option value="2025-2026">2025-2026</option>
                  <option value="2024-2025">2024-2025</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <ChevronDown size={18} className="text-gray-500" />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="w-48 bg-[#4A90E2] text-white rounded-full py-2.5 text-sm font-light shadow-md active:scale-[0.98] transition-all">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* No Data Found */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 text-sm font-light tracking-wide">No Data Found</p>
      </div>
    </motion.div>
  );
}
