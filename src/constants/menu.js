import { Shield, Zap, Calendar, Flag, Star, Award, MessageSquare, Bot, Trash2, BarChart3, LogOut, Radio, GitGraph, LineChart, Phone, Ban, IndianRupee, MessageCircle, ShieldCheck, User2, ShoppingCart, Wallet, Bell, } from "lucide-react";


const MENU_ITEMS = [
  {
    name: "Supply Side",
    icon: User2,
    path: "/supply-side",
    permission: {
      section: "moderationDashboard",
      key: "report",
    },
  },
  {
    name: "Demand Side",
    icon: ShoppingCart,
    path: "/demand-side",
    permission: {
      section: "moderationDashboard",
      key: "report",
    },
  },
   {
    name: "Recharge",
    icon: Wallet,
    path: "/recharge",
    permission: {
      section: "moderationDashboard",
      key: "report",
    },
  },
   {
    name: "Notifications",
    icon: Bell,
    path: "/notifications",
    permission: {
      section: "moderationDashboard",
      key: "report",
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
