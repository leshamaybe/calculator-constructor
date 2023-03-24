import React from 'react';
import useModuleDnD from '../../hooks/useModuleDnD';
import { useAppSelector } from '../../hooks/reduxHooks';
import styles from './display.module.scss';
import cn from 'classnames';

const Display = () => {
    const modulesOnCanvas = useAppSelector((state) => state.canvas.moduleIn);
    const total = useAppSelector((state) => state.modules.count);
    const num = useAppSelector((state) => state.modules.number);

    const { isDragging, drag } = useModuleDnD(<Display />);

    return (
        <div
            ref={!modulesOnCanvas.includes('Display') ? drag : undefined}
            className={cn(styles.display, {
                [styles.shadow]: isDragging || modulesOnCanvas.includes('Display'),
            })}>
            <h1
                className={styles.total}
                style={{ fontSize: num == 'Не определено' ? '25px' : undefined }}>
                {total ? total : num || 0}
            </h1>
        </div>
    );
};

export default Display;
