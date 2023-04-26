import React, { useState, useEffect } from "react";

//ยังไม่ได้เทส
function Notification({ message }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [message]);

  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
      {message}
    </div>
  );
}

Notification.show = (message) => {
  setNotificationMessage(message);
};

let setNotificationMessage = () => {};

export default Notification;
