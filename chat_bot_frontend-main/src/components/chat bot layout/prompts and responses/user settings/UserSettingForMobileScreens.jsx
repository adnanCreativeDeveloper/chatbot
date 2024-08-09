import React, { useState } from "react";
import { uuidv7 } from "uuidv7";

const user_setting_list_array = [
  {
    svg_icon: null,
    list_description: "userEmail783@gmail.com",
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

function UserSettingForMobileScreens() {
  const [toggleUserControl, setToggleUserControl] = useState(false);
  const [userSettingListArray, setUserSettingListArray] = useState(
    user_setting_list_array
  );

  const handleToggleUserControl = () => {
    setTimeout(() => {
      setToggleUserControl(!toggleUserControl);
    }, 200);
  };
  return (
    <>
      <div className=''>
        <div
          className='relative bottom-5 w-full xl:hidden lg:hidden
         md:hidden sm:hidden block bg-neutral-900 py-2'>
          <div
            onClick={handleToggleUserControl}
            className={`flex gap-2 items-center w-full h-fit p-2 rounded-lg cursor-pointer
               hover:bg-neutral-800 ms-auto 
               ${toggleUserControl ? "bg-neutral-800" : "bg-neutral-900"}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='#B4B4B4'>
              <path d='M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z'></path>
            </svg>
            <p className='text-stone-300'>User Name</p>
          </div>
          <div className='w-full bg-green-600'>
            <div
              className={`absolute bottom-full w-full bg-neutral-700 border-neutral-600 transition-all duration-200 ease-in-out rounded-xl  overflow-hidden
                ${toggleUserControl ? "p-2 h-44 border" : "h-0 p-0"}`}>
              <ul className='list-none'>
                {userSettingListArray.map((item) => (
                  <li
                    key={item.id}
                    className='relative flex justify-between items-center 
                      p-2  rounded-lg cursor-pointer group
                      hover:bg-neutral-800 '>
                    <div className='flex items-center gap-3'>
                      {item.svg_icon !== null && (
                        <div
                          className='h-6 w-6 rounded-full
                      border-neutral-600 flex items-center justify-center'>
                          {item.svg_icon}
                        </div>
                      )}
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
        </div>
      </div>
    </>
  );
}

export default UserSettingForMobileScreens;
