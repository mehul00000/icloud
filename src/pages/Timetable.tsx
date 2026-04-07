import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

const timetableData: Record<string, any[]> = {
  mon: [
    { 
      time: "09:10 to 10:00", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - R PROGRAMMING FOR DATA SCIENCE AND DATA ANALYTICS LAB (PR) R PROGRAMMING FOR DATA SCIENCE AND DATA ANALYTICS LAB SectionD-AI-and-ML (LAB-19)", 
      teacher: "Samatrix Ishu" 
    },
    { 
      time: "10:05 to 10:55", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - R PROGRAMMING FOR DATA SCIENCE AND DATA ANALYTICS LAB (PR) R PROGRAMMING FOR DATA SCIENCE AND DATA ANALYTICS LAB SectionD-AI-and-ML (LAB-19)", 
      teacher: "Samatrix Ishu" 
    },
    { 
      time: "11:00 to 11:50", 
      subject: "B.Tech CSE (Full Stack)_2024-2028_4_Sem 4 Sem 4 - COMPETITIVE CODING-II (PP) COMPETITIVE CODING-II SectionA-FS-and-UX (A-113)", 
      teacher: "Badani Bhavesh" 
    },
    { 
      time: "11:50 to 12:40", 
      subject: "B.Tech CSE (Full Stack)_2024-2028_4_Sem 4 Sem 4 - COMPETITIVE CODING-II (PP) COMPETITIVE CODING-II SectionA-FS-and-UX (A-113)", 
      teacher: "Badani Bhavesh" 
    },
    { 
      time: "13:30 to 14:20", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - MACHINE LEARNING AND PATTERN RECOGNITION (PP) MACHINE LEARNING AND PATTERN RECOGNITION SectionD-AI-and-ML (B-211)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "14:20 to 15:10", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - COMMUNICATION & PERSONALITY DEVELOPMENT (PP) COMMUNICATION & PERSONALITY DEVELOPMENT SectionD-AI-and-ML (B-215)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "15:10 to 16:00", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - DATABASE MANAGEMENT SYSTEMS (PP) DATABASE MANAGEMENT SYSTEMS SectionD-AI-and-ML (B-213)", 
      teacher: "Samatrix Devraj Mehra" 
    },
  ],
  tue: [
    { 
      time: "09:10 to 10:00", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - MACHINE LEARNING PRACTICAL WITH PYTHON, SCIKIT-LEARN, MATPLOTLIB, TENSORFLOW (PR) SectionD-AI-and-ML (LAB-19)", 
      teacher: "Samatrix Ishu" 
    },
    { 
      time: "10:05 to 10:55", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - MACHINE LEARNING PRACTICAL WITH PYTHON, SCIKIT-LEARN, MATPLOTLIB, TENSORFLOW (PR) SectionD-AI-and-ML (LAB-19)", 
      teacher: "Samatrix Ishu" 
    },
    { 
      time: "11:00 to 11:50", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - ANALYSIS AND DESIGN OF ALGORITHMS (PP) SectionD-AI-and-ML (B-213)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "11:50 to 12:40", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - ANALYSIS AND DESIGN OF ALGORITHMS (PP) SectionD-AI-and-ML (B-213)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "14:20 to 15:10", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - DATABASE MANAGEMENT SYSTEMS (PP) SectionD-AI-and-ML (B-222)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "15:10 to 16:00", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - COMMUNICATION & PERSONALITY DEVELOPMENT (PP) SectionD-AI-and-ML (B-222)", 
      teacher: "Samatrix Devraj Mehra" 
    },
  ],
  wed: [
    { 
      time: "09:10 to 10:00", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - DATABASE MANAGEMENT SYSTEMS LAB (PR) SectionD-AI-and-ML (LAB-19)", 
      teacher: "Samatrix Ishu" 
    },
    { 
      time: "10:05 to 10:55", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - DATABASE MANAGEMENT SYSTEMS LAB (PR) SectionD-AI-and-ML (LAB-19)", 
      teacher: "Samatrix Ishu" 
    },
    { 
      time: "11:00 to 11:50", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - MACHINE LEARNING AND PATTERN RECOGNITION (PP) SectionD-AI-and-ML (B-211)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "11:50 to 12:40", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - 3D PRINTING TECHNOLOGY (PP) SectionA (B-215)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "13:30 to 14:20", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - COMMUNICATION & PERSONALITY DEVELOPMENT (PP) SectionD-AI-and-ML (B-215)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "14:20 to 15:10", 
      subject: "B.Tech CSE (Full Stack)_2024-2028_4_Sem 4 Sem 4 - COMPETITIVE CODING-II (PP) SectionA-FS-and-UX (A-113)", 
      teacher: "Badani Bhavesh" 
    },
    { 
      time: "15:10 to 16:00", 
      subject: "B.Tech CSE (Full Stack)_2024-2028_4_Sem 4 Sem 4 - COMPETITIVE CODING-II (PP) SectionA-FS-and-UX (A-113)", 
      teacher: "Badani Bhavesh" 
    },
  ],
  thu: [
    { 
      time: "09:10 to 10:00", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - 3D PRINTING TECHNOLOGY (PP) SectionA (B-215)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "10:05 to 10:55", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - 3D PRINTING TECHNOLOGY (PP) SectionA (B-215)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "11:00 to 11:50", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - MACHINE LEARNING AND PATTERN RECOGNITION (PP) SectionD-AI-and-ML (B-211)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "11:50 to 12:40", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - MACHINE LEARNING AND PATTERN RECOGNITION (PP) SectionD-AI-and-ML (B-211)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "13:30 to 14:20", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - COMMUNITY SERVICES (PP) SectionD-AI-and-ML (B-217)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "14:20 to 15:10", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - ANALYSIS AND DESIGN OF ALGORITHMS (PP) SectionD-AI-and-ML (B-211)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "15:10 to 16:00", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - ANALYSIS AND DESIGN OF ALGORITHMS (PP) SectionD-AI-and-ML (B-211)", 
      teacher: "Samatrix Devraj Mehra" 
    },
  ],
  fri: [
    { 
      time: "09:10 to 10:00", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - DATABASE MANAGEMENT SYSTEMS (PP) SectionD-AI&ML (B-213)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "10:05 to 10:55", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - DATABASE MANAGEMENT SYSTEMS (PP) SectionD-AI&ML (B-213)", 
      teacher: "Samatrix Devraj Mehra" 
    },
    { 
      time: "11:00 to 11:50", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - R PROGRAMMING FOR DATA SCIENCE AND DATA ANALYTICS LAB (PR) SectionD-AI&ML (D-103)", 
      teacher: "Samatrix Ishu" 
    },
    { 
      time: "11:50 to 12:40", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - R PROGRAMMING FOR DATA SCIENCE AND DATA ANALYTICS LAB (PR) SectionD-AI&ML (D-103)", 
      teacher: "Samatrix Ishu" 
    },
    { 
      time: "14:20 to 15:10", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - ANALYSIS AND DESIGN OF ALGORITHMS LAB (PR) SectionD-AI&ML (LAB-19)", 
      teacher: "Samatrix Ishu" 
    },
    { 
      time: "15:10 to 16:00", 
      subject: "B.Tech CSE (AI & ML)_2024-2028_4_Sem 4 Sem 4 - ANALYSIS AND DESIGN OF ALGORITHMS LAB (PR) SectionD-AI&ML (LAB-19)", 
      teacher: "Samatrix Ishu" 
    },
  ],
  sat: [],
  sun: [],
};

