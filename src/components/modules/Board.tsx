import React from 'react';
import Display from './Display';
import MathSymbols from './MathSymbols';
import Digits from './Digits';
import Equals from './Equals';
import { useAppSelector } from '../../hooks/reduxHooks';

const Board = () => {
    const currentButton = useAppSelector((state) => state.canvas.toggle);

    return (
        <div
            className="board"
            style={{
                visibility: currentButton == 'runtime' ? 'hidden' : undefined,
            }}>
            <Display />
            <MathSymbols />
            <Digits />
            <Equals />
        </div>
    );
};

export default Board;
