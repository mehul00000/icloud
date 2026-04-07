import { motion } from "motion/react";
import { Download, FileText, Calendar, ChevronRight } from "lucide-react";

export default function AdmitCard() {
  const admitCards = [
    {
      id: 1,
      exam: "Mid Term Examination",
      session: "ODD 2025-2026",
      semester: "3rd Semester",
      date: "Nov 2025",
      status: "Available"
    },
    {
      id: 2,
      exam: "End Term Examination",
      session: "EVEN 2024-2025",
      semester: "2nd Semester",
      date: "May 2025",
      status: "Downloaded"
    }
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
        <h2 className="text-white text-xl font-light mt-2">Admit Card List</h2>
      </div>

      {/* List Container */}
      <div className="px-4 -mt-12 space-y-4">
        {admitCards.map((card) => (
          <motion.div 
            key={card.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            className="bg-white rounded-xl p-5 shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-4 active:scale-[0.98] transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#4A90E2]">
              <FileText size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-800 font-bold text-sm">{card.exam}</h3>
              <p className="text-gray-500 text-[11px] mt-1 font-light">{card.semester} • {card.session}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-[10px] text-gray-400 flex items-center gap-1 font-light">
                  <Calendar size={10} /> {card.date}
                </span>
                <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                  card.status === 'Available' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                }`}>
                  {card.status}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-[#4A90E2] hover:bg-blue-50 rounded-lg transition-colors">
                <Download size={20} />
              </button>
              <ChevronRight size={18} className="text-gray-300" />
            </div>
          </motion.div>
        ))}

        {admitCards.length === 0 && (
          <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <FileText size={32} className="text-gray-300" />
            </div>
            <p className="text-gray-400 text-sm font-light">No Admit Cards Found</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
