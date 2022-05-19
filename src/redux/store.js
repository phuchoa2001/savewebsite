import { configureStore } from '@reduxjs/toolkit';
import Modal from './useModal';
import List from './useList';
export default configureStore({
    reducer: {
        Modal,
        List
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})