const days = [
  { id: 'mon', name: 'Mon', date: '6' },
  { id: 'tue', name: 'Tue', date: '7' },
  { id: 'wed', name: 'Wed', date: '8' },
  { id: 'thu', name: 'Thu', date: '9' },
  { id: 'fri', name: 'Fri', date: '10' },
  { id: 'sat', name: 'Sat', date: '11' },
  { id: 'sun', name: 'Sun', date: '12' },
];

export default function Timetable() {
  const [activeDay, setActiveDay] = useState('mon');

  useEffect(() => {
    const today = new Date();
    const dayIndex = today.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const dayMap = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const currentDayId = dayMap[dayIndex];
    
    // If today is a weekday, set it as active
    if (timetableData[currentDayId]?.length > 0) {
      setActiveDay(currentDayId);
    } else {
      // Default to Monday if it's weekend or no classes
      setActiveDay('mon');
    }
  }, []);

  const activeClasses = timetableData[activeDay] || [];

  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="pb-24 bg-gray-50 min-h-screen font-sans"
    >
      {/* Calendar Header */}
      <div className="bg-[#4A90E2] text-white py-4 px-4 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <button className="p-1 opacity-80 hover:opacity-100 transition-opacity">
            <ChevronLeft size={24} />
          </button>
          <div className="text-center">
            <p className="text-lg font-light">Apr</p>
            <p className="text-2xl font-light">2026</p>
          </div>
          <button className="p-1 opacity-80 hover:opacity-100 transition-opacity">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-between items-center border-t border-white/20 pt-4">
          {days.map((day) => (
            <div key={day.id} className="flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase opacity-70 font-light">{day.name}</span>
              <button
                onClick={() => setActiveDay(day.id)}
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center text-lg font-light transition-all",
                  activeDay === day.id ? "bg-[#F5A623] text-white shadow-md" : "bg-white text-gray-600"
                )}
              >
                {day.date}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Timetable List */}
      <div className="px-4 py-6 space-y-4">
        {activeClasses.length > 0 ? (
          activeClasses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4"
            >
              <div className="flex flex-col items-center justify-start pt-1 min-w-[80px]">
                <Clock size={16} className="text-gray-400 mb-1" />
                <span className="text-[10px] text-gray-400 whitespace-nowrap">{item.time}</span>
              </div>
              
              <div className="flex-1 space-y-3">
                <p className="text-[13px] text-gray-600 leading-relaxed font-light">
                  {item.subject}
                </p>
                
                <div className="inline-block bg-blue-50 text-[#4A90E2] px-4 py-1.5 rounded-full text-[12px] font-light">
                  {item.teacher}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-32 px-8 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-lg border-dashed" />
            </div>
            <p className="text-gray-400 font-light text-xl">No classes scheduled for today</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
