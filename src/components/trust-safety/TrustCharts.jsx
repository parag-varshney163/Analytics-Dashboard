import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, } from "recharts";
import React from "react";

import colors from "../../constants/colors";


const PIE_COLORS = [
  colors.accent, // Gold
  "#EF4444",     // Red
  "#3B82F6",     // Blue
  "#10B981",     // Green
];

export default function TrustCharts({ data }) {
  if (!data) return null;

  const flagCategories =
    data.flagCategories?.map((item) => ({
      name: item.name
        .replace(/_/g, "/")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
      value: item.value,
    })) || [];

  const resolutionStatus = data.flagResolutionStatus || [];

  const chatSources = data.chatFlagsSource || [];

  // const totalActioned = resolutionStatus
  //   .filter((item) => item.name !== "Pending")
  //   .reduce((sum, item) => sum + item.value, 0);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 20,
        marginTop: 24,
      }}
    >
      {/* Flag Categories */}
      <div
        style={{
          background: colors.cardBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: 24,
          padding: 24,
        }}
      >
        <h3
          style={{
            color: colors.textPrimary,
            fontSize: 18,
            marginBottom: 4,
          }}
        >
          Flag Categories
        </h3>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          Breakdown by type
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 260,
            }}
          >
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={flagCategories}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={70}
                  stroke={colors.primary}
                >
                  {flagCategories.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div
            style={{
              width: 200,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {flagCategories.map((item, index) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background:
                        PIE_COLORS[index % PIE_COLORS.length],
                    }}
                  />

                  <span
                    style={{
                      color: colors.textSecondary,
                      fontSize: 14,
                    }}
                  >
                    {item.name}
                  </span>
                </div>

                <span
                  style={{
                    color: colors.textPrimary,
                    fontWeight: 700,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resolution Status */}
      <div
        style={{
          background: colors.cardBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: 24,
          padding: 24,
        }}
      >
        <h3
          style={{
            color: colors.textPrimary,
            fontSize: 18,
            marginBottom: 4,
          }}
        >
          Flag Resolution Status
        </h3>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          Today's actions
        </p>

        <div style={{ height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={resolutionStatus}>
              <XAxis
                dataKey="name"
                tick={{ fill: colors.textSecondary }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{ fill: colors.textSecondary }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  background: colors.secondary,
                  border: `1px solid ${colors.cardBorder}`,
                }}
              />

              <Bar
                dataKey="value"
                fill="#E4C84D"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chat Flag Source */}
      <div
        style={{
          background: colors.cardBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: 24,
          padding: 24,
        }}
      >
        <h3
          style={{
            color: colors.textPrimary,
            fontSize: 18,
            marginBottom: 4,
          }}
        >
          Chat Flags Source
        </h3>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          Auto vs Manual
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 260,
            }}
          >
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chatSources}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={70}
                  stroke={colors.primary}
                >
                  {/* <Cell fill="#E8D47A" />
                  <Cell fill="#F4DF63" /> */}
                  <Cell fill={colors.accent} />
                  <Cell fill="#EF4444" />
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div
            style={{
              width: 180,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {chatSources.map((item, index) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background:
                        index === 0
                          ? colors.accent
                          : "#EF4444",
                    }}
                  />

                  <span
                    style={{
                      color: colors.textSecondary,
                    }}
                  >
                    {item.name}
                  </span>
                </div>

                <span
                  style={{
                    color: colors.textPrimary,
                    fontWeight: 700,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}

            {/* <div
              style={{
                marginTop: 10,
                paddingTop: 14,
                borderTop: `1px solid ${colors.cardBorder}`,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  color: colors.textSecondary,
                }}
              >
                Actioned
              </span>

              <span
                style={{
                  color: "#E4C84D",
                  fontWeight: 700,
                }}
              >
                {totalActioned}
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
