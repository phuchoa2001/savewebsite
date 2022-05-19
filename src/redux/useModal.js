import { createSlice } from '@reduxjs/toolkit';
export const useModal = createSlice({
    name: "Modal",
    initialState: {
        Modal: false,
        type: null,
        id: null,
    },
    reducers: {
        close: (state, action) => {
            state.Modal = false;
            state.type = null;
            state.id = null;
        },
        add: (state, action) => {
            state.Modal = true;
            state.type = "Add";
        },
        deleteItem: (state, action) => {
            state.id = action.payload;
            state.Modal = true;
            state.type = "Delete";
        },
        upload: (state, action) => {
            state.Modal = true;
            state.type = "Upload";
        },
    }
})

export const {
    add, upload, close, deleteItem 
} =
    useModal.actions;
export default useModal.reducer;