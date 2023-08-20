
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LangStatus {
    lang: boolean  
}

const initialState: LangStatus = {
    lang: false,
};

export const changeLayout = createSlice({
    name: "lang",
    initialState,
    reducers: {
        changeLanguageStatus: (state : LangStatus, action: PayloadAction<LangStatus>) => {
            state.lang = action.payload.lang as boolean;
        },
    },

});

// Action creators are generated for each case reducer function
export const { changeLanguageStatus  } = changeLayout.actions;
export default changeLayout.reducer;

