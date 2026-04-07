import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import Fees from "./pages/Fees";
import Attendance from "./pages/Attendance";
import Timetable from "./pages/Timetable";
import ExamForm from "./pages/ExamForm";
import ReportCard from "./pages/ReportCard";
import AdmitCard from "./pages/AdmitCard";
import Assignments from "./pages/Assignments";
import CourseRegistration from "./pages/CourseRegistration";
import Grievance from "./pages/Grievance";
import { Holidays, Notifications } from "./pages/Misc";

function AppContent() {
  const location = useLocation();
  
  const getHeaderProps = () => {
    switch (location.pathname) {
      case "/":
        return { showSupport: true };
      case "/fees":
        return { title: "Fees", showBack: true };
      case "/attendance":
        return { title: "Attendance", showBack: true };
      case "/timetable":
        return { title: "TimeTable", showBack: true };
      case "/exam-form":
        return { title: "Exam Form", showBack: true };
      case "/admit-card":
        return { title: "Admit Card", showBack: true, version: "2.4.3", light: true };
      case "/assignments":
        return { title: "Assignments", showBack: true, version: "2.4.3", light: true };
      case "/course-registration":
        return { title: "Course Registration", showBack: true, version: "2.4.3", light: true };
      case "/grievance":
        return { title: "Student Request Service", showBack: true, version: "2.4.3", light: true };
      case "/report-card":
        return { title: "Report Card", showBack: true, version: "2.4.3" };
      case "/holidays":
        return { title: "Holidays", showBack: true };
      case "/notifications":
        return { title: "Notifications", showBack: true };
      default:
        return { showBack: true };
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-gray-50 shadow-2xl relative overflow-hidden">
      <Header {...getHeaderProps()} />
      
      <main className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/exam-form" element={<ExamForm />} />
            <Route path="/admit-card" element={<AdmitCard />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/course-registration" element={<CourseRegistration />} />
            <Route path="/grievance" element={<Grievance />} />
            <Route path="/report-card" element={<ReportCard />} />
            <Route path="/holidays" element={<Holidays />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>

      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
