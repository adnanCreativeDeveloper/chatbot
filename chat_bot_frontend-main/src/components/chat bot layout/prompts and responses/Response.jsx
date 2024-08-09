import React, { useEffect, useState } from "react";
import NewChat from "../new chat/NewChat";
import { Route, Routes } from "react-router-dom";
import ResAndProm from "./ResAndProm";

function Response({ chatArray, setChatArray }) {
  return (
    <div className={`flex-1 bg-neutral-800 px-3 pb-20 overflow-x-hidden`}>
      <Routes>
        <Route
          exact
          path='new-chat'
          element={
            <NewChat chatArray={chatArray} setChatArray={setChatArray} />
          }
        />
        {chatArray &&
          chatArray.map((item) => (
            <Route
              key={item.id}
              path={`/${item.id}`}
              element={
                <div className='h-auto xl:max-w-3xl lg:max-w-3xl md:max-w-2xl mx-auto'>
                  {item.messages.map((item) => (
                    <ResAndProm
                      key={item.id}
                      senderId={item.senderId}
                      content={item.content}
                    />
                  ))}
                </div>
              }
            />
          ))}
      </Routes>
    </div>
  );
}

export default Response;
