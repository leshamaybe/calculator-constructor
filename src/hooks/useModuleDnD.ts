import React from 'react';
import { addModule } from '../store/canvasSlice';
import { useDrag } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';

interface IUseModule {
    isDragging: boolean;
    canDrag: boolean;
    drag: any;
    currentButton: string;
}

const useModuleDnD = (item: any): IUseModule => {
    const currentButton = useAppSelector((state) => state.canvas.toggle);
    const dispatch = useAppDispatch();

    const [{ isDragging, canDrag }, drag] = useDrag(
        () => ({
            type: 'module',
            item: item,
            end: (item) => {
                dispatch(addModule(item.type.name));
            },
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
                canDrag: currentButton == 'runtime' ? false : true,
            }),
        }),
        [currentButton],
    );

    return { isDragging, canDrag, drag, currentButton };
};

export default useModuleDnD;
