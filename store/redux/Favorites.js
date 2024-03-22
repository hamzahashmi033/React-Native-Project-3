import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeToFavorotes: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});
export const addToFavorites = favoritesSlice.actions.addToFavorites;
export const removeToFavorotes = favoritesSlice.actions.removeToFavorotes;
export default favoritesReducer = favoritesSlice.reducer;
