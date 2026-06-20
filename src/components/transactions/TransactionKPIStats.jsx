// import { Receipt, IndianRupee, Wallet, AlertTriangle, } from "lucide-react";
// import { useEffect, useState } from "react";
// import React from "react";
// import axiosInstance from "../../api/axiosInstance";
// import StatsCard from "../ui/StatsCard";
// const TransactionKPIStats = ({ filter }) => {
//   const [stats, setStats] = useState(null);
//   const fetchStats = async () => {
//     try {
//       const response = await axiosInstance.get(
//         "/api/v1/transactions/audit/summary-kpi",
//         {
//           params: {
//             filter,
//           },
//         }
//       );
//       setStats(response?.data?.data || null);
//     } catch (error) {
//       console.error("Transaction KPI Error:", error);
//     }
//   };
//   useEffect(() => {
//     fetchStats();
//   }, [filter]);
//   const cards = [
//     {
//       title: "Total Transactions",
//       value: stats?.totalTransactions?.toLocaleString() || 0,
//       icon: Receipt,
//     },
//     {
//       title: "Expected Value",
//       value: `₹${stats?.totalExpectedValue?.toLocaleString() || 0}`,
//       icon: IndianRupee,
//     },
//     {
//       title: "Actual Value",
//       value: `₹${stats?.totalActualValue?.toLocaleString() || 0}`,
//       icon: Wallet,
//     },
//     {
//       title: "Flagged Transactions",
//       value: stats?.flaggedTransactions?.count || 0,
//       icon: AlertTriangle,
//       change: {
//         text: `${stats?.flaggedTransactions?.percentage || 0}%`,
//         direction:
//           (stats?.flaggedTransactions?.percentage || 0) > 0
//             ? "up"
//             : "down",
//       },
//     },
//   ];
//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns:
//           "repeat(auto-fit, minmax(220px, 1fr))",
//         gap: "16px",
//         marginTop:"12px"
//       }}
//     >
//       {cards.map((card) => (
//         <StatsCard
//           key={card.title}
//           title={card.title}
//           value={card.value}
//           icon={card.icon}
//           change={card.change}
//         />
//       ))}
//     </div>
//   );
// };
// export default TransactionKPIStats;
import { Receipt, IndianRupee, Wallet, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";

import axiosInstance from "../../api/axiosInstance";
import StatsCard from "../ui/StatsCard";


const TransactionKPIStats = ({
  filter,
  transactionType = "creator",
}) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  const endpoint =
    transactionType === "creator"
      ? "/api/v1/transactions/audit/creator/summary-kpi"
      : "/api/v1/transactions/audit/user/summary-kpi";

  const fetchStats = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.get(endpoint, {
        params: {
          filter,
        },
      });

      setStats(response?.data?.data || null);
    } catch (error) {
      console.error("Transaction KPI Error:", error);
      setStats(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [filter, transactionType]);

  const cards = [
    {
      title: "Total Transactions",
      value: loading
        ? "..."
        : stats?.totalTransactions?.toLocaleString() || 0,
      icon: Receipt,
    },
    {
      title: "Expected Value",
      value: loading
        ? "..."
        : `₹${stats?.totalExpectedValue?.toLocaleString() || 0}`,
      icon: IndianRupee,
    },
    {
      title: "Actual Value",
      value: loading
        ? "..."
        : `₹${stats?.totalActualValue?.toLocaleString() || 0}`,
      icon: Wallet,
    },
    {
      title: "Flagged Transactions",
      value: loading ? "..." : stats?.flaggedTransactions?.count || 0,
      icon: AlertTriangle,
      change: {
        text: `${stats?.flaggedTransactions?.percentage || 0}%`,
        direction:
          (stats?.flaggedTransactions?.percentage || 0) > 0
            ? "up"
            : "down",
      },
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px",
        marginTop: "12px",
      }}
    >
      {cards.map((card) => (
        <StatsCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          change={card.change}
        />
      ))}
    </div>
  );
};

export default TransactionKPIStats;
