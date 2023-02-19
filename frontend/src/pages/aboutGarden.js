import axios from "axios";
import React, { useState, useEffect } from "react";
import Post from "../components/Post";

const getPosts = async(gardenName) => {
  const gardenData = await axios.post(
    'http://localhost:3001/fetchGarden',
    {
      garden: gardenName
    }
  );
  const posts = gardenData.data.posts;

  let postsData = [];
  for (let i = 0; i < posts.length; i++) {
    const postId = posts[i];
    const postData = await axios.post(
      'http://localhost:3001/fetchPost',
      {
        postId
      }
    );
    postsData.push(postData);
  }

  return postsData;
};

const AboutGarden = () => {
  const [ data, setData ] = useState(null);

  useEffect(async () => {
    try {
      const data = await getPosts('mango');
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!data) {
    return (
      <p>
        Loading...
      </p>
    )
  }

  return (
    <>
      <div className="flex flex-col items-center">
        { data.map(function (n) {
            return <Post
              title={n.data.title}
              datePosted={new Date(n.data.datePosted.seconds * 1000).toDateString()}
              text={n.data.text}
              imageUrl={n.data.image}
            />;
          })
        }
      </div>
    </>
  );
};

export default AboutGarden;
