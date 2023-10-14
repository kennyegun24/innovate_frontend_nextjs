import { NextResponse } from "next/server";
import axios from "axios";
export const POST = async (req, res) => {
  const requestData = await req.json();
  const firebaseEndpoint = `https://identitytoolkit.googleapis.com/v1/`;
  try {
    const createUserAccountFirebase = axios.create({
      baseURL: firebaseEndpoint,
      headers: { "Content-Type": "json/application" },
    });

    const sendRequestFirebase = await createUserAccountFirebase.post(
      `accounts:signUp?key=${process.env.FIREBASE_API_KEY}`,
      {
        email: requestData.email,
        password: requestData.password,
      }
    );

    return new NextResponse(sendRequestFirebase.data.localId, {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error?.response?.data?.error?.message, {
      status: 400,
    });
  }
};
