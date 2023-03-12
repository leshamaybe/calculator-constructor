import React, { useState } from 'react';
import picture from '../../assets/picture.svg';
import { useDrop } from 'react-dnd';
import { deleteModule } from './canvasSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

const Canvas = () => {
    const currentButton = useAppSelector((state) => state.canvas.toggle);
    const [module, setModule] = useState([]);
    const dispatch = useAppDispatch();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'module',
        drop: (item: Object) => {
            addToBoard(item);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addToBoard = (item: any) => {
        setModule((state: any) => (!state.includes(item) ? [...state, item] : state));
    };

    const removeModule = (item: any) => {
        setModule(module.filter((el) => el !== item));
        dispatch(deleteModule(item.type.name));
    };

    return (
        <div
            className="canvas"
            ref={drop}
            style={{
                justifyContent: module.length ? 'flex-start' : undefined,
                background: isOver && !module.length ? '#F0F9FF' : undefined,
                border: module.length ? 'none' : undefined,
            }}>
            {module.length ? (
                module.map((item, index) => {
                    return (
                        <div onDoubleClick={() => removeModule(item)} key={index}>
                            {item}
                        </div>
                    );
                })
            ) : (
                <div className="canvas-content">
                    <img src={picture} alt="" />
                    <h1>Перетащите сюда</h1>
                    <p>любой элемент из левой панели</p>
                </div>
            )}
        </div>
    );
};

export default Canvas;
