import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatbotLayout from "./components/chat bot layout/ChatbotLayout";
import RegistrationRoutes from "./components/registration/RegistrationRoutes";
import LoginOrSignUp from "./components/registration/LoginOrSignUp";
import { useState } from "react";
import "react-notifications/lib/notifications.css";
import NewChat from "./components/chat bot layout/new chat/NewChat";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // async function sendMessage() {
  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/login/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: "test1", // Replace with actual data
  //         password: "test123", // Replace with actual data
  //       }),
  //     });

  //     console.log(`Response Status: ${response.status}`);

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     // Check if the response is JSON
  //     const contentType = response.headers.get("content-type");
  //     if (contentType && contentType.includes("application/json")) {
  //       const data = await response.json();
  //       console.log("Response Data:", data);
  //       return data;
  //     } else {
  //       // Handle non-JSON response
  //       const text = await response.text();
  //       console.error("Non-JSON response:", text);
  //       throw new Error(`Unexpected response format: ${text}`);
  //     }
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //   }
  // }

  // sendMessage(); // Call the function to test it

  return (
    <>
      <RegistrationRoutes setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<LoginOrSignUp />} />
        <Route path='/chat-bot/*' element={<ChatbotLayout />}>
          {/* <Route path='new-chat' element={<NewChat />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

// api key
// q0JwvX2867ObPLk7S2qVhVbQOsyDhEg6
// ****************************************************************
// My Open Ai Key
// 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
// ****************************************************************
// async function sendMessage(message) {
//   const url = "http://127.0.0.1:8000/send-message/";
//   const apiKey =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMzIwNzk2NiwiaWF0IjoxNzIzMTIxNTY2LCJqdGkiOiI0NGYxOWIxZTgxOTk0NjgyYTMxMThlMWRlMWU1MWE3YSIsInVzZXJfaWQiOjN9.o-ncbtkpZ281kjLrNOi3sNW2qpKq273vuaIsuH2A5Wo";

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify({ message }),
//     });

//     console.log(`Response Status: ${response.status}`);

//     if (!response.ok) {
//       const errorData = await response.text();
//       console.error(`Error: ${errorData}`);
//       throw new Error(
//         `Network response was not ok: ${response.status} ${response.statusText}. Error: ${errorData}`
//       );
//     }

//     const data = await response.json();
//     console.log("Response Data:", data);
//     return data;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return { error: "An error occurred" };
//   }
// }

// sendMessage("Hello, AI!").then((data) => {
//   console.log("Response:", data);
// });

// async function sendMessage() {
//   try {
//     const response = await fetch("http://127.0.0.1:8000/login/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: "test1", // Replace with actual data
//         password: "test123", // Replace with actual data
//       }),
//     });

//     console.log(`Response Status: ${response.status}`);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     // Check if the response is JSON
//     const contentType = response.headers.get("content-type");
//     if (contentType && contentType.includes("application/json")) {
//       const data = await response.json();
//       console.log("Response Data:", data);
//       return data;
//     } else {
//       // Handle non-JSON response
//       const text = await response.text();
//       console.error("Non-JSON response:", text);
//       throw new Error(`Unexpected response format: ${text}`);
//     }
//   } catch (error) {
//     console.error("Fetch error:", error);
//   }
// }

// sendMessage(); // Call the function to test it
