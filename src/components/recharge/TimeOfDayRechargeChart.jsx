import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, } from "recharts";
import React from "react";

import colors from "../../constants/colors";


const formatHour = (hour) => {
  const suffix = hour >= 12 ? "PM" : "AM";
  const formatted = hour % 12 === 0 ? 12 : hour % 12;

  return `${formatted} ${suffix}`;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div
      style={{
        background: "#050505",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "16px",
        padding: "14px 18px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
      }}
    >
      <p
        style={{
          color: colors.textPrimary,
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "8px",
        }}
      >
        {formatHour(label)}
      </p>

      <p
        style={{
          color: colors.accent,
          fontSize: "24px",
          fontWeight: 700,
        }}
      >
        Recharge: {payload[0].value}
      </p>
    </div>
  );
};

const TimeOfDayRechargeChart = ({ data = [] }) => {
  const maxValue = Math.max(
    ...(data?.map((d) => d.recharges) || []),
    100
  );

  return (
    <div
      style={{
        background: colors.cardBg,
        border: `1px solid ${colors.cardBorder}`,
        borderRadius: "20px",
        padding: "24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        marginTop:20
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <h2
          style={{
            color: colors.textPrimary,
            fontSize: "24px",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          Time-of-Day Recharge Distribution
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: "14px",
          }}
        >
          Hourly recharge count heatmap
        </p>
      </div>

      {/* Chart */}
      <div style={{ height: "450px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke={colors.cardBorder}
              strokeDasharray="5 5"
            />

            <XAxis
              dataKey="hour"
              tickFormatter={formatHour}
              interval={0}
              tick={{
                fill: colors.textSecondary,
                fontSize: 12,
                fontWeight: 500,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, Math.ceil(maxValue * 1.3)]}
              tick={{
                fill: colors.textSecondary,
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{
                fill: "rgba(255,255,255,0.05)",
              }}
              content={<CustomTooltip />}
            />

            <Bar
              dataKey="recharges"
              radius={[6, 6, 0, 0]}
              barSize={28}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={colors.accent}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimeOfDayRechargeChart;