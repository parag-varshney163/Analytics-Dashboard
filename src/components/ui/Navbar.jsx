import { useLocation } from "react-router-dom";
import React from "react";

import colors from "../../constants/colors";
import logo from "../../assets/logo.webp";


const Navbar = ({callName}) => {
  const location = useLocation();
  const pathname=location.pathname;
  const isQualityCategory = pathname.startsWith("/quality-category/");
  const isQualityReview = pathname.startsWith("/quality-review/");

  // Function to return the heading text based on route
  const getHeading = () => {
    if (isQualityCategory) {
      return (
        <>
          Quality <span style={{ color: colors.accent }}>Review</span>
        </>
      );
    }
    if (isQualityReview) {
      return (
        <>
          Quality <span style={{ color: colors.accent }}>Review</span>
        </>
      );
    }
    switch (location.pathname) {
      case "/":
        return (
          <>
            Welcome Back{" "}
            <span style={{ color: colors.accent }} className="font-bold">
              User
            </span>
          </>
        );

      
      case "/supply-side":
        return (
          <>
            Supply <span style={{ color: colors.accent }}>Side</span>
          </>
      );
      //  case "/application":
      //   return(
      //     <>
      //       Creator <span style={{color:colors.accent}}>Applications</span>
      //     </>
      //   );
      //   case "/payouts":
      //   return(
      //     <>
      //       Pay<span style={{color:colors.accent}}>outs</span>
      //     </>
      //   );
      //   case "/payoutRequest":
      //   return(
      //     <>
      //       Payout <span style={{color:colors.accent}}>Request</span>
      //     </>
      //   );
      //   case "/kycReviews":
      //   return(
      //     <>
      //       KYC <span style={{color:colors.accent}}>Review</span>
      //     </>
      //   );
      //   case "/settings":
      //   return(
      //     <>
      //       Sett<span style={{color:colors.accent}}>ings</span>
      //     </>
      //   );
      //   case "/roleManagement":
      //   return(
      //     <>
      //       Role <span style={{color:colors.accent}}>Management</span>
      //     </>
      //   );
      //   case "/userAnalytics":
      //   return(
      //     <>
      //       User Analytic: <span style={{color:colors.accent}}>Jane Doe</span>
      //     </>
      //   );

      default:
        //✅ If a call name is passed, show that
        if (callName) {
          return (
            <>
              Call Review:{" "}
              <span style={{ color: colors.accent }} className="font-bold">
                {callName.creator}
              </span>
            </>
          );
        }
        // if (appName) {
        //   return (
        //     <>
        //       Application Review:{" "}
        //       <span style={{ color: colors.accent }} className="font-bold">
        //         {appName}
        //       </span>
        //     </>
        //   );
        // }
        // if (kycUserName) {
        //   return (
        //     <>
        //       KYC Review:{" "}
        //       <span style={{ color: colors.accent }} className="font-bold">
        //         {kycUserName}
        //       </span>
        //     </>
        //   );
        // }

        // Fallback (for other unknown routes)
        return (
          <>
            Welcome <span style={{ color: colors.accent }}>User</span>
          </>
        );
    }
  };

  return (
    <nav
      className="flex flex-col h-20 md:flex-row justify-between items-center gap-4 md:gap-0 p-6 rounded-3xl  shadow-md"
      style={{
        background: colors.gradientVertical,
        height: "60px"
      }}
    >
      {/* Left spacer for symmetry */}
      <div className="hidden md:block w-16" />

      {/* Center Dynamic Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-center">
        {getHeading()}
      </h1>

      {/* Right Logo */}
      <div className="flex justify-center md:justify-end w-16">
        <img
          src={logo}
          alt="ChatSpark"
          className="w-12 sm:w-14 md:w-16 object-contain"
          loading="lazy"
        />
      </div>
    </nav>
  );
};

export default Navbar;
