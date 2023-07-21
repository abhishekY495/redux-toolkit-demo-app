import React from "react";
import { avatarLinks } from "../../data/avatarLinks";

export default function AvatarBar({ avatar, setAvatar }) {
  return (
    <div className="flex justify-around bg-neutral-100 py-2 rounded flex-wrap">
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
    </div>
  );
}
