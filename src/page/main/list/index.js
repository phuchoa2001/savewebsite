import React from 'react';
import Item from './item';
import clsx from 'clsx';
import Styles from './index.module.css';
import { useSelector } from 'react-redux';
function List(props) {
    const List = useSelector(state => state.List);
    const { search, list } = List;
    const Websites = list.filter((item) => item.name.indexOf(search) !== -1)
    return (
        <div className="grid">
            <div className={clsx("row gx-0", Styles.list)}>
                {Websites.map(item =>
                    <Item key={item.id} id={item.id} name={item.name} content={item.content} />
                )}
            </div>
        </div>
    );
}

export default List;