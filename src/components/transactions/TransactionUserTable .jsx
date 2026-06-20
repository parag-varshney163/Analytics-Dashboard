import React from "react";

import colors from "../../constants/colors";
import DataTable from "../ui/DataTable";


const TransactionUserTable = ({
  data = [],
  loading = false,
  page = 1,
  totalPages = 1,
  onPageChange,
}) => {
const columns = [
  {
    key: "name",
    label: "User Name",
    width: "1.2fr",
    align: "center",
  },
  {
    key: "userId",
    label: "User ID",
    width: "1fr",
    align: "center",
  },
  {
    key: "creditType",
    label: "Credit Type",
    width: "1.5fr",
    render: (value) => value?.replaceAll("_", " ") || "-",
  },
  {
    key: "packPurchased",
    label: "Purchased Pack",
    width: "1fr",
  },
  {
    key: "packCoinsExpected",
    label: "Expected Pack Coins",
    width: "1.2fr",
    render: (value) => Number(value || 0).toLocaleString("en-IN"),
  },
  {
    key: "streakCredits",
    label: "Streak Credits",
    width: "1fr",
    render: (value) => Number(value || 0).toLocaleString("en-IN"),
  },
  {
    key: "expectedCoins",
    label: "Expected Coins",
    width: "1fr",
    render: (value) => Number(value || 0).toLocaleString("en-IN"),
  },
  {
    key: "actualCoinsCredited",
    label: "Actual Coins Credited",
    width: "1.2fr",
    render: (value) => Number(value || 0).toLocaleString("en-IN"),
  },
  {
    key: "variancePercentage",
    label: "Variance %",
    width: "1.2fr",
    render: (value) => `${value ?? 0}%`,
  },
  {
    key: "status",
    label: "Transaction Status",
    width: "1.2fr",
    align: "center",
    render: (value) => {
      const isFlagged = value?.toLowerCase() === "flagged";

      return (
        <span
          className="px-3 py-1 rounded-md text-xs font-medium capitalize"
          style={{
            background: isFlagged ? "#7F1D1D" : "#1E3A8A",
            color: "#FFFFFF",
          }}
        >
          {value || "-"}
        </span>
      );
    },
  },
  {
    key: "date",
    label: "Transaction Date",
    width: "1.8fr",
    render: (value) =>
      value ? new Date(value).toLocaleString("en-IN") : "-",
  },
];

  return (
    <div style={{ marginTop: 28 }}>
      <div style={{ marginBottom: 20 }}>
        <h2
          style={{
            color: colors.textPrimary,
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          User Coin Credit Audit
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
          }}
        >
          Compare expected coin credits with actual credited coins and identify discrepancies.
        </p>
      </div>

      <div
        style={{
          overflowX: "auto",
          width: "100%",
        }}
      >
        <div style={{ minWidth: "2400px" }}>
          <DataTable
            columns={columns}
            data={data}
            loading={loading}
            paginationMode="server"
            page={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionUserTable;
