import React from "react";

import { useSelector } from "react-redux";

import PostView from "./PostView";

export default function Post() {
  const data = useSelector((state) => state.post.list);
  const likedList = useSelector((state) => state.post.likedPostList);
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
          const profileUrl = post.prorileUrl;

          let liked = false;
          for (let i = 0; i < likedList.length; i++) {
            if (likedList[i] === postId) {
              liked = true;
            }
          }

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
              liked={liked}
              profileUrl={profileUrl}
            />
          );
        })}
    </>
  );
}
