import React from "react";

import EmojiBar from "./EmojiBar";
import UserInfo from "./UserInfo";

export default function SinglePost({ post }) {
  const { id, userName, avatar, content, postedAt, reactions } = post;

  return (
    <article
      key={id}
      className="flex flex-col border border-black/30 p-4 rounded shadow-md"
    >
      <UserInfo
        id={id}
        avatar={avatar}
        userName={userName}
        postedAt={postedAt}
      />
      <p className="leading-5 mb-1">{content}</p>
      <EmojiBar reactions={reactions} id={id} />
    </article>
  );
}
