import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IFEATURES {
  users: [] | null;
  profile: object | null;
  loading: boolean;
  error: string | null;
}

const initialState: IFEATURES = {
  users: null,
  profile: null,
  loading: false,
  error: null,
};

export const profile = createAsyncThunk("user/profile", async () => {});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
