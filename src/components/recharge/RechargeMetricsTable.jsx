import React from "react";

import colors from "../../constants/colors";
import DataTable from "../ui/DataTable";


const RechargeMetricsTable = ({ data = [] }) => {
  const columns = [
    {
      key: "packName",
      label: "Pack",
      width: "2.5fr",
      align: "left",
    },
    {
      key: "count",
      label: "Recharges",
      width: "1fr",
    },
    {
      key: "revenue",
      label: "Revenue",
      width: "1fr",
      render: (value) => `₹${value?.toLocaleString() || 0}`,
    },
    {
      key: "uniqueUsers",
      label: "Users",
      width: "1fr",
    },
    {
      key: "avgRechargePerUser",
      label: "Avg/User",
      width: "1fr",
      render: (value) => Number(value || 0).toFixed(2),
    },
    {
      key: "mixPct",
      label: "Mix %",
      width: "1fr",
      render: (value) => (
        <span
          style={{
            color: colors.success,
            fontWeight: 600,
          }}
        >
          {value}%
        </span>
      ),
    },
  ];

  const tableData = data
    .filter(
      (item) =>
        item.count > 0 ||
        item.revenue > 0 ||
        item.uniqueUsers > 0
    )
    .sort((a, b) => b.revenue - a.revenue);

  return (
    <div
      style={{
        marginTop: 28,
      }}
    >
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <h2
          style={{
            color: colors.textPrimary,
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Pack-wise Recharge Distribution
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
          }}
        >
          Revenue contribution and recharge mix by pack
        </p>
      </div>

      <DataTable
        columns={columns}
        data={tableData}
        paginationMode="client"
      />
    </div>
  );
};

export default RechargeMetricsTable;
