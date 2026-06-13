// import { IndianRupee, CreditCard, Users, BarChart3 } from "lucide-react";
// import React from "react";
// import colors from "../../constants/colors";
// const cardStyle = {
//   background: "rgba(255,255,255,0.03)",
//   border: "1px solid rgba(255,255,255,0.12)",
//   borderRadius: "12px",
//   padding: "14px",
//   minHeight: "115px",
//   transition: "all 0.3s ease",
// };
// export default function RechargeStats({ data, loading }) {
//   if (loading) {
//     return <div className="text-white">Loading...</div>;
//   }
//   if (!data) return null;
//   const stats = [
//     {
//       title: "Total Revenue",
//       value: `₹${(data.totalRevenue / 1000).toFixed(2)}K`,
//       icon: IndianRupee,
//     },
//     {
//       title: "Total Recharges",
//       value: data.totalRecharges?.toLocaleString() || "0",
//       icon: CreditCard,
//     },
//     {
//       title: "Unique Users",
//       value: data.uniqueUsers?.toLocaleString() || "0",
//       icon: Users,
//     },
//     {
//       title: "Avg Order Value",
//       value: `₹${Math.round(data.avgOrderValue || 0)}`,
//       icon: BarChart3,
//     },
//   ];
//   return (
//     <div style={{ marginTop: 20 }}>
//       <div style={{ marginBottom: 20 }}>
//         <h2
//           style={{
//             color: colors.textPrimary,
//             fontSize: 24,
//             fontWeight: 700,
//             margin: 0,
//             marginBottom: 6,
//           }}
//         >
//           Recharge Breakdown
//         </h2>
//         <p
//           style={{
//             color: colors.textSecondary,
//             fontSize: 14,
//             margin: 0,
//           }}
//         >
//           Granular analysis of monetization by pack, transaction type, and
//           user segment
//         </p>
//       </div>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
//           gap: "16px",
//         }}
//       >
//         {stats.map((item) => {
//           const Icon = item.icon;
//           return (
//             <div
//               key={item.title}
//               style={cardStyle}
//             >
//               <div
//                 style={{
//                   width: 38,
//                   height: 38,
//                   borderRadius: 8,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   background: "rgba(228, 200, 77, 0.12)",
//                   border: "1px solid rgba(228, 200, 77, 0.15)",
//                   marginBottom: 12,
//                 }}
//               >
//                 <Icon
//                   size={18}
//                   color="#E4C84D"
//                 />
//               </div>
//               <div
//                 style={{
//                   color: colors.textPrimary,
//                   fontSize: 14,
//                   fontWeight: 500,
//                   marginBottom: 8,
//                 }}
//               >
//                 {item.title}
//               </div>
//               <div
//                 style={{
//                   color: "#E4C84D",
//                   fontSize: 28,
//                   fontWeight: 700,
//                   lineHeight: 1.1,
//                 }}
//               >
//                 {item.value}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import { IndianRupee, CreditCard, Users, BarChart3, } from "lucide-react";
import React from "react";

import colors from "../../constants/colors";
import StatsCard from "../ui/StatsCard";


export default function RechargeStats({ data, loading }) {
  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (!data) return null;

  const stats = [
    {
      title: "Total Revenue",
      value: `₹${data.totalRevenue?.toLocaleString()}`,
      icon: IndianRupee,
    },
    {
      title: "Total Recharges",
      value: data.totalRecharges?.toLocaleString() || "0",
      icon: CreditCard,
    },
    {
      title: "Unique Users",
      value: data.uniqueUsers?.toLocaleString() || "0",
      icon: Users,
    },
    {
      title: "Avg Order Value",
      value: `₹${Math.round(data.avgOrderValue || 0)}`,
      icon: BarChart3,
    },
  ];

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <h2
          style={{
            color: colors.textPrimary,
            fontSize: 24,
            fontWeight: 700,
            margin: 0,
            marginBottom: 6,
          }}
        >
          Recharge Breakdown
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
            margin: 0,
          }}
        >
          Granular analysis of monetization by pack, transaction type, and
          user segment
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "12px",
        }}
      >
        {stats.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            change=""
            previousValue=""
          />
        ))}
      </div>
    </div>
  );
}