import React from "react";

import colors from "../../constants/colors";
import DataTable from "../ui/DataTable";


export default function TrustMetricsCards({ data }) {
  if (!data) return null;

  // const sections = [
  //   {
  //     title: "Flag Metrics",
  //     rows: data.flagMetrics || [],
  //   },
  //   {
  //     title: "Chat Flags",
  //     rows: data.chatFlags || [],
  //   },
  //   {
  //     title: "Support Metrics",
  //     rows: data.supportMetrics || [],
  //   },
  // ];
  const mapRows = (rows = []) =>
    rows.map((row) => ({
      metric: row.metric,
      yesterday: row.yesterday,
      beforeYesterday: row.beforeYesterday,
      "7d": row["7d"],
      change: row.change,
    }));

  const sections = [
    {
      title: "Flag Metrics",
      rows: mapRows(data.flagMetrics),
    },
    {
      title: "Chat Flags",
      rows: mapRows(data.chatFlags),
    },
    {
      title: "Support Metrics",
      rows: mapRows(data.supportMetrics),
    },
  ];

  const getChangeText = (change) => {
    if (!change) return "—";

    return `${change.direction === "up" ? "↗" : "↘"} ${change.pct}%`;
  };

  const getChangeColor = (change) => {
    if (!change) return colors.textSecondary;

    return change.direction === "up"
      ? "#6EF7C8"
      : "#FF6B6B";
  };
 const tableData = [
  ...(mapRows(data.flagMetrics) || []).map((row) => ({
    category: "Flag Metrics",
    ...row,
    changeText: getChangeText(row.change),
    positive: row.change?.direction === "up",
  })),

  ...(mapRows(data.chatFlags) || []).map((row) => ({
    category: "Chat Flags",
    ...row,
    changeText: getChangeText(row.change),
    positive: row.change?.direction === "up",
  })),

  ...(mapRows(data.supportMetrics) || []).map((row) => ({
    category: "Support Metrics",
    ...row,
    changeText: getChangeText(row.change),
    positive: row.change?.direction === "up",
  })),
];
const columns = [
  {
    key: "category",
    label: "Category",
    width: "1fr",
    align: "center",
  },
  {
    key: "metric",
    label: "Metric",
    width: "1fr",
    align: "left",
  },
  {
    key: "yesterday",
    label: "Yesterday",
    width: "1fr",
    render: (value) =>
      typeof value === "number"
        ? value.toLocaleString()
        : value,
  },
  {
    key: "beforeYesterday",
    label: "Prev Day",
    width: "1fr",
    render: (value) =>
      typeof value === "number"
        ? value.toLocaleString()
        : value,
  },
  {
    key: "7d",
    label: "7D Avg",
    width: "1fr",
    render: (value) =>
      typeof value === "number"
        ? value.toLocaleString()
        : value,
  },
  {
    key: "changeText",
    label: "Change",
    width: "1fr",
    render: (value, row) => (
      <span
        style={{
          color:
            value === "—"
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
  //       gridTemplateColumns: "repeat(3, 1fr)",
  //       gap: 24,
  //       marginTop: 24,
  //     }}
  //   >
  //     {sections.map((section) => (
  //       <div
  //         key={section.title}
  //         style={{
  //           background: colors.cardBg,
  //           border: `1px solid ${colors.cardBorder}`,
  //           borderRadius: 24,
  //           overflow: "hidden",
  //           minHeight: 620,
  //         }}
  //       >
  //         {/* Header */}
  //         <div
  //           style={{
  //             padding: "24px 20px",
  //             borderBottom: `1px solid ${colors.cardBorder}`,
  //           }}
  //         >
  //           <h3
  //             style={{
  //               margin: 0,
  //               color: colors.textPrimary,
  //               fontSize: 18,
  //               fontWeight: 600,
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
  //             padding: "18px 20px",
  //             borderBottom: `1px solid ${colors.cardBorder}`,
  //             color: "#E4C84D",
  //             fontSize: 16,
  //             fontWeight: 600,
  //           }}
  //         >
  //           <span>Metric</span>

  //           <span
  //             style={{
  //               textAlign: "center",
  //             }}
  //           >
  //             Value
  //           </span>

  //           <span
  //             style={{
  //               textAlign: "right",
  //             }}
  //           >
  //             Change
  //           </span>
  //         </div> */}
  //         <div
  //           style={{
  //             display: "grid",
  //             gridTemplateColumns: "2fr 1fr 1fr 1fr 0.8fr",
  //             padding: "18px 20px",
  //             borderBottom: `1px solid ${colors.cardBorder}`,
  //             color: "#E4C84D",
  //             fontSize: 14,
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
  //             key={`${section.title}-${index}`}
  //             style={{
  //               display: "grid",
  //               gridTemplateColumns: "2fr 1fr 1fr 1fr 0.8fr",
  //               alignItems: "center",
  //               padding: "18px 20px",
  //               borderBottom:
  //                 index !== section.rows.length - 1
  //                   ? `1px solid ${colors.cardBorder}`
  //                   : "none",
  //             }}
  //           >
  //             <span
  //               style={{
  //                 color: colors.textPrimary,
  //                 fontSize: 15,
  //                 lineHeight: 1.4,
  //               }}
  //             >
  //               {row.metric}
  //             </span>

  //             {/* <span
  //               style={{
  //                 color: colors.textPrimary,
  //                 fontSize: 15,
  //                 textAlign: "center",
  //                 fontWeight: 500,
  //               }}
  //             >
  //               {typeof row.value === "number"
  //                 ? row.value.toLocaleString()
  //                 : row.value}
  //             </span> */}
  //             <span
  //               style={{
  //                 color: colors.textPrimary,
  //                 fontSize: 14,
  //                 textAlign: "center",
  //               }}
  //             >
  //               {typeof row.yesterday === "number"
  //                 ? row.yesterday.toLocaleString()
  //                 : row.yesterday}
  //             </span>

  //             <span
  //               style={{
  //                 color: colors.textPrimary,
  //                 fontSize: 14,
  //                 textAlign: "center",
  //               }}
  //             >
  //               {typeof row.beforeYesterday === "number"
  //                 ? row.beforeYesterday.toLocaleString()
  //                 : row.beforeYesterday}
  //             </span>

  //             <span
  //               style={{
  //                 color: colors.textPrimary,
  //                 fontSize: 14,
  //                 textAlign: "center",
  //               }}
  //             >
  //               {typeof row["7d"] === "number"
  //                 ? row["7d"].toLocaleString()
  //                 : row["7d"]}
  //             </span>

  //             <span
  //               style={{
  //                 textAlign: "right",
  //                 fontSize: 15,
  //                 fontWeight: 600,
  //                 color: getChangeColor(row.change),
  //               }}
  //             >
  //               {getChangeText(row.change)}
  //             </span>
  //           </div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
  <div>
    <div style={{ marginTop: "16px" }}>
      <h2
        style={{
          color: colors.textPrimary,
          fontSize: "24px",
          fontWeight: 700,
          margin: 0,
        }}
      >
        Trust & Safety Metrics Overview
      </h2>

      <p
        style={{
          color: colors.textSecondary,
          fontSize: "14px",
          marginTop: "6px",
          marginBottom: 0,
        }}
      >
        Monitor trust, safety, moderation, chat flagging, and support-related
        KPIs with daily and 7-day trend comparisons.
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
