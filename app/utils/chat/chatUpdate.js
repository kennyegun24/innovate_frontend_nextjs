import { db } from "@/app/firebase";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";

// useEffect(() => {

export const newMessages = ({ combineId }) => {
  console.log("first");
  console.log(combineId);
  // console.log(combineId, "chat updates");
  // const messagesRef = collection(db, "chats", combineId);
  // const _query = query(messagesRef, orderBy("time", "asc"));
  // const unsub = onSnapshot(_query, (querySnapshot) => {
  //   const newMessages = [];
  //   querySnapshot.docChanges().forEach((change) => {
  //     console.log(change.doc.data());
  //     if (change.type === "added") {
  //       // Handle new message added
  //       console.log(change.doc.data());
  //       newMessages.push(change.doc.data());
  //     }
  //   });

  //   if (newMessages.length > 0) {
  //     setMessages((prevMessages) => [...prevMessages, ...newMessages]);
  //   }
  // });
  // unsub();
};

// return () => {
//   dispatch(typingStatus(false));
//   unsub();
// };
// }, []);
