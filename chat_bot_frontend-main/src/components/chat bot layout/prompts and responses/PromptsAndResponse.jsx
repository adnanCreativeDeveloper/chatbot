import React, { useRef, useState } from "react";
import Response from "./Response";
import Prompt from "./Prompt";
import UserSettingForLargeScreens from "./user settings/UserSettingForLargeScreens";

function PromptsAndResponse({
  chatArray,
  setChatArray,
  selectedChatId,
  handleNewChat,
}) {
  const responseScrollToBottom = useRef(null);
  const minHeight = {
    minHeight: "calc(100vh - 56px)",
  };

  return (
    <>
      <div
        ref={responseScrollToBottom}
        className={`scrollbar-custom flex-1 h-screen overflow-auto`}>
        {/* <HideAndShowSideBar /> */}
        <UserSettingForLargeScreens />
        <div style={minHeight} className='flex flex-col'>
          <Response
            chatArray={chatArray}
            setChatArray={setChatArray}
            handleNewChat={handleNewChat}
          />
          <Prompt
            responseScrollToBottom={responseScrollToBottom}
            setChatArray={setChatArray}
            chatArray={chatArray}
            selectedChatId={selectedChatId}
          />
        </div>
      </div>
    </>
  );
}

export default PromptsAndResponse;
