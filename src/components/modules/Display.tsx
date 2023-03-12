import React from 'react';
import useModuleDnD from '../../hooks/useModuleDnD';
import { useAppSelector } from '../../hooks/reduxHooks';

const Display = () => {
    const modulesOnCanvas = useAppSelector((state) => state.canvas.moduleIn);
    const total = useAppSelector((state) => state.modules.count);
    const num = useAppSelector((state) => state.modules.number);

    const { isDragging, canDrag, drag } = useModuleDnD(<Display />);

    return (
        <div
            ref={!modulesOnCanvas.includes('Display') ? drag : undefined}
            className="display"
            draggable={false}
            style={{
                boxShadow: modulesOnCanvas.includes('Display') ? 'none' : undefined,
                opacity: isDragging || !canDrag || modulesOnCanvas.includes('Display') ? 0.5 : 1,
                userSelect: !canDrag ? 'none' : undefined,
            }}>
            <h1 style={{ fontSize: num == 'Не определено' ? '25px' : undefined }}>
                {total ? total : num || 0}
            </h1>
        </div>
    );
};

export default Display;
