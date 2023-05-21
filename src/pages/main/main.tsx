import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";

interface Post {
  id: string;
  description: string;
  title: string;
  userId: string;
  username: string;
}

export const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Home page</h1>
      <div>
        {postsList?.map((post) => (
          <Post />
        ))}
      </div>
    </>
  );
};
