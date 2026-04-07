import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[60px] bg-white border-t border-[#eee] flex items-center justify-around px-2 z-50">
      <button 
        onClick={() => navigate("/")}
        className="flex flex-col items-center gap-1 flex-1 active:opacity-60"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke={isActive("/") ? "#2196F3" : "#aaa"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
        <span className={cn("text-[9px] font-semibold", isActive("/") ? "text-[#2196F3]" : "text-[#aaa]")}>Home</span>
      </button>

      <button 
        onClick={() => navigate("/notifications")}
        className="flex flex-col items-center gap-1 flex-1 active:opacity-60"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke={isActive("/notifications") ? "#2196F3" : "#aaa"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <span className={cn("text-[9px] font-semibold", isActive("/notifications") ? "text-[#2196F3]" : "text-[#aaa]")}>Notification</span>
      </button>
    </nav>
  );
}
