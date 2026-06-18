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
      key: "level",
      label: "level",
      width: "0.7fr",
    },
    {
      key: "callDurationMins",
      label: "callDurationMins",
      width: "1fr",
      render: (value) => `${value || 0} min`,
    },
    {
      key: "expectedCallEarnings",
      label: "expectedCallEarnings",
      width: "1fr",
    },
    {
      key: "giftEarnings",
      label: "giftEarnings",
      width: "1fr",
    },
    {
      key: "chatEarnings",
      label: "chatEarnings",
      width: "1fr",
    },
    {
      key: "gameEarnings",
      label: "gameEarnings",
      width: "1fr",
    },
    {
      key: "streakEarnings",
      label: "streakEarnings",
      width: "1fr",
    },
    {
      key: "totalExpected",
      label: "totalExpected",
      width: "1fr",
    },
    {
      key: "actualCredited",
      label: "actualCredited",
      width: "1fr",
    },
    {
      key: "variance",
      label: "variance",
      width: "1fr",
    },
    {
      key: "variancePercentage",
      label: "variancePercentage",
      width: "1fr",
      render: (value) => `${value}%`,
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
      width: "1.5fr",
      render: (value) =>
        value
          ? new Date(value).toLocaleString("en-IN")
          : "-",
    },
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
