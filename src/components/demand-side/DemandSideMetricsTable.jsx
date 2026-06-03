import React from "react";

import colors from "../../constants/colors";
import DataTable from "../ui/DataTable";


const DemandSideMetricsTable = () => {
  const columns = [
    {
      key: "pack",
      label: "Pack",
      width: "2fr",
      align: "left",
    },
    {
      key: "count",
      label: "Count",
      width: "1fr",
    },
    {
      key: "revenue",
      label: "Revenue",
      width: "1fr",
    },
    {
      key: "users",
      label: "Users",
      width: "1fr",
    },
    {
      key: "share",
      label: "Share %",
      width: "1fr",
      render: (value) => (
        <span
          style={{
            color: "#7EF3C8",
            fontWeight: 600,
          }}
        >
          {value}
        </span>
      ),
    },
  ];

  const tableData = [
    {
      pack: "₹49 Starter",
      count: 842,
      revenue: "₹41.3K",
      users: 756,
      share: "25.9%",
    },
    {
      pack: "₹99 Basic",
      count: 924,
      revenue: "₹91.5K",
      users: 812,
      share: "28.4%",
    },
    {
      pack: "₹199 Popular",
      count: 678,
      revenue: "₹134.9K",
      users: 598,
      share: "20.8%",
    },
    {
      pack: "₹499 Premium",
      count: 456,
      revenue: "₹227.5K",
      users: 402,
      share: "14.0%",
    },
    {
      pack: "₹999 Gold",
      count: 234,
      revenue: "₹233.8K",
      users: 198,
      share: "7.2%",
    },
    {
      pack: "₹1,999 Platinum",
      count: 122,
      revenue: "₹234.9K",
      users: 108,
      share: "3.7%",
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
          marginTop: 28,
        }}
      >
        Pack-wise Recharge Distribution
      </h2>

      <p
        style={{
          color: colors.textSecondary,
          marginBottom: 20,
          fontSize: 14,
        }}
      >
        Revenue contribution by pack
      </p>

      <DataTable
        columns={columns}
        data={tableData}
        paginationMode="client"
      />
    </div>
  );
};

export default DemandSideMetricsTable;
