import { motion } from "motion/react";
import { Plus } from "lucide-react";

export default function Grievance() {
  const clubApplications = [
    {
      id: 1,
      clubName: "9. Management Society",
      startDate: "01/09/2025",
      endDate: "11/10/2025",
      appliedDate: "22/09/2025 08:45:51 AM",
      description: ""
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
        <h2 className="text-white text-xl font-light mt-2">Apply For Club</h2>
      </div>

      {/* Content Container */}
      <div className="px-4 -mt-12 space-y-4">
        {/* Header Card */}
        <div className="bg-white rounded-xl p-4 shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center justify-between">
          <h3 className="text-gray-500 text-sm font-light">Apply Club List</h3>
          <button className="bg-[#4A90E2] text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-1 active:scale-95 transition-transform">
            <Plus size={18} /> Add
          </button>
        </div>

        {/* Club Cards */}
        {clubApplications.map((app) => (
          <div 
            key={app.id}
            className="bg-white rounded-xl p-5 shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-blue-100 relative"
          >
            <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-x-2 gap-y-6">
              {/* Column 1 */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-gray-400 text-[11px] font-light">Club Name :</p>
                  <p className="text-gray-600 text-xs font-light leading-relaxed">{app.clubName}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-400 text-[11px] font-light">Club Description :</p>
                  <p className="text-gray-600 text-xs font-light">{app.description || ""}</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-gray-400 text-[11px] font-light">Start Date :</p>
                  <p className="text-gray-600 text-xs font-light">{app.startDate}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-400 text-[11px] font-light">Applied Date :</p>
                  <p className="text-gray-600 text-xs font-light leading-tight">{app.appliedDate}</p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-gray-400 text-[11px] font-light">End Date :</p>
                  <p className="text-gray-600 text-xs font-light">{app.endDate}</p>
                </div>
              </div>
            </div>
            
            {/* Bottom shadow/border effect from image */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400/5 rounded-b-xl"></div>
          </div>
        ))}

        {clubApplications.length === 0 && (
          <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <p className="text-gray-400 text-sm font-light">No Data Found</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
