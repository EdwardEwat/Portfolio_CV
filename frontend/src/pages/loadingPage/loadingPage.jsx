import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const loadingPage = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <React.Fragment>
          <svg width={0} height={0}>
            <defs>
              <linearGradient
                id="my_gradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#e01cd5" />
                <stop offset="100%" stopColor="#1CB5E0" />
              </linearGradient>
            </defs>
          </svg>
          <CircularProgress
            sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
          />
        </React.Fragment>
      </div>
    </div>
  );
};

export default loadingPage;
