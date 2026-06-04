import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import ProtectedRoute from "./routes/ProtectedRoute";
import UpdatePassword from "./pages/UpdatePassword";
import ResetPassword from "./pages/ResetPassword";
import Unauthorized from "./pages/Unauthorized";
import PublicRoute from "./routes/PublicRoute";
// Pages you currently have
import WelcomePage from "./pages/WelcomePage";
import SupplySide from "./pages/SupplySide";
import DemandSide from "./pages/DemandSide";
import LoginPage from "./pages/LoginPage";
import ROUTES from "./constants/Routes";
import Recharge from "./pages/Recharge";


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
            <ProtectedRoute section="moderationDashboard" permissionKey="report">
              <SupplySide/>
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.DEMAND_SIDE}
          element={
            <ProtectedRoute section="moderationDashboard" permissionKey="report">
              <DemandSide/>
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.RECHARGE}
          element={
            <ProtectedRoute section="moderationDashboard" permissionKey="report">
              <Recharge/>
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </Router>
  );
}

export default App;
