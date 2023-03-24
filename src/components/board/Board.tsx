import React from 'react';
import Display from '../display/Display';
import MathSymbols from '../MathSymbols/MathSymbols';
import Digits from '../digits/Digits';
import Equals from '../equals/Equals';
import { useAppSelector } from '../../hooks/reduxHooks';
import styles from './Board.module.scss';
import cn from 'classnames';

const Board = () => {
    const currentButton = useAppSelector((state) => state.canvas.toggle);

    return (
        <div className={cn(styles.board, { [styles.visible]: currentButton == 'runtime' })}>
            <Display />
            <MathSymbols />
            <Digits />
            <Equals />
        </div>
    );
};

export default Board;
