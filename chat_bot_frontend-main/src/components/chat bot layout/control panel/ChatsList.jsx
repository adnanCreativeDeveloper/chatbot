import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ToggleContext from "../../use context/UseContext";

function ChatsList({ chatArray }) {
  const [chatSettingIconColor, setChatSettingIconColor] = useState(null);
  let location = useLocation();
  const { handleSelectedId } = useContext(ToggleContext);
  useEffect(() => {}, [location]);
  const iconBgStyle = {
    background:
      "linear-gradient(90deg, rgba(38,38,38,0.22452731092436973) 0%, rgba(38,38,38,1) 30%)",
  };
  const iconBg = {
    background:
      "linear-gradient(90deg, rgba(23,23,23,0) 0%, rgba(23,23,23,1) 100%)",
  };

  const handleClick = (id) => {
    handleSelectedId(id);
  };

  return (
    <>
      {chatArray.map((item) => (
        <div key={item.id}>
          {item.timeStamp && (
            <div className=''>
              <h3 className='text-neutral-400 text-xs p-2 pt-8'>
                {item.timeStamp}
              </h3>
            </div>
          )}
          <Link to={item.id}>
            <li
              onClick={() => handleClick(item.id)}
              className={`mb-1 relative flex justify-between items-center 
                          p-2  rounded-lg cursor-pointer group
                        hover:bg-neutral-800 me-2
                            ${
                              location.pathname === `chat-bot/new-chat/${item.id}`
                                ? "bg-neutral-800"
                                : "bg-none"
                            }
        `}>
              <div className='w-11/12 overflow-hidden text-nowrap'>
                <p className='text-gray-200 text-sm '>{item.title}</p>
              </div>
              <div
                className='absolute rounded-r-lg h-full w-8 top-0 right-0'
                style={iconBg}></div>
              <div
                data-tooltip-id={item.id}
                className={`${
                  location.pathname === `chat-bot/new-chat/${item.id}` ? "block" : ""
                }hidden group-hover:block py-2 pe-1.5 ps-4 rounded-r-lg 
               absolute right-0 top-0
               shadow-inner
               bg-gradient-to-l from-neutral-800 via-neutral-800 to-neutral-800/5
              `}
                style={iconBgStyle}>
                <svg
                  onMouseOver={() => setChatSettingIconColor(item.id)}
                  onMouseOut={() => setChatSettingIconColor(null)}
                  className={`cursor-pointer 
              `}
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='20'
                  fill={`${
                    item.id === chatSettingIconColor ? "#ECECEC" : "#B4B4B4"
                  }`}
                  viewBox='0 0 24 24'>
                  <path
                    fillRule='evenodd'
                    d='M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0'
                    clipRule='evenodd'></path>
                </svg>
              </div>
            </li>
          </Link>
          <ReactTooltip
            id={item.id}
            place='top'
            content='Options'
            delayShow={300}
          />
        </div>
      ))}
    </>
  );
}

export default ChatsList;
