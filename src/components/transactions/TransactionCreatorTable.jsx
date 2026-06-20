import React from "react";

import colors from "../../constants/colors";
import DataTable from "../ui/DataTable";


const TransactionCreatorTable = ({ data = [],
  loading = false,
  page = 1,
  totalPages = 1,
  onPageChange, }) => {
  const columns = [
    {
      key: "name",
      label: "Creator Name",
      width: "1.2fr",
      align: "center",
    },
    {
      key: "userId",
      label: "Creator ID",
      width: "1fr",
      align: "center",
    },
    {
      key: "level",
      label: "Level",
      width: "0.7fr",
      align: "center",
    },
    {
      key: "callDurationMins",
      label: "Call Duration",
      width: "1fr",
      render: (value) => `${value || 0} min`,
    },
    {
      key: "expectedCallEarnings",
      label: "Expected Call Earnings",
      width: "1.3fr",
    },
    {
      key: "giftEarnings",
      label: "Gift Earnings",
      width: "1fr",
    },
    {
      key: "chatEarnings",
      label: "Chat Earnings",
      width: "1fr",
    },
    {
      key: "gameEarnings",
      label: "Game Earnings",
      width: "1fr",
    },
    {
      key: "streakEarnings",
      label: "Streak Earnings",
      width: "1fr",
    },
    {
      key: "actualCredited",
      label: "Actual Credited",
      width: "1.2fr",
    },
    {
      key: "variance",
      label: "Variance Amount",
      width: "1fr",
    },
    {
      key: "variancePercentage",
      label: "Variance %",
      width: "1fr",
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
    // {
    //   key: "date",
    //   label: "Transaction Date",
    //   width: "1.5fr",
    //   render: (value) =>
    //     value ? new Date(value).toLocaleString("en-IN") : "-",
    // },
  ];
  const tableData = data;

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
          Transaction Integrity Monitor
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
          }}
        >
          Compare expected earnings against actual credited amounts and identify discrepancies.
        </p>
      </div>

      {/* <DataTable
        columns={columns}
        data={tableData}
        loading={loading}
        paginationMode="server"
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      /> */}
      <div
        style={{
          overflowX: "auto",
          width: "100%",
        }}
      >
        <div style={{ minWidth: "2800px" }}>
          <DataTable
            columns={columns}
            data={tableData}
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

export default TransactionCreatorTable; 
