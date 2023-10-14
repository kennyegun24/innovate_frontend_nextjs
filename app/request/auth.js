import { publicNextRequest } from "@/app/utils/publicRequest";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "@/app/firebase";
import { Timestamp, doc, setDoc } from "firebase/firestore";

export const authentication = async ({ data, file, id }) => {
  const currentTime = Timestamp.now().seconds;
  const storageRef = ref(storage, `${data.email}/${currentTime}/profile/${id}`);
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
  await publicNextRequest.post("/auth/signup/rails", {
    user,
  });
};

// const response = await publicNextRequest.post("/auth/signup", {
//   password: data.password,
//   email: data.email,
// });
// const res = await response.data;
