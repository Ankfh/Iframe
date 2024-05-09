import React from "react";
import NavbarContainer from "../../navbar/container/NavbarContainer";
import AudioPlayerView from "../../audioPlayer/view/AudioPlayerView";
import IframeContianer from "../../Ifarm/container/IframeContianer";

const HomeView = () => {
  return (
    <div className="h-screen flex flex-col justify-between w-full bg-[rgb(249_144_27)]">
      <NavbarContainer />
      <div className="flex w-full justify-center  text-center items-center ">
        <p className="text-white font-[20000] text-2xl">Welcome To Qcell's Live Marketing Suite Distribution Platform</p>
      </div>
     <AudioPlayerView/>
    </div>
  );
};

export default HomeView;
