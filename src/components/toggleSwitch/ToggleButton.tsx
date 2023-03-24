import React from 'react';

const ToggleButton = ({
    onClick,
    children,
    className,
}: {
    onClick: any;
    children: any;
    className: any;
}) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default ToggleButton;
