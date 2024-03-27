import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //to check the online status
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //todo boolean_value
  return onlineStatus;
};

export default useOnlineStatus;
