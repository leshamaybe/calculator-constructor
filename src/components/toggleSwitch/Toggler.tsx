import React from 'react';
import EyeSVG from '../../assets/EyeSVG';
import BracketsSVG from '../../assets/bracketsSVG';
import Button from './ToggleButton';
import { switching, selectButton } from '../../store/canvasSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from './toggler.module.scss';
import cn from 'classnames';

const Toggler = () => {
    const currentButton = useSelector(selectButton);
    const dispatch = useDispatch();

    return (
        <div className={styles.toggler}>
            <Button
                className={cn(styles.btn, { [styles.active_btn]: currentButton == 'runtime' })}
                onClick={() => dispatch(switching('runtime'))}>
                <EyeSVG color={currentButton == 'runtime' ? '#5D5FEF' : '#4D5562'} />
                Runtime
            </Button>
            <Button
                className={cn(styles.btn, { [styles.active_btn]: currentButton == 'constructor' })}
                onClick={() => dispatch(switching('constructor'))}>
                <BracketsSVG color={currentButton == 'constructor' ? '#5D5FEF' : '#4D5562'} />
                Constructor
            </Button>
        </div>
    );
};

export default Toggler;
