import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addNewPost } from "../../features/postsSlice";
import { avatarLinks } from "../../data/avatarLinks";
import AvatarBar from "./AvatarBar";

export default function AddPostForm() {
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const avatarChangeHandler = (e) => setAvatar(e.target.value);
  const userNameChangeHandler = (e) => setUserName(e.target.value);
  const contentChangeHandler = (e) => setContent(e.target.value);

  const addNewPostBtnHandler = () => {
    dispatch(addNewPost(avatar, userName, content));
    setAvatar("");
    setUserName("");
    setContent("");
  };

  return (
    <>
      <h2 className="text-3xl font-semibold border-b-[1px] mb-1">
        Add New Post
      </h2>
      <div className="flex flex-col gap-2 pb-5 mb-5 border-b border-b-black">
        <label className="flex flex-col">
          <p>
            Image link <span className="font-semibold">OR</span> Select one from
            below
          </p>
          <input
            type="text"
            onChange={avatarChangeHandler}
            className="border pl-1 pb-[2px]"
            value={avatar}
            placeholder="Link here"
          />
        </label>
        <AvatarBar avatar={avatar} setAvatar={setAvatar} />
        {/* <div className="flex justify-around bg-neutral-100 py-2 rounded flex-wrap">
          {avatarLinks.map(({ id, link }) => {
            return (
              <img
                key={id}
                src={link}
                className={`w-10 p-1 mx-2 rounded hover:cursor-pointer hover:bg-neutral-300 transition-all ${
                  link === avatar && "bg-neutral-300"
                }`}
                alt="avatar"
                onClick={() => setAvatar(link)}
              />
            );
          })}
        </div> */}
        <label className="flex flex-col">
          <p>UserName</p>
          <input
            type="text"
            onChange={userNameChangeHandler}
            value={userName}
            className="border pl-1 pb-[2px]"
          />
        </label>
        <label className="flex flex-col">
          <p>Content</p>
          <textarea
            rows="2"
            onChange={contentChangeHandler}
            className="border pl-1 pb-[2px]"
            value={content}
          ></textarea>
        </label>
        <button
          disabled={userName.length === 0 || content.length === 0}
          onClick={addNewPostBtnHandler}
          className={`${
            userName.length === 0 || content.length === 0
              ? "bg-blue-200 hover:cursor-not-allowed"
              : "bg-blue-300 hover:bg-blue-400"
          } py-1 font-semibold rounded transition-all`}
        >
          Add
        </button>
      </div>
    </>
  );
}
