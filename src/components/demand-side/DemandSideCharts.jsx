import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, CartesianGrid, BarChart, Bar, } from "recharts";
import React from "react";

import colors from "../../constants/colors";


export default function DemandSideCharts({ hourlyData = [], distributionData = {} }) {
  // const hourlyData = [
  //   { time: "12 AM", recharges: 170, registrations: 2200 },
  //   { time: "3 AM", recharges: 210, registrations: 2800 },
  //   { time: "6 AM", recharges: 200, registrations: 2900 },
  //   { time: "9 AM", recharges: 200, registrations: 2800 },
  //   { time: "12 PM", recharges: 225, registrations: 3600 },
  //   { time: "3 PM", recharges: 245, registrations: 4500 },
  //   { time: "6 PM", recharges: 260, registrations: 4800 },
  //   { time: "9 PM", recharges: 275, registrations: 4800 },
  //   { time: "12 AM", recharges: 350, registrations: 4200 },
  // ];

  // const rechargeData = [
  //   {
  //     name: "Coin Purchase",
  //     value: 2458,
  //     color: "#F3E28C",
  //   },
  //   {
  //     name: "Pass",
  //     value: 542,
  //     color: "#EFD95D",
  //   },
  //   {
  //     name: "Wallet Topup",
  //     value: 256,
  //     color: "#E8AF3C",
  //   },
  // ];

  // const retentionData = [
  //   {
  //     cohort: "D1",
  //     value: 42.5,
  //   },
  //   {
  //     cohort: "D3",
  //     value: 28.8,
  //   },
  //   {
  //     cohort: "D7",
  //     value: 18.2,
  //   },
  // ];

  const chartData = hourlyData.map((item) => ({
    time: `${item.hour}:00`,
    recharges: item.recharges,
    registrations: item.registrations,
  }));
  // const rechargeData =
  //   distributionData?.rechargeByType?.map((item, index) => ({
  //     name: item.type
  //       .replaceAll("_", " ")
  //       .replace(/\b\w/g, (c) => c.toUpperCase()),
  //     value: item.count,
  //     color: ["#F3E28C", "#EFD95D", "#E8AF3C"][index % 3],
  //   })) || [];
  const rechargeColors = [
    "#DC2626", // Dark Red
    "#3B82F6", // Blue
    colors.accent, // Gold
  ];

  const rechargeData =
    distributionData?.rechargeByType?.map((item, index) => ({
      name: item.type
        .replaceAll("_", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      value: item.count,
      color: rechargeColors[index % rechargeColors.length],
    })) || [];
  const retentionData = [
    {
      cohort: "D1",
      value: distributionData?.retentionCohorts?.d1 || 0,
    },
    {
      cohort: "D3",
      value: distributionData?.retentionCohorts?.d3 || 0,
    },
    {
      cohort: "D7",
      value: distributionData?.retentionCohorts?.d7 || 0,
    },
  ];

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
            fontSize: "22px",
            fontWeight: 600,
            marginBottom: "6px",
          }}
        >
          Hourly Recharges & Registrations
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            marginBottom: "30px",
          }}
        >
          Today's activity by hour
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
              color: colors.accent,
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Recharges
          </span>

          <span
            style={{
              color: "#EF4444",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Registrations
          </span>
        </div>

        <ResponsiveContainer width="100%" height={500}>
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
              tick={{ fill: colors.textSecondary }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              yAxisId="right"
              orientation="right"
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

            {/* <Line
              yAxisId="left"
              type="monotone"
              dataKey="recharges"
              stroke="#E8AF3C"
              strokeWidth={4}
              dot={false}
            /> */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="recharges"
              stroke={colors.accent}
              strokeWidth={4}
              dot={false}
              activeDot={{ r: 6 }}
            />

            {/* <Line
              yAxisId="right"
              type="monotone"
              dataKey="registrations"
              stroke="#F3E28C"
              strokeWidth={4}
              dot={false}
            /> */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="registrations"
              stroke="#EF4444"
              strokeWidth={4}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>

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
                background: colors.accent,
              }}
            />
            Recharges
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
                background: "#EF4444",
              }}
            />
            Registrations
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
        {/* RECHARGE TYPE */}
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
            }}
          >
            Recharge by Type
          </h3>

          <p
            style={{
              color: colors.textSecondary,
              marginBottom: "10px",
            }}
          >
            Distribution today
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
                  data={rechargeData}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={3}
                >
                  {rechargeData.map((item) => (
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
              {rechargeData.map((item) => (
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
                      gap: "8px",
                      alignItems: "center",
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

        {/* RETENTION */}
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
            }}
          >
            Retention Cohorts
          </h3>

          <p
            style={{
              color: colors.textSecondary,
              marginBottom: "15px",
            }}
          >
            D1 / D3 / D7
          </p>

          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={retentionData}>
              <CartesianGrid
                strokeDasharray="5 5"
                vertical={false}
                stroke={colors.cardBorder}
              />

              <XAxis
                dataKey="cohort"
                tick={{ fill: colors.textPrimary }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{ fill: colors.textSecondary }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Bar
                dataKey="value"
                radius={[6, 6, 0, 0]}
                fill="#DC2626"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
