import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    loading: boolean;
    error: string | null;
    user: any;
}

const initialState: AuthState = {
    loading: false,
    error: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fetchAuthStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchAuthSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.user = action.payload;
        },
        fetchAuthFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchAuthFailure, fetchAuthStart, fetchAuthSuccess } = authSlice.actions;
export default authSlice.reducer;