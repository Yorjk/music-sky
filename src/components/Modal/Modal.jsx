import React from "react";
import s from './styleModal.module.css';

export const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? s.modal__content : s.modal} onClick={() => setActive(false)}>
            {children}
        </div>
    )
}