import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
const IframeView = () => {
  return (
    <>
      <div className=" flex items-center bg-gray-100  flex-col w-full h-[95vh] ">
        <div className="  w-full pl-2 bg-[rgb(249_144_27)] ">
          <Link to="/">
            <HomeIcon />
          </Link>
        </div>
        <div className="flex  h-screen justify-center w-full items-center">
          <Iframe
            url="https://qcell.sl/"
            width="100%"
            height="100%"
            allowFullScreen
            style={{ border: "none" }}
          />
        </div>
      </div>
    </>
  );
};

export default IframeView;
