import s from './SearchItem.module.css';
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Counter } from "../Counter/Counter";

export const SearchItem = ({ name, items, isOpen, open, close }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const onClick = (item) => {
        const set = new Set(selectedFilters);
        if (set.has(item)) {
            set.delete(item)
        } else {
            set.add(item)
        }
        setSelectedFilters([...set])
    }
    return (
        <div>
            <div
                className={isOpen ? `${s.filter__button__active} ${s.filter__button} ${s._btn_text}` : `${s.filter__button} ${s._btn_text}`} onClick={open}
            >
                {name}
                {selectedFilters.length ? <Counter counter={selectedFilters.length} /> : null}
            </div>
            <Modal active={isOpen} setActive={close}>
                {items.map((item, index) => {
                    return (
                        <p key={index} className={selectedFilters.includes(item) ? s.searchItem__active : s.searchItem} onClick={() => onClick(item)}>{item}</p>
                    )
                })}
            </Modal>
        </div>
    )
}