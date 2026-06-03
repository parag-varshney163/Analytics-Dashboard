import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";

import SupplySideMetricsTable from "../components/supply-side/SupplySideMetricsTable";
import SupplySideCharts from "../components/supply-side/SupplySideCharts";
import SupplySideStats from "../components/supply-side/SupplySideStats";
import DateFilterBar from "../components/ui/DateFilterBar";
import axiosInstance from "../api/axiosInstance";
import Sidebar from "../components/ui/Sidebar";
import colors from "../constants/colors";


const filterMap = {
  Yesterday: "yesterday",
  "Last 2 Days": "day_before_yesterday",
  "Last 7 Days": "7d",
  "Last 30 Days": "30d",
  "This Month": "30d",
};

const SupplySide = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [filter, setFilter] = useState("yesterday");

  const [kpiData, setKpiData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  const [distributionData, setDistributionData] = useState(null);

  const [loading, setLoading] = useState(false);

  const fetchData = async (selectedFilter = filter) => {
    try {
      setLoading(true);

      const [kpiRes, hourlyRes, distributionRes] =
        await Promise.all([
          axiosInstance.get("/api/v1/supply/kpi", {
            params: { filter: selectedFilter },
          }),

          axiosInstance.get("/api/v1/supply/hourly-activity", {
            params: { filter: selectedFilter },
          }),

          axiosInstance.get("/api/v1/supply/distributions", {
            params: { filter: selectedFilter },
          }),
        ]);

      setKpiData(kpiRes.data.data);
      setHourlyData(hourlyRes.data.data);
      setDistributionData(distributionRes.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(filter);
  }, [filter]);

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
        <div className="space-y-1">
          <DateFilterBar
            onFilterChange={(value) =>
              setFilter(filterMap[value] || "yesterday")
            }
            onRefresh={() => fetchData(filter)}
          />

          <SupplySideStats
            data={kpiData}
            loading={loading}
          />

          <SupplySideCharts
            hourlyData={hourlyData}
            distributionData={distributionData}
          />

          <SupplySideMetricsTable data={kpiData} />
        </div>
      </motion.main>
    </div>
  );
};

export default SupplySide;