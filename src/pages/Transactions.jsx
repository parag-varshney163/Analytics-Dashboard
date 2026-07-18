// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import React from "react";
// import TransactionCreatorTable from "../components/transactions/TransactionCreatorTable";
// import DemandSideMetricsCards from "../components/demand-side/DemandSideMetricsCards ";
// import SupplySideMetricsTable from "../components/supply-side/SupplySideMetricsTable";
// import DemandSideMetricsTable from "../components/demand-side/DemandSideMetricsTable";
// import TimeOfDayRechargeChart from "../components/recharge/TimeOfDayRechargeChart";
// import RechargeMetricsTable from "../components/recharge/RechargeMetricsTable";
// import SupplySideCharts from "../components/supply-side/SupplySideCharts";
// import DemandSideCharts from "../components/demand-side/DemandSideCharts";
// import SupplySideStats from "../components/supply-side/SupplySideStats";
// import DemandSideStats from "../components/demand-side/DemandSideStats";
// import RechargeCharts from "../components/recharge/RechargeCharts";
// import RechargeStats from "../components/recharge/RechargeStats";
// import DateFilterBar from "../components/ui/DateFilterBar";
// import axiosInstance from "../api/axiosInstance";
// import Sidebar from "../components/ui/Sidebar";
// import colors from "../constants/colors";
// const filterMap = {
//     Yesterday: "yesterday",
//     "Before Yesterday": "day_before_yesterday",
//     "Last 7 Days": "7d",
//     "Last 30 Days": "30d",
//     "This Month": "30d",
// };
// const Transactions = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [filter, setFilter] = useState("yesterday");
//     const [rechargeStats, setRechargeStats] = useState(null);
//     const [packDistributionData, setPackDistributionData] = useState([]);
//     const [rechargeChartData, setRechargeChartData] = useState(null);
//     const [hourlyRechargeData, setHourlyRechargeData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const fetchData = async (selectedFilter = filter) => {
//         try {
//             setLoading(true);
//             const [kpiRes, revenueMixRes,packDistributionRes] =
//                 await Promise.all([
//                     axiosInstance.get("/api/v1/recharge/kpi", {
//                         params: { filter: selectedFilter },
//                     }),
//                     axiosInstance.get("/api/v1/recharge/revenue-and-mix", {
//                         params: { filter: selectedFilter },
//                     }),
//                     // axiosInstance.get("/api/v1/recharge/hourly-activity", {
//                     //     params: { filter: selectedFilter },
//                     // }),
//                      axiosInstance.get("/api/v1/recharge/pack-distribution", {
//                     params: { filter: selectedFilter },
//                 }),
//                 ]);
//             setRechargeStats(kpiRes.data.data);
//             setRechargeChartData(revenueMixRes.data.data);
//             // setHourlyRechargeData(hourlyRes.data.data || []);
//             setPackDistributionData(packDistributionRes.data.data || []);
//         } catch (err) {
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };
//     useEffect(() => {
//         fetchData(filter);
//     }, [filter]);
//     return (
//         <div
//             className="min-h-screen flex text-white overflow-hidden"
//             style={{ background: colors.gradientVertical }}
//         >
//             <Sidebar
//                 isOpen={sidebarOpen}
//                 toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
//             />
//             <motion.main
//                 animate={{
//                     marginLeft: sidebarOpen ? 220 : 70,
//                     width: sidebarOpen
//                         ? "calc(100% - 220px)"
//                         : "calc(100% - 70px)",
//                 }}
//                 transition={{ duration: 0.4, type: "tween" }}
//                 className="p-6 overflow-y-auto scrollbar-hide"
//             >
//                 <div className="space-y-1">
//                     <DateFilterBar
//                         onFilterChange={(value) =>
//                             setFilter(filterMap[value] || "yesterday")
//                         }
//                         onRefresh={() => fetchData(filter)}
//                     />
//                     <TransactionCreatorTable />
//                 </div>
//             </motion.main>
//         </div>
//     );
// };
// export default Transactions;
import { useEffect, useState } from "react";
import { User, Users } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

import AutoFlagReasonCodesTable from "../components/transactions/AutoFlagReasonCodesTable ";
import TransactionCreatorTable from "../components/transactions/TransactionCreatorTable";
import TransactionUserTable from "../components/transactions/TransactionUserTable ";
import TransactionKPIStats from "../components/transactions/TransactionKPIStats";
import FilterDropDown from "../components/ui/FilterDropDown";
import DateFilterBar from "../components/ui/DateFilterBar";
import axiosInstance from "../api/axiosInstance";
import Sidebar from "../components/ui/Sidebar";
import Button from "../components/ui/Button";
import colors from "../constants/colors";


const filterMap = {
    Yesterday: "yesterday",
    "Before Yesterday": "day_before_yesterday",
    "Last 7 Days": "7d",
    "Last 30 Days": "30d",
    "This Month": "30d",
};
const transactionTabs = [
    {
        key: "creator",
        label: "Creator Transactions",
        icon: Users,
    },
    {
        key: "user",
        label: "User Transactions",
        icon: User,
    },
];

