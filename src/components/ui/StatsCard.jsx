// import React from "react";
// import colors from "../../constants/colors";
// export default function StatsCard({
//   title,
//   value,
//   icon: Icon,
//   change,
//   previousValue,
//   positive = true,
// }) {
//   return (
//     <div
//       style={{
//         background: colors.cardBg,
//         border: `1px solid ${colors.cardBorder}`,
//         borderRadius: "12px",
//         padding: "12px",
//         minHeight: "105px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <div>
//         <div
//           style={{
//             width: 28,
//             height: 28,
//             borderRadius: "8px",
//             background: "rgba(217,191,79,0.12)",
//             border: "1px solid rgba(217,191,79,0.2)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             marginBottom: "8px",
//           }}
//         >
//           {Icon && <Icon size={14} color={colors.accent} />}
//         </div>
//         <div
//           style={{
//             color: colors.textSecondary,
//             fontSize: "11px",
//             marginBottom: "4px",
//           }}
//         >
//           {title}
//         </div>
//         <div
//           style={{
//             color: colors.accent,
//             fontSize: "22px",
//             fontWeight: 700,
//             lineHeight: 1,
//           }}
//         >
//           {value}
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "6px",
//           marginTop: "8px",
//         }}
//       >
//         <span
//           style={{
//             color: positive ? colors.success : colors.danger,
//             fontSize: "11px",
//             fontWeight: 600,
//           }}
//         >
//           {positive ? "↗" : "↘"} {change}
//         </span>
//         <span
//           style={{
//             color: colors.textSecondary,
//             fontSize: "10px",
//           }}
//         >
//           {previousValue}
//         </span>
//       </div>
//     </div>
//   );
// }
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
  const changeText =
    typeof change === "object"
      ? change?.text || "0%"
      : change || "0%";

  const isPositive =
    typeof change === "object"
      ? change?.direction === "up"
      : positive;

  return (
    <div
      style={{
        background: colors.cardBg,
        border: `1px solid ${colors.cardBorder}`,
        borderRadius: "12px",
        padding: "12px",
        minHeight: "105px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "8px",
            background: "rgba(217,191,79,0.12)",
            border: "1px solid rgba(217,191,79,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "8px",
          }}
        >
          {Icon && <Icon size={14} color={colors.accent} />}
        </div>

        <div
          style={{
            color: colors.textSecondary,
            fontSize: "11px",
            marginBottom: "4px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: colors.accent,
            fontSize: "22px",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {value}
        </div>
      </div>

      {change && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "8px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              color: isPositive
                ? colors.success
                : colors.danger,
              fontSize: "11px",
              fontWeight: 600,
            }}
          >
            {isPositive ? "↗" : "↘"} {changeText}
          </span>

          {previousValue && (
            <span
              style={{
                color: colors.textSecondary,
                fontSize: "10px",
              }}
            >
              Prev {previousValue}
            </span>
          )}
        </div>
      )}
    </div>
  );
}