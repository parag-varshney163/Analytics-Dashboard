import { Users, User, CreditCard, Wallet, Download, Search, } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import React from "react";

import axiosInstance from "../../api/axiosInstance";
import DateFilterBar from "../ui/DateFilterBar";
import colors from "../../constants/colors";
import DataTable from "../ui/DataTable";
import Button from "../ui/Button";


const tabs = [
    {
        key: "creator-kundli",
        label: "Creator Kundli",
        icon: Users,
        endpoint: "/api/v1/reports/creator-kundli",
    },
    {
        key: "user-details",
        label: "User Details",
        icon: User,
        endpoint: "/api/v1/reports/user-details",
    },
    // {
    //     key: "recharge-transactions",
    //     label: "Recharge Transactions",
    //     icon: CreditCard,
    //     endpoint: "/api/v1/reports/recharge-transactions",
    // },
    {
        key: "payout-summary",
        label: "Payout Summary",
        icon: Wallet,
        endpoint: "/api/v1/reports/payout-summary",
    },
];

const filterMap = {
    Yesterday: "yesterday",
    "Before Yesterday": "day_before_yesterday",
    "Last 7 Days": "7d",
    "Last 30 Days": "30d",
    "This Month": "30d",
};

export default function WeeklyReports() {
    const [activeTab, setActiveTab] = useState("creator-kundli");

    const [filter, setFilter] = useState("7d");
    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(false);

    const [rows, setRows] = useState([]);

    const [page, setPage] = useState(1);

    const [totalPages, setTotalPages] = useState(1);

    const activeConfig = tabs.find(
        (tab) => tab.key === activeTab
    );

    const fetchData = async () => {
        try {
            setLoading(true);

            const res = await axiosInstance.get(
                activeConfig.endpoint,
                {
                    params: {
                        filter,
                        search,
                        page,
                        limit: 10,
                    },
                }
            );

            setRows(res.data?.data || []);

            setTotalPages(
                res.data?.pagination?.totalPages || 1
            );
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [activeTab, filter, page, search]);

    const creatorColumns = useMemo(
        () => [
            { key: "uid", label: "UID" },
            { key: "name", label: "Name" },
            { key: "phone", label: "Phone" },

            {
                key: "level",
                label: "Level",
                render: (value) => (
                    <span
                        className="px-3 py-1 rounded-md text-xs"
                        style={{
                            background: "#1E3A8A",
                        }}
                    >
                        {value}
                    </span>
                ),
            },

            { key: "activeDays", label: "Active Days" },

            { key: "onlineMins", label: "Online(Mins)" },

            { key: "talkTime", label: "Talk Time" },

            {
                key: "acceptPct",
                label: "Accept %",
            },

            {
                key: "totalEarnings",
                label: "Total Earnings",
            },

            { key: "rating", label: "Rating" },
        ],
        []
    );

    // const columns = creatorColumns;
    const userDetailsColumns = useMemo(
        () => [
            { key: "uid", label: "UID" },
            { key: "name", label: "Name" },
            { key: "phone", label: "Phone" },

            {
                key: "rechargeDate",
                label: "Last Recharge Date",
                render: (value) =>
                    value
                        ? new Date(value).toLocaleDateString("en-IN")
                        : "-",
            },

            { key: "totalRecharge", label: "Total Recharge" },

            { key: "rechargeCount", label: "Recharge Count" },

            { key: "lastPack", label: "Last Pack" },

            { key: "daysSinceLast", label: "Days Since Last" },

            { key: "dauFreq", label: "DAU %" },

            {
                key: "status",
                label: "Status",
                render: (value) => (
                    <span
                        className="px-3 py-1 rounded-md text-xs"
                        style={{
                            background:
                                value === "Paid" ? "#14532D" : "#7F1D1D",
                        }}
                    >
                        {value}
                    </span>
                ),
            },
        ],
        []
    );
    const rechargeTransactionColumns = useMemo(
        () => [
            {
                key: "transactionId",
                label: "Transaction ID",
            },
            {
                key: "dateTime",
                label: "Date & Time",
                render: (value) =>
                    value
                        ? new Date(value).toLocaleString("en-IN")
                        : "-",
            },
            {
                key: "user",
                label: "User",
            },
            {
                key: "amount",
                label: "Amount",
            },
            {
                key: "coin",
                label: "Coins",
                render: (value) => value || "-",
            },
            {
                key: "type",
                label: "Type",
                render: (value) =>
                    value?.replaceAll("_", " ") || "-",
            },
            {
                key: "gateway",
                label: "Gateway",
            },
            {
                key: "status",
                label: "Status",
                render: (value) => {
                    const bgColor =
                        value === "paid"
                            ? "#14532D"
                            : value === "pending"
                                ? "#92400E"
                                : "#7F1D1D";

                    return (
                        <span
                            className="px-3 py-1 rounded-md text-xs capitalize"
                            style={{ background: bgColor }}
                        >
                            {value}
                        </span>
                    );
                },
            },
        ],
        []
    );
    const payoutSummaryColumns = useMemo(
        () => [
            {
                key: "uid",
                label: "UID",
            },
            {
                key: "name",
                label: "Creator",
            },
            {
                key: "bank",
                label: "Bank",
            },
            {
                key: "period",
                label: "Period",
            },
            {
                key: "calls",
                label: "Calls",
            },
            {
                key: "chat",
                label: "Chat",
            },
            {
                key: "games",
                label: "Games",
            },
            {
                key: "gross",
                label: "Gross Earnings",
            },
            {
                key: "feeTds",
                label: "Fee / TDS",
            },
            {
                key: "netPayout",
                label: "Net Payout",
                render: (value) => (
                    <span className="font-semibold">
                        {value}
                    </span>
                ),
            },
            {
                key: "status",
                label: "Status",
                render: (value) => (
                    <span
                        className="px-3 py-1 rounded-md text-xs capitalize"
                        style={{
                            background:
                                value === "paid"
                                    ? "#14532D"
                                    : value === "pending"
                                        ? "#92400E"
                                        : "#7F1D1D",
                        }}
                    >
                        {value}
                    </span>
                ),
            },
        ],
        []
    );
    const columns = useMemo(() => {
        switch (activeTab) {
            case "creator-kundli":
                return creatorColumns;

            case "user-details":
                return userDetailsColumns;

            case "recharge-transactions":
                return rechargeTransactionColumns;
            case "payout-summary":
                return payoutSummaryColumns;
            default:
                return creatorColumns;
        }
    }, [activeTab, creatorColumns, userDetailsColumns]);
    const handleExport = async () => {
        try {
            const response = await axiosInstance.get(
                activeConfig.endpoint,
                {
                    params: {
                        filter,
                        search,
                        page,
                        limit: 10,
                        export: "csv",
                    },
                    responseType: "blob",
                }
            );

            const blob = new Blob([response.data], {
                type: "text/csv",
            });

            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = `${activeTab}-${filter}.csv`;

            document.body.appendChild(link);
            link.click();

            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Export failed:", error);
        }
    };


    return (
        <div className="space-y-8">
            {/* Date Filter */}
            {/* <DateFilterBar
                onFilterChange={(value) =>
                    setFilter(filterMap[value] || "30d")
                }
                onRefresh={fetchData}
            /> */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <div
                        className="px-4 py-2 rounded-xl text-sm font-medium w-fit"
                        style={{
                            background: colors.cardBg,
                            border: `1px solid ${colors.cardBorder}`,
                            color: colors.accent,
                        }}
                    >
                        Last 7 Days
                    </div>

                    <p
                        className="mt-2 text-sm"
                        style={{
                            color: colors.textSecondary,
                        }}
                    >
                        Disclaimer: Report data is fixed to the last 7 days and cannot be modified.
                    </p>
                </div>

                <Button
                    onClick={fetchData}
                    className="h-10 px-4"
                >
                    Refresh
                </Button>
            </div>

            {/* Header */}
            <div className="pt-2">
                <h1
                    className="text-3xl font-semibold"
                    style={{ color: colors.textPrimary }}
                >
                    Weekly Reports
                </h1>

                <p
                    className="mt-2 text-lg"
                    style={{ color: colors.textSecondary }}
                >
                    On-demand reports with date-range filters • Export to CSV/Excel
                </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 pt-2">
                {tabs.map((tab) => {
                    const Icon = tab.icon;

                    return (
                        <Button
                            key={tab.key}
                            onClick={() => {
                                setActiveTab(tab.key);
                                setPage(1);
                            }}
                            variant={
                                activeTab === tab.key
                                    ? "primary"
                                    : "secondary"
                            }
                            className="h-14 min-w-[220px]"
                        >
                            <Icon size={18} />
                            {tab.label}
                        </Button>
                    );
                })}
            </div>

            {/* Search + Actions */}
            {/* Search + Export */}
            <div className="flex items-center justify-between gap-4 mt-6">
                <div className="relative flex-1 max-w-3xl">
                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                        style={{ color: colors.textSecondary }}
                    />

                    <input
                        type="text"
                        value={search}
                        placeholder="Search by name, phone or ID..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full h-[52px] pl-12 pr-4 rounded-xl border outline-none transition-all"
                        style={{
                            borderColor: colors.cardBorder,
                            background: colors.cardBg,
                            color: colors.textPrimary,
                        }}
                    />
                </div>

                {/* <Button
                    icon={Download}
                    className="h-[52px] px-5 whitespace-nowrap"
                    onClick={() =>
                        window.open(
                            `${activeConfig.endpoint}?filter=${filter}&export=csv`
                        )
                    }
                >
                    Export CSV
                </Button> */}
                <Button
                    icon={Download}
                    className="h-[52px] px-5 whitespace-nowrap"
                    onClick={handleExport}
                >
                    Export CSV
                </Button>
            </div>

            {/* Table */}
            <div
                className="mt-4 rounded-3xl border overflow-hidden"
                style={{
                    borderColor: colors.cardBorder,
                    background: colors.cardBg,
                }}
            >
                <DataTable
                    columns={columns}
                    data={rows}
                    loading={loading}
                    paginationMode="server"
                    page={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                />
            </div>
        </div>
    );
}
