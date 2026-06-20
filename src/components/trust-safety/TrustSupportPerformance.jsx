import React from "react";

import colors from "../../constants/colors";


export default function TrustSupportPerformance({ data }) {
  if (!data) return null;

  const messagesReceived = data.messagesReceived || {};
  const botResolutionRate = data.botResolutionRate || {};
  const peakHours = data.peakHours || {};
  const csatScore = data.csatScore || {};
  const escalatedByChatbot = data.escalatedByChatbot || {};

  const rating = Number(csatScore.rating || 0);
  const filledStars = Math.round(rating);

  return (
    <div
      style={{
        marginTop: 24,
        background: colors.cardBg,
        border: `1px solid ${colors.cardBorder}`,
        borderRadius: 24,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "24px 30px",
          borderBottom: `1px solid ${colors.cardBorder}`,
        }}
      >
        <h2
          style={{
            margin: 0,
            color: colors.textPrimary,
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Customer Support Performance
        </h2>

        <p
          style={{
            margin: "8px 0 0",
            color: colors.textSecondary,
            fontSize: 14,
          }}
        >
          Own support system metrics
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          padding: 28,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,

        }}
      >
        {/* Messages Received */}
        <div
          style={{
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: 20,
            padding: 24,
            minHeight: 140,
          }}
        >
          <div
            style={{
              color: colors.accent,
              fontSize: 15,
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            Messages Received
          </div>

          <div
            style={{
              fontSize: 42,
              color: colors.textPrimary,
              marginBottom: 12,
            }}
          >
            {messagesReceived.value?.toLocaleString() || 0}
          </div>

          <div
            style={{
              color: "#6EF7C8",
              fontSize: 15,
            }}
          >
            +{messagesReceived.change?.pct || 0}% vs yesterday
          </div>
        </div>

        {/* Bot Resolution Rate */}
        <div
          style={{
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: 20,
            padding: 24,
            minHeight: 140,
          }}
        >
          <div
            style={{
              color: colors.accent,
              fontSize: 15,
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            Bot Resolution Rate
          </div>

          <div
            style={{
              fontSize: 42,
              color: colors.textPrimary,
              marginBottom: 20,
            }}
          >
            {botResolutionRate.value}
          </div>

          <div
            style={{
              height: 10,
              background: "rgba(255,255,255,0.05)",
              borderRadius: 999,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: botResolutionRate.value || "0%",
                height: "100%",
                background: "#69C89D",
                borderRadius: 999,
              }}
            />
          </div>
        </div>

        {/* Peak Hours */}
        <div
          style={{
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: 20,
            padding: 24,
            minHeight: 140,
          }}
        >
          <div
            style={{
              color: colors.accent,
              fontSize: 15,
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            Peak Hours
          </div>

          <div
            style={{
              fontSize: 32,
              color: colors.textPrimary,
              marginBottom: 12,
            }}
          >
            {peakHours.value}
          </div>

          <div
            style={{
              color: colors.textSecondary,
              fontSize: 15,
            }}
          >
            Target: {peakHours.target}
          </div>
        </div>

        {/* CSAT Score */}
        {/* <div
          style={{
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: 20,
            padding: 24,
            minHeight: 140,
          }}
        >
          <div
            style={{
              color: colors.accent,
              fontSize: 15,
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            CSAT Score
          </div>

          <div
            style={{
              fontSize: 42,
              color: colors.textPrimary,
              marginBottom: 18,
            }}
          >
            {csatScore.value}
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
            }}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background:
                    item <= filledStars
                      ? "#69C89D"
                      : "rgba(255,255,255,.08)",
                }}
              />
            ))}
          </div>
        </div> */}
        {/* Escalated by Chatbot */}
<div
  style={{
    border: `1px solid ${colors.cardBorder}`,
    borderRadius: 20,
    padding: 24,
    minHeight: 140,
  }}
>
  <div
    style={{
      color: colors.accent,
      fontSize: 15,
      fontWeight: 600,
      marginBottom: 12,
    }}
  >
    Escalated by Chatbot
  </div>

  <div
    style={{
      fontSize: 42,
      color: colors.textPrimary,
      marginBottom: 12,
    }}
  >
    {Number(escalatedByChatbot.value || 0).toLocaleString()}
  </div>

  <div
    style={{
      color:
        escalatedByChatbot.change?.direction === "up"
          ? "#FF6B6B"
          : "#6EF7C8",
      fontSize: 15,
      fontWeight: 500,
    }}
  >
    {escalatedByChatbot.change?.direction === "up" ? "↗" : "↘"}{" "}
    {escalatedByChatbot.change?.pct || 0}% vs yesterday
  </div>
</div>
      </div>
    </div>
  );
}
