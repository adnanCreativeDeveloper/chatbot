import { React, useContext, useEffect, useRef, useState } from "react";
import { uuidv7 } from "uuidv7";
import ToggleContext from "../../use context/UseContext";

function Prompt({
  setChatArray,
  selectedChatId,
  chatArray,
  responseScrollToBottom,
}) {
  const { sidebarToggleSidebar } = useContext(ToggleContext);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const textareaRef = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  // const [displayedText, setDisplayedText] = useState("");

  const [text, setText] = useState("inputValue");

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (displayedText.length < text.length) {
  //       setDisplayedText(text.substring(0, displayedText.length + 3));
  //     }
  //   }, 3);

  //   return () => clearInterval(intervalId);
  // }, [displayedText, text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue || inputValue.trim() === "") return;
    const updatedChatArray = chatArray.map((chat) => {
      if (chat.id === selectedChatId) {
        return {
          ...chat,
          messages: [
            ...chat.messages,
            {
              id: uuidv7(),
              senderId: "user_prompt",
              content: inputValue,
            },
          ],
        };
      }
      return chat;
    });

    setChatArray(updatedChatArray);
    setInputValue("");
    setMessages([...messages, `${messages.length + 1}`]);
  };

  const handleTextareaKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  const scrollToBottom = () => {
    if (responseScrollToBottom.current) {
      responseScrollToBottom.current.scrollTo({
        top: responseScrollToBottom.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(
        textareaRef.current.value.length,
        textareaRef.current.value.length
      );
    }
  }, [inputValue]);

  return (
    <>
      <div className={`w-full sticky bottom-0 bg-stone-800 px-3 duration-300 `}>
        {chatArray && (
          <div
            onClick={scrollToBottom}
            className='h-7 w-7 left-1/2 -translate-x-1/2 rounded-full
            mb-5 absolute bottom-full flex items-center
             justify-center border border-stone-500 cursor-pointer'
            style={{ background: "#212121" }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                fill='#ECECEC'
                fillRule='evenodd'
                d='M12 21a1 1 0 0 1-.707-.293l-7-7a1 1 0 1 1 1.414-1.414L11 17.586V4a1 1 0 1 1 2 0v13.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7A1 1 0 0 1 12 21'
                clipRule='evenodd'></path>
            </svg>
          </div>
        )}
        <div>
          <form className=''>
            <div
              className='xl:max-w-3xl lg:max-w-3xl md:max-w-2xl
              w-full mx-auto rounded-3xl'>
              <div className='w-full flex items-end justify-between p-1'>
                <div className='w-full h-fit bg-stone-900/85 flex items-end justify-between rounded-3xl'>
                  <div
                    className={`flex-1 p-2 ${
                      inputValue.length <= 100
                        ? "h-14"
                        : inputValue.length <= 150
                        ? "h-16"
                        : inputValue.length <= 200
                        ? "h-40"
                        : "h-40"
                    } text-stone-400
                      rounded-3xl`}>
                    <textarea
                      className={`scrollbar-custom ps-3 p-2 w-full h-full bg-transparent outline-none
                     border-none text-stone-400 rounded-3xl
                        resize-none `}
                      value={inputValue}
                      onChange={(e) => handleChange(e)}
                      onKeyDown={(e) => handleTextareaKeyDown(e)}
                      // rows={1}
                      placeholder='Message ChatBot'
                      name='message'
                      id='message'></textarea>
                  </div>

                  <button
                    onClick={(e) => handleSubmit(e)}
                    type='submit'
                    className={`h-8 w-8 rounded-full 
                      transition-all duration-300 m-2 mb-3 ms-0
                  ${
                    inputValue || inputValue.trim() !== ""
                      ? "bg-stone-200"
                      : "bg-stone-500"
                  }`}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      fill='none'
                      viewBox='0 0 32 32'>
                      <path
                        fill='#2f2f2f'
                        fillRule='evenodd'
                        d='M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z'
                        clipRule='evenodd'></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div>
            <p className='text-stone-400 p-2 text-center text-xs'>
              ChatBot can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prompt;
