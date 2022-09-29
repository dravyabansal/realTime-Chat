import React from "react";
import { ChannelList, ChannelSearch, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

//------------Assets Import
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";

import { TeamChannelList, TeamChannelPreview } from "./";
//------------Blue SideBar Component
const SideBar = ({ logout }) => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={HospitalIcon} alt="hospital" width="30" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="hospital" width="30" />
      </div>
    </div>
  </div>
);

//------------Container for Showing search Bar and Teh result with recent chats
const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Connect Me</p>
  </div>
);
const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />

        {/* ChannelList Preview for individual Chatter */}
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        {/* ChannelList Preview for group Chatter */}
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="messaging" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />


      </div>
    </>
  );
};

export default ChannelListContainer;
