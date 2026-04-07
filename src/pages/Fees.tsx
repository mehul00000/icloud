import { ArrowLeft, CreditCard, Home, Bus, GraduationCap, MoreHorizontal, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const feeOptions = [
  { id: 'all-fees', title: 'All Fees', subtitle: '(Incl. Misc)', icon: <IndianRupee className="text-blue-500" /> },
  { id: 'fees', title: 'Fees', icon: <Home className="text-blue-500" />, active: true },
  { id: 'apply-hostel', title: 'Apply Hostel', icon: <Home className="text-blue-500" /> },
  { id: 'apply-transport', title: 'Apply Transport', icon: <Bus className="text-blue-500" /> },
  { id: 'misc-fees', title: 'Miscellaneous Fees', icon: <GraduationCap className="text-blue-500" /> },
];

export default function Fees() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      className="pb-24 bg-[#f5f7fb] min-h-screen font-sans"
    >
      {/* Blue Header Section */}
      <div className="bg-[#4A90E2] pt-4 pb-20 px-5 rounded-b-[40px] shadow-lg relative">
        <div className="text-white mb-4">
          <h2 className="text-lg font-light opacity-90">Fees</h2>
          <p className="text-sm font-light opacity-70">My Fees</p>
        </div>

        {/* Student Profile Card */}
        <div className="bg-white rounded-3xl p-5 flex flex-col gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] absolute left-5 right-5 top-20">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-50 flex-shrink-0">
              <img 
                src="https://icloudems.com/images/logo.png" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-[#89c4f4] text-xl font-light tracking-wide">MEHUL</h2>
              <div className="mt-1">
                <p className="text-[10px] text-gray-300 font-light">Class</p>
                <p className="text-[11px] text-gray-500 font-light leading-tight">
                  B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-50 pt-3 space-y-3">
            <div>
              <p className="text-[10px] text-gray-300 font-light">PRN</p>
              <p className="text-[11px] text-gray-500 font-light">-</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-300 font-light">Programme</p>
              <p className="text-[11px] text-gray-500 font-light leading-tight">
                BACHELOR OF TECHNOLOGY - COMPUTER SCIENCE & ENGINEERING (ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING) [CS001]
              </p>
            </div>
            <div>
              <p className="text-[10px] text-gray-300 font-light">Application No</p>
              <p className="text-[11px] text-gray-500 font-light">KRMU2425315</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for the absolute card */}
      <div className="h-64"></div>

      {/* Fee Options Grid */}
      <div className="px-5">
        <div className="grid grid-cols-3 gap-3">
          {/* All Fees */}
          <button 
            onClick={() => navigate("/under-progress")}
            className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 active:scale-95 transition-all"
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-12 h-12">
                <circle cx="32" cy="32" r="28" fill="#e3f2fd" />
                <path d="M32 12 A20 20 0 0 1 52 32" stroke="#4A90E2" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M52 32 L56 28 M52 32 L48 28" stroke="#4A90E2" strokeWidth="3" fill="none" strokeLinecap="round" />
                <text x="32" y="40" fontSize="20" textAnchor="middle" fill="#4A90E2" fontWeight="bold">₹</text>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-gray-400 font-light">All Fees</p>
              <p className="text-[8px] text-gray-300 font-light">(Incl. Misc)</p>
            </div>
          </button>

          {/* Fees (Active) */}
          <button className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border-2 border-[#4A90E2] active:scale-95 transition-all">
            <div className="w-14 h-14 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-12 h-12">
                <path d="M10 50 L32 10 L54 50 Z" fill="#ffcc80" opacity="0.6" />
                <rect x="20" y="35" width="24" height="15" fill="#ffa726" />
                <rect x="28" y="40" width="8" height="10" fill="white" />
              </svg>
            </div>
            <p className="text-[10px] text-gray-400 font-light">Fees</p>
          </button>

          {/* Apply Hostel */}
          <button 
            onClick={() => navigate("/under-progress")}
            className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 active:scale-95 transition-all"
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-12 h-12">
                <rect x="10" y="20" width="44" height="24" rx="4" fill="#ef9a9a" />
                <rect x="15" y="25" width="34" height="14" rx="2" fill="#e53935" />
                <text x="32" y="35" fontSize="8" textAnchor="middle" fill="white" fontWeight="bold">HOSTEL</text>
                <line x1="20" y1="44" x2="20" y2="54" stroke="#333" strokeWidth="3" />
                <line x1="44" y1="44" x2="44" y2="54" stroke="#333" strokeWidth="3" />
              </svg>
            </div>
            <p className="text-[10px] text-gray-400 font-light">Apply Hostel</p>
          </button>

          {/* Apply Transport */}
          <button 
            onClick={() => navigate("/under-progress")}
            className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 active:scale-95 transition-all"
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-12 h-12">
                <rect x="10" y="20" width="44" height="24" rx="8" fill="#ffb74d" />
                <rect x="15" y="25" width="10" height="8" fill="white" opacity="0.6" />
                <rect x="30" y="25" width="10" height="8" fill="white" opacity="0.6" />
                <rect x="45" y="25" width="4" height="8" fill="white" opacity="0.6" />
                <circle cx="20" cy="44" r="5" fill="#333" />
                <circle cx="44" cy="44" r="5" fill="#333" />
              </svg>
            </div>
            <p className="text-[10px] text-gray-400 font-light">Apply Transport</p>
          </button>

          {/* Empty Space */}
          <div></div>

          {/* Miscellaneous Fees */}
          <button 
            onClick={() => navigate("/under-progress")}
            className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 active:scale-95 transition-all"
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-12 h-12">
                <path d="M10 25 L32 15 L54 25 L32 35 Z" fill="#42a5f5" />
                <path d="M15 27 V40 C15 40 32 48 49 40 V27" fill="#1e88e5" />
                <circle cx="32" cy="35" r="8" fill="#ffca28" />
                <text x="32" y="40" fontSize="10" textAnchor="middle" fill="#f57f17" fontWeight="bold">₹</text>
              </svg>
            </div>
            <p className="text-[10px] text-gray-400 font-light">Miscellaneous Fees</p>
          </button>
        </div>
      </div>

      {/* Outstanding Amount */}
      <div className="px-5 mt-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50 flex justify-between items-center">
          <span className="text-gray-300 font-light text-base">Total Outstanding Amount</span>
          <span className="text-gray-500 text-xl font-light">₹0</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="px-5 mt-3 grid grid-cols-2 gap-3">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50 text-center">
          <p className="text-gray-300 font-light text-xs mb-1">Academic</p>
          <p className="text-[#4A90E2] text-lg font-light">₹0</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50 text-center">
          <p className="text-gray-300 font-light text-xs mb-1">Academic Miscellaneous</p>
          <p className="text-[#4A90E2] text-lg font-light">₹0</p>
        </div>
      </div>
    </motion.div>
  );
}
