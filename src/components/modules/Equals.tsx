import React from 'react';
import useModuleDnD from '../../hooks/useModuleDnD';
import { calculate } from './modulesSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';

const Equals = () => {
    const modulesOnCanvas = useAppSelector((state) => state.canvas.moduleIn);

    const { isDragging, canDrag, drag, currentButton } = useModuleDnD(<Equals />);

    const dispatch = useAppDispatch();

    return (
        <div
            onClick={() => dispatch(calculate())}
            className="equals"
            ref={!modulesOnCanvas.includes('Equals') ? drag : undefined}
            style={{
                boxShadow: modulesOnCanvas.includes('Equals') ? 'none' : undefined,
                opacity: isDragging || !canDrag || modulesOnCanvas.includes('Equals') ? 0.5 : 1,
            }}
            draggable={!canDrag ? false : true}>
            <button style={{ pointerEvents: currentButton == 'runtime' ? 'auto' : 'none' }}>
                =
            </button>
        </div>
    );
};

export default Equals;
