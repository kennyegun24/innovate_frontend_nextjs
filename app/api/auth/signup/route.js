import { NextResponse } from "next/server";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
export const POST = async (req, res) => {
  // const auth = getAuth(app);
  const firebaseEndpoint = `https://identitytoolkit.googleapis.com/v1/`;
  const railsEndpoint = "http://localhost:4000/api/v1";
  const requestData = await req.json();

  try {
    const createUserAccountRails = axios.create({
      baseURL: railsEndpoint,
    });

    const sendRequestRails = await createUserAccountRails.post(
      `authentication`,
      {
        user: requestData,
      }
    );

    const createUserAccountFirebase = axios.create({
      baseURL: firebaseEndpoint,
      headers: { "Content-Type": "json/application" },
    });

    const sendRequest = sendRequestRails.data.data
      ? await createUserAccountFirebase.post(
          `accounts:signUp?key=${process.env.FIREBASE_API_KEY}`,
          {
            email: requestData.email,
            password: requestData.password,
          }
        )
      : "";

    if (sendRequest) {
      return new NextResponse(
        sendRequest.data.localId && sendRequestRails.data.data
          ? JSON.stringify({
              rails: sendRequestRails.data.data,
              firebase: {
                uid: sendRequest.data.localId,
                expiresIn: sendRequest.data.expiresIn,
              },
            })
          : sendRequest.data.localId
          ? sendRequest.data.localId
          : sendRequestRails.data.data
          ? sendRequestRails.data.data
          : "",
        {
          status: 201,
        }
      );
    }
  } catch (error) {
    return new NextResponse(
      error?.response?.data?.error?.message
        ? error.response.data.error.message
        : error.response.data.message,
      {
        status: 400,
      }
    );
  }
};
