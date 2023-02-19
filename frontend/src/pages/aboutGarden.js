import axios from "axios";
import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import { CheckIcon } from "@heroicons/react/20/solid";
import CreatePost from "../components/CreatePost";

const getPosts = async (gardenName) => {
  const gardenData = await axios.post("http://localhost:3001/fetchGarden", {
    garden: gardenName,
  });
  const posts = gardenData.data.posts;

  let postsData = [];
  for (let i = 0; i < posts.length; i++) {
    const postId = posts[i];
    const postData = await axios.post("http://localhost:3001/fetchPost", {
      postId,
    });
    postsData.push(postData);
  }

  return postsData;
};

const AboutGarden = () => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    try {
      const data = await getPosts("mango");
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header className="bg-[#0D9488] shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl tracking-tight text-stone-100 text-center">
            Community Garden Feed
          </h1>
        </div>
      </header>
      <CreatePost />
      <div className="flex flex-col items-center ontainer mx-auto mt-4 bg-stone-100 rounded-lg p-4 pt-10 pb-10 drop-shadow-lg">
        <span className="sm:ml-3"></span>
        {data.map(function (n) {
          return (
            <Post
              title={n.data.title}
              datePosted={new Date(
                n.data.datePosted.seconds * 1000
              ).toDateString()}
              text={n.data.text}
              imageUrl={n.data.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default AboutGarden;
