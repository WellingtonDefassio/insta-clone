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

export type NavigationIconType = { focused: boolean, color: string, size: number }

export type ImagePickerType = {uri: string, base64 : string}

export type LoginType = {
  email: string
  password: string
}

export type RegisterType = {
  email: string
  password: string
  name: string
}


export type NameEmailType = {
  email: string,
  name: string,
  isLogged: boolean
}
