import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import React from "react";
// import NotificationHighlightsCards from "../components/notification/NotificationHighlightsCards";
// import NotificationMetricsCards from "../components/notification/NotificationMetricsCards";
// import TrustSupportPerformance from "../components/trust-safety/TrustSupportPerformance";
// import DemandSideMetricsCards from "../components/demand-side/DemandSideMetricsCards ";
// import SupplySideMetricsTable from "../components/supply-side/SupplySideMetricsTable";
// import DemandSideMetricsTable from "../components/demand-side/DemandSideMetricsTable";
// import TimeOfDayRechargeChart from "../components/recharge/TimeOfDayRechargeChart";
// import RechargeMetricsTable from "../components/recharge/RechargeMetricsTable";
// import NotificationCharts from "../components/notification/NotificationCharts";
// import TrustMetricsCards from "../components/trust-safety/TrustMetricsCards";
// import NotificationStats from "../components/notification/NotificationStats";
// import TrustSafetyStats from "../components/trust-safety/TrustSafetyStats";
// import SupplySideCharts from "../components/supply-side/SupplySideCharts";
// import DemandSideCharts from "../components/demand-side/DemandSideCharts";
// import SupplySideStats from "../components/supply-side/SupplySideStats";
// import DemandSideStats from "../components/demand-side/DemandSideStats";
// import RechargeCharts from "../components/recharge/RechargeCharts";
// import TrustCharts from "../components/trust-safety/TrustCharts";
// import RechargeStats from "../components/recharge/RechargeStats";
// import DateFilterBar from "../components/ui/DateFilterBar";
// import axiosInstance from "../api/axiosInstance";
// import Sidebar from "../components/ui/Sidebar";
// import colors from "../constants/colors";
// const filterMap = {
//     Yesterday: "yesterday",
//     "Last 2 Days": "day_before_yesterday",
//     "Last 7 Days": "7d",
//     "Last 30 Days": "30d",
//     "This Month": "30d",
// };
// const Reports = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [filter, setFilter] = useState("yesterday");
//     const [trustSafetyStats, setTrustSafetyStats] = useState(null);
//     const [packDistributionData, setPackDistributionData] = useState([]);
//     const [trustSafetyChartData, setTrustSafetyChartData] = useState(null);
//     const [hourlyRechargeData, setHourlyRechargeData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const fetchData = async (selectedFilter = filter) => {
//         try {
//             setLoading(true);
//             const [kpiRes, revenueMixRes,packDistributionRes,hourlyRes] =
//                 await Promise.all([
//                     axiosInstance.get("/api/v1/trust/dashboard-cards", {
//                         params: { filter: selectedFilter },
//                     }),
//                     axiosInstance.get("/api/v1/trust/insights", {
//                         params: { filter: selectedFilter },
//                     }),
//                     axiosInstance.get("/api/v1/trust/metrics-tables", {
//                         params: { filter: selectedFilter },
//                     }),
//                      axiosInstance.get("/api/v1/trust/support-performance", {
//                     params: { filter: selectedFilter },
//                 }),
//                 ]);
//             setTrustSafetyStats(kpiRes?.data.data);
//             setTrustSafetyChartData(revenueMixRes.data.data);
//             //setHourlyRechargeData(hourlyRes.data.data || []);
//             setPackDistributionData(packDistributionRes.data.data || []);
//             setHourlyRechargeData(hourlyRes.data.data || []);
//         } catch (err) {
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };
//     useEffect(() => {
//         fetchData(filter);
//     }, [filter]);
//     return (
//         <div
//             className="min-h-screen flex text-white overflow-hidden"
//             style={{ background: colors.gradientVertical }}
//         >
//             <Sidebar
//                 isOpen={sidebarOpen}
//                 toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
//             />
//             <motion.main
//                 animate={{
//                     marginLeft: sidebarOpen ? 220 : 70,
//                     width: sidebarOpen
//                         ? "calc(100% - 220px)"
//                         : "calc(100% - 70px)",
//                 }}
//                 transition={{ duration: 0.4, type: "tween" }}
//                 className="p-6 overflow-y-auto scrollbar-hide"
//             >
//                 <div className="space-y-1">
//                     <DateFilterBar
//                         onFilterChange={(value) =>
//                             setFilter(filterMap[value] || "yesterday")
//                         }
//                         onRefresh={() => fetchData(filter)}
//                     />
//                     {/* <TrustSafetyStats
//                         data={trustSafetyStats}
//                         loading={loading}
//                     />
//                     <TrustCharts data={trustSafetyChartData} />
//                     <TrustMetricsCards data={packDistributionData}/>
//                     {/* <TimeOfDayRechargeChart data={hourlyRechargeData} />
//                     <RechargeMetricsTable data={packDistributionData}/> */}
//                     {/* <TrustSupportPerformance data={hourlyRechargeData}/> */} */
//                 </div>
//             </motion.main>
//         </div>
//     );
// };
// export default Reports;
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
