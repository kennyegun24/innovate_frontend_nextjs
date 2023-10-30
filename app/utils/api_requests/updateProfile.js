import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "@/app/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { authRailsRequest, publicNextRequest } from "@/app/utils/publicRequest";

export const updateProfile = async ({ data, file }) => {
  try {
    const storageRef =
      data?.email &&
      ref(storage, `${data?.email}/cover/'6KTYIuvQMncO7DAwyct3C6LBTWp2'`);
    file && (await uploadBytesResumable(storageRef, file));
    const image = file ? await getDownloadURL(storageRef) : null;
    const dbPath = file && doc(db, "users", "6KTYIuvQMncO7DAwyct3C6LBTWp2");
    file && (await setDoc(dbPath, { coverPhoto: image }, { merge: true }));
    const user_detail = { ...data };
    if (image) {
      user_detail.image = image;
    }
    console.log(user_detail);
    // await publicNextRequest.post("/update/updateProfile", {
    //   user_detail,
    // });
    await authRailsRequest.put("user/update_profile", {
      user_detail,
    });
  } catch (error) {
    console.log({
      status: error.response.status,
      mssg: error.response.data.message,
    });
  }
};
