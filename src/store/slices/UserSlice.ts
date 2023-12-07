import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NameEmailType } from "../../types/Types";
import { RootState } from "../store";


const initialState: NameEmailType = {
  name: "",
  email: "",
  isLogged: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<NameEmailType>) => {
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

//todo pode criar select especifico para os dados user com appUseSelector(selectEmail)
export const selectEmail = (state: RootState) => state.user.email;
export default userSlice.reducer;
