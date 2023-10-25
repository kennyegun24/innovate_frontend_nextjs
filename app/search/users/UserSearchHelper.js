import { _mock_recommended_users } from "@/app/_mock/recommended_users";
// import { db } from "@/app/firebase";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   startAt,
//   limit,
// } from "firebase/firestore";

// const q = query(
//   collection(db, "users"),
//   where("name", ">=", "value"),
//   where("name", "<=", "value" + "\uf8ff"),
//   startAt(lastVisible),
//   limit(10)
// );

// const querySnapshot = await getDocs(q);

const random = ["goat", "dog", "antelope", "gazelle", "chimp", "lion"];

export const getRandomAnimal = () => {
  let finalResp = random[Math.floor(Math.random() * random.length)];
  return finalResp;
};

export const people = (query) => {
  const mocked_data = query
    ? _mock_recommended_users.filter((elem) =>
        elem.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  return mocked_data;
};
