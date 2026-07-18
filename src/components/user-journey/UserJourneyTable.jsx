import { Download } from "lucide-react";
import { useMemo } from "react";

import axiosInstance from "../../api/axiosInstance";
import colors from "../../constants/colors";
import DataTable from "../ui/DataTable";
import Button from "../ui/Button";


export default function UserJourneyTable({
    data,
    loading,
    filter,
    date,
}) {

    const columns = useMemo(
        () => [
            {
                key: "day",
                label: "Day",
            },
            {
                key: "appOpen",
                label: "App Open",
            },
            {
                key: "retentionPct",
                label: "Retention %",
            },
            {
                key: "recharge",
                label: "Recharge",
            },
            {
                key: "rechargeAmount",
                label: "Recharge Amount",
                render: (v) =>
                    `₹${Number(v).toLocaleString("en-IN")}`,
            },
            {
                key: "totalRevenuePct",
                label: "Revenue %",
            },
            {
                key: "totalCalls",
                label: "Calls",
            },
            {
                key: "totalCallPct",
                label: "Call %",
            },
            {
                key: "totalCallDuration",
                label: "Call Duration",
            },
        ],
        []
    );

    const handleExport = async () => {
        const response = await axiosInstance.get(
            "/api/v1/user-journey",
            {
                params: {
                    filter,
                    ...(date && { date }),
                    exportFormat: "csv",
                },
                responseType: "blob",
            }
        );

        const blob = new Blob([response.data]);

        const url =
            window.URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;
        a.download = "user-journey.csv";

        a.click();

        window.URL.revokeObjectURL(url);
    };

    return (
        <div
            className="rounded-3xl border p-6"
            style={{
                background: colors.cardBg,
                borderColor: colors.cardBorder,
            }}
        >
            <div className="flex justify-between items-center mb-6">

                <h2
                    className="text-xl font-semibold"
                    style={{
                        color: colors.textPrimary,
                    }}
                >
                    User Journey
                </h2>

                <Button
                    icon={Download}
                    onClick={handleExport}
                >
                    Export CSV
                </Button>

            </div>

            <DataTable
                columns={columns}
                data={data}
                loading={loading}
            />
        </div>
    );
}
