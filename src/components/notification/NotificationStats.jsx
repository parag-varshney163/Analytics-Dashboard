import { Send, BadgeCheck, Percent, BellDot, TrendingUp, CreditCard, ArrowUpRight, ArrowDownRight, } from "lucide-react";
import React from "react";

import colors from "../../constants/colors";


export default function NotificationStats({ data, loading }) {
  if (loading) {
    return (
      <div
        style={{
          color: colors.textPrimary,
          padding: "20px 0",
        }}
      >
        Loading notification stats...
      </div>
    );
  }

  if (!data) return null;

  const stats = [
    {
      title: "Sent",
      value: data.sent?.yesterday?.toLocaleString() || "0",
      previous: data.sent?.beforeYesterday?.toLocaleString() || "0",
      change: data.sent?.change,
      icon: Send,
    },
    {
      title: "Delivered",
      value: data.delivered?.yesterday?.toLocaleString() || "0",
      previous: data.delivered?.beforeYesterday?.toLocaleString() || "0",
      change: data.delivered?.change,
      icon: BadgeCheck,
    },
    {
      title: "Delivery Rate",
      value: `${data.deliveryRate?.yesterday || 0}%`,
      previous: `${data.deliveryRate?.beforeYesterday || 0}%`,
      change: data.deliveryRate?.change,
      icon: Percent,
    },
    {
      title: "Opens",
      value: data.opens?.yesterday?.toLocaleString() || "0",
      previous: data.opens?.beforeYesterday?.toLocaleString() || "0",
      change: data.opens?.change,
      icon: BellDot,
    },
    {
      title: "Open Rate",
      value: `${data.openRate?.yesterday || 0}%`,
      previous: `${data.openRate?.beforeYesterday || 0}%`,
      change: data.openRate?.change,
      icon: TrendingUp,
    },
    {
      title: "Recharge Conv",
      value: `${data.rechargeConv?.yesterday || 0}%`,
      previous: `${data.rechargeConv?.beforeYesterday || 0}%`,
      change: data.rechargeConv?.change,
      icon: CreditCard,
    },
  ];

  return (
    <div style={{ marginTop: 20 }}>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <h2
          style={{
            color: colors.textPrimary,
            fontSize: 24,
            fontWeight: 700,
            margin: 0,
            marginBottom: 6,
          }}
        >
          Notification Analytics
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
            margin: 0,
          }}
        >
          Track push notification performance to optimize delivery and
          engagement
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
          gap: 16,
        }}
      >
        {stats.map((item) => {
          const Icon = item.icon;
          const isPositive = item.change?.direction === "up";

          return (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 12,
                padding: 14,
                minHeight: 155,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Icon */}
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(228, 200, 77, 0.08)",
                    border: "1px solid rgba(228, 200, 77, 0.15)",
                    marginBottom: 12,
                  }}
                >
                  <Icon
                    size={18}
                    color="#E4C84D"
                  />
                </div>

                {/* Title */}
                <div
                  style={{
                    color: colors.textPrimary,
                    fontSize: 14,
                    fontWeight: 500,
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </div>

                {/* Value */}
                <div
                  style={{
                    color: "#E4C84D",
                    fontSize: 32,
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginBottom: 14,
                  }}
                >
                  {item.value}
                </div>
              </div>

              {/* Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    padding: "4px 8px",
                    borderRadius: 6,
                    background:
                      item.change?.pct === 0
                        ? "rgba(255,255,255,.08)"
                        : isPositive
                        ? "rgba(34,197,94,.18)"
                        : "rgba(239,68,68,.18)",
                    border:
                      item.change?.pct === 0
                        ? "1px solid rgba(255,255,255,.15)"
                        : isPositive
                        ? "1px solid rgba(34,197,94,.3)"
                        : "1px solid rgba(239,68,68,.3)",
                    color:
                      item.change?.pct === 0
                        ? "#fff"
                        : isPositive
                        ? "#4ADE80"
                        : "#F87171",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {item.change?.pct !== 0 &&
                    (isPositive ? (
                      <ArrowUpRight size={12} />
                    ) : (
                      <ArrowDownRight size={12} />
                    ))}

                  {item.change?.text || "0%"}
                </div>

                <span
                  style={{
                    color: colors.textSecondary,
                    fontSize: 12,
                  }}
                >
                  Previous {item.previous}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}