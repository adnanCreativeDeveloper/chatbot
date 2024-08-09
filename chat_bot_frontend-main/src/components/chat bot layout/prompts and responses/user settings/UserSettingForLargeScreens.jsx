import React, { useContext, useState } from "react";
import { uuidv7 } from "uuidv7";
import ToggleContext from "../../../use context/UseContext";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";

const user_setting_list_array = [
  {
    svg_icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='#B4B4B4'>
        <path d='m21.706 5.292-2.999-2.999A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.292A.994.994 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM4 19V7h16l.002 12H4z'></path>
        <path d='M14 9h-4v3H7l5 5 5-5h-3z'></path>
      </svg>
    ),
    list_description: "Archive all chats",
    id: uuidv7(),
  },
  {
    svg_icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='#B4B4B4'>
        <path d='M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z'></path>
        <path d='M9.707 13.707 12 11.414l2.293 2.293 1.414-1.414L13.414 10l2.293-2.293-1.414-1.414L12 8.586 9.707 6.293 8.293 7.707 10.586 10l-2.293 2.293z'></path>
      </svg>
    ),
    list_description: "Delete all chats",
    id: uuidv7(),
  },
  {
    svg_icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        viewBox='0 0 24 24'>
        <path
          fill='#B4B4B4'
          fillRule='evenodd'
          d='M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4a1 1 0 1 1 0 2zm9.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 13H11a1 1 0 1 1 0-2h6.586l-2.293-2.293a1 1 0 0 1 0-1.414'
          clipRule='evenodd'></path>
      </svg>
    ),
    list_description: "Log out",
    id: uuidv7(),
  },
];

function UserSettingForLargeScreens() {
  const [toggleUserControl, setToggleUserControl] = useState(false);
  const [userSettingListArray, setUserSettingListArray] = useState(
    user_setting_list_array
  );
  const { handleToggleSidebar, sidebarToggleSidebar } =
    useContext(ToggleContext);
  const handleToggleUserControl = () => {
    setTimeout(() => {
      setToggleUserControl(!toggleUserControl);
    }, 200);
  };
  return (
    <>
      {/* p-2 bg-pink-600 xl:block lg:block md:block sm:block */}
      <div className='flex items-center justify-between sticky top-0 p-2 bg-stone-800'>
        <div>
          <div className={`${sidebarToggleSidebar ? "hidden" : "flex"}`}>
            <div
              onClick={handleToggleSidebar}
              data-tooltip-id='close-sidebar-1'
              className='p-2 rounded-lg cursor-pointer hover:bg-neutral-700 toggleSidebarBtn'>
              <span className='xl:hidden lg:hidden md:hidden sm:hidden block'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    fill='#B4B4B4'
                    fillRule='evenodd'
                    d='M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1'
                    clipRule='evenodd'></path>
                </svg>
              </span>
              <span className='xl:block lg:block md:block sm:block hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    fill='#B4B4B4'
                    fillRule='evenodd'
                    d='M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1'
                    clipRule='evenodd'></path>
                </svg>
              </span>
            </div>
            <span
              data-tooltip-id='new-chat-1'
              className='p-2 rounded-lg cursor-pointer hover:bg-neutral-700
            xl:block lg:block md:block sm:block hidden
            '>
              <Link to='new-chat'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='#B4B4B4'
                  viewBox='0 0 24 24'>
                  <path d='M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4'></path>
                </svg>
              </Link>
            </span>
          </div>
        </div>
        <div>
          <div
            data-tooltip-id='new-chat-1'
            className='p-2 rounded-lg cursor-pointer hover:bg-neutral-700
             xl:hidden lg:hidden md:hidden sm:hidden block'>
            <Link to='new-chat'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='#B4B4B4'
                viewBox='0 0 24 24'>
                <path d='M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4'></path>
              </svg>
            </Link>
          </div>
          <div className='xl:block lg:block md:block sm:block hidden'>
            <div
              onClick={handleToggleUserControl}
              className='w-fit h-fit p-2 rounded-lg cursor-pointer ms-auto
               hover:bg-neutral-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='#B4B4B4'>
                <path d='M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z'></path>
              </svg>
            </div>
            {toggleUserControl && (
              <div
                onClick={handleToggleUserControl}
                className='w-screen h-screen fixed top-0 left-0 -z-10'>
                <div
                  className='absolute top-14 right-6 w-72
            bg-neutral-700 border border-neutral-600
             p-2 rounded-xl'>
                  <ul className='list-none'>
                    {userSettingListArray.map((item) => (
                      <li
                        key={item.id}
                        className='relative flex justify-between items-center 
                      p-3  rounded-lg cursor-pointer group
                    hover:bg-neutral-600 '>
                        <div className='flex items-center gap-3'>
                          <div
                            className='h-6 w-6 rounded-full
                          border-neutral-600 flex items-center justify-center'>
                            {item.svg_icon}
                          </div>
                          <div>
                            <p className='text-stone-200 text-sm'>
                              {item.list_description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ReactTooltip
        id='close-sidebar-1'
        place='bottom'
        content='Open Sidebar'
        delayShow={300}
      />
      <ReactTooltip
        id='new-chat-1'
        place='bottom'
        content='New Chat'
        delayShow={300}
      />
    </>
  );
}

export default UserSettingForLargeScreens;
