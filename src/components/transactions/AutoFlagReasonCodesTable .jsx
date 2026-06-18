import React, { useEffect, useState } from "react";

import axiosInstance from "../../api/axiosInstance";
import colors from "../../constants/colors";
import DataTable from "../ui/DataTable";


const AutoFlagReasonCodesTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReasonCodes = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.get(
        "/api/v1/transactions/audit/flag-reasons"
      );

      setData(response?.data?.data || []);
    } catch (error) {
      console.error("Reason Codes API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReasonCodes();
  }, []);

  const columns = [
    {
      key: "code",
      label: "code",
      width: "1fr",
    },
    {
      key: "triggerCondition",
      label: "triggerCondition",
      width: "2fr",
      align: "left",
    },
    {
      key: "description",
      label: "description",
      width: "3fr",
      align: "left",
    },
    {
      key: "severity",
      label: "severity",
      width: "1fr",
      render: (value) => (
        <span
          style={{
            fontWeight: 700,
            color:
              value === "CRITICAL"
                ? colors.danger
                : value === "HIGH"
                ? colors.warning
                : value === "MEDIUM"
                ? "#3B82F6"
                : colors.success,
          }}
        >
          {value}
        </span>
      ),
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
          Auto Flagging Reason Codes
        </h2>

        <p
          style={{
            color: colors.textSecondary,
            fontSize: 14,
          }}
        >
          Rules used by the system to automatically flag suspicious transactions.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={data}
        loading={loading}
      />
    </div>
  );
};

export default AutoFlagReasonCodesTable;
