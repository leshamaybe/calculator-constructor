import React from 'react';
import { addOperation } from '../../store/modulesSlice';
import useModuleDnD from '../../hooks/useModuleDnD';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import styles from './mathSymbols.module.scss';
import cn from 'classnames';

const symbols = ['/', 'x', '-', '+'];

const MathSymbols = () => {
    const modulesOnCanvas = useAppSelector((state) => state.canvas.moduleIn);
    const dispatch = useAppDispatch();

    const { isDragging, drag, currentButton } = useModuleDnD(<MathSymbols />);

    return (
        <div
            className={cn(styles.math_symbols, {
                [styles.shadow]: isDragging || modulesOnCanvas.includes('MathSymbols'),
            })}
            ref={!modulesOnCanvas.includes('MathSymbols') ? drag : undefined}>
            {symbols.map((sym, i) => (
                <button
                    className={cn(styles.btn, {
                        [styles.disabled_pointer]: currentButton != 'runtime',
                    })}
                    key={i}
                    onClick={() => dispatch(addOperation(sym))}>
                    {sym}
                </button>
            ))}
        </div>
    );
};

export default MathSymbols;
