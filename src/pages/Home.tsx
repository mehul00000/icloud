import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="pb-24 pt-4 px-3 bg-[#f5f7fb] min-h-screen font-sans"
    >
      {/* GREETING */}
      <motion.div variants={item} className="text-sm font-bold text-[#333] mb-3">
        Good Afternoon ☀️ MEHUL
      </motion.div>

      {/* SEARCH */}
      <motion.div variants={item} className="bg-white rounded-3xl px-4 py-2.5 flex items-center gap-2 mb-4 shadow-[0_1px_6px_rgba(0,0,0,0.07)]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input 
          type="text" 
          placeholder="Search modules..." 
          className="border-none outline-none text-sm text-[#aaa] w-full bg-transparent"
        />
      </motion.div>

      {/* BIG TILES */}
      <div className="grid grid-cols-2 gap-2.5 mb-2.5">
        <motion.div 
          variants={item}
          onClick={() => navigate("/attendance")}
          className="bg-[#fce4e4] rounded-2xl p-3.5 relative overflow-hidden min-h-[80px] flex flex-col justify-between cursor-pointer active:scale-95 transition-transform"
        >
          <span className="text-sm font-bold text-[#333]">Attendance</span>
          <div className="absolute right-2 bottom-1.5 w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
              <rect x="14" y="10" width="36" height="44" rx="4" fill="#ef9a9a" opacity="0.5"/>
              <rect x="16" y="14" width="32" height="38" rx="3" fill="#fff" opacity="0.7"/>
              <rect x="24" y="8" width="16" height="6" rx="3" fill="#e57373"/>
              <line x1="22" y1="24" x2="42" y2="24" stroke="#e57373" strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="30" x2="42" y2="30" stroke="#ef9a9a" strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="36" x2="34" y2="36" stroke="#ef9a9a" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="44" cy="44" r="10" fill="#e53935"/>
              <path d="M40 44l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
        <motion.div 
          variants={item}
          onClick={() => navigate("/timetable")}
          className="bg-[#e8eaf6] rounded-2xl p-3.5 relative overflow-hidden min-h-[80px] flex flex-col justify-between cursor-pointer active:scale-95 transition-transform"
        >
          <span className="text-sm font-bold text-[#333]">Timetable</span>
          <div className="absolute right-2 bottom-1.5 w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
              <rect x="10" y="14" width="36" height="36" rx="5" fill="#c5cae9" opacity="0.6"/>
              <rect x="12" y="20" width="32" height="28" rx="3" fill="#fff" opacity="0.8"/>
              <rect x="10" y="14" width="36" height="10" rx="5" fill="#7986cb"/>
              <circle cx="20" cy="19" r="2" fill="white" opacity="0.8"/>
              <circle cx="36" cy="19" r="2" fill="white" opacity="0.8"/>
              <circle cx="46" cy="46" r="12" fill="#3f51b5" opacity="0.9"/>
              <circle cx="46" cy="46" r="10" fill="white"/>
              <line x1="46" y1="40" x2="46" y2="46" stroke="#3f51b5" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="46" y1="46" x2="51" y2="46" stroke="#3f51b5" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="16" y1="30" x2="38" y2="30" stroke="#c5cae9" strokeWidth="1.5"/>
              <line x1="16" y1="36" x2="38" y2="36" stroke="#c5cae9" strokeWidth="1.5"/>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* SMALL TILES */}
      <div className="grid grid-cols-3 gap-2.5 mb-2.5">
        <motion.div 
          variants={item}
          onClick={() => navigate("/fees")}
          className="bg-[#e0f7fa] rounded-2xl p-3 relative overflow-hidden min-h-[72px] flex flex-col justify-between cursor-pointer active:scale-95 transition-transform"
        >
          <span className="text-[11.5px] font-bold text-[#333]">Fees</span>
          <div className="absolute right-1.5 bottom-1 w-9 h-9 flex items-center justify-center">
            <svg viewBox="0 0 48 48" fill="none" width="34" height="34">
              <rect x="6" y="8" width="28" height="32" rx="4" fill="#80deea" opacity="0.5"/>
              <rect x="8" y="12" width="24" height="26" rx="3" fill="white" opacity="0.8"/>
              <circle cx="20" cy="25" r="7" fill="#00acc1" opacity="0.6"/>
              <text x="17" y="29" fontSize="9" fill="#006064" fontWeight="bold" fontFamily="sans-serif">$</text>
              <line x1="12" y1="17" x2="28" y2="17" stroke="#80deea" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>
        <motion.div 
          variants={item}
          className="bg-[#f3e5f5] rounded-2xl p-3 relative overflow-hidden min-h-[72px] flex flex-col justify-between cursor-pointer active:scale-95 transition-transform"
        >
          <span className="text-[11.5px] font-bold text-[#333]">Holidays</span>
          <div className="absolute right-1.5 bottom-1 w-9 h-9 flex items-center justify-center">
            <svg viewBox="0 0 48 48" fill="none" width="34" height="34">
              <rect x="6" y="10" width="28" height="28" rx="4" fill="#ce93d8" opacity="0.5"/>
              <rect x="8" y="16" width="24" height="20" rx="3" fill="white" opacity="0.8"/>
              <rect x="6" y="10" width="28" height="8" rx="4" fill="#ab47bc" opacity="0.7"/>
              <circle cx="14" cy="14" r="2" fill="white" opacity="0.9"/>
              <circle cx="28" cy="14" r="2" fill="white" opacity="0.9"/>
              <text x="16" y="30" fontSize="11" fill="#ab47bc" fontWeight="bold" fontFamily="sans-serif">★</text>
            </svg>
          </div>
        </motion.div>
        <motion.div 
          variants={item}
          className="bg-[#fff3e0] rounded-2xl p-3 relative overflow-hidden min-h-[72px] flex flex-col justify-between cursor-pointer active:scale-95 transition-transform"
        >
          <span className="text-[11.5px] font-bold text-[#333]">Notifications</span>
          <div className="absolute right-1.5 bottom-1 w-9 h-9 flex items-center justify-center">
            <svg viewBox="0 0 48 48" fill="none" width="34" height="34">
              <path d="M24 8 C16 8 12 14 12 20 L12 30 L8 34 L40 34 L36 30 L36 20 C36 14 32 8 24 8Z" fill="#ffcc80" opacity="0.6"/>
              <path d="M24 8 C16 8 12 14 12 20 L12 30 L8 34 L40 34 L36 30 L36 20 C36 14 32 8 24 8Z" fill="none" stroke="#ffa726" strokeWidth="1.5"/>
              <rect x="20" y="34" width="8" height="4" rx="2" fill="#ff8f00"/>
              <circle cx="32" cy="12" r="5" fill="#f44336"/>
              <text x="30" y="15" fontSize="7" fill="white" fontWeight="bold" fontFamily="sans-serif">3</text>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* ICON GRID CARD */}
      <motion.div variants={item} className="bg-white rounded-2xl p-3.5 mb-2.5 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-4 gap-y-1.5 gap-x-0.5 mb-1">
          {[
            { id: 'assignment', label: 'Assignment', color: '#e8eaf6', stroke: '#5c6bc0', path: 'M9 8h6M9 12h6M9 16h3' },
            { id: 'enrollment', label: 'Enrollment', color: '#e0f2f1', stroke: '#26a69a', path: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
            { id: 'feedback', label: 'Feedback', color: '#fff8e1', stroke: '#ffa000', path: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
            { id: 'undertaking', label: 'Undertaking', color: '#fce4ec', stroke: '#e91e63', path: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' },
            { id: 'grievance', label: 'Grievance', color: '#f3e5f5', stroke: '#9c27b0', path: 'M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0' },
            { id: 'lms', label: 'LMS', color: '#e8f5e9', stroke: '#43a047', path: 'M2 3h20v14H2z' },
            { id: 'mentorship', label: 'Mentorship', color: '#e3f2fd', stroke: '#1e88e5', path: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
            { id: 'neft', label: 'NEFT Form', color: '#fff3e0', stroke: '#ef6c00', path: 'M5 2h14v20H5z' },
          ].map((icon) => (
            <div 
              key={icon.id} 
              onClick={() => {
                if (icon.id === 'assignment') navigate("/assignments");
                else if (icon.id === 'enrollment') navigate("/course-registration");
                else if (icon.id === 'grievance') navigate("/grievance");
              }}
              className="flex flex-col items-center gap-1.5 p-1.5 cursor-pointer active:opacity-60"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: icon.color }}>
                <svg viewBox="0 0 24 24" fill="none" stroke={icon.stroke} strokeWidth="1.8" strokeLinecap="round" className="w-[22px] h-[22px]">
                  {icon.id === 'enrollment' ? (
                    <>
                      <path d={icon.path}/>
                      <circle cx="9" cy="7" r="4"/>
                      <line x1="19" y1="8" x2="19" y2="14"/>
                      <line x1="22" y1="11" x2="16" y2="11"/>
                    </>
                  ) : icon.id === 'grievance' ? (
                    <>
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </>
                  ) : icon.id === 'lms' ? (
                    <>
                      <rect x="2" y="3" width="20" height="14" rx="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                      <line x1="7" y1="8" x2="17" y2="8"/>
                      <line x1="7" y1="12" x2="13" y2="12"/>
                    </>
                  ) : icon.id === 'mentorship' ? (
                    <>
                      <path d={icon.path}/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </>
                  ) : icon.id === 'neft' ? (
                    <>
                      <rect x="5" y="2" width="14" height="20" rx="2"/>
                      <line x1="9" y1="7" x2="15" y2="7"/>
                      <line x1="9" y1="11" x2="15" y2="11"/>
                      <line x1="9" y1="15" x2="13" y2="15"/>
                      <path d="M16 16l2 2 4-4" stroke={icon.stroke} strokeWidth="1.5"/>
                    </>
                  ) : (
                    <>
                      {icon.id === 'assignment' && <rect x="5" y="3" width="14" height="18" rx="2"/>}
                      {icon.id === 'undertaking' && (
                        <>
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14,2 14,8 20,8"/>
                        </>
                      )}
                      <path d={icon.path}/>
                    </>
                  )}
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-[#555] text-center leading-tight">{icon.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center py-1 cursor-pointer active:opacity-60">
          <svg viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </motion.div>

      {/* ASSESSMENT HUB */}
      <motion.div variants={item} className="text-sm font-bold text-[#333] mb-2.5">Assessment Hub</motion.div>
      <div className="grid grid-cols-3 gap-2.5 mb-2.5">
        {[
          { id: 'admit-card', label: 'Admit Card', color: 'bg-[#fce4e4]', stroke: '#e53935', path: '/admit-card' },
          { id: 'exam-form', label: 'Exam Form', color: 'bg-[#ede7f6]', stroke: '#7b1fa2', path: '/' },
          { id: 'report-card', label: 'Report Card', color: 'bg-[#e8f5e9]', stroke: '#2e7d32', path: '/report-card' },
        ].map((hubItem) => (
          <motion.div 
            key={hubItem.id}
            variants={item}
            onClick={() => navigate(hubItem.path)}
            className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-transform"
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.10)] ${hubItem.color}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke={hubItem.stroke} strokeWidth="1.8" strokeLinecap="round" className="w-6.5 h-6.5">
                {hubItem.id === 'admit-card' ? (
                  <>
                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                    <circle cx="9" cy="11" r="2.5"/>
                    <line x1="13" y1="9" x2="18" y2="9"/>
                    <line x1="13" y1="13" x2="16" y2="13"/>
                  </>
                ) : hubItem.id === 'exam-form' ? (
                  <>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="9" y1="13" x2="15" y2="13"/>
                    <line x1="9" y1="17" x2="13" y2="17"/>
                  </>
                ) : (
                  <>
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <polyline points="8,17 12,13 16,17"/>
                    <polyline points="8,11 12,7 16,11"/>
                  </>
                )}
              </svg>
            </div>
            <span className="text-[10px] font-semibold text-[#555] text-center leading-tight">{hubItem.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
