import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

import WeeklyReports from "../components/reports/WeeklyReports";
import Sidebar from "../components/ui/Sidebar";
import colors from "../constants/colors";


const Reports = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex text-white overflow-hidden"
      style={{ background: colors.gradientVertical }}
    >
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <motion.main
        animate={{
          marginLeft: sidebarOpen ? 220 : 70,
          width: sidebarOpen
            ? "calc(100% - 220px)"
            : "calc(100% - 70px)",
        }}
        transition={{ duration: 0.4, type: "tween" }}
        className="p-6 overflow-y-auto scrollbar-hide"
      >
        <WeeklyReports />
      </motion.main>
    </div>
  );
};

export default Reports;
