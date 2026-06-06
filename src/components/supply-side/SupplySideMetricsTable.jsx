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
    // {
    //   key: "today",
    //   label: "Today",
    //   width: "1fr",
    // },
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
    key: "sevenDays",
    label: "Last 7 Days",
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
  const sevenDays = data?.["7d"] || {};
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
    yesterday: yesterday.creatorsOnline,
    beforeYesterday: beforeYesterday.creatorsOnline,
    sevenDays: sevenDays.creatorsOnline,
    change: change.creatorsOnline?.text,
  },
  {
    metric: "Level 1 Creators Online",
    yesterday: yesterday.level1CreatorsOnline,
    beforeYesterday: beforeYesterday.level1CreatorsOnline,
    sevenDays: sevenDays.level1CreatorsOnline,
    change: change.level1CreatorsOnline?.text,
  },
  {
    metric: "Level 2 Creators Online",
    yesterday: yesterday.level2CreatorsOnline,
    beforeYesterday: beforeYesterday.level2CreatorsOnline,
    sevenDays: sevenDays.level2CreatorsOnline,
    change: change.level2CreatorsOnline?.text,
  },
  {
    metric: "Connected Calls",
    yesterday: yesterday.connectedCalls,
    beforeYesterday: beforeYesterday.connectedCalls,
    sevenDays: sevenDays.connectedCalls,
    change: change.connectedCalls?.text,
  },
  {
    metric: "Total Talk Time (Mins)",
    yesterday: yesterday.talkTimeMins,
    beforeYesterday: beforeYesterday.talkTimeMins,
    sevenDays: sevenDays.talkTimeMins,
    change: change.talkTimeMins?.text,
  },
  {
    metric: "Call Acceptance %",
    yesterday: `${yesterday.callAcceptPct || 0}%`,
    beforeYesterday: `${beforeYesterday.callAcceptPct || 0}%`,
    sevenDays: `${sevenDays.callAcceptPct || 0}%`,
    change: change.callAcceptPct?.text,
  },
  {
    metric: "Onboarded",
    yesterday: yesterday.onboarded,
    beforeYesterday: beforeYesterday.onboarded,
    sevenDays: sevenDays.onboarded,
    change: change.onboarded?.text,
  },
  {
    metric: "New Online Access",
    yesterday: yesterday.newOnlineAccess,
    beforeYesterday: beforeYesterday.newOnlineAccess,
    sevenDays: sevenDays.newOnlineAccess,
    change: change.newOnlineAccess?.text,
  },
  {
    metric: "Activated Creators",
    yesterday: yesterday.activatedCreators,
    beforeYesterday: beforeYesterday.activatedCreators,
    sevenDays: sevenDays.activatedCreators,
    change: change.activatedCreators?.text,
  },
  {
    metric: "Activation %",
    yesterday: `${yesterday.activationPct || 0}%`,
    beforeYesterday: `${beforeYesterday.activationPct || 0}%`,
    sevenDays: `${sevenDays.activationPct || 0}%`,
    change: change.activationPct?.text,
  },
  {
    metric: "Level Transfers",
    yesterday: yesterday.levelTransfers,
    beforeYesterday: beforeYesterday.levelTransfers,
    sevenDays: sevenDays.levelTransfers,
    change: change.levelTransfers?.text,
  },
  {
    metric: "Total Online Time (Mins)",
    yesterday: yesterday.totalOnlineTimeMins,
    beforeYesterday: beforeYesterday.totalOnlineTimeMins,
    sevenDays: sevenDays.totalOnlineTimeMins,
    change: change.totalOnlineTimeMins?.text,
  },
  {
    metric: "< 1 Min Calls %",
    yesterday: `${yesterday.lessThan1MinCallsPct || 0}%`,
    beforeYesterday: `${beforeYesterday.lessThan1MinCallsPct || 0}%`,
    sevenDays: `${sevenDays.lessThan1MinCallsPct || 0}%`,
    change: change.lessThan1MinCallsPct?.text,
  },
  {
    metric: "3+ Min Calls %",
    yesterday: `${yesterday.moreThan3MinCallsPct || 0}%`,
    beforeYesterday: `${beforeYesterday.moreThan3MinCallsPct || 0}%`,
    sevenDays: `${sevenDays.moreThan3MinCallsPct || 0}%`,
    change: change.moreThan3MinCallsPct?.text,
  },
  {
    metric: "5+ Min Calls %",
    yesterday: `${yesterday.moreThan5MinCallsPct || 0}%`,
    beforeYesterday: `${beforeYesterday.moreThan5MinCallsPct || 0}%`,
    sevenDays: `${sevenDays.moreThan5MinCallsPct || 0}%`,
    change: change.moreThan5MinCallsPct?.text,
  },
  {
    metric: "< 15 Min Online Creators %",
    yesterday: `${yesterday.lessThan15MinOnlineCreatorsPct || 0}%`,
    beforeYesterday: `${beforeYesterday.lessThan15MinOnlineCreatorsPct || 0}%`,
    sevenDays: `${sevenDays.lessThan15MinOnlineCreatorsPct || 0}%`,
    change: change.lessThan15MinOnlineCreatorsPct?.text,
  },
  {
    metric: "Avg Online Time Per Host",
    yesterday: yesterday.avgOnlineTimePerHost,
    beforeYesterday: beforeYesterday.avgOnlineTimePerHost,
    sevenDays: sevenDays.avgOnlineTimePerHost,
    change: change.avgOnlineTimePerHost?.text,
  },
  {
    metric: "Avg Talk Time Per Host",
    yesterday: yesterday.avgTalkTimePerHost,
    beforeYesterday: beforeYesterday.avgTalkTimePerHost,
    sevenDays: sevenDays.avgTalkTimePerHost,
    change: change.avgTalkTimePerHost?.text,
  },
  {
    metric: "Calls Per Host",
    yesterday: yesterday.callsPerHost,
    beforeYesterday: beforeYesterday.callsPerHost,
    sevenDays: sevenDays.callsPerHost,
    change: change.callsPerHost?.text,
  },
  {
    metric: "Callers Per Creator",
    yesterday: yesterday.callersPerCreator,
    beforeYesterday: beforeYesterday.callersPerCreator,
    sevenDays: sevenDays.callersPerCreator,
    change: change.callersPerCreator?.text,
  },
  {
    metric: "Avg Call Duration (Mins)",
    yesterday: yesterday.avgCallDurationMins,
    beforeYesterday: beforeYesterday.avgCallDurationMins,
    sevenDays: sevenDays.avgCallDurationMins,
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
