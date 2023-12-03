import { ImageSourcePropType } from "react-native";

export type CommentType = {
  nickname: string
  comment: string
}

export type PostType = {
  id: number,
  nickname: string,
  email: string,
  image: ImageSourcePropType,
  comments: CommentType[]
}
