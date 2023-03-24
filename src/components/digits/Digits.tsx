import React from 'react';
import { addNumber } from '../../store/modulesSlice';
import useModuleDnD from '../../hooks/useModuleDnD';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import styles from './digits.module.scss';
import cn from 'classnames';

const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];

const Digits = () => {
    const modulesOnCanvas = useAppSelector((state) => state.canvas.moduleIn);
    const dispatch = useAppDispatch();

    const { isDragging, drag, currentButton } = useModuleDnD(<Digits />);

    return (
        <div
            className={cn(styles.digits, {
                [styles.shadow]: isDragging || modulesOnCanvas.includes('Digits'),
            })}
            ref={!modulesOnCanvas.includes('Digits') ? drag : undefined}>
            {nums.map((item: any, i) => (
                <button
                    onClick={() => dispatch(addNumber(item))}
                    key={i}
                    className={cn(styles.btn, {
                        [styles.zero]: item == '0',
                        [styles.disabled_pointer]: currentButton != 'runtime',
                    })}>
                    {item}
                </button>
            ))}
        </div>
    );
};

export default Digits;
