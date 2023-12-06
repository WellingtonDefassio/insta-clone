import { createSlice } from "@reduxjs/toolkit";
import { NameEmailType } from "../../types/Types";


const initialState: NameEmailType = {
  name: "",
  email: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: {payload: NameEmailType}) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLogged = true;
    },
    logoutAction: state => {
      state.name = "";
      state.email = "";
      state.isLogged = false;
    }
  }
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
