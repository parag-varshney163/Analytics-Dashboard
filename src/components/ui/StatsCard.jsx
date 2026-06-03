import React from "react";

import colors from "../../constants/colors";


export default function StatsCard({
  title,
  value,
  icon: Icon,
  change,
  previousValue,
  positive = true,
}) {
  return (
    <div
      style={{
        background: colors.cardBg,
        border: `1px solid ${colors.cardBorder}`,
        borderRadius: "14px",
        padding: "14px",
        height: "145px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {/* Icon */}
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "10px",
            background: "rgba(217,191,79,0.12)",
            border: "1px solid rgba(217,191,79,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          {Icon && <Icon size={16} color={colors.accent} />}
        </div>

        {/* Title */}
        <div
          style={{
            color: colors.textSecondary,
            fontSize: "12px",
            marginBottom: "6px",
          }}
        >
          {title}
        </div>

        {/* Value */}
        <div
          style={{
            color: colors.accent,
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {value}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            color: positive ? colors.success : colors.danger,
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          {positive ? "↗" : "↘"} {change}
        </span>

        <span
          style={{
            color: colors.textSecondary,
            fontSize: "11px",
          }}
        >
          {previousValue}
        </span>
      </div>
    </div>
  );
}