import React from "react";
import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";


const Notification = ({ type }) => {
  const createNotification = (type) => {
    switch (type) {
      case "info":
        NotificationManager.info("Info message");
        break;
      case "success":
        NotificationManager.success("Success message", "Title here");
        break;
      case "warning":
        NotificationManager.warning(
          "Warning message",
          "Close after 3000ms",
          3000
        );
        break;
      case "error":
        NotificationManager.error("Error message", "Click me!", 5000, () => {
          alert("callback");
        });
        break;
      default:
        console.log("Unknown notification type");
    }
  };

  React.useEffect(() => {
    if (type) {
      createNotification(type);
    }
  }, [type]);

  return null;
};

export default Notification;
