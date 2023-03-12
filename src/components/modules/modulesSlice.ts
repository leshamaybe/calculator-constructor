import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { IModulesProps } from '../../types';

const initialState: IModulesProps = {
    dragging: false,
    count: 0,
    operation: '',
    number: '',
    history: '',
};

export const modulesSlice = createSlice({
    name: 'modules',
    initialState,
    reducers: {
        isDrag: (state) => {
            state.dragging = !state.dragging;
        },
        calculate: (state) => {
            if (state.operation == '+') {
                state.count = Number(state.number) + Number(state.history);
            } else if (state.operation == '-') {
                state.count = Number(state.number) - Number(state.history);
            } else if (state.operation == '/') {
                if (state.number == 0) {
                    state.count = 'Не определено';
                } else {
                    state.count = Number(state.number) / Number(state.history);
                }
            } else if (state.operation == 'x') {
                state.count = Number(state.number) * Number(state.history);
            }
        },
        addNumber: (state, action: PayloadAction<number>) => {
            state.number += action.payload;
        },
        addOperation: (state, action: PayloadAction<string>) => {
            state.history += state.number;
            state.number = '';
            state.operation = action.payload;
        },
    },
});

export const { isDrag, addNumber, calculate, addOperation } = modulesSlice.actions;

export const selectCount = (state: RootState) => state.modules.dragging;

export const currentNum = (state: RootState) => state.modules.number;

export const historyNum = (state: RootState) => state.modules.history;

export const operator = (state: RootState) => state.modules.operation;

export const totalCount = (state: RootState) => state.modules.count;

export default modulesSlice.reducer;
