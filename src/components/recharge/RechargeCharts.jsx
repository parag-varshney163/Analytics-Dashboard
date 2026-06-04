import { ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, CartesianGrid, } from "recharts";
import React from "react";

import colors from "../../constants/colors";


const PIE_COLORS = [
  "#F4DF63",
  "#E8D47A",
  "#F2D248",
  "#ECAF3D",
  "#F27A2E",
  "#F44321",
  "#C2410C",
];

const RechargeCharts = ({ data }) => {
  if (!data) return null;

  const revenueData =
    data?.revenueByPack
      ?.filter((item) => item.value > 0)
      .map((item) => ({
        name: item.packName.match(/₹\d+/)?.[0] || item.packName,
        value: item.value,
      })) || [];

  const mixData =
    data?.packMixDistribution
      ?.filter((item) => item.mixPct > 0)
      .map((item) => ({
        name: item.packName.match(/₹\d+/)?.[0] || item.packName,
        value: item.count,
        percentage: item.mixPct,
      })) || [];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24,
        marginTop: 24,
      }}
    >
      {/* Revenue By Pack */}

      <div
        style={{
          background: colors.cardBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: 24,
          padding: 28,
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        }}
      >
        <h3
          style={{
            color: colors.textPrimary,
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Revenue by Pack
        </h3>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
            marginBottom: 24,
          }}
        >
          Distribution of revenue across pack tiers
        </p>

        <div
          style={{
            width: "100%",
            height: 340,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={revenueData}
              margin={{
                top: 10,
                right: 10,
                left: -15,
                bottom: 10,
              }}
            >
              <CartesianGrid
                strokeDasharray="5 5"
                stroke={colors.cardBorder}
                vertical={false}
              />

              <XAxis
                dataKey="name"
                tick={{
                  fill: colors.textSecondary,
                  fontSize: 13,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fill: colors.textSecondary,
                  fontSize: 13,
                }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) =>
                  value >= 1000
                    ? `${(value / 1000).toFixed(0)}K`
                    : value
                }
              />

              <Tooltip
                formatter={(value) => [
                  `₹${Number(value).toLocaleString()}`,
                  "Revenue",
                ]}
                cursor={{
                  fill: "rgba(255,255,255,0.04)",
                }}
                contentStyle={{
                  background: colors.secondary,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: 12,
                  color: colors.textPrimary,
                }}
              />

              <Bar
                dataKey="value"
                fill={colors.accent}
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pack Mix Distribution */}

      <div
        style={{
          background: colors.cardBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: 24,
          padding: 28,
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        }}
      >
        <h3
          style={{
            color: colors.textPrimary,
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Pack Mix Distribution
        </h3>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
            marginBottom: 24,
          }}
        >
          Share of total recharges by pack
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 30,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 320,
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mixData}
                  dataKey="value"
                  innerRadius={90}
                  outerRadius={135}
                  paddingAngle={2}
                  stroke={colors.primary}
                  strokeWidth={2}
                >
                  {mixData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value, name, props) => [
                    `${props.payload.percentage}%`,
                    props.payload.name,
                  ]}
                  contentStyle={{
                    background: colors.secondary,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: 12,
                    color: colors.textPrimary,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}

          <div
            style={{
              width: 220,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {mixData.map((item, index) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background:
                        PIE_COLORS[index % PIE_COLORS.length],
                    }}
                  />

                  <span
                    style={{
                      color: colors.textSecondary,
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    {item.name}
                  </span>
                </div>

                <span
                  style={{
                    color: colors.textPrimary,
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechargeCharts;