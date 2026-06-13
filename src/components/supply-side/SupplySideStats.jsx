import { Users, Phone, Clock3, PhoneCall, UserPlus, TrendingUp, BarChart3, } from "lucide-react";
import React from "react";

import colors from "../../constants/colors";
import StatsCard from "../ui/StatsCard";


export default function SupplySideStats({data,loading}) {
  const calculateChange = (current, previous) => {
  if (!previous) return "0";

  return (
    (((current - previous) / previous) * 100).toFixed(1)
  );
};
  // const stats = [
  //   {
  //     title: "Creators Online",
  //     value: "342",
  //     icon: Users,
  //     change: "7.5%",
  //     previousValue: "230",
  //     positive: true,
  //   },
  //   {
  //     title: "Connected Calls",
  //     value: "4,823",
  //     icon: Phone,
  //     change: "8.2%",
  //     previousValue: "2,000",
  //     positive: true,
  //   },
  //   {
  //     title: "Talk Time",
  //     value: "30h 10m",
  //     icon: Clock3,
  //     change: "7.8%",
  //     previousValue: "20h 00m",
  //     positive: true,
  //   },
  //   {
  //     title: "Call Accept %",
  //     value: "84.2%",
  //     icon: PhoneCall,
  //     change: "9.6%",
  //     previousValue: "90%",
  //     positive: false,
  //   },
  //   {
  //     title: "Onboarded Today",
  //     value: "28",
  //     icon: UserPlus,
  //     change: "9.6%",
  //     previousValue: "60",
  //     positive: false,
  //   },
  //   {
  //     title: "Activation %",
  //     value: "78.5%",
  //     icon: TrendingUp,
  //     change: "8%",
  //     previousValue: "70%",
  //     positive: true,
  //   },
  // ];

  const current = data?.yesterday || {};
const previous = data?.beforeYesterday || {};

const stats = [
  {
    title: "Creators Online",
    value: current.creatorsOnline || 0,
    icon: Users,
    change: `${calculateChange(
      current.creatorsOnline,
      previous.creatorsOnline
    )}%`,
    previousValue: previous.creatorsOnline || 0,
    positive:
      current.creatorsOnline >= previous.creatorsOnline,
  },
  {
    title: "Connected Calls",
    value: current.connectedCalls || 0,
    icon: Phone,
    change: `${calculateChange(
      current.connectedCalls,
      previous.connectedCalls
    )}%`,
    previousValue: previous.connectedCalls || 0,
    positive:
      current.connectedCalls >= previous.connectedCalls,
  },
  {
    title: "Talk Time",
    value: `${Math.floor(
      (current.talkTimeMins || 0) / 60
    )}h ${(current.talkTimeMins || 0) % 60}m`,
    icon: Clock3,
    change: `${calculateChange(
      current.talkTimeMins,
      previous.talkTimeMins
    )}%`,
    previousValue: `${Math.floor(
      (previous.talkTimeMins || 0) / 60
    )}h ${(previous.talkTimeMins || 0) % 60}m`,
    positive:
      current.talkTimeMins >= previous.talkTimeMins,
  },
  {
    title: "Call Accept %",
    value: `${current.callAcceptPct || 0}%`,
    icon: PhoneCall,
    change: `${calculateChange(
      current.callAcceptPct,
      previous.callAcceptPct
    )}%`,
    previousValue: `${previous.callAcceptPct || 0}%`,
    positive:
      current.callAcceptPct >= previous.callAcceptPct,
  },
  {
    title: "Onboarded",
    value: current.onboarded || 0,
    icon: UserPlus,
    change: `${calculateChange(
      current.onboarded,
      previous.onboarded
    )}%`,
    previousValue: previous.onboarded || 0,
    positive:
      current.onboarded >= previous.onboarded,
  },
  {
    title: "Activation %",
    value: `${current.activationPct || 0}%`,
    icon: TrendingUp,
    change: `${calculateChange(
      current.activationPct,
      previous.activationPct
    )}%`,
    previousValue: `${previous.activationPct || 0}%`,
    positive:
      current.activationPct >= previous.activationPct,
  },
];
  return (
    <div>
      {/* Header */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "6px",
          }}
        >
          <BarChart3 size={24} color={colors.accent} />

          <h2
            style={{
              color: colors.textPrimary,
              fontSize: "24px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Supply Side
          </h2>
        </div>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: "14px",
            margin: 0,
          }}
        >
          Creator-activity,performance and engagement-metrices-Yesterday vs Before Yesterday
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "16px",
        }}
      >
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
}