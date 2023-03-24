import React, { useState } from 'react';
import picture from '../../assets/picture.svg';
import { useDrop } from 'react-dnd';
import { deleteModule } from '../../store/canvasSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import styles from './Canvas.module.scss';
import cn from 'classnames';

const Canvas = () => {
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
            className={cn(styles.canvas, {
                [styles.module_on_canvas]: module.length,
                [styles.bg]: isOver && !module.length,
            })}
            ref={drop}>
            {module.length ? (
                module.map((item, index) => {
                    return (
                        <div onDoubleClick={() => removeModule(item)} key={index}>
                            {item}
                        </div>
                    );
                })
            ) : (
                <div className={styles['canvas-content']}>
                    <img src={picture} alt="" />
                    <h1>Перетащите сюда</h1>
                    <p>любой элемент из левой панели</p>
                </div>
            )}
        </div>
    );
};

export default Canvas;
