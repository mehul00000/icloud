import { Search, ChevronDown, Info } from "lucide-react";
import { motion } from "motion/react";

export default function ExamForm() {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="pb-24 bg-gray-50 min-h-screen font-sans"
    >
      {/* Student Info Card */}
      <div className="bg-[#4A90E2] pt-4 pb-12 px-4 rounded-b-[40px] shadow-lg">
        <div className="bg-white rounded-3xl p-6 flex items-start gap-4 shadow-sm">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-100 flex-shrink-0">
            <img 
              src="https://picsum.photos/seed/mehul/200/200" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-[#4A90E2] text-xl font-medium uppercase">MEHUL</h2>
            <div className="mt-2 space-y-1">
              <p className="text-[10px] text-gray-400 uppercase font-light">Class Name</p>
              <p className="text-[11px] text-gray-600 font-light leading-tight">
                B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4
              </p>
              <div className="pt-2">
                <p className="text-[10px] text-gray-400 uppercase font-light">Programme</p>
                <p className="text-[11px] text-gray-600 font-light leading-tight uppercase">
                  BACHELOR OF TECHNOLOGY - COMPUTER SCIENCE & ENGINEERING (ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING) [CS001]
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-light">Reg.No /Roll no</p>
                  <p className="text-[11px] text-gray-600 font-light">2401730266</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-light">Semester</p>
                  <p className="text-[11px] text-gray-600 font-light">Sem 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="px-4 -mt-6">
        <div className="bg-red-50 border border-red-100 rounded-3xl p-6 shadow-sm">
          <ul className="space-y-2 text-[11px] text-red-400 font-light leading-relaxed">
            <li>1. Please choose your courses for the exam form carefully. Ones Dues generated will not be reversed.</li>
            <li>2. Until Final Submission, you can apply or remove course.</li>
            <li>3. After Final Submission, you can not apply or remove course.</li>
            <li>4. After Final Submission only, your exam form will be considered.</li>
          </ul>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-gray-400 font-light text-lg mb-6">Select Exam Year and Session-</h3>
          
          <div className="space-y-6">
            <div>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 text-gray-400 font-light appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Please select</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <ChevronDown size={20} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 text-gray-400 font-light appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Exam Session</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <ChevronDown size={20} className="text-gray-400" />
                </div>
              </div>
            </div>

            <button className="w-full bg-[#4A90E2] text-white rounded-full py-4 font-light text-lg shadow-lg shadow-blue-200 active:scale-95 transition-transform mt-4">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Registration List */}
      <div className="px-4 mt-6">
        <h3 className="text-gray-400 font-light text-lg mb-4">My Exam Registration</h3>
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center">
          <p className="text-gray-400 font-light">All Courses</p>
        </div>
      </div>
    </motion.div>
  );
}
