import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, CartesianGrid, } from "recharts";
import React from "react";

import colors from "../../constants/colors";


// const hourlyData = [
//   { time: "12 AM", creators: 310, calls: 2000 },
//   { time: "3 AM", creators: 350, calls: 2700 },
//   { time: "6 AM", creators: 340, calls: 2800 },
//   { time: "9 AM", creators: 340, calls: 2700 },
//   { time: "12 PM", creators: 370, calls: 3100 },
//   { time: "3 PM", creators: 390, calls: 4300 },
//   { time: "6 PM", creators: 400, calls: 4600 },
//   { time: "9 PM", creators: 420, calls: 4600 },
//   { time: "12 AM", creators: 490, calls: 4000 },
// ];

// const durationData = [
//   { name: "<1 min", value: 12.4, color: "#F47A2A" },
//   { name: "1-3 min", value: 29.4, color: "#E8AF3C" },
//   { name: "3-5 min", value: 23.4, color: "#F0DC5A" },
//   { name: "5+ min", value: 34.8, color: "#F3E4A3" },
// ];

// const earningsData = [
//   {
//     name: "Calls",
//     value: 325,
//     amount: "₹325K",
//     color: "#64D2A4",
//   },
//   {
//     name: "Chat",
//     value: 87,
//     amount: "₹87K",
//     color: "#E8D26D",
//   },
//   {
//     name: "Games",
//     value: 46,
//     amount: "₹46K",
//     color: "#6BC7F3",
//   },
// ];

export default function SupplySideCharts({hourlyData,distributionData}) {
  const chartData =
  hourlyData?.activeCreators?.map((item) => {
    const callMatch =
      hourlyData?.connectedCalls?.find(
        (c) => c._id === Number(item._id.split("-")[0])
      );

    return {
      time: item._id,
      creators: item.activeCreators,
      calls: callMatch?.calls || 0,
    };
  }) || [];
  const durationColors = [
  "#F47A2A",
  "#E8AF3C",
  "#F0DC5A",
  "#F3E4A3",
];

const durationData =
  distributionData?.callDurations?.map((item, index) => ({
    name: item._id,
    value: item.count,
    color: durationColors[index % durationColors.length],
  })) || [];
  const earningColors = [
  "#64D2A4",
  "#E8D26D",
  "#6BC7F3",
];

const earningsData =
  distributionData?.earnings?.map((item, index) => ({
    name: item._id
      .replaceAll("_", " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()),
    value: item.totalAmount,
    amount: `₹${item.totalAmount}`,
    color: earningColors[index % earningColors.length],
  })) || [];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "20px",
        marginTop: "24px",
      }}
    >
      {/* LEFT CHART */}
      <div
        style={{
          background: colors.cardBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: "20px",
          padding: "28px",
        }}
      >
        <h2
          style={{
            color: colors.textPrimary,
            fontSize: "32px",
            fontWeight: 600,
            marginBottom: "6px",
          }}
        >
          Hourly Creator Activity
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            marginBottom: "30px",
          }}
        >
          Creators active and calls connected by hour
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <span
            style={{
              color: "#F3E4A3",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Active Creators
          </span>

          <span
            style={{
              color: colors.accent,
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Connected Calls
          </span>
        </div>

        <ResponsiveContainer width="100%" height={430}>
          <LineChart data={chartData}>
            <CartesianGrid
              strokeDasharray="5 5"
              stroke={colors.cardBorder}
              vertical={false}
            />

            <XAxis
              dataKey="time"
              tick={{ fill: colors.textSecondary }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              yAxisId="left"
              domain={[0, "dataMax+20"]}
              tick={{ fill: colors.textSecondary }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, "dataMax+100"]}
              tick={{ fill: colors.textSecondary }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#050505",
                borderRadius: "12px",
                border: `1px solid ${colors.cardBorder}`,
                color: "#fff",
              }}
            />

            <Line
              yAxisId="left"
              type="monotone"
              dataKey="creators"
              stroke="#F3E4A3"
              strokeWidth={4}
              dot={false}
            />

            <Line
              yAxisId="right"
              type="monotone"
              dataKey="calls"
              stroke={colors.accent}
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Bottom Legend */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: colors.textPrimary,
              fontWeight: 500,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#F3E4A3",
              }}
            />
            Active Creators
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: colors.textPrimary,
              fontWeight: 500,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: colors.accent,
              }}
            />
            Connected Calls
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* DURATION */}
        <div
          style={{
            background: colors.cardBg,
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: "20px",
            padding: "24px",
          }}
        >
          <h3
            style={{
              color: colors.textPrimary,
              fontSize: "22px",
              marginBottom: "4px",
            }}
          >
            Call Duration Distribution
          </h3>

          <p
            style={{
              color: colors.textSecondary,
              marginBottom: "10px",
            }}
          >
            Breakdown by duration
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ResponsiveContainer width="55%" height={250}>
              <PieChart>
                <Pie
                  data={durationData}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={3}
                >
                  {durationData.map((item) => (
                    <Cell
                      key={item.name}
                      fill={item.color}
                      stroke={colors.cardBg}
                      strokeWidth={3}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div style={{ width: "40%" }}>
              {durationData.map((item) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "18px",
                    color: colors.textPrimary,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: item.color,
                      }}
                    />
                    {item.name}
                  </div>

                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EARNINGS */}
        <div
          style={{
            background: colors.cardBg,
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: "20px",
            padding: "24px",
          }}
        >
          <h3
            style={{
              color: colors.textPrimary,
              fontSize: "22px",
              marginBottom: "4px",
            }}
          >
            Creator Earnings
          </h3>

          <p
            style={{
              color: colors.textSecondary,
              marginBottom: "10px",
            }}
          >
            By source
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ResponsiveContainer width="55%" height={250}>
              <PieChart>
                <Pie
                  data={earningsData}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={3}
                >
                  {earningsData.map((item) => (
                    <Cell
                      key={item.name}
                      fill={item.color}
                      stroke={colors.cardBg}
                      strokeWidth={3}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div style={{ width: "40%" }}>
              {earningsData.map((item) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    color: colors.textPrimary,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: item.color,
                      }}
                    />
                    {item.name}
                  </div>

                  <strong>{item.amount}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}