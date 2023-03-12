import React from 'react';
import { addNumber } from './modulesSlice';
import useModuleDnD from '../../hooks/useModuleDnD';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];

const Digits = () => {
    const modulesOnCanvas = useAppSelector((state) => state.canvas.moduleIn);
    const dispatch = useAppDispatch();

    const { isDragging, canDrag, drag, currentButton } = useModuleDnD(<Digits />);

    return (
        <div
            draggable={!canDrag ? false : true}
            className="digits"
            ref={!modulesOnCanvas.includes('Digits') ? drag : undefined}
            style={{
                boxShadow: modulesOnCanvas.includes('Digits') ? 'none' : undefined,
                opacity: isDragging || !canDrag || modulesOnCanvas.includes('Digits') ? 0.5 : 1,
            }}>
            {nums.map((item: any, i) => (
                <button
                    style={{ pointerEvents: currentButton == 'runtime' ? 'auto' : 'none' }}
                    onClick={() => dispatch(addNumber(item))}
                    key={i}
                    className={item == '0' ? 'digits-zero' : undefined}>
                    {item}
                </button>
            ))}
        </div>
    );
};

export default Digits;
