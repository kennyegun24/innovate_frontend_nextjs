import { publicNextRequest } from "@/app/utils/publicRequest";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { db, storage } from "@/app/firebase";
import { Timestamp, deleteDoc, doc, setDoc } from "firebase/firestore";
import { loginFailure, loginSuccess } from "../../redux/user_auth/userReducer";
import { signIn } from "next-auth/react";

export const registerAuthentication = async ({ data, file, id }, dispatch) => {
  const currentTime = Timestamp.now().seconds;
  const storageRef = ref(storage, `${data?.email}/profile/${id}`);
  await uploadBytesResumable(storageRef, file);
  // const imageName = await getFile
  const image = await getDownloadURL(storageRef);

  try {
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
    const reg = await signIn("credentials", user);
    dispatch(loginSuccess(reg.data.data));
  } catch (error) {
    const desertRef = ref(storage, storageRef);
    await deleteObject(desertRef);
    await deleteDoc(doc(db, "users", id));
    dispatch(
      loginFailure(
        error?.response?.data ? error.response.data : "Something wrong happened"
      )
    );
  }
};

// const response = await publicNextRequest.post("/auth/signup", {
//   password: data.password,
//   email: data.email,
// });
// const res = await response.data;
