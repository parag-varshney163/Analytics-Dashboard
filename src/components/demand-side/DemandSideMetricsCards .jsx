import React from "react";

import colors from "../../constants/colors";


export default function DemandSideMetricsCards({data}) {
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

  const sections = [
  {
    title: "Funnel Metrics",
    rows: [
      {
        metric: "Registrations",
        value: data?.funnelMetrics?.registrations?.yesterday ?? 0,
        change: data?.funnelMetrics?.registrations?.change?.text ?? "-",
        positive:
          data?.funnelMetrics?.registrations?.change?.direction === "up",
      },
      {
        metric: "DAU",
        value: data?.funnelMetrics?.dau?.yesterday ?? 0,
        change: data?.funnelMetrics?.dau?.change?.text ?? "-",
        positive:
          data?.funnelMetrics?.dau?.change?.direction === "up",
      },
      {
        metric: "Paying Users",
        value: data?.funnelMetrics?.payingUsers?.yesterday ?? 0,
        change: data?.funnelMetrics?.payingUsers?.change?.text ?? "-",
        positive:
          data?.funnelMetrics?.payingUsers?.change?.direction === "up",
      },
      {
        metric: "Recharge Conversion %",
        value: `${data?.funnelMetrics?.rechargeConversionPct?.yesterday ?? 0}%`,
        change:
          data?.funnelMetrics?.rechargeConversionPct?.change?.text ?? "-",
        positive:
          data?.funnelMetrics?.rechargeConversionPct?.change?.direction ===
          "up",
      },
      {
        metric: "Games Played",
        value: data?.funnelMetrics?.gamesPlayed?.yesterday ?? 0,
        change: data?.funnelMetrics?.gamesPlayed?.change?.text ?? "-",
        positive:
          data?.funnelMetrics?.gamesPlayed?.change?.direction === "up",
      },
    ],
  },

  {
    title: "Revenue Metrics",
    rows: [
      {
        metric: "Total Revenue",
        value: `₹${(
          data?.revenueMetrics?.totalRevenue?.yesterday ?? 0
        ).toLocaleString()}`,
        change:
          data?.revenueMetrics?.totalRevenue?.change?.text ?? "-",
        positive:
          data?.revenueMetrics?.totalRevenue?.change?.direction === "up",
      },
      {
        metric: "Total Recharges",
        value:
          data?.revenueMetrics?.totalRecharges?.yesterday ?? 0,
        change:
          data?.revenueMetrics?.totalRecharges?.change?.text ?? "-",
        positive:
          data?.revenueMetrics?.totalRecharges?.change?.direction ===
          "up",
      },
      {
        metric: "ARPU",
        value: `₹${data?.revenueMetrics?.arpu?.yesterday ?? 0}`,
        change: data?.revenueMetrics?.arpu?.change?.text ?? "-",
        positive:
          data?.revenueMetrics?.arpu?.change?.direction === "up",
      },
      {
        metric: "ARPPU",
        value: `₹${data?.revenueMetrics?.arppu?.yesterday ?? 0}`,
        change: data?.revenueMetrics?.arppu?.change?.text ?? "-",
        positive:
          data?.revenueMetrics?.arppu?.change?.direction === "up",
      },
      {
        metric: "Avg Order Value",
        value: `₹${data?.revenueMetrics?.avgOrderValue?.yesterday ?? 0}`,
        change:
          data?.revenueMetrics?.avgOrderValue?.change?.text ?? "-",
        positive:
          data?.revenueMetrics?.avgOrderValue?.change?.direction ===
          "up",
      },
      {
        metric: "Repeat Buyer %",
        value: `${data?.revenueMetrics?.repeatBuyerPct?.yesterday ?? 0}%`,
        change:
          data?.revenueMetrics?.repeatBuyerPct?.change?.text ?? "-",
        positive:
          data?.revenueMetrics?.repeatBuyerPct?.change?.direction ===
          "up",
      },
    ],
  },

  {
    title: "Engagement",
    rows: [
      {
        metric: "Avg Calls/User",
        value: data?.engagement?.avgCallsPerUser?.yesterday ?? 0,
        change:
          data?.engagement?.avgCallsPerUser?.change?.text ?? "-",
        positive:
          data?.engagement?.avgCallsPerUser?.change?.direction ===
          "up",
      },
      {
        metric: "Avg Talk Time/User",
        value: `${data?.engagement?.avgTalkTimePerUser?.yesterday ?? 0} min`,
        change:
          data?.engagement?.avgTalkTimePerUser?.change?.text ?? "-",
        positive:
          data?.engagement?.avgTalkTimePerUser?.change?.direction ===
          "up",
      },
      {
        metric: "Coin Purchases",
        value: data?.engagement?.coinPurchases?.yesterday ?? 0,
        change:
          data?.engagement?.coinPurchases?.change?.text ?? "-",
        positive:
          data?.engagement?.coinPurchases?.change?.direction ===
          "up",
      },
      {
        metric: "Pass Purchases",
        value: data?.engagement?.passPurchases?.yesterday ?? 0,
        change:
          data?.engagement?.passPurchases?.change?.text ?? "-",
        positive:
          data?.engagement?.passPurchases?.change?.direction ===
          "up",
      },
      {
        metric: "Wallet Topups",
        value: data?.engagement?.walletTopups?.yesterday ?? 0,
        change:
          data?.engagement?.walletTopups?.change?.text ?? "-",
        positive:
          data?.engagement?.walletTopups?.change?.direction ===
          "up",
      },
    ],
  },

  {
    title: "Retention",
    rows: [
      {
        metric: "D1 Retention",
        value: `${data?.retention?.d1Retention?.yesterday ?? 0}%`,
        change:
          data?.retention?.d1Retention?.change?.text ?? "-",
        positive:
          data?.retention?.d1Retention?.change?.direction === "up",
      },
      {
        metric: "D3 Retention",
        value: `${data?.retention?.d3Retention?.yesterday ?? 0}%`,
        change:
          data?.retention?.d3Retention?.change?.text ?? "-",
        positive:
          data?.retention?.d3Retention?.change?.direction === "up",
      },
      {
        metric: "D7 Retention",
        value: `${data?.retention?.d7Retention?.yesterday ?? 0}%`,
        change:
          data?.retention?.d7Retention?.change?.text ?? "-",
        positive:
          data?.retention?.d7Retention?.change?.direction === "up",
      },
    ],
  },
];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        marginTop: "24px",
      }}
    >
      {sections.map((section) => (
        <div
          key={section.title}
          style={{
            background: colors.cardBg,
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "24px 24px 18px",
              borderBottom: `1px solid ${colors.cardBorder}`,
            }}
          >
            <h3
              style={{
                color: colors.textPrimary,
                fontSize: "20px",
                fontWeight: 600,
                margin: 0,
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
              padding: "18px 24px",
              borderBottom: `1px solid ${colors.cardBorder}`,
              color: colors.accent,
              fontSize: "15px",
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
                padding: "18px 24px",
                borderBottom:
                  index !== section.rows.length - 1
                    ? `1px solid ${colors.cardBorder}`
                    : "none",
                alignItems: "center",
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
                  textAlign: "center",
                  fontSize: "15px",
                }}
              >
                {row.value}
              </span>

              <span
                style={{
                  textAlign: "right",
                  fontSize: "15px",
                  fontWeight: 500,
                  color:
                    row.change === "—"
                      ? colors.textSecondary
                      : row.positive
                      ? "#6EF7C8"
                      : "#FF6B6B",
                }}
              >
                {row.change}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
