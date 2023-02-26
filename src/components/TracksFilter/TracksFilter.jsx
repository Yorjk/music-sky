import s from './TracksFilter.module.css';
import { SearchItem } from "../SearchItem/SearchItem";
import tracks from "../../tracks";
import { useState } from "react";

export const TracksFilter = () => {
    const [openFilter, setOpenFilter] = useState(null);
    return (
        <div>
            <div className={`${s.centerblock__filter} ${s.filter}`}>
                <div className={s.filter__title}>Искать по:</div>
                <SearchItem name={'исполнителю'}
                    items={tracks.map(track => track.author)}
                    open={() => setOpenFilter('singer')}
                    close={() => setOpenFilter(null)}
                    isOpen={openFilter === 'singer'}
                />
                <SearchItem name={'году выпуска'}
                    items={tracks.map(track => track.year)}
                    open={() => setOpenFilter('year')}
                    close={() => setOpenFilter(null)}
                    isOpen={openFilter === 'year'}
                />
                <SearchItem name={'жанру'}
                    items={tracks.map(track => track.genre)}
                    open={() => setOpenFilter('genre')}
                    close={() => setOpenFilter(null)}
                    isOpen={openFilter === 'genre'}
                />
            </div>
        </div>
    )
}