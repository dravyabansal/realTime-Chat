import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelListContainer, ChannelContainer, Auth } from "./components";
const cookies= new Cookies();
const apiKey = "nw6xnfuef4xs";
const client = StreamChat.getInstance(apiKey);

const authToken = false;


if(authToken){
  client.connectUser({
      id: cookies.get('userId'),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      phoneNumber: cookies.get("phoneNumber"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
},




function App() {

  if (!authToken) return <Auth />;
  return (
    <>
      
      <div className="app__wrapper">
        <Chat client={client} theme="team light">
          <ChannelListContainer />
          <ChannelContainer />
        </Chat>
      </div>
    </>
  );
  

}

export default App;
