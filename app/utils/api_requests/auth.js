import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { db, storage } from "@/app/firebase";
import { Timestamp, deleteDoc, doc, setDoc } from "firebase/firestore";
import { loginFailure } from "../../redux/user_auth/userReducer";
import { signIn } from "next-auth/react";

export const registerAuthentication = async ({ data, file, id }, dispatch) => {
  const currentTime = Timestamp.now().seconds;
  const storageRef = ref(storage, `${data?.email}/profile/${id}`);
  await uploadBytesResumable(storageRef, file);
  const image = await getDownloadURL(storageRef);

  await setDoc(doc(db, "users", id), {
    displayName: data.name,
    uid: id,
    email: data.email,
    userImage: image,
    time: currentTime,
  });
  const user = { ...data, work: id };
  if (image) {
    user.image = image;
  }
  const reg = await signIn("signup", { ...user, redirect: false });
  if (reg.error) {
    dispatch(loginFailure(reg.error));
    const desertRef = ref(storage, storageRef);
    await deleteObject(desertRef);
    await deleteDoc(doc(db, "users", id));
  }
};
