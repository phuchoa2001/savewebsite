import { createSlice } from '@reduxjs/toolkit';
import Randomnumber from '../common/Randomnumber';
export const UseList = createSlice({
    name: "List",
    initialState: {
        list: [],
        add: {
            name: "",
            content: "",
            id: null,
        },
        search: "",
    },
    reducers: {
            start: (state, action) => {
                const data = localStorage.getItem("xoanen_saveWebsite");
                if (data) {
                    state.list = JSON.parse(data);
                }
            },
        changeSearch: (state, action) => {
            state.search = action.payload;
        },
        upload: (state, action) => {
            state.list = action.payload;
        },
        end: (state, action) => {
            localStorage.setItem("xoanen_saveWebsite", JSON.stringify(state.list));
        },
        change: (state, action) => {
            const { value, name } = action.payload;
            state.add = {
                ...state.add,
                [name]: value
            }
        },
        edit: (state, action) => {
            const index = state.list.findIndex(elem => elem.id === action.payload);
            state.add = state.list[index];
        },
        deleteIndex: (state, action) => {
            state.list.splice(action.payload, 1)
        },
        submit: (state, action) => {
            if (state.add.id) {
                const index = state.list.findIndex(elem => elem.id === state.add.id);
                state.list[index] = state.add;
            } else {
                state.add.id = Randomnumber();
                state.list.push(state.add);
            }
            state.add = {
                name: "",
                content: "",
                id: null,
            }
        }
    }
})
export const {
    change, submit, edit, deleteIndex, start, end, upload , changeSearch
} =
    UseList.actions;
export default UseList.reducer;