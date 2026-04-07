import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  version?: string;
  light?: boolean;
}

export default function Header({ title, showBack = false, version, light = false }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`${light ? 'bg-white text-gray-800' : 'bg-[#1E88E5] text-white'} px-4 py-3 flex items-center justify-between sticky top-0 z-50 h-16 shadow-sm`}>
      <div className="flex items-center w-10">
        {showBack ? (
          <button onClick={() => navigate(-1)} className="p-1 active:opacity-60">
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
        ) : (
          <button className="p-1 active:opacity-60">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        )}
      </div>

      <div className="flex-1 flex justify-center">
        {isHome ? (
          <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-md overflow-hidden border-2 border-white/20">
            <img
              src="/hd_logo.png"
              alt="iCloudEMS Logo"
              className="w-11 h-11 object-contain"
            />
          </div>
        ) : (
          <h1 className={`text-lg ${light ? 'font-light' : 'font-bold'} tracking-tight`}>{title}</h1>
        )}
      </div>

      <div className="flex items-center justify-end w-10">
        {version ? (
          <span className={`text-[10px] ${light ? 'text-gray-300' : 'text-white/60'} font-light whitespace-nowrap`}>{version}</span>
        ) : (
          <div 
            className={`w-9 h-9 ${light ? 'bg-gray-100' : 'bg-white/20'} rounded-full flex items-center justify-center cursor-pointer active:opacity-60`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
              <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
            </svg>
          </div>
        )}
      </div>
    </header>
  );
}
