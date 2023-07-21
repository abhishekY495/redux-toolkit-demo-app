import React from "react";
import { useSelector } from "react-redux";

import SearchBar from "./SearchBar";
import SinglePost from "./SinglePost/SinglePost";

export default function PostListing() {
  const posts = useSelector((state) => state.posts.postsData);
  const searchTerm = useSelector((state) => state.posts.searchTerm);

  const postsData = posts
    .filter((post) => post.userName.toLowerCase().includes(searchTerm))
    .sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));

  return (
    <>
      <h2 className="text-2xl mb-2">Posts</h2>
      <SearchBar />
      <div className="flex flex-col gap-5">
        {postsData.length === 0 && <p className="text-center">No Posts....</p>}
        {postsData.map((post) => {
          return <SinglePost key={post.id} post={post} />;
        })}
      </div>
    </>
  );
}
