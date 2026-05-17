import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IAuth {
  user: null;
  loading: boolean;
  error: string | null;
}
const initialState: IAuth = {
  user: null,
  loading: false,
  error: "",
};

export const Register = createAsyncThunk("auth/register", async () => {});
export const Login = createAsyncThunk("auth/login", async () => {});
export const Logout = createAsyncThunk("auth/logout", async () => {});
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async () => {},
);

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    Logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
