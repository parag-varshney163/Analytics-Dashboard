import React from "react";

import colors from "../../constants/colors";


export default function TrustMetricsCards({ data }) {
  if (!data) return null;

  const sections = [
    {
      title: "Flag Metrics",
      rows: data.flagMetrics || [],
    },
    {
      title: "Chat Flags",
      rows: data.chatFlags || [],
    },
    {
      title: "Support Metrics",
      rows: data.supportMetrics || [],
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

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
        marginTop: 24,
      }}
    >
      {sections.map((section) => (
        <div
          key={section.title}
          style={{
            background: colors.cardBg,
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: 24,
            overflow: "hidden",
            minHeight: 620,
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "24px 20px",
              borderBottom: `1px solid ${colors.cardBorder}`,
            }}
          >
            <h3
              style={{
                margin: 0,
                color: colors.textPrimary,
                fontSize: 18,
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
              padding: "18px 20px",
              borderBottom: `1px solid ${colors.cardBorder}`,
              color: "#E4C84D",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            <span>Metric</span>

            <span
              style={{
                textAlign: "center",
              }}
            >
              Value
            </span>

            <span
              style={{
                textAlign: "right",
              }}
            >
              Change
            </span>
          </div>

          {/* Rows */}
          {section.rows.map((row, index) => (
            <div
              key={`${section.title}-${index}`}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                alignItems: "center",
                padding: "18px 20px",
                borderBottom:
                  index !== section.rows.length - 1
                    ? `1px solid ${colors.cardBorder}`
                    : "none",
              }}
            >
              <span
                style={{
                  color: colors.textPrimary,
                  fontSize: 15,
                  lineHeight: 1.4,
                }}
              >
                {row.metric}
              </span>

              <span
                style={{
                  color: colors.textPrimary,
                  fontSize: 15,
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                {typeof row.value === "number"
                  ? row.value.toLocaleString()
                  : row.value}
              </span>

              <span
                style={{
                  textAlign: "right",
                  fontSize: 15,
                  fontWeight: 600,
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
