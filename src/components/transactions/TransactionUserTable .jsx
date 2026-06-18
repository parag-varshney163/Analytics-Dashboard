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
      key: "transactionId",
      label: "transactionId",
      width: "2fr",
      align: "left",
    },
    {
      key: "name",
      label: "name",
      width: "1.2fr",
      align: "left",
    },
    {
      key: "userId",
      label: "userId",
      width: "2fr",
      align: "left",
    },
    {
      key: "creditType",
      label: "creditType",
      width: "1.5fr",
    },
    {
      key: "packPurchased",
      label: "packPurchased",
      width: "1fr",
    },
    {
      key: "packCoinsExpected",
      label: "packCoinsExpected",
      width: "1.2fr",
    },
    {
      key: "streakCredits",
      label: "streakCredits",
      width: "1fr",
    },
    {
      key: "expectedCoins",
      label: "expectedCoins",
      width: "1fr",
    },
    {
      key: "actualCoinsCredited",
      label: "actualCoinsCredited",
      width: "1.2fr",
    },
    {
      key: "variance",
      label: "variance",
      width: "1fr",
      render: (value) => (
        <span
          style={{
            color:
              value > 0
                ? colors.success
                : value < 0
                ? colors.danger
                : colors.textPrimary,
            fontWeight: 600,
          }}
        >
          {value > 0 ? `+${value}` : value}
        </span>
      ),
    },
    {
      key: "variancePercentage",
      label: "variancePercentage",
      width: "1.2fr",
      render: (value) => `${value || 0}%`,
    },
    {
      key: "flagReason",
      label: "flagReason",
      width: "1fr",
      render: (value) => value || "-",
    },
    {
      key: "status",
      label: "status",
      width: "1fr",
    },
    {
      key: "reviewStatus",
      label: "reviewStatus",
      width: "1fr",
    },
    {
      key: "reviewNotes",
      label: "reviewNotes",
      width: "1fr",
      render: (value) => value || "-",
    },
    {
      key: "date",
      label: "date",
      width: "1.8fr",
      render: (value) =>
        value
          ? new Date(value).toLocaleString("en-IN")
          : "-",
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
