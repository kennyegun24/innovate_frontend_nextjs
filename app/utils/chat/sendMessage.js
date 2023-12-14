import {
  Timestamp,
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { db } from "@/app/firebase";

export const mssg = async ({
  combineId,
  text,
  currentUserUid,
  user_details,
  details,
}) => {
  const chat_ref = await getDoc(doc(db, "chats", combineId));
  const date = new Date();
  const dateString = date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  if (!chat_ref.exists() && text.trim() !== "") {
    try {
      await setDoc(doc(db, "chats", combineId), {
        messages: [],
      });
      await updateDoc(doc(db, "userchat", currentUserUid), {
        [combineId + ".userInfo"]: {
          uid: details?.uid,
          displayName: details?.displayName,
          photoURL: details?.userImage,
        },
        [combineId + ".id"]: uuidv4(),
        [combineId + ".date"]: serverTimestamp(),
      });
      await updateDoc(doc(db, "userchat", details?.uid), {
        [combineId + ".userInfo"]: {
          uid: user_details?.user?.uid,
          displayName: user_details?.user?.name,
          photoURL: user_details?.user?.image,
        },
        [combineId + ".id"]: uuidv4(),
        [combineId + ".date"]: serverTimestamp(),
      });
    } catch (err) {
      console.log("did nt set", err);
    }
  }

  if (text.trim() !== "") {
    try {
      await updateDoc(doc(db, "chats", combineId), {
        messages: arrayUnion({
          id: uuidv4(),
          text: text.trim(),
          senderId: currentUserUid,
          date: Timestamp.now(),
          time: dateString,
        }),
      });

      await updateDoc(doc(db, "userchat", currentUserUid), {
        [combineId + ".lastMessage"]: {
          text: text.trim(),
        },
        [combineId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userchat", details?.uid), {
        [combineId + ".lastMessage"]: {
          text: text.trim(),
        },
        [combineId + ".date"]: serverTimestamp(),
      });
    } catch (err) {
      console.log("unsent message", err);
    }
  }
};
