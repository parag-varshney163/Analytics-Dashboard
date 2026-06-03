// import { UserPlus, IndianRupee, Users, CreditCard, Percent, RefreshCcw, Target, } from "lucide-react";
// import React from "react";
// import colors from "../../constants/colors";
// import StatsCard from "../ui/StatsCard";
// export default function DemandSideStats() {
//   const stats = [
//     {
//       title: "Registrations",
//       value: "1,842",
//       icon: UserPlus,
//       change: "7.5%",
//       previousValue: "230",
//       positive: true,
//     },
//     {
//       title: "Revenue",
//       value: "₹8.47L",
//       icon: IndianRupee,
//       change: "8.2%",
//       previousValue: "₹7.83L",
//       positive: true,
//     },
//     {
//       title: "DAU",
//       value: "28,450",
//       icon: Users,
//       change: "7.8%",
//       previousValue: "26,390",
//       positive: true,
//     },
//     {
//       title: "Total Recharges",
//       value: "3,256",
//       icon: CreditCard,
//       change: "9.6%",
//       previousValue: "3,602",
//       positive: false,
//     },
//     {
//       title: "ARPU",
//       value: "₹29.79",
//       icon: Percent,
//       change: "9.6%",
//       previousValue: "₹32.95",
//       positive: false,
//     },
//     {
//       title: "D1 Retention",
//       value: "42.5%",
//       icon: RefreshCcw,
//       change: "8%",
//       previousValue: "39.3%",
//       positive: true,
//     },
//   ];
//   return (
//     <div>
//       {/* Header */}
//       <div
//         style={{
//           marginBottom: "20px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "10px",
//             marginBottom: "6px",
//           }}
//         >
//           <Target size={24} color={colors.accent} />
//           <h2
//             style={{
//               color: colors.textPrimary,
//               fontSize: "24px",
//               fontWeight: 700,
//               margin: 0,
//             }}
//           >
//             Demand Side
//           </h2>
//         </div>
//         <p
//           style={{
//             color: colors.textSecondary,
//             fontSize: "14px",
//             margin: 0,
//           }}
//         >
//           User acquisition, monetization, and retention metrics • Today vs
//           Yesterday
//         </p>
//       </div>
//       {/* Cards */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(6, 1fr)",
//           gap: "16px",
//         }}
//       >
//         {stats.map((stat) => (
//           <StatsCard key={stat.title} {...stat} />
//         ))}
//       </div>
//     </div>
//   );
// }
import { UserPlus, IndianRupee, Users, CreditCard, Percent, RefreshCcw, Target, } from "lucide-react";
import React from "react";

import colors from "../../constants/colors";
import StatsCard from "../ui/StatsCard";


export default function DemandSideStats({ data, loading }) {
  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (!data) return null;

  const stats = [
  {
    title: "Registrations",
    value: data.registrations?.yesterday?.toLocaleString() || "0",
    icon: UserPlus,
    change: data.registrations?.change?.text || "0%",
    previousValue:
      data.registrations?.beforeYesterday?.toLocaleString() || "0",
    positive: data.registrations?.change?.direction === "up",
  },
  {
    title: "Revenue",
    value: `₹${data.revenue?.yesterday?.toLocaleString() || 0}`,
    icon: IndianRupee,
    change: data.revenue?.change?.text || "0%",
    previousValue: `₹${data.revenue?.beforeYesterday?.toLocaleString() || 0}`,
    positive: data.revenue?.change?.direction === "up",
  },
  {
    title: "DAU",
    value: data.dau?.yesterday?.toLocaleString() || "0",
    icon: Users,
    change: data.dau?.change?.text || "0%",
    previousValue:
      data.dau?.beforeYesterday?.toLocaleString() || "0",
    positive: data.dau?.change?.direction === "up",
  },
  {
    title: "Total Recharges",
    value: data.totalRecharges?.yesterday?.toLocaleString() || "0",
    icon: CreditCard,
    change: data.totalRecharges?.change?.text || "0%",
    previousValue:
      data.totalRecharges?.beforeYesterday?.toLocaleString() || "0",
    positive: data.totalRecharges?.change?.direction === "up",
  },
  {
    title: "ARPU",
    value: `₹${data.arpu?.yesterday || 0}`,
    icon: Percent,
    change: data.arpu?.change?.text || "0%",
    previousValue: `₹${data.arpu?.beforeYesterday || 0}`,
    positive: data.arpu?.change?.direction === "up",
  },
  {
    title: "D1 Retention",
    value: `${data.d1Retention?.yesterday || 0}%`,
    icon: RefreshCcw,
    change: data.d1Retention?.change?.text || "0%",
    previousValue: `${data.d1Retention?.beforeYesterday || 0}%`,
    positive: data.d1Retention?.change?.direction === "up",
  },
];

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "6px",
          }}
        >
          <Target size={24} color={colors.accent} />

          <h2
            style={{
              color: colors.textPrimary,
              fontSize: "24px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Demand Side
          </h2>
        </div>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: "14px",
            margin: 0,
          }}
        >
          User acquisition, monetization, and retention metrics
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "16px",
        }}
      >
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
}