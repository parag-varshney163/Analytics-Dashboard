import React from "react";

import colors from "../../constants/colors";


export default function NotificationMetricsCards({ data }) {
  const sections = [
    {
      title: "Performance Metrics",
      rows: data?.performanceMetrics || [],
    },
    {
      title: "Type Breakdown",
      rows: data?.typeBreakdown || [],
    },
  ];

  const getChangeText = (change) => {
    if (!change || change.hide) return "—";

    return `${change.direction === "up" ? "↗" : "↘"} ${change.pct}%`;
  };

  const getChangeColor = (change) => {
    if (!change || change.hide) return colors.textSecondary;

    return change.direction === "up" ? "#6EF7C8" : "#FF6B6B";
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px",
        marginTop: "24px",
      }}
    >
      {sections.map((section) => (
        <div
          key={section.title}
          style={{
            background: colors.cardBg,
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "24px 32px",
              borderBottom: `1px solid ${colors.cardBorder}`,
            }}
          >
            <h3
              style={{
                margin: 0,
                color: colors.textPrimary,
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              {section.title}
            </h3>
          </div>

          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              padding: "18px 32px",
              borderBottom: `1px solid ${colors.cardBorder}`,
              color: colors.accent,
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            <span>Metric</span>
            <span style={{ textAlign: "center" }}>Value</span>
            <span style={{ textAlign: "right" }}>Change</span>
          </div>

          {/* Rows */}
          {section.rows.map((row, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                alignItems: "center",
                padding: "22px 32px",
                borderBottom:
                  index !== section.rows.length - 1
                    ? `1px solid ${colors.cardBorder}`
                    : "none",
              }}
            >
              <span
                style={{
                  color: colors.textPrimary,
                  fontSize: "15px",
                }}
              >
                {row.metric}
              </span>

              <span
                style={{
                  color: colors.textPrimary,
                  fontSize: "15px",
                  textAlign: "center",
                }}
              >
                {typeof row.value === "number"
                  ? row.value.toLocaleString()
                  : row.value}
              </span>

              <span
                style={{
                  textAlign: "right",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: getChangeColor(row.change),
                }}
              >
                {getChangeText(row.change)}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
