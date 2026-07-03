import React from "react";

import colors from "../../constants/colors";
import DataTable from "../ui/DataTable";


export default function NotificationTemplateTable({ data = [] }) {
  const tableData = data.map((item, index) => ({
    id: `${item.Date}-${item.Time}-${index}`,
    date: item.Date || "-",
    time: item.Time || "-",
    target: item.Target || "-",
    vertical: item["Vertical/Gen"] || "-",
    cta: item.CTA || "-",
    subCta: item["Sub CTA"] || "-",
    delivered: item.Delivered ?? 0,
    open: item.Open ?? 0,
    ctr: item.CTR ?? 0,
  }));

  const columns = [
    {
      key: "date",
      label: "Date",
      width: "1fr",
      align: "center",
    },
    {
      key: "time",
      label: "Time",
      width: "1fr",
      align: "center",
    },
    {
      key: "target",
      label: "Target",
      width: "1.5fr",
      align: "center",
      render: (value) => (
        <span
          style={{
            color: colors.accent,
            fontWeight: 600,
          }}
        >
          {value}
        </span>
      ),
    },
    {
      key: "vertical",
      label: "Vertical / Gen",
      width: "1.4fr",
      align: "center",
      render: (value) => (
        <span
          style={{
            color: value === "GENERAL" ? "#60A5FA" : "#C084FC",
            fontWeight: 600,
            fontSize: "13px",
          }}
        >
          {value.replaceAll("_", " ")}
        </span>
      ),
    },
    {
      key: "cta",
      label: "CTA",
      width: "2.2fr",
      align: "left",
      render: (value) => (
        <span
          style={{
            color: colors.textPrimary,
            fontWeight: 500,
          }}
        >
          {value}
        </span>
      ),
    },
    {
      key: "subCta",
      label: "Sub CTA",
      width: "2.5fr",
      align: "left",
      render: (value) => (
        <span
          style={{
            color: colors.textSecondary,
            fontSize: "13px",
          }}
        >
          {value}
        </span>
      ),
    },
    {
      key: "delivered",
      label: "Delivered",
      width: "1fr",
      align: "center",
      render: (value) => value.toLocaleString(),
    },
    {
      key: "open",
      label: "Open",
      width: "1fr",
      align: "center",
      render: (value) => value.toLocaleString(),
    },
    {
      key: "ctr",
      label: "CTR",
      width: "0.8fr",
      align: "center",
      render: (value) => (
        <span
          style={{
            color:
              value >= 15
                ? "#6EF7C8"
                : value >= 10
                ? colors.accent
                : "#FF6B6B",
            fontWeight: 700,
          }}
        >
          {value}
        </span>
      ),
    },
  ];

  return (
    <div>
      <div style={{ marginTop: "16px" }}>
        <h2
          style={{
            color: colors.textPrimary,
            fontSize: "24px",
            fontWeight: 700,
            margin: 0,
          }}
        >
          Notification Templates
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: "14px",
            marginTop: "6px",
            marginBottom: 0,
          }}
        >
          Track notification delivery, open rate, CTR, target audience, and
          campaign message performance.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={tableData}
        paginationMode="client"
      />
    </div>
  );
}
