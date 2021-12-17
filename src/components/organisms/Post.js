import React from "react";

import { useSelector } from "react-redux";

import PostView from "./PostView";

export default function Post() {
  const data = useSelector((state) => state.post.list);
  console.log(data);

  return (
    <>
      {data &&
        data.map((post, key) => {
          const createdAt = post.createdAt;
          const postId = post.id;
          const imgUrl = post.imgUrl;
          const numOfLikes = post.numOfLikes;
          const numOfComments = post.numOfComments;
          const userId = post.userId;
          const username = post.username;
          const content = post.content;

          return (
            <PostView
              postId={postId}
              createdAt={createdAt}
              imgUrl={imgUrl}
              numOfLikes={numOfLikes}
              numOfComments={numOfComments}
              userId={userId}
              username={username}
              content={content}
              key={key}
            />
          );
        })}
    </>
  );
}
