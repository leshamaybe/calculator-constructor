import { configureStore } from '@reduxjs/toolkit';
import modulesSlice from '../components/modules/modulesSlice';
import canvasSlice from '../components/canvas/canvasSlice';

export const store = configureStore({
    reducer: {
        modules: modulesSlice,
        canvas: canvasSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
