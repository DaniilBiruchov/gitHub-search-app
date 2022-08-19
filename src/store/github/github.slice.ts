import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const favouriteKey = 'fk'

interface GitHubState {
    favourites: string[];
}

const initialState: GitHubState = {
    favourites: JSON.parse(localStorage.getItem(favouriteKey) ?? '[]'),
}

export const githubSlice = createSlice({
    name: "github",
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload);
            localStorage.setItem(favouriteKey, JSON.stringify(state.favourites))
        },
        removeFavorite(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== action.payload);
            localStorage.setItem(favouriteKey, JSON.stringify(state.favourites))
        }
    }
})

export const githubAction = githubSlice.actions
export const githubReducer = githubSlice.reducer