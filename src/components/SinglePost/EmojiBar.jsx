import React from "react";

import { reactionEmojis } from "../../data/reactionEmojis";
import { reactOnPost } from "../../features/postsSlice";
import { useDispatch } from "react-redux";

export default function EmojiBar({ reactions, id }) {
  const dispatch = useDispatch();
  
  return (
    <div className="flex gap-2 border-t-[1px]">
      {Object.entries(reactionEmojis).map(([name, emoji]) => {
        return (
          <p
            key={name}
            onClick={() =>
              dispatch(reactOnPost({ postId: id, reaction: name }))
            }
            className="hover:cursor-pointer pr-1 select-none"
          >
            {emoji}
            {reactions[name]}
          </p>
        );
      })}
    </div>
  );
}
