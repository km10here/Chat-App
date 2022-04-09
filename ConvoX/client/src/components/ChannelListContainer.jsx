import React from 'react'
// import { ChannelList, useChatContext } from "stream-chat-react";
// import Cookies from 'universal-cookie';
// import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

import '../assets/images/hospital.png';
import '../assets/images/logout.png';

const SideBar = () =>{
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src='../assets/images/hospital.png' alt="Hospital" width="30px"/>
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src='../assets/images/logout.png' alt="Logout" width="30px"/>
      </div>
    </div>
  </div>
}
const ChannelListContainer = () => {
  return (
    <>
    <SideBar />
    </>
  )
}

export default ChannelListContainer