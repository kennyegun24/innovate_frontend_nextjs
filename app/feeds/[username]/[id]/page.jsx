import PostDetail from "./PostDetail";

const fetchData = async (id) => {
  const req = await fetch(`http://localhost:4000/api/v1/unauth/posts/${id}`);
  const res = await req.json();
  const data = await res.data;
  return data;
};

export const generateMetadata = async ({ params }) => {
  const data = await fetchData(params.id);
  return {
    title: "Post by " + data.creator_name,
    description:
      data.comments_count +
      "Comments " +
      data.likes_count +
      "Likes " +
      data.text,
    twitter: {
      title: "Post by " + data.creator_name,
      description: data.text?.slice(0, 30) + "...",
      text: data.text?.slice(0, 20) + "...",
    },
    openGraph: {
      title: "Post by " + data.creator_name,
      description: data.text?.slice(0, 30) + "...",
    },
  };
};

const Page = async ({ params }) => {
  return <PostDetail params={params} />;
};

export default Page;
