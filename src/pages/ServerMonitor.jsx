import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import axios from "axios";

import DataTable from "../components/ui/DataTable";
import Sidebar from "../components/ui/Sidebar";
import colors from "../constants/colors";


const ServerMonitor = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [serverInfo, setServerInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [metrics, setMetrics] = useState([]);
    const [systemHealth, setSystemHealth] = useState([]);
    const [serverStats, setServerStats] = useState([]);

    //   const fetchServerInfo = async () => {
    //     try {
    //       setLoading(true);

    //       const { data } = await axios.get(
    //         "https://api.chatspark.in/api/v2/info"
    //       );

    //       setServerInfo([data]); // DataTable expects an array
    //       setError("");
    //     } catch (err) {
    //       setError("Unable to fetch server information.");
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    const fetchServerInfo = async () => {
        try {
            setLoading(true);

            const [infoRes, metricsRes, healthRes, statsRes] = await Promise.all([
                axios.get("https://api.chatspark.in/api/v2/info"),
                axios.get("https://api.chatspark.in/api/v2/system"),
                axios.get("https://api.chatspark.in/api/v2/performance"),
                axios.get("https://api.chatspark.in/api/v2/details"),
            ]);

            setServerInfo([infoRes.data]);
            setMetrics(formatMetrics(metricsRes.data));
            setSystemHealth(formatHealthData(healthRes.data));
            setServerStats(formatServerStats(statsRes.data));

            setError("");
        } catch (err) {
            setError("Unable to fetch server information.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchServerInfo();

        // Refresh every 30 seconds
        const interval = setInterval(fetchServerInfo, 60000);

        return () => clearInterval(interval);
    }, []);

    const columns = [
        {
            key: "hostname",
            label: "Hostname",
            width: "2fr",
        },
        {
            key: "platform",
            label: "Platform",
            width: "1fr",
        },
        {
            key: "arch",
            label: "Architecture",
            width: "1fr",
        },
        {
            key: "nodeVersion",
            label: "Node Version",
            width: "1.2fr",
        },
        {
            key: "uptime",
            label: "Uptime",
            width: "1.8fr",
        },
        {
            key: "environment",
            label: "Environment",
            width: "1.2fr",
            render: (value) => (
                <span
                    style={{
                        padding: "6px 12px",
                        borderRadius: 999,
                        background:
                            value === "production"
                                ? colors.success + "20"
                                : colors.warning + "20",
                        color:
                            value === "production"
                                ? colors.success
                                : colors.warning,
                        fontWeight: 600,
                    }}
                >
                    {value.toUpperCase()}
                </span>
            ),
        },
        {
            key: "responseTimeMs",
            label: "Response",
            width: "1fr",
            render: (value) => (
                <span
                    style={{
                        color:
                            value <= 100
                                ? colors.success
                                : value <= 500
                                    ? colors.warning
                                    : colors.danger,
                        fontWeight: 600,
                    }}
                >
                    {value} ms
                </span>
            ),
        },
    ];
    const formatMetrics = (data) => [
        {
            category: "API",
            metric: "Total Requests",
            value: data.business.api.totalRequests.toLocaleString(),
        },
        {
            category: "API",
            metric: "Error Rate",
            value: `${data.business.api.errorRatePercent}%`,
        },
        {
            category: "API",
            metric: "Average Latency",
            value: `${data.business.api.avgLatencyMs} ms`,
        },

        {
            category: "Calls",
            metric: "Initiated",
            value: data.business.calls.initiated,
        },
        {
            category: "Calls",
            metric: "Answered",
            value: data.business.calls.answered,
        },
        {
            category: "Calls",
            metric: "Failed",
            value: data.business.calls.failed,
        },
        {
            category: "Calls",
            metric: "Success Rate",
            value: `${data.business.calls.successRatePercent}%`,
        },

        {
            category: "Billing",
            metric: "Successful",
            value: data.business.billing.successful,
        },
        {
            category: "Billing",
            metric: "Failed",
            value: data.business.billing.failed,
        },

        {
            category: "CPU",
            metric: "Model",
            value: data.cpu.model,
        },
        {
            category: "CPU",
            metric: "Cores",
            value: data.cpu.cores,
        },
        {
            category: "CPU",
            metric: "Load Average",
            value: data.cpu.loadAverage.join(", "),
        },

        {
            category: "Memory",
            metric: "Total",
            value: `${data.memory.totalGB} GB`,
        },
        {
            category: "Memory",
            metric: "Used",
            value: `${data.memory.usedGB} GB`,
        },
        {
            category: "Memory",
            metric: "Free",
            value: `${data.memory.freeGB} GB`,
        },
        {
            category: "Memory",
            metric: "Usage",
            value: `${data.memory.usagePercent}%`,
        },

        {
            category: "Process",
            metric: "Heap Total",
            value: `${data.process.heapTotalMB} MB`,
        },
        {
            category: "Process",
            metric: "Heap Used",
            value: `${data.process.heapUsedMB} MB`,
        },
        {
            category: "Process",
            metric: "RSS",
            value: `${data.process.rssMB} MB`,
        },
        {
            category: "Process",
            metric: "Uptime",
            value: `${data.process.uptimeSeconds} sec`,
        },
        {
            category: "Process",
            metric: "DB Connections",
            value: data.process.activeDbConnections,
        },

        {
            category: "Network",
            metric: "RX Bytes",
            value: data.network.eth0.rxBytes.toLocaleString(),
        },
        {
            category: "Network",
            metric: "TX Bytes",
            value: data.network.eth0.txBytes.toLocaleString(),
        },

        {
            category: "Server",
            metric: "Response Time",
            value: `${data.responseTimeMs} ms`,
        },
    ];
    const metricsColumns = [
        {
            key: "category",
            label: "Category",
            width: "1fr",
        },
        {
            key: "metric",
            label: "Metric",
            width: "2fr",
        },
        {
            key: "value",
            label: "Value",
            width: "2fr",
        },
    ];
    const formatHealthData = (data) => [
        {
            category: "CPU",
            metric: "Usage",
            value: `${data.cpu.usagePercent}%`,
        },
        {
            category: "CPU",
            metric: "Cores",
            value: data.cpu.cores,
        },
        {
            category: "CPU",
            metric: "Load Average",
            value: data.cpu.loadAverage.join(", "),
        },
        {
            category: "Memory",
            metric: "RSS",
            value: `${data.memory.rssMB} MB`,
        },
        {
            category: "Memory",
            metric: "Heap Used",
            value: `${data.memory.heapUsedMB} MB`,
        },
        {
            category: "Memory",
            metric: "Heap Total",
            value: `${data.memory.heapTotalMB} MB`,
        },
        {
            category: "Performance",
            metric: "Event Loop Delay",
            value: data.performance.eventLoopDelay,
        },
        {
            category: "Performance",
            metric: "Uptime",
            value: data.performance.uptime,
        },
        {
            category: "Server",
            metric: "Response Time",
            value: `${data.responseTimeMs} ms`,
        },
        {
            category: "Server",
            metric: "Timestamp",
            value: data.timestamp,
        },
    ];
    const formatServerStats = (data) => [
        {
            category: "Server",
            metric: "Uptime",
            value: `${Math.floor(data.uptime)} sec`,
        },

        {
            category: "Memory",
            metric: "Total Memory",
            value: `${data.memory.totalMB} MB`,
        },
        {
            category: "Memory",
            metric: "Used Memory",
            value: `${data.memory.usedMB} MB`,
        },
        {
            category: "Memory",
            metric: "Free Memory",
            value: `${data.memory.freeMB} MB`,
        },
        {
            category: "Memory",
            metric: "Usage",
            value: `${data.memory.usedPercent}%`,
        },

        {
            category: "CPU",
            metric: "Usage",
            value: `${data.cpu.usagePercent}%`,
        },
        {
            category: "CPU",
            metric: "Cores",
            value: data.cpu.cores,
        },
        {
            category: "CPU",
            metric: "Load Average",
            value: data.cpu.loadAverage.join(", "),
        },

        {
            category: "Server",
            metric: "Response Time",
            value: `${data.responseTimeMs} ms`,
        },
        {
            category: "Server",
            metric: "Timestamp",
            value: data.timestamp,
        },
    ];

    return (
        <div
            className="min-h-screen flex text-white overflow-hidden"
            style={{ background: colors.gradientVertical }}
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
                <h1
                    style={{
                        color: colors.textPrimary,
                        fontSize: 28,
                        fontWeight: 700,
                    }}
                >
                    Server Monitor
                </h1>

                <p
                    style={{
                        color: colors.textSecondary,
                        marginTop: 6,
                    }}
                >
                    Live server information (Auto refresh every 60 seconds)
                </p>

                <DataTable
                    columns={columns}
                    data={serverInfo}
                    loading={loading}
                    error={error}
                />
                <h2
                    style={{
                        marginTop: 40,
                        marginBottom: 12,
                        fontSize: 22,
                        fontWeight: 700,
                        color: colors.textPrimary,
                    }}
                >
                    Server Metrics
                </h2>

                <DataTable
                    columns={metricsColumns}
                    data={metrics}
                    loading={loading}
                    error={error}
                />
                <h2
                    style={{
                        marginTop: 40,
                        marginBottom: 12,
                        fontSize: 22,
                        fontWeight: 700,
                        color: colors.textPrimary,
                    }}
                >
                    Health Metrics
                </h2>

                <DataTable
                    columns={metricsColumns}
                    data={systemHealth}
                    loading={loading}
                    error={error}
                />

                <h2
                    style={{
                        marginTop: 40,
                        marginBottom: 12,
                        fontSize: 22,
                        fontWeight: 700,
                        color: colors.textPrimary,
                    }}
                >
                    Server Statistics
                </h2>

                <DataTable
                    columns={metricsColumns}
                    data={serverStats}
                    loading={loading}
                    error={error}
                />
            </motion.main>
        </div>
    );
};

export default ServerMonitor;