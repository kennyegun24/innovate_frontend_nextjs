import { db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getUserData = async ({ uid }) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log(docSnap.data());
    return docSnap.data();
  } else {
    return {};
  }
};
