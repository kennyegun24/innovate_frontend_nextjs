import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const auth = getAuth(app);
  console.log(auth);
  // try {
  //   const initiaiteCreateAccount = createUserWithEmailAndPassword(
  //     res.auth,
  //     req.email,
  //     req.password
  //   ).then((userCredential) => {
  //     const user = userCredential.user;
  //   });
  // } catch {}
};
