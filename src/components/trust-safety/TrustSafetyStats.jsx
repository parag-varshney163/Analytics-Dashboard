import { Flag, TriangleAlert, ShieldCheck, MessageSquareWarning, Headset, Clock3, ArrowUpRight, ArrowDownRight, } from "lucide-react";
import React from "react";

import colors from "../../constants/colors";


export default function TrustSafetyStats({ data, loading }) {
  if (loading) {
    return (
      <div
        style={{
          color: colors.textPrimary,
          padding: "20px 0",
        }}
      >
        Loading trust & safety stats...
      </div>
    );
  }

  if (!data) return null;

  const stats = [
    {
      title: "Flags Today",
      value: data.flagsToday?.yesterday?.toLocaleString() || "0",
      previous: data.flagsToday?.beforeYesterday?.toLocaleString() || "0",
      change: data.flagsToday?.change,
      icon: Flag,
    },
    {
      title: "Pending Review",
      value: data.pendingReview?.yesterday?.toLocaleString() || "0",
      previous: data.pendingReview?.beforeYesterday?.toLocaleString() || "0",
      change: data.pendingReview?.change,
      icon: TriangleAlert,
    },
    {
      title: "Resolved Today",
      value: data.resolvedToday?.yesterday?.toLocaleString() || "0",
      previous: data.resolvedToday?.beforeYesterday?.toLocaleString() || "0",
      change: data.resolvedToday?.change,
      icon: ShieldCheck,
    },
    {
      title: "Chat Flags",
      value: data.chatFlags?.yesterday?.toLocaleString() || "0",
      previous: data.chatFlags?.beforeYesterday?.toLocaleString() || "0",
      change: data.chatFlags?.change,
      icon: MessageSquareWarning,
    },
    {
      title: "Support Tickets",
      value: data.supportTickets?.yesterday?.toLocaleString() || "0",
      previous: data.supportTickets?.beforeYesterday?.toLocaleString() || "0",
      change: data.supportTickets?.change,
      icon: Headset,
    },
    {
      title: "Avg Resolution",
      value: `${data.avgResolution?.yesterday || 0} mins`,
      previous: `${data.avgResolution?.beforeYesterday || 0} mins`,
      change: data.avgResolution?.change,
      icon: Clock3,
    },
  ];

  return (
    <div style={{ marginTop: 20 }}>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <h2
          style={{
            color: colors.textPrimary,
            fontSize: 20,
            fontWeight: 700,
            margin: 0,
            marginBottom: 6,
          }}
        >
          Trust & Safety Analytics
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
            margin: 0,
          }}
        >
          Monitor moderation activity, reports, and resolution performance
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
                padding: 18,
                minHeight: 180,
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
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(228, 200, 77, 0.08)",
                    border: "1px solid rgba(228, 200, 77, 0.15)",
                    marginBottom: 14,
                  }}
                >
                  <Icon
                    size={22}
                    color="#E4C84D"
                  />
                </div>

                {/* Title */}
                <div
                  style={{
                    color: colors.textPrimary,
                    fontSize: 15,
                    fontWeight: 500,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </div>

                {/* Value */}
                <div
                  style={{
                    color: "#E4C84D",
                    fontSize: 44,
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: 16,
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
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "5px 10px",
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
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  {item.change?.pct !== 0 &&
                    (isPositive ? (
                      <ArrowUpRight size={13} />
                    ) : (
                      <ArrowDownRight size={13} />
                    ))}

                  {item.change?.text || "0%"}
                </div>

                <span
                  style={{
                    color: colors.textSecondary,
                    fontSize: 13,
                  }}
                >
                  Yesterday {item.previous}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
