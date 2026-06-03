import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";

import DemandSideMetricsCards from "../components/demand-side/DemandSideMetricsCards ";
import SupplySideMetricsTable from "../components/supply-side/SupplySideMetricsTable";
import DemandSideMetricsTable from "../components/demand-side/DemandSideMetricsTable";
import SupplySideCharts from "../components/supply-side/SupplySideCharts";
import DemandSideCharts from "../components/demand-side/DemandSideCharts";
import SupplySideStats from "../components/supply-side/SupplySideStats";
import DemandSideStats from "../components/demand-side/DemandSideStats";
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

const DemandSide = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [filter, setFilter] = useState("yesterday");

  const [kpiData, setKpiData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [distributionData, setDistributionData] = useState({});

  const [loading, setLoading] = useState(false);
  const [metricsData, setMetricsData] = useState({});

  const fetchData = async (selectedFilter = filter) => {
    try {
      setLoading(true);

      const [kpiRes, hourlyRes, distributionRes, metricsRes] =
        await Promise.all([
          axiosInstance.get("/api/v1/demand/dashboard-cards", {
            params: { filter: selectedFilter },
          }),

          axiosInstance.get("/api/v1/demand/hourly-activity", {
            params: { filter: selectedFilter },
          }),

          axiosInstance.get("/api/v1/demand/charts", {
            params: { filter: selectedFilter },
          }),
          axiosInstance.get("/api/v1/demand/metrics-tables", {
            params: { filter: selectedFilter },
          }),
        ]);

      setKpiData(kpiRes.data.data);
      setHourlyData(hourlyRes.data.data);
      setDistributionData(distributionRes.data.data);
      setMetricsData(metricsRes.data.data);
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

          <DemandSideStats
            data={kpiData}
            loading={loading}
          />

          <DemandSideCharts
            hourlyData={hourlyData}
            distributionData={distributionData}
          />

          <DemandSideMetricsTable data={kpiData} />
          <DemandSideMetricsCards data={metricsData} />
        </div>
      </motion.main>
    </div>
  );
};

export default DemandSide;
