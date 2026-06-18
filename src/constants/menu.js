import { Shield, Zap, Calendar, Flag, Star, Award, MessageSquare, Bot, Trash2, BarChart3, LogOut, Radio, GitGraph, LineChart, Phone, Ban, IndianRupee, MessageCircle, ShieldCheck, User2, ShoppingCart, Wallet, Bell, ScanFace, File, Wallet2, } from "lucide-react";


const MENU_ITEMS = [
  {
    name: "Supply Side",
    icon: User2,
    path: "/supply-side",
    permission: {
      section: "analyticsDashboard",
      key: "supplySide",
    },
  },
  {
    name: "Demand Side",
    icon: ShoppingCart,
    path: "/demand-side",
    permission: {
      section: "analyticsDashboard",
      key: "demandSide",
    },
  },
   {
    name: "Recharge",
    icon: Wallet,
    path: "/recharge",
    permission: {
      section: "analyticsDashboard",
      key: "recharge",
    },
  },
   {
    name: "Notifications",
    icon: Bell,
    path: "/notifications",
    permission: {
      section: "analyticsDashboard",
      key: "notification",
    },
  },
    {
    name: "Trust & Safety",
    icon: ScanFace,
    path: "/trust-safety",
    permission: {
      section: "analyticsDashboard",
      key: "trustAndSafety",
    },
  },
    {
    name: "Reports",
    icon: File,
    path: "/reports",
    permission: {
      section: "analyticsDashboard",
      key: "weeklyReport",
    },
  },
   {
    name: "Transactions",
    icon: Wallet2,
    path: "/transactions",
    permission: {
      section: "analyticsDashboard",
      key: "weeklyReport",
    },
  },
  // ⭐ Logout (no permission)
  {
    name: "Logout",
    icon: LogOut,
    path: "/logout",
    isLogout: true,
  },
];

export default MENU_ITEMS;
