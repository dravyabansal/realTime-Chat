import React, { useState, useEffect } from "react";
import { getChannel, useChatContext } from "stream-chat-react";

import { SearchIcon } from "../assets";

const ChannelSearch = () => {
  //---------- using useState Hook for setting the query and loading state
  const [query, setQuery] = useState("");
  const [Loading, setLoading] = useState(false);

  //--------getChannel Function for fetchnig channel sdetaisls from Server==> Tha mean sit must be an async function

  const getChannel = async (text) => {
    try {
        //TODO:  Fetching the channel details from the server
    } catch (error) {
      setQuery("");
    }
  };
  //----------onSearch function from our user cookies
  const onSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    setQuery(event.target.value);
    getChannel(event.target.value);
  };
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-serach__input__icon">
          <SearchIcon />
        </div>
        <input
          className="channel-search__input__text"
          placeholder="Search"
          type="text"
          value={query}
          onchange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
