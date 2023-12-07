import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CommentType, PostType } from "../../types/Types";

const comments: CommentType[] = [
  {
    nickname: "Roger",
    comment: "That is amazing"
  }, {
    nickname: "Maria",
    comment: "That is amazing"
  }, {
    nickname: "Paula",
    comment: "That is amazing"
  }, {
    nickname: "Fabio",
    comment: "That is amazing"
  }, {
    nickname: "Jose",
    comment: "That is amazing"
  }, {
    nickname: "Silvia",
    comment: "That is amazing"
  }
];

const posts: PostType[] = [
  {
    id: Math.random(),
    nickname: "Rafael Pereira",
    email: "rafaelp45487@gmail.com",
    image: require("../../../assets/imgs/fence.jpg"),
    comments: comments
  },
  {
    id: Math.random(),
    nickname: "Rafael Pereira",
    email: "rafaelp45487@gmail.com",
    image: require("../../../assets/imgs/gate.jpg"),
    comments: []
  },
  {
    id: Math.random(),
    nickname: "Rafael Pereira",
    email: "rafaelp45487@gmail.com",
    image: require("../../../assets/imgs/boat.jpg"),
    comments: comments
  }
];

const initialState: PostType[] = posts;

interface AddCommentProps {
  id: number;
  comment: string;
  nickname: string;
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPostAction: (state, action: PayloadAction<PostType[]>) => {
      state.push(...action.payload);
    },
    addComment: (state, action: PayloadAction<AddCommentProps>) => {
      state = state.map(post => {
        if (post.id === action.payload.id) {
          post.comments.push({ comment: action.payload.comment, nickname: action.payload.nickname });
          return post;
        }
        return post;
      });
    }
  }
});

export const { addPostAction, addComment } = postSlice.actions;

export const selectedPosts = (state: RootState) => state.post;
export default postSlice.reducer;
