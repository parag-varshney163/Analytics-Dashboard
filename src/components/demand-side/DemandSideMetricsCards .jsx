import React from "react";

import colors from "../../constants/colors";
import DataTable from "../ui/DataTable";


export default function DemandSideMetricsCards({ data }) {
  // const sections = [
  //   {
  //     title: "Funnel Metrics",
  //     rows: [
  //       { metric: "Registrations", value: "1,842", change: "↗ 16.7%", positive: true },
  //       { metric: "DAU", value: "28,450", change: "↗ 16.7%", positive: true },
  //       { metric: "Paying Users", value: "2,180", change: "—" },
  //       { metric: "Recharge Conversion %", value: "7.7%", change: "—" },
  //       { metric: "Games Played", value: "8,450", change: "—" },
  //     ],
  //   },
  //   {
  //     title: "Revenue Metrics",
  //     rows: [
  //       { metric: "Total Revenue", value: "₹8.47L", change: "↗ 7.0%", positive: true },
  //       { metric: "Total Recharges", value: "3,256", change: "↗ 8.1%", positive: true },
  //       { metric: "ARPU (₹/DAU)", value: "₹29.79", change: "↗ 2.0%", positive: true },
  //       { metric: "ARPPU (₹/Paying)", value: "₹388.76", change: "—" },
  //       { metric: "Avg Order Value", value: "₹260.28", change: "—" },
  //       { metric: "Repeat Buyer %", value: "34.2%", change: "—" },
  //     ],
  //   },
  //   {
  //     title: "Engagement",
  //     rows: [
  //       { metric: "Avg Calls Per User", value: "2.4", change: "—" },
  //       { metric: "Avg Talk Time Per User", value: "8.6 mins", change: "—" },
  //       { metric: "Coin Purchases", value: "2,458", change: "—" },
  //       { metric: "Pass Purchase", value: "542", change: "—" },
  //       { metric: "Wallet Topups", value: "256", change: "—" },
  //     ],
  //   },
  //   {
  //     title: "Retention",
  //     rows: [
  //       { metric: "D1 Retention", value: "42.5%", change: "↗ 3.2%", positive: true },
  //       { metric: "D3 Retention", value: "28.4%", change: "—" },
  //       { metric: "D7 Retention", value: "18.2%", change: "—" },
  //     ],
  //   },
  // ];

  //   const sections = [
  //   {
  //     title: "Funnel Metrics",
  //     rows: [
  //       {
  //         metric: "Registrations",
  //         value: data?.funnelMetrics?.registrations?.yesterday ?? 0,
  //         change: data?.funnelMetrics?.registrations?.change?.text ?? "-",
  //         positive:
  //           data?.funnelMetrics?.registrations?.change?.direction === "up",
  //       },
  //       {
  //         metric: "DAU",
  //         value: data?.funnelMetrics?.dau?.yesterday ?? 0,
  //         change: data?.funnelMetrics?.dau?.change?.text ?? "-",
  //         positive:
  //           data?.funnelMetrics?.dau?.change?.direction === "up",
  //       },
  //       {
  //         metric: "Paying Users",
  //         value: data?.funnelMetrics?.payingUsers?.yesterday ?? 0,
  //         change: data?.funnelMetrics?.payingUsers?.change?.text ?? "-",
  //         positive:
  //           data?.funnelMetrics?.payingUsers?.change?.direction === "up",
  //       },
  //       {
  //         metric: "Recharge Conversion %",
  //         value: `${data?.funnelMetrics?.rechargeConversionPct?.yesterday ?? 0}%`,
  //         change:
  //           data?.funnelMetrics?.rechargeConversionPct?.change?.text ?? "-",
  //         positive:
  //           data?.funnelMetrics?.rechargeConversionPct?.change?.direction ===
  //           "up",
  //       },
  //       {
  //         metric: "Games Played",
  //         value: data?.funnelMetrics?.gamesPlayed?.yesterday ?? 0,
  //         change: data?.funnelMetrics?.gamesPlayed?.change?.text ?? "-",
  //         positive:
  //           data?.funnelMetrics?.gamesPlayed?.change?.direction === "up",
  //       },
  //     ],
  //   },

  //   {
  //     title: "Revenue Metrics",
  //     rows: [
  //       {
  //         metric: "Total Revenue",
  //         value: `₹${(
  //           data?.revenueMetrics?.totalRevenue?.yesterday ?? 0
  //         ).toLocaleString()}`,
  //         change:
  //           data?.revenueMetrics?.totalRevenue?.change?.text ?? "-",
  //         positive:
  //           data?.revenueMetrics?.totalRevenue?.change?.direction === "up",
  //       },
  //       {
  //         metric: "Total Recharges",
  //         value:
  //           data?.revenueMetrics?.totalRecharges?.yesterday ?? 0,
  //         change:
  //           data?.revenueMetrics?.totalRecharges?.change?.text ?? "-",
  //         positive:
  //           data?.revenueMetrics?.totalRecharges?.change?.direction ===
  //           "up",
  //       },
  //       {
  //         metric: "ARPU",
  //         value: `₹${data?.revenueMetrics?.arpu?.yesterday ?? 0}`,
  //         change: data?.revenueMetrics?.arpu?.change?.text ?? "-",
  //         positive:
  //           data?.revenueMetrics?.arpu?.change?.direction === "up",
  //       },
  //       {
  //         metric: "ARPPU",
  //         value: `₹${data?.revenueMetrics?.arppu?.yesterday ?? 0}`,
  //         change: data?.revenueMetrics?.arppu?.change?.text ?? "-",
  //         positive:
  //           data?.revenueMetrics?.arppu?.change?.direction === "up",
  //       },
  //       {
  //         metric: "Avg Order Value",
  //         value: `₹${data?.revenueMetrics?.avgOrderValue?.yesterday ?? 0}`,
  //         change:
  //           data?.revenueMetrics?.avgOrderValue?.change?.text ?? "-",
  //         positive:
  //           data?.revenueMetrics?.avgOrderValue?.change?.direction ===
  //           "up",
  //       },
  //       {
  //         metric: "Repeat Buyer %",
  //         value: `${data?.revenueMetrics?.repeatBuyerPct?.yesterday ?? 0}%`,
  //         change:
  //           data?.revenueMetrics?.repeatBuyerPct?.change?.text ?? "-",
  //         positive:
  //           data?.revenueMetrics?.repeatBuyerPct?.change?.direction ===
  //           "up",
  //       },
  //     ],
  //   },

  //   {
  //     title: "Engagement",
  //     rows: [
  //       {
  //         metric: "Avg Calls/User",
  //         value: data?.engagement?.avgCallsPerUser?.yesterday ?? 0,
  //         change:
  //           data?.engagement?.avgCallsPerUser?.change?.text ?? "-",
  //         positive:
  //           data?.engagement?.avgCallsPerUser?.change?.direction ===
  //           "up",
  //       },
  //       {
  //         metric: "Avg Talk Time/User",
  //         value: `${data?.engagement?.avgTalkTimePerUser?.yesterday ?? 0} min`,
  //         change:
  //           data?.engagement?.avgTalkTimePerUser?.change?.text ?? "-",
  //         positive:
  //           data?.engagement?.avgTalkTimePerUser?.change?.direction ===
  //           "up",
  //       },
  //       {
  //         metric: "Coin Purchases",
  //         value: data?.engagement?.coinPurchases?.yesterday ?? 0,
  //         change:
  //           data?.engagement?.coinPurchases?.change?.text ?? "-",
  //         positive:
  //           data?.engagement?.coinPurchases?.change?.direction ===
  //           "up",
  //       },
  //       {
  //         metric: "Pass Purchases",
  //         value: data?.engagement?.passPurchases?.yesterday ?? 0,
  //         change:
  //           data?.engagement?.passPurchases?.change?.text ?? "-",
  //         positive:
  //           data?.engagement?.passPurchases?.change?.direction ===
  //           "up",
  //       },
  //       {
  //         metric: "Wallet Topups",
  //         value: data?.engagement?.walletTopups?.yesterday ?? 0,
  //         change:
  //           data?.engagement?.walletTopups?.change?.text ?? "-",
  //         positive:
  //           data?.engagement?.walletTopups?.change?.direction ===
  //           "up",
  //       },
  //     ],
  //   },

  //   {
  //     title: "Retention",
  //     rows: [
  //       {
  //         metric: "D1 Retention",
  //         value: `${data?.retention?.d1Retention?.yesterday ?? 0}%`,
  //         change:
  //           data?.retention?.d1Retention?.change?.text ?? "-",
  //         positive:
  //           data?.retention?.d1Retention?.change?.direction === "up",
  //       },
  //       {
  //         metric: "D3 Retention",
  //         value: `${data?.retention?.d3Retention?.yesterday ?? 0}%`,
  //         change:
  //           data?.retention?.d3Retention?.change?.text ?? "-",
  //         positive:
  //           data?.retention?.d3Retention?.change?.direction === "up",
  //       },
  //       {
  //         metric: "D7 Retention",
  //         value: `${data?.retention?.d7Retention?.yesterday ?? 0}%`,
  //         change:
  //           data?.retention?.d7Retention?.change?.text ?? "-",
  //         positive:
  //           data?.retention?.d7Retention?.change?.direction === "up",
  //       },
  //     ],
  //   },
  // ];

  const sections = [
    {
      title: "Funnel Metrics",
      rows: [
        {
          metric: "Registrations",
          yesterday: data?.funnelMetrics?.registrations?.yesterday ?? 0,
          beforeYesterday: data?.funnelMetrics?.registrations?.beforeYesterday ?? 0,
          sevenDay: data?.funnelMetrics?.registrations?.["7d"] ?? 0,
          change: data?.funnelMetrics?.registrations?.change?.text ?? "-",
          positive: data?.funnelMetrics?.registrations?.change?.direction === "up",
        },
        {
          metric: "DAU",
          yesterday: data?.funnelMetrics?.dau?.yesterday ?? 0,
          beforeYesterday: data?.funnelMetrics?.dau?.beforeYesterday ?? 0,
          sevenDay: data?.funnelMetrics?.dau?.["7d"] ?? 0,
          change: data?.funnelMetrics?.dau?.change?.text ?? "-",
          positive: data?.funnelMetrics?.dau?.change?.direction === "up",
        },
        {
          metric: "Paying Users",
          yesterday: data?.funnelMetrics?.payingUsers?.yesterday ?? 0,
          beforeYesterday: data?.funnelMetrics?.payingUsers?.beforeYesterday ?? 0,
          sevenDay: data?.funnelMetrics?.payingUsers?.["7d"] ?? 0,
          change: data?.funnelMetrics?.payingUsers?.change?.text ?? "-",
          positive: data?.funnelMetrics?.payingUsers?.change?.direction === "up",
        },
        {
          metric: "Recharge Conversion %",
          yesterday: `${data?.funnelMetrics?.rechargeConversionPct?.yesterday ?? 0}%`,
          beforeYesterday: `${data?.funnelMetrics?.rechargeConversionPct?.beforeYesterday ?? 0}%`,
          sevenDay: `${data?.funnelMetrics?.rechargeConversionPct?.["7d"] ?? 0}%`,
          change: data?.funnelMetrics?.rechargeConversionPct?.change?.text ?? "-",
          positive:
            data?.funnelMetrics?.rechargeConversionPct?.change?.direction ===
            "up",
        },
        {
          metric: "Games Played",
          yesterday: data?.funnelMetrics?.gamesPlayed?.yesterday ?? 0,
          beforeYesterday: data?.funnelMetrics?.gamesPlayed?.beforeYesterday ?? 0,
          sevenDay: data?.funnelMetrics?.gamesPlayed?.["7d"] ?? 0,
          change: data?.funnelMetrics?.gamesPlayed?.change?.text ?? "-",
          positive: data?.funnelMetrics?.gamesPlayed?.change?.direction === "up",
        },
      ],
    },

    {
      title: "Revenue Metrics",
      rows: [
        {
          metric: "Total Revenue",
          yesterday: `₹${(data?.revenueMetrics?.totalRevenue?.yesterday ?? 0).toLocaleString()}`,
          beforeYesterday: `₹${(data?.revenueMetrics?.totalRevenue?.beforeYesterday ?? 0).toLocaleString()}`,
          sevenDay: `₹${(data?.revenueMetrics?.totalRevenue?.["7d"] ?? 0).toLocaleString()}`,
          change: data?.revenueMetrics?.totalRevenue?.change?.text ?? "-",
          positive: data?.revenueMetrics?.totalRevenue?.change?.direction === "up",
        },
        {
          metric: "Total Recharges",
          yesterday: data?.revenueMetrics?.totalRecharges?.yesterday ?? 0,
          beforeYesterday: data?.revenueMetrics?.totalRecharges?.beforeYesterday ?? 0,
          sevenDay: data?.revenueMetrics?.totalRecharges?.["7d"] ?? 0,
          change: data?.revenueMetrics?.totalRecharges?.change?.text ?? "-",
          positive:
            data?.revenueMetrics?.totalRecharges?.change?.direction === "up",
        },
        {
          metric: "ARPU",
          yesterday: `₹${data?.revenueMetrics?.arpu?.yesterday ?? 0}`,
          beforeYesterday: `₹${data?.revenueMetrics?.arpu?.beforeYesterday ?? 0}`,
          sevenDay: `₹${data?.revenueMetrics?.arpu?.["7d"] ?? 0}`,
          change: data?.revenueMetrics?.arpu?.change?.text ?? "-",
          positive: data?.revenueMetrics?.arpu?.change?.direction === "up",
        },
        {
          metric: "ARPPU",
          yesterday: `₹${data?.revenueMetrics?.arppu?.yesterday ?? 0}`,
          beforeYesterday: `₹${data?.revenueMetrics?.arppu?.beforeYesterday ?? 0}`,
          sevenDay: `₹${data?.revenueMetrics?.arppu?.["7d"] ?? 0}`,
          change: data?.revenueMetrics?.arppu?.change?.text ?? "-",
          positive: data?.revenueMetrics?.arppu?.change?.direction === "up",
        },
        {
          metric: "Avg Order Value",
          yesterday: `₹${data?.revenueMetrics?.avgOrderValue?.yesterday ?? 0}`,
          beforeYesterday: `₹${data?.revenueMetrics?.avgOrderValue?.beforeYesterday ?? 0}`,
          sevenDay: `₹${data?.revenueMetrics?.avgOrderValue?.["7d"] ?? 0}`,
          change: data?.revenueMetrics?.avgOrderValue?.change?.text ?? "-",
          positive:
            data?.revenueMetrics?.avgOrderValue?.change?.direction === "up",
        },
        {
          metric: "Repeat Buyer %",
          yesterday: `${data?.revenueMetrics?.repeatBuyerPct?.yesterday ?? 0}%`,
          beforeYesterday: `${data?.revenueMetrics?.repeatBuyerPct?.beforeYesterday ?? 0}%`,
          sevenDay: `${data?.revenueMetrics?.repeatBuyerPct?.["7d"] ?? 0}%`,
          change: data?.revenueMetrics?.repeatBuyerPct?.change?.text ?? "-",
          positive:
            data?.revenueMetrics?.repeatBuyerPct?.change?.direction === "up",
        },
      ],
    },

    {
      title: "Engagement",
      rows: [
        {
          metric: "Avg Calls/User",
          yesterday: data?.engagement?.avgCallsPerUser?.yesterday ?? 0,
          beforeYesterday: data?.engagement?.avgCallsPerUser?.beforeYesterday ?? 0,
          sevenDay: data?.engagement?.avgCallsPerUser?.["7d"] ?? 0,
          change: data?.engagement?.avgCallsPerUser?.change?.text ?? "-",
          positive:
            data?.engagement?.avgCallsPerUser?.change?.direction === "up",
        },
        {
          metric: "Avg Talk Time/User",
          yesterday: `${data?.engagement?.avgTalkTimePerUser?.yesterday ?? 0} min`,
          beforeYesterday: `${data?.engagement?.avgTalkTimePerUser?.beforeYesterday ?? 0} min`,
          sevenDay: `${data?.engagement?.avgTalkTimePerUser?.["7d"] ?? 0} min`,
          change: data?.engagement?.avgTalkTimePerUser?.change?.text ?? "-",
          positive:
            data?.engagement?.avgTalkTimePerUser?.change?.direction === "up",
        },
        {
          metric: "Coin Purchases",
          yesterday: data?.engagement?.coinPurchases?.yesterday ?? 0,
          beforeYesterday: data?.engagement?.coinPurchases?.beforeYesterday ?? 0,
          sevenDay: data?.engagement?.coinPurchases?.["7d"] ?? 0,
          change: data?.engagement?.coinPurchases?.change?.text ?? "-",
          positive:
            data?.engagement?.coinPurchases?.change?.direction === "up",
        },
        {
          metric: "Pass Purchases",
          yesterday: data?.engagement?.passPurchases?.yesterday ?? 0,
          beforeYesterday: data?.engagement?.passPurchases?.beforeYesterday ?? 0,
          sevenDay: data?.engagement?.passPurchases?.["7d"] ?? 0,
          change: data?.engagement?.passPurchases?.change?.text ?? "-",
          positive:
            data?.engagement?.passPurchases?.change?.direction === "up",
        },
        {
          metric: "Wallet Topups",
          yesterday: data?.engagement?.walletTopups?.yesterday ?? 0,
          beforeYesterday: data?.engagement?.walletTopups?.beforeYesterday ?? 0,
          sevenDay: data?.engagement?.walletTopups?.["7d"] ?? 0,
          change: data?.engagement?.walletTopups?.change?.text ?? "-",
          positive:
            data?.engagement?.walletTopups?.change?.direction === "up",
        },
      ],
    },

    {
      title: "Retention",
      rows: [
        {
          metric: "D1 Retention",
          yesterday: `${data?.retention?.d1Retention?.yesterday ?? 0}%`,
          beforeYesterday: `${data?.retention?.d1Retention?.beforeYesterday ?? 0}%`,
          sevenDay: `${data?.retention?.d1Retention?.["7d"] ?? 0}%`,
          change: data?.retention?.d1Retention?.change?.text ?? "-",
          positive: data?.retention?.d1Retention?.change?.direction === "up",
        },
        {
          metric: "D3 Retention",
          yesterday: `${data?.retention?.d3Retention?.yesterday ?? 0}%`,
          beforeYesterday: `${data?.retention?.d3Retention?.beforeYesterday ?? 0}%`,
          sevenDay: `${data?.retention?.d3Retention?.["7d"] ?? 0}%`,
          change: data?.retention?.d3Retention?.change?.text ?? "-",
          positive: data?.retention?.d3Retention?.change?.direction === "up",
        },
        {
          metric: "D7 Retention",
          yesterday: `${data?.retention?.d7Retention?.yesterday ?? 0}%`,
          beforeYesterday: `${data?.retention?.d7Retention?.beforeYesterday ?? 0}%`,
          sevenDay: `${data?.retention?.d7Retention?.["7d"] ?? 0}%`,
          change: data?.retention?.d7Retention?.change?.text ?? "-",
          positive: data?.retention?.d7Retention?.change?.direction === "up",
        },
      ],
    },
  ];
  const tableData = sections.flatMap((section) =>
  section.rows.map((row, index) => ({
    // category: index === 0 ? section.title : "",
    category:section.title,
    metric: row.metric,
    yesterday: row.yesterday,
    beforeYesterday: row.beforeYesterday,
    sevenDay: row.sevenDay,
    change: row.change,
    positive: row.positive,
  }))
);

const columns = [
  {
    key: "category",
    label: "Category",
    width: "1fr",
    align: "left",
  },
  {
    key: "metric",
    label: "Metric",
    width: "1.2fr",
    align: "left",
  },
  {
    key: "yesterday",
    label: "Yesterday",
    width: "1fr",
  },
  {
    key: "beforeYesterday",
    label: "Prev Day",
    width: "1fr",
  },
  {
    key: "sevenDay",
    label: "7D Avg",
    width: "1fr",
  },
  {
    key: "change",
    label: "Change",
    width: "1fr",
    render: (value, row) => (
      <span
        style={{
          color:
            value === "-"
              ? colors.textSecondary
              : row.positive
              ? "#6EF7C8"
              : "#FF6B6B",
          fontWeight: 600,
        }}
      >
        {value}
      </span>
    ),
  },
];
  // return (
  //   <div
  //     style={{
  //       display: "grid",
  //       gridTemplateColumns: "repeat(2, 1fr)",
  //       gap: "20px",
  //       marginTop: "24px",
  //     }}
  //   >
  //     {sections.map((section) => (
  //       <div
  //         key={section.title}
  //         style={{
  //           background: colors.cardBg,
  //           border: `1px solid ${colors.cardBorder}`,
  //           borderRadius: "20px",
  //           overflow: "hidden",
  //         }}
  //       >
  //         {/* Header */}
  //         <div
  //           style={{
  //             padding: "24px 24px 18px",
  //             borderBottom: `1px solid ${colors.cardBorder}`,
  //           }}
  //         >
  //           <h3
  //             style={{
  //               color: colors.textPrimary,
  //               fontSize: "20px",
  //               fontWeight: 600,
  //               margin: 0,
  //             }}
  //           >
  //             {section.title}
  //           </h3>
  //         </div>

  //         {/* Table Header */}
  //         {/* <div
  //           style={{
  //             display: "grid",
  //             gridTemplateColumns: "2fr 1fr 1fr",
  //             padding: "18px 24px",
  //             borderBottom: `1px solid ${colors.cardBorder}`,
  //             color: colors.accent,
  //             fontSize: "15px",
  //             fontWeight: 600,
  //           }}
  //         >
  //           <span>Metric</span>
  //           <span style={{ textAlign: "center" }}>Value</span>
  //           <span style={{ textAlign: "right" }}>Change</span>
  //         </div> */}
  //         <div
  //           style={{
  //             display: "grid",
  //             gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
  //             padding: "18px 24px",
  //             borderBottom: `1px solid ${colors.cardBorder}`,
  //             color: colors.accent,
  //             fontSize: "15px",
  //             fontWeight: 600,
  //           }}
  //         >
  //           <span>Metric</span>
  //           <span style={{ textAlign: "center" }}>Yesterday</span>
  //           <span style={{ textAlign: "center" }}>Prev Day</span>
  //           <span style={{ textAlign: "center" }}>7D</span>
  //           <span style={{ textAlign: "right" }}>Change</span>
  //         </div>

  //         {/* Rows */}
  //         {section.rows.map((row, index) => (
  //           <div
  //             key={index}
  //             style={{
  //               display: "grid",
  //               gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
  //               padding: "18px 24px",
  //               borderBottom:
  //                 index !== section.rows.length - 1
  //                   ? `1px solid ${colors.cardBorder}`
  //                   : "none",
  //               alignItems: "center",
  //             }}
  //           >
  //             <span
  //               style={{
  //                 color: colors.textPrimary,
  //                 fontSize: "15px",
  //               }}
  //             >
  //               {row.metric}
  //             </span>

  //             {/* <span
  //               style={{
  //                 color: colors.textPrimary,
  //                 textAlign: "center",
  //                 fontSize: "15px",
  //               }}
  //             >
  //               {row.value}
  //             </span> */}
  //             <span
  //               style={{
  //                 color: colors.textPrimary,
  //                 textAlign: "center",
  //                 fontSize: "15px",
  //               }}
  //             >
  //               {row.yesterday}
  //             </span>

  //             <span
  //               style={{
  //                 color: colors.textPrimary,
  //                 textAlign: "center",
  //                 fontSize: "15px",
  //               }}
  //             >
  //               {row.beforeYesterday}
  //             </span>

  //             <span
  //               style={{
  //                 color: colors.textPrimary,
  //                 textAlign: "center",
  //                 fontSize: "15px",
  //               }}
  //             >
  //               {row.sevenDay}
  //             </span>

  //             <span
  //               style={{
  //                 textAlign: "right",
  //                 fontSize: "15px",
  //                 fontWeight: 500,
  //                 color:
  //                   row.change === "—"
  //                     ? colors.textSecondary
  //                     : row.positive
  //                       ? "#6EF7C8"
  //                       : "#FF6B6B",
  //               }}
  //             >
  //               {row.change}
  //             </span>
  //           </div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );

return (
  <div>
    {/* Table Title */}
    <div
      style={{
        marginTop:"16px"
      }}
    >
      <h2
        style={{
          color: colors.textPrimary,
          fontSize: "24px",
          fontWeight: 700,
          margin: 0,
        }}
      >
        Demand Side Metrics Overview
      </h2>

      <p
        style={{
          color: colors.textSecondary,
          fontSize: "14px",
          marginTop: "6px",
          marginBottom: 0,
        }}
      >
        Displays key demand-side KPIs including Funnel Metrics, Revenue
        Metrics, Engagement Metrics, and Retention Metrics. Values compare
        Yesterday, Previous Day, and 7-Day averages along with percentage
        change trends.
      </p>
    </div>

    <DataTable
      columns={columns}
      data={tableData}
      paginationMode="client"
    />
  </div>
);
}
