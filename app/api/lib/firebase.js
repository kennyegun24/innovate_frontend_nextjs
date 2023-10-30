const {
  initializeApp,
  applicationDefault,
  getApp,
  getApps,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} = require("firebase-admin/firestore");
const { getStorage } = require("firebase-admin/storage");
const serviceAccount = require("C:/Users/kenny/Desktop/projects/innovate_frontend_nextjs/innovate-social-firebase-adminsdk-s90pq-cb9c429938.json");

const app = !getApps().length
  ? initializeApp({
      credential: cert(serviceAccount),
    })
  : getApp();

export const db = getFirestore(app);
export const storageBucket = getStorage().bucket("innovate-social.appspot.com");
