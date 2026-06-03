import React from "react";

import colors from "../../constants/colors";
import DataTable from "../ui/DataTable";


const SupplySideMetricsTable = ({ data }) => {
  const columns = [
    {
      key: "metric",
      label: "Metric",
      width: "2fr",
      align: "left",
    },
    {
      key: "today",
      label: "Today",
      width: "1fr",
    },
    {
      key: "yesterday",
      label: "Yesterday",
      width: "1fr",
    },
    {
      key: "beforeYesterday",
      label: "Before Yesterday",
      width: "1fr",
    },
    {
      key: "change",
      label: "Change",
      width: "1fr",
      render: (value) => {
        if (!value) return "-";

        const isPositive = value.startsWith("+");

        return (
          <span
            style={{
              color: isPositive ? colors.success : colors.danger,
              fontWeight: 600,
            }}
          >
            {isPositive ? "↗ " : "↘ "}
            {value}
          </span>
        );
      },
    },
  ];

  const today = data?.today || {};
  const yesterday = data?.yesterday || {};
  const beforeYesterday = data?.beforeYesterday || {};
  const change = data?.change || {};
  // const data = [
  //   {
  //     metric: "Creators Online",
  //     today: 342,
  //     yesterday: 318,
  //     beforeYesterday: 295,
  //     change: "+7.5%",
  //   },
  //   {
  //     metric: "Level 1 Creators Online",
  //     today: 186,
  //     yesterday: 180,
  //     beforeYesterday: 175,
  //     change: null,
  //   },
  //   {
  //     metric: "Level 2 Creators Online",
  //     today: 156,
  //     yesterday: 138,
  //     beforeYesterday: 120,
  //     change: null,
  //   },
  //   {
  //     metric: "Total Online Time (Mins)",
  //     today: "42,850",
  //     yesterday: "41,220",
  //     beforeYesterday: "39,870",
  //     change: null,
  //   },
  //   {
  //     metric: "Total Talk Time (Mins)",
  //     today: "18,420",
  //     yesterday: "17,150",
  //     beforeYesterday: "16,540",
  //     change: "+7.4%",
  //   },
  //   {
  //     metric: "Total Connected Calls",
  //     today: "4,823",
  //     yesterday: "4,457",
  //     beforeYesterday: "4,230",
  //     change: "+8.2%",
  //   },
  //   {
  //     metric: "Call Acceptance %",
  //     today: "84.2%",
  //     yesterday: "82.4%",
  //     beforeYesterday: "81.7%",
  //     change: "+2.1%",
  //   },
  //   {
  //     metric: "< 1 Min Calls %",
  //     today: "12.4%",
  //     yesterday: "13.1%",
  //     beforeYesterday: "13.8%",
  //     change: null,
  //   },
  //   {
  //     metric: "3+ Min Calls %",
  //     today: "58.2%",
  //     yesterday: "57.4%",
  //     beforeYesterday: "56.9%",
  //     change: null,
  //   },
  //   {
  //     metric: "5+ Min Calls %",
  //     today: "34.8%",
  //     yesterday: "34.1%",
  //     beforeYesterday: "33.7%",
  //     change: null,
  //   },
  //   {
  //     metric: "< 15 Min Online Creators %",
  //     today: "8.2%",
  //     yesterday: "8.5%",
  //     beforeYesterday: "8.8%",
  //     change: null,
  //   },
  //   {
  //     metric: "Avg Online Time Per Host",
  //     today: "125.3 mins",
  //     yesterday: "122.6 mins",
  //     beforeYesterday: "119.8 mins",
  //     change: null,
  //   },
  // ];

  const tableData = [
    {
      metric: "Creators Online",
      today: today.creatorsOnline,
      yesterday: yesterday.creatorsOnline,
      beforeYesterday: beforeYesterday.creatorsOnline,
      change: change.creatorsOnline?.text,
    },
    {
      metric: "Level 1 Creators Online",
      today: today.level1CreatorsOnline,
      yesterday: yesterday.level1CreatorsOnline,
      beforeYesterday: beforeYesterday.level1CreatorsOnline,
      change: change.level1CreatorsOnline?.text,
    },
    {
      metric: "Level 2 Creators Online",
      today: today.level2CreatorsOnline,
      yesterday: yesterday.level2CreatorsOnline,
      beforeYesterday: beforeYesterday.level2CreatorsOnline,
      change: change.level2CreatorsOnline?.text,
    },
    {
      metric: "Connected Calls",
      today: today.connectedCalls,
      yesterday: yesterday.connectedCalls,
      beforeYesterday: beforeYesterday.connectedCalls,
      change: change.connectedCalls?.text,
    },
    {
      metric: "Total Talk Time (Mins)",
      today: today.talkTimeMins,
      yesterday: yesterday.talkTimeMins,
      beforeYesterday: beforeYesterday.talkTimeMins,
      change: change.talkTimeMins?.text,
    },
    {
      metric: "Call Acceptance %",
      today: `${today.callAcceptPct || 0}%`,
      yesterday: `${yesterday.callAcceptPct || 0}%`,
      beforeYesterday: `${beforeYesterday.callAcceptPct || 0}%`,
      change: change.callAcceptPct?.text,
    },
    {
      metric: "Onboarded",
      today: today.onboarded,
      yesterday: yesterday.onboarded,
      beforeYesterday: beforeYesterday.onboarded,
      change: change.onboarded?.text,
    },
    {
      metric: "Activated Creators",
      today: today.activatedCreators,
      yesterday: yesterday.activatedCreators,
      beforeYesterday: beforeYesterday.activatedCreators,
      change: change.activatedCreators?.text,
    },
    {
      metric: "Activation %",
      today: `${today.activationPct || 0}%`,
      yesterday: `${yesterday.activationPct || 0}%`,
      beforeYesterday: `${beforeYesterday.activationPct || 0}%`,
      change: change.activationPct?.text,
    },
    {
      metric: "Total Online Time (Mins)",
      today: today.totalOnlineTimeMins,
      yesterday: yesterday.totalOnlineTimeMins,
      beforeYesterday: beforeYesterday.totalOnlineTimeMins,
      change: change.totalOnlineTimeMins?.text,
    },
    {
      metric: "< 1 Min Calls %",
      today: `${today.lessThan1MinCallsPct || 0}%`,
      yesterday: `${yesterday.lessThan1MinCallsPct || 0}%`,
      beforeYesterday: `${beforeYesterday.lessThan1MinCallsPct || 0}%`,
      change: change.lessThan1MinCallsPct?.text,
    },
    {
      metric: "3+ Min Calls %",
      today: `${today.moreThan3MinCallsPct || 0}%`,
      yesterday: `${yesterday.moreThan3MinCallsPct || 0}%`,
      beforeYesterday: `${beforeYesterday.moreThan3MinCallsPct || 0}%`,
      change: change.moreThan3MinCallsPct?.text,
    },
    {
      metric: "5+ Min Calls %",
      today: `${today.moreThan5MinCallsPct || 0}%`,
      yesterday: `${yesterday.moreThan5MinCallsPct || 0}%`,
      beforeYesterday: `${beforeYesterday.moreThan5MinCallsPct || 0}%`,
      change: change.moreThan5MinCallsPct?.text,
    },
    {
      metric: "< 15 Min Online Creators %",
      today: `${today.lessThan15MinOnlineCreatorsPct || 0}%`,
      yesterday: `${yesterday.lessThan15MinOnlineCreatorsPct || 0}%`,
      beforeYesterday: `${beforeYesterday.lessThan15MinOnlineCreatorsPct || 0}%`,
      change: change.lessThan15MinOnlineCreatorsPct?.text,
    },
    {
      metric: "Avg Online Time Per Host",
      today: today.avgOnlineTimePerHost,
      yesterday: yesterday.avgOnlineTimePerHost,
      beforeYesterday: beforeYesterday.avgOnlineTimePerHost,
      change: change.avgOnlineTimePerHost?.text,
    },
    {
      metric: "Avg Talk Time Per Host",
      today: today.avgTalkTimePerHost,
      yesterday: yesterday.avgTalkTimePerHost,
      beforeYesterday: beforeYesterday.avgTalkTimePerHost,
      change: change.avgTalkTimePerHost?.text,
    },
    {
      metric: "Calls Per Host",
      today: today.callsPerHost,
      yesterday: yesterday.callsPerHost,
      beforeYesterday: beforeYesterday.callsPerHost,
      change: change.callsPerHost?.text,
    },
    {
      metric: "Callers Per Creator",
      today: today.callersPerCreator,
      yesterday: yesterday.callersPerCreator,
      beforeYesterday: beforeYesterday.callersPerCreator,
      change: change.callersPerCreator?.text,
    },
    {
      metric: "Avg Call Duration (Mins)",
      today: today.avgCallDurationMins,
      yesterday: yesterday.avgCallDurationMins,
      beforeYesterday: beforeYesterday.avgCallDurationMins,
      change: change.avgCallDurationMins?.text,
    },
  ];
  return (
    <div>
      <h2
        style={{
          color: colors.textPrimary,
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 20,
          marginTop: 28
        }}
      >
        Supply Side Metrics
      </h2>

      <DataTable
        columns={columns}
        data={tableData}
        paginationMode="client"
      />
    </div>
  );
};

export default SupplySideMetricsTable;
