import React from 'react';
import useModuleDnD from '../../hooks/useModuleDnD';
import { calculate } from '../../store/modulesSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import styles from './equals.module.scss';
import cn from 'classnames';

const Equals = () => {
    const modulesOnCanvas = useAppSelector((state) => state.canvas.moduleIn);

    const { isDragging, drag, currentButton } = useModuleDnD(<Equals />);

    const dispatch = useAppDispatch();

    return (
        <div
            onClick={() => dispatch(calculate())}
            className={cn(styles.equals, {
                [styles.shadow]: isDragging || modulesOnCanvas.includes('Equals'),
            })}
            ref={!modulesOnCanvas.includes('Equals') ? drag : undefined}>
            <button
                className={cn(styles.btn, {
                    [styles.disabled_pointer]: currentButton != 'runtime',
                })}>
                =
            </button>
        </div>
    );
};

export default Equals;
