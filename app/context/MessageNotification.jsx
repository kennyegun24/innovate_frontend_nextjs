"use client";
import { createContext, useRef, useEffect } from "react";
export const MessageNotificationContext = createContext();
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { io } from "socket.io-client";

const MessageProvider = ({ children }) => {
  const socket = useRef();
  const { data } = useSession();
  const path = usePathname();
  const restrictedPath = "/chat";

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
  }, []);

  useEffect(() => {
    if (data?.user?.uid) {
      socket.current?.emit("add_user", data?.user?.uid);
    }
  }, [data?.user?.uid]);
  useEffect(() => {
    if (!path.startsWith(restrictedPath)) {
      const user_name = data?.user?.name;
      socket.current?.on("receive_message", (data) => {
        if (data.sender_name !== user_name) {
          const notify = toast(`${data.sender_name} Sent you a message`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            pauseOnFocusLoss: false,
            closeOnClick: true,
            pauseOnHover: true,
            toastId: data.chat_id,
            draggable: false,
            progress: undefined,
            type: "info",
            theme: "dark",
          });
          notify.addEventListener("click", () => {});
        }
      });
    }
  }, [path, data?.user?.name]);

  return (
    <MessageNotificationContext.Provider value={{ socket, user_details: data }}>
      {children}
      <ToastContainer />
    </MessageNotificationContext.Provider>
  );
};

export default MessageProvider;
