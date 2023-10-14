import { publicNextRequest } from "@/app/utils/publicRequest";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "@/app/firebase";
import { doc, setDoc } from "firebase/firestore";

export const authentication = async ({ data, file }) => {
  const response = await publicNextRequest.post("/auth/signup", {
    password: data.password,
    email: data.email,
  });
  const res = await response.data;

  const storageRef = res && ref(storage, `${data.email}/profile/${res}`);
  await uploadBytesResumable(storageRef, file);
  const image = await getDownloadURL(storageRef);

  await setDoc(doc(db, "users", res), {
    displayName: data.name,
    uid: res,
    email: data.email,
    userImage: image,
  });
  const user = { ...data, work: res };
  if (image) {
    user.image = image;
  }
  await publicNextRequest.post("/auth/signup/rails", {
    user,
  });
};
