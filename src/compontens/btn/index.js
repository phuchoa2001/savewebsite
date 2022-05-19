import React from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
function Btn({ title, type, onClick, role }) {
    return (
        <button
            className={clsx(Styles.btn, Styles[type])}
            type={role}
            onClick={onClick}
        >{title}
        </button>
    );
}

export default Btn;