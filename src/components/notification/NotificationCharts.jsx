import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, } from "recharts";
import React from "react";

import colors from "../../constants/colors";


const PIE_COLORS = [
  "#EF4444", // Red
  "#3B82F6", // Blue
  "#10B981", // Green
];

export default function NotificationCharts({ data }) {
  if (!data) return null;

  const funnelData = [
    {
      name: "Sent",
      value: data.notificationFunnel?.sent || 0,
    },
    {
      name: "Delivered",
      value: data.notificationFunnel?.delivered || 0,
    },
    {
      name: "Opened",
      value: data.notificationFunnel?.opened || 0,
    },
  ];

  const notificationTypes = [
    {
      name: "Campaign",
      value: data.notificationTypes?.campaign || 0,
    },
    {
      name: "Transactional",
      value: data.notificationTypes?.transactional || 0,
    },
    {
      name: "System",
      value: data.notificationTypes?.system || 0,
    },
  ].filter((item) => item.value > 0);

  const campaign = data.topPerformingCampaign || {};

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 20,
        marginTop: 24,
      }}
    >
      {/* Funnel */}

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
          Notification Funnel
        </h3>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          Sent → Delivered → Opened
        </p>

        <div style={{ height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={funnelData}>
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

      {/* Notification Types */}

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
          Notification Types
        </h3>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          Distribution by type
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
                  data={notificationTypes}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={85}
                  stroke={colors.primary}
                >
                  {notificationTypes.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={PIE_COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div
            style={{
              width: 170,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {notificationTypes.map((item, index) => (
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
                      background: PIE_COLORS[index],
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
                  {item.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Campaign */}

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
          Top Performing Campaign
        </h3>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
            marginBottom: 30,
          }}
        >
          Highest CTR today
        </p>

        <div
          style={{
            color: colors.textPrimary,
            fontSize: 22,
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          {campaign.name || "No Campaign"}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: 46,
              fontWeight: 700,
              color: "#E4C84D",
            }}
          >
            {campaign.ctr || 0}%
          </span>

          <span
            style={{
              color: colors.textSecondary,
              fontSize: 20,
            }}
          >
            CTR
          </span>
        </div>

        <div
          style={{
            height: 14,
            background: "rgba(255,255,255,.05)",
            borderRadius: 20,
            overflow: "hidden",
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: `${campaign.ctr || 0}%`,
              height: "100%",
              background: "#69C89D",
              borderRadius: 20,
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          <div
            style={{
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: 16,
              padding: 16,
            }}
          >
            <div
              style={{
                color: colors.textSecondary,
                marginBottom: 10,
              }}
            >
              Notification → Recharge
            </div>

            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: colors.textPrimary,
              }}
            >
              {campaign.rechargeConv || 0}%
            </div>
          </div>

          <div
            style={{
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: 16,
              padding: 16,
            }}
          >
            <div
              style={{
                color: colors.textSecondary,
                marginBottom: 10,
              }}
            >
              Avg Open Rate
            </div>

            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: colors.textPrimary,
              }}
            >
              {campaign.avgOpenRate || 0}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
