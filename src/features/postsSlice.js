import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { initialState } from "../data/initialState";
import { defaultAvatarLink } from "../data/avatarLinks";

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addNewPost: {
      reducer: (state, action) => {
        state.postsData.push(action.payload);
      },
      prepare: (avatar, userName, content) => {
        return {
          payload: {
            id: uuidv4(),
            avatar: avatar.length === 0 ? defaultAvatarLink : avatar,
            postedAt: String(new Date()),
            userName,
            content,
            reactions: {
              thumbsUp: 0,
              heart: 0,
              fire: 0,
            },
          },
        };
      },
    },
    deletePost(state, action) {
      return {
        ...state,
        postsData: state.postsData.filter((post) => post.id !== action.payload),
      };
    },
    searchPostByUserName(state, action) {
      state.searchTerm = action.payload.toLowerCase();
    },
    reactOnPost(state, action) {
      const { postId, reaction } = action.payload;
      const post = state.postsData.find(({ id }) => id === postId);
      if (post) {
        post.reactions[reaction]++;
      }
    },
  },
});

export const { addNewPost, deletePost, reactOnPost, searchPostByUserName } =
  postsSlice.actions;
export default postsSlice.reducer;
