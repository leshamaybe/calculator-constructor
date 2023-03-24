import { configureStore } from '@reduxjs/toolkit';
import modulesSlice from './modulesSlice';
import canvasSlice from './canvasSlice';

export const store = configureStore({
    reducer: {
        modules: modulesSlice,
        canvas: canvasSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
