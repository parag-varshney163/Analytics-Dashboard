import { useEffect, useState } from "react";
import { BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

import UserJourneyTable from "../components/user-journey/UserJourneyTable";
import DateFilterBar from "../components/ui/DateFilterBar";
import axiosInstance from "../api/axiosInstance";
import Sidebar from "../components/ui/Sidebar";
import colors from "../constants/colors";


const filterMap = {
    Yesterday: "yesterday",
    "Before Yesterday": "day_before_yesterday",
    "Last 7 Days": "7d",
    "Last 30 Days": "30d",
    "This Month": "30d",
};

export default function UserJourney() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [filter, setFilter] = useState("yesterday");
    const [date, setDate] = useState("");

    const [loading, setLoading] = useState(false);
    const [journeyData, setJourneyData] = useState([]);
    const [lastUpdated, setLastUpdated] = useState("");

    const fetchData = async (
        selectedFilter = filter,
        selectedDate = date
    ) => {
        try {
            setLoading(true);

            const { data } = await axiosInstance.get(
                "/api/v1/user-journey",
                {
                    // params: {
                    //     filter: selectedFilter,
                    //     ...(selectedDate && { date: selectedDate }),
                    // },
                }
            );

            setJourneyData(data.data || []);
            setLastUpdated(data.lastUpdated || "");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(filter, date);
    }, [filter, date]);

    return (
        <div
            className="min-h-screen flex text-white overflow-visible"
            style={{
                background: colors.gradientVertical,
            }}
        >
            <Sidebar
                isOpen={sidebarOpen}
                toggleSidebar={() =>
                    setSidebarOpen(!sidebarOpen)
                }
            />

            <motion.main
                animate={{
                    marginLeft: sidebarOpen ? 220 : 70,
                    width: sidebarOpen
                        ? "calc(100% - 220px)"
                        : "calc(100% - 70px)",
                }}
                transition={{
                    duration: 0.4,
                    type: "tween",
                }}
                className="p-6 overflow-y-auto scrollbar-hide"
            >
                <div className="space-y-6">

                    {/* <DateFilterBar
                        onFilterChange={(value) =>
                            setFilter(
                                filterMap[value] || "yesterday"
                            )
                        }
                        onRefresh={() =>
                            fetchData(filter, date)
                        }
                        onCustomDateChange={setDate}
                    /> */}
                    {/* <div
                        style={{
                            marginBottom: "20px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "6px",
                            }}
                        >
                            <BarChart3
                                size={24}
                                color={colors.accent}
                            />

                            <h2
                                style={{
                                    color: colors.textPrimary,
                                    fontSize: "24px",
                                    fontWeight: 700,
                                    margin: 0,
                                }}
                            >
                                User Journey
                            </h2>
                        </div>

                        <p
                            style={{
                                color: colors.textSecondary,
                                fontSize: "14px",
                                margin: 0,

                                lineHeight: "22px",
                            }}
                        >
                            Analyze user retention and engagement across different lifecycle stages. This report shows daily platform DAU, retention percentage, recharge activity, revenue
                            contribution, call volume, and total call duration for the
                            selected date or predefined date filter. Export the report
                            as CSV for further analysis.
                        </p>
                    </div> */}
                    <div
    className="flex items-start justify-between gap-6"
    style={{ marginBottom: "20px" }}
>
    {/* Left */}
    <div>
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "6px",
            }}
        >
            <BarChart3
                size={24}
                color={colors.accent}
            />

            <h2
                style={{
                    color: colors.textPrimary,
                    fontSize: "24px",
                    fontWeight: 700,
                    margin: 0,
                }}
            >
                User Journey
            </h2>
        </div>

        <p
            style={{
                color: colors.textSecondary,
                fontSize: "14px",
                lineHeight: "22px",
                margin: 0,
                maxWidth: "900px",
            }}
        >
            Analyze user retention and engagement across different
            lifecycle stages. This report shows daily platform DAU,
            retention percentage, recharge activity, revenue
            contribution, call volume, and total call duration.
            Export the report as CSV for further analysis.
        </p>
    </div>

    {/* Right */}
    <div
        className="text-right"
        style={{
            minWidth: "220px",
        }}
    >
        <div
            style={{
                color: colors.textSecondary,
                fontSize: "18px",
                fontWeight:700,
                marginBottom: "4px",
            }}
        >
            Last Updated
        </div>

        <div
            style={{
                color: colors.textPrimary,
                fontWeight: 600,
                fontSize: "16px",
            }}
        >
            {lastUpdated
                ? new Date(lastUpdated).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                  })
                : "-"}
        </div>
    </div>
</div>

                    <UserJourneyTable
                        data={journeyData}
                        loading={loading}
                        filter={filter}
                        date={date}
                    />

                </div>
            </motion.main>
        </div>
    );
}