import React from "react";

import { formateDate } from "../../utils/formatDate";
import { deletePost } from "../../features/postsSlice";
import { useDispatch } from "react-redux";

export default function UserInfo({ id, avatar, userName, postedAt }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-end">
        <img
          src={avatar}
          className="w-10 rounded-md bg-neutral-300"
          alt={userName}
        />
        <div>
          <p className="font-bold border-b-[1px] border-b-black/10">
            {userName}
          </p>
          <p className="font-thin text-xs">{formateDate(new Date(postedAt))}</p>
        </div>
      </div>
      <img
        src="https://img.icons8.com/?size=24&id=102550&format=svg"
        onClick={() => dispatch(deletePost(id))}
        className="w-5 opacity-80 hover:cursor-pointer hover:opacity-100 transition-all"
      />
    </div>
  );
}