const Transactions = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [filter, setFilter] = useState("yesterday");
    // const [loading, setLoading] = useState(false);
    const [creatorLoading, setCreatorLoading] = useState(false);
    const [userLoading, setUserLoading] = useState(false);

    // Creator Audit
    const [transactions, setTransactions] = useState([]);
    const [page, setPage] = useState(1);

    const [pagination, setPagination] = useState({
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 1,
    });

    // User Audit
    const [userTransactions, setUserTransactions] = useState([]);
    const [userPage, setUserPage] = useState(1);

    const [userPagination, setUserPagination] = useState({
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 1,
    });
    const [activeTab, setActiveTab] = useState("creator");
    const [creatorStatus, setCreatorStatus] = useState("All");
    const [userStatus, setUserStatus] = useState("All");

    const activeStatus =
        activeTab === "creator" ? creatorStatus : userStatus;

    // Creator Transactions API
    const fetchTransactions = async (
        selectedFilter = filter,
        selectedPage = page,
        selectedStatus = creatorStatus
    ) => {
        try {
            setCreatorLoading(true);
            const response = await axiosInstance.get(
                "/api/v1/transactions/audit/creator",
                {
                    params: {
                        filter: selectedFilter,
                        page: selectedPage,
                        limit: 10,
                        status:
                            selectedStatus === "All"
                                ? undefined
                                : selectedStatus.toLowerCase(),
                    },
                }
            );

            const apiData = response?.data?.data;

            setTransactions(apiData?.transactions || []);

            setPagination(
                apiData?.pagination || {
                    total: 0,
                    page: 1,
                    limit: 10,
                    totalPages: 1,
                }
            );
        } catch (error) {
            console.error("Creator TIM API Error:", error);
        } finally {
            setCreatorLoading(false);
        }
    };

    // User Transactions API
    const fetchUserTransactions = async (
        selectedFilter = filter,
        selectedPage = userPage,
        selectedStatus = userStatus
    ) => {
        try {
            setUserLoading(true);
            const response = await axiosInstance.get(
                "/api/v1/transactions/audit/user",
                {
                    params: {
                        filter: selectedFilter,
                        page: selectedPage,
                        limit: 10,
                        status:
                            selectedStatus === "All"
                                ? undefined
                                : selectedStatus.toLowerCase(),
                    },
                }
            );

            const apiData = response?.data?.data;

            setUserTransactions(apiData?.transactions || []);

            setUserPagination(
                apiData?.pagination || {
                    total: 0,
                    page: 1,
                    limit: 10,
                    totalPages: 1,
                }
            );
        } catch (error) {
            console.error("User TIM API Error:", error);
        } finally {
            setUserLoading(false);
        }
    };

    // const fetchAllData = async () => {
    //     try {
    //         setLoading(true);

    //         await Promise.all([
    //             fetchTransactions(filter, page),
    //             fetchUserTransactions(filter, userPage),
    //         ]);
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    const fetchAllData = async () => {
        await Promise.all([
            fetchTransactions(filter, page, creatorStatus),
            fetchUserTransactions(filter, userPage, userStatus),
        ]);
    };

    // useEffect(() => {
    //     fetchAllData();
    // }, [filter, page, userPage]);
    // Creator table
    useEffect(() => {
        fetchTransactions(filter, page, creatorStatus);
    }, [filter, page, creatorStatus]);

    // User table
    useEffect(() => {
        fetchUserTransactions(filter, userPage, userStatus);
    }, [filter, userPage, userStatus]);

    return (
        <div
            className="min-h-screen flex text-white overflow-hidden"
            style={{
                background: colors.gradientVertical,
            }}
        >
            <Sidebar
                isOpen={sidebarOpen}
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />

            <motion.main
                animate={{
                    marginLeft: sidebarOpen ? 220 : 70,
                    width: sidebarOpen
                        ? "calc(100% - 220px)"
                        : "calc(100% - 70px)",
                }}
                transition={{ duration: 0.4, type: "tween" }}
                className="p-6 overflow-y-auto scrollbar-hide"
            >
                <DateFilterBar
                    onFilterChange={(value) => {
                        setPage(1);
                        setUserPage(1);
                        setFilter(filterMap[value] || "yesterday");
                    }}
                    onRefresh={fetchAllData}
                />
                <div
                    className="flex flex-wrap items-center justify-between gap-4"
                    style={{ marginTop: "22px" }}
                >
                    <div className="flex flex-wrap gap-4">
                        {transactionTabs.map((tab) => {
                            const Icon = tab.icon;

                            return (
                                <Button
                                    key={tab.key}
                                    onClick={() => {
                                        setActiveTab(tab.key);

                                        if (tab.key === "creator") {
                                            setPage(1);
                                        } else {
                                            setUserPage(1);
                                        }
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

                    <div className="flex items-center gap-3">
                        <span
                            style={{
                                color: colors.textSecondary,
                                fontSize: "14px",
                                fontWeight: 500,
                            }}
                        >
                            Transaction Status:
                        </span>

                        <FilterDropDown
                            options={["All", "Normal", "Flagged"]}
                            defaultLabel={activeStatus}
                            width={170}
                            onSelect={(value) => {
                                if (activeTab === "creator") {
                                    setCreatorStatus(value);
                                    setPage(1);
                                } else {
                                    setUserStatus(value);
                                    setUserPage(1);
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="space-y-6">
                    <TransactionKPIStats filter={filter} transactionType={activeTab} />

                    {activeTab === "creator" && (
                        <TransactionCreatorTable
                            data={transactions}
                            loading={creatorLoading}
                            page={pagination.page}
                            totalPages={pagination.totalPages}
                            onPageChange={setPage}
                        />
                    )}

                    {activeTab === "user" && (
                        <TransactionUserTable
                            data={userTransactions}
                            loading={userLoading}
                            page={userPagination.page}
                            totalPages={userPagination.totalPages}
                            onPageChange={setUserPage}
                        />
                    )}
                    {/* <AutoFlagReasonCodesTable /> */}
                </div>
            </motion.main>
        </div>
    );
};

export default Transactions;