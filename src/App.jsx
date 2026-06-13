import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import ProtectedRoute from "./routes/ProtectedRoute";
import UpdatePassword from "./pages/UpdatePassword";
import ResetPassword from "./pages/ResetPassword";
import Notifications from "./pages/Notifications";
import Unauthorized from "./pages/Unauthorized";
import PublicRoute from "./routes/PublicRoute";
// Pages you currently have
import WelcomePage from "./pages/WelcomePage";
import TrustSafety from "./pages/TrustSafety";
import SupplySide from "./pages/SupplySide";
import DemandSide from "./pages/DemandSide";
import LoginPage from "./pages/LoginPage";
import ROUTES from "./constants/Routes";
import Recharge from "./pages/Recharge";
import Reports from "./pages/Reports";


function App() {
  return (
    <Router>
      <Routes>
        {/* === Public Routes === */}
        <Route
          path={ROUTES.ROOT}
          element={
            <PublicRoute>
              <WelcomePage />
            </PublicRoute>
          }
        />

        <Route
          path={ROUTES.LOGIN}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.RESET_PASSWORD}
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.UPDATE_PASSWORD}
          element={
            <PublicRoute>
              <UpdatePassword />
            </PublicRoute>
          }
        />
        <Route path={ROUTES.UNAUTHORIZED} element={<Unauthorized />} />

        {/* === Protected Dashboard === */}
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <ProtectedRoute section="analyticsDashboard" permissionKey="supplySide">
              <SupplySide/>
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.DEMAND_SIDE}
          element={
            <ProtectedRoute section="analyticsDashboard" permissionKey="demandSide">
              <DemandSide/>
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.RECHARGE}
          element={
            <ProtectedRoute section="analyticsDashboard" permissionKey="recharge">
              <Recharge/>
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.NOTIFICATION}
          element={
            <ProtectedRoute section="analyticsDashboard" permissionKey="notification">
              <Notifications/>
            </ProtectedRoute>
          }
        />
         <Route
          path={ROUTES.TRUST_SAFETY}
          element={
            <ProtectedRoute section="analyticsDashboard" permissionKey="trustAndSafety">
              <TrustSafety/>
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.REPORTS}
          element={
            <ProtectedRoute section="analyticsDashboard" permissionKey="weeklyReport">
              <Reports/>
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </Router>
  );
}

export default App;
