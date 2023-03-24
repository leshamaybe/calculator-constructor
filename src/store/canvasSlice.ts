import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICanvasProps } from '../types';
import { RootState } from './store';

const initialState: ICanvasProps = {
    toggle: 'constructor',
    moduleIn: [],
};

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        switching: (state, action: PayloadAction<string>) => {
            state.toggle = action.payload;
        },
        addModule: (state, action: PayloadAction<string>) => {
            state.moduleIn.push(action.payload);
        },
        deleteModule: (state, action: PayloadAction<string>) => {
            state.moduleIn = state.moduleIn.filter((el) => el !== action.payload);
        },
    },
});

export const { switching, addModule, deleteModule } = canvasSlice.actions;

export const selectButton = (state: RootState) => state.canvas.toggle;

export const modules = (state: RootState) => state.canvas.moduleIn;

export default canvasSlice.reducer;
