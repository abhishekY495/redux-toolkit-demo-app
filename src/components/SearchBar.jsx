import React from "react";
import { useDispatch } from "react-redux";
import { searchPostByUserName } from "../features/postsSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    dispatch(searchPostByUserName(searchTerm));
  };

  return (
    <input
      type="text"
      className="border w-full mb-3 pb-[2px] pl-1"
      placeholder="Search By UserName"
      onChange={searchHandler}
    />
  );
}
