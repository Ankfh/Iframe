import React from "react";
import logo from "../../../images/logo.jpg";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import InfoIcon from "@mui/icons-material/Info";
import OpenInNewOffIcon from "@mui/icons-material/OpenInNewOff";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-4 flex justify-between">
      <div>
        <Link to="/frame">
          <img width={"23%"} height={"23%"} src={logo} alt="" />
        </Link>
      </div>
      <div className="flex gap-6 pr-10 ">
        <Link to="/frame">
          <InfoIcon fontSize="large" />
        </Link>
        <a
          className="cursor-pointer"
          href="https://www.dropbox.com/en_GB/login"
        >
          <OpenInNewOffIcon fontSize="large" />
        </a>
        <a
          className="cursor-pointer"
          href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fmy-drive&followup=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fmy-drive&ifkv=AaSxoQz6DfQ8oyQmvOIV8IV5Tl-SCgB_COs5UMwLXem7OIPFn2dpRZr-fOFkHobB1vH3lW870J6H&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1762462318%3A1715194264199330&theme=mn&ddm=0"
        >
          <AddToDriveIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
