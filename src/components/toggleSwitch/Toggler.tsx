import React from 'react';
import EyeSVG from '../../assets/EyeSVG';
import BracketsSVG from '../../assets/bracketsSVG';
import { switching, selectButton } from '../canvas/canvasSlice';
import { useSelector, useDispatch } from 'react-redux';

const Toggler = () => {
    const currentButton = useSelector(selectButton);
    const dispatch = useDispatch();

    return (
        <div className="toggler">
            <button
                className={currentButton == 'runtime' ? 'active-btn' : undefined}
                onClick={() => dispatch(switching('runtime'))}>
                <EyeSVG color={currentButton == 'runtime' ? '#5D5FEF' : '#4D5562'} />
                Runtime
            </button>
            <button
                className={currentButton == 'constructor' ? 'active-btn' : undefined}
                onClick={() => dispatch(switching('constructor'))}>
                <BracketsSVG color={currentButton == 'constructor' ? '#5D5FEF' : '#4D5562'} />
                Constructor
            </button>
        </div>
    );
};

export default Toggler;
