import { useEffect, useState } from "react";
import Sidebar from "./control panel/Sidebar";
import PromptsAndResponse from "./prompts and responses/PromptsAndResponse";
import { uuidv7 } from "uuidv7";
import ToggleContext from "../use context/UseContext";

const chat_array = [
  {
    id: uuidv7(),
    title: "Chat with AI Assistant",
    timeStamp: "Today",
    lastUpdated: "2024-08-07T10:05:00Z",
    messages: [
      {
        id: uuidv7(),
        senderId: "user_prompt",
        userPrompt: "Hello, AI!",
        content: "THis is chat 1",
        timestamp: "2024-08-07T10:00:00Z",
        messageType: "text",
      },
      {
        id: uuidv7(),
        senderId: "ai_response",
        aiResponse: "How can i assist you",
        content: "Hello, AI!",
        timestamp: "2024-08-07T10:00:00Z",
        messageType: "text",
      },
    ],
  },
  {
    id: uuidv7(),
    title: "Second Chat Session",
    timeStamp: null,
    lastUpdated: "2024-08-07T11:15:00Z",
    messages: [
      {
        id: uuidv7(),
        userPrompt: "How's the weather today?",
        senderId: "user_prompt",
        content: "How's the weather today?",
        timestamp: "2024-08-07T11:00:00Z",
        messageType: "text",
      },
      {
        id: uuidv7(),
        senderId: "ai_response",
        content: "How's the weather today?",
        aiResponse: "How's the weather today?",
        timestamp: "2024-08-07T11:00:00Z",
        messageType: "text",
      },
    ],
  },
];

function ChatbotLayout() {
  const [sidebarToggleSidebar, setSidebarToggleSidebar] = useState(true);
  const [chatArray, setChatArray] = useState(chat_array);
  const [selectedChatId, setSelectedChatId] = useState({});
  const handleSelectedId = (id) => {
    setSelectedChatId(id);
  };
  const handleToggleSidebar = () => {
    setSidebarToggleSidebar(!sidebarToggleSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarToggleSidebar(false);
      } else {
        setSidebarToggleSidebar(true);
      }
    };
    const handleClick = (event) => {
      // if (window.innerWidth <= 768) {
      //   if (!event.target.closest("toggleSidebarBtn")) {
      //     setSidebarToggleSidebar(true);
      //     console.log(!event.target.classList.contains("toggleSidebarBtn"));
      //     return;
      //   } else if (!event.target.closest("sidebar")) {
      //     event.stopPropagation();
      //     setSidebarToggleSidebar(false);
      // console.log(!event.target.closest("sidebar"));
      //   }
      // }
    };
    window.addEventListener("click", handleClick);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <ToggleContext.Provider
        value={{
          sidebarToggleSidebar,
          handleToggleSidebar,
          handleSelectedId,
        }}>
        <div className='flex'>
          <Sidebar
            handleToggleSidebar={handleToggleSidebar}
            setChatArray={setChatArray}
            chatArray={chatArray}
          />
          <PromptsAndResponse
            chatArray={chatArray}
            setChatArray={setChatArray}
            selectedChatId={selectedChatId}
          />
        </div>
      </ToggleContext.Provider>
    </>
  );
}

export default ChatbotLayout;
