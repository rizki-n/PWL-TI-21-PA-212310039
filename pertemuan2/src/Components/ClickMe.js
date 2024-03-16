import React from 'react';

const ClickMe = ({ children, onClickBtn }) => {
    return (
        <button type='button' onClick={() => onClickBtn()}>
            {children}
        </button>
    );
}

export default ClickMe;
