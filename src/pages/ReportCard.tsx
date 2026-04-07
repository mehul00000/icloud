import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function ReportCard() {
  const [semester, setSemester] = useState("0");
  const [session, setSession] = useState("Consolidated");
  const [showResult, setShowResult] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const [resultData, setResultData] = useState({
    class: "",
    sem: "",
    year: ""
  });

  const handleSubmit = () => {
    const validSemesters = ["1", "2", "3"];

    if (validSemesters.includes(semester)) {
      let data = { class: "", sem: `Sem ${semester}`, year: "" };

      if (semester === "1") {
        data.class = "B.Tech CSE (AI & ML)_2024-2028_1_Sem 1";
        data.year = "2024-2025";
      } else if (semester === "2") {
        data.class = "B.Tech CSE (AI & ML)_2024-2028_2_Sem 2";
        data.year = "2024-2025";
      } else if (semester === "3") {
        data.class = "B.Tech CSE (AI & ML)_2024-2028_3_Sem 3";
        data.year = "2025-2026";
      }

      setResultData(data);
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  };

  // ✅ PNG VIEW (REPLACED OLD PDF UI)
  if (showPdf) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#ffffff",
          zIndex: 60,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px"
        }}
      >
        <button
          onClick={() => setShowPdf(false)}
          style={{
            marginBottom: "20px",
            color: "#3b82f6",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          ← Back
        </button>

        <img
          src={`/report-card-sem-${semester}.png`}
          alt="Report Card"
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "auto",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            borderRadius: "10px"
          }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="pb-24 bg-[#F5F7FB] min-h-screen font-sans"
    >
      {/* Header */}
      <div className="bg-[#4A90E2] pt-4 pb-16 px-6 rounded-b-[40px] shadow-lg">
        <h3 className="text-white font-light text-xl">Grade Card List</h3>
      </div>

      {/* Form */}
      <div className="px-5 -mt-10">
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
          <div className="space-y-6">

            {/* Semester */}
            <div>
              <label className="text-gray-400 text-sm mb-2 block">
                Select Semester *
              </label>
              <div className="relative">
                <select
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="w-full border rounded-xl p-3"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Session */}
            <div>
              <label className="text-gray-400 text-sm mb-2 block">
                Select Session *
              </label>
              <div className="relative">
                <select
                  value={session}
                  onChange={(e) => setSession(e.target.value)}
                  className="w-full border rounded-xl p-3"
                >
                  <option value="Consolidated">Consolidated</option>
                  <option value="Regular">Regular</option>
                  <option value="Re-appear">Re-appear</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#4A90E2] text-white py-3 rounded-xl"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* Result */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-5 mt-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <p className="text-gray-600">{resultData.class}</p>

              <div className="flex justify-between mt-4">
                <p>{resultData.sem}</p>
                <p>{resultData.year}</p>
              </div>
            </div>

            <button
              onClick={() => setShowPdf(true)}
              className="w-full mt-6 bg-[#4A90E2] text-white py-3 rounded-xl"
            >
              Print Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}