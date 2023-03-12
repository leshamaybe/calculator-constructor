import React from 'react';
import { addOperation } from './modulesSlice';
import useModuleDnD from '../../hooks/useModuleDnD';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

const symbols = ['/', 'x', '-', '+'];

const MathSymbols = () => {
    const modulesOnCanvas = useAppSelector((state) => state.canvas.moduleIn);
    const dispatch = useAppDispatch();

    const { isDragging, canDrag, drag, currentButton } = useModuleDnD(<MathSymbols />);

    return (
        <div
            className="math-symbols"
            ref={!modulesOnCanvas.includes('MathSymbols') ? drag : undefined}
            draggable={!canDrag ? false : true}
            style={{
                boxShadow: modulesOnCanvas.includes('MathSymbols') ? 'none' : undefined,
                opacity:
                    isDragging || !canDrag || modulesOnCanvas.includes('MathSymbols') ? 0.5 : 1,
                userSelect: !canDrag ? 'none' : undefined,
            }}>
            {symbols.map((sym, i) => (
                <button
                    style={{ pointerEvents: currentButton == 'runtime' ? 'auto' : 'none' }}
                    key={i}
                    onClick={() => dispatch(addOperation(sym))}>
                    {sym}
                </button>
            ))}
        </div>
    );
};

export default MathSymbols;
