import React, { useState } from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
import Logo from '../../compontens/logo';
import { useDispatch, useSelector } from 'react-redux';
import { add, upload } from '../../redux/useModal';
import { changeSearch } from '../../redux/useList';
function Header(props) {
    const [event, setEvent] = useState(false);
    const List = useSelector(state => state.List);
    const { list, search } = List;
    const dispatch = useDispatch();
    const handleClick = () => {
        setEvent(true);
    }
    const handleBlur = () => {
        setEvent(false)
    }
    const handleAdd = () => {
        dispatch(add());
    }
    const handleUpload = () => {
        dispatch(upload())
    }
    const handleDownload = () => {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list));
        var dlAnchorElem = document.createElement("a");
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "file.json");
        dlAnchorElem.click();
    }
    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(changeSearch(value));
    }
    return (
        <div className={Styles.Header}>
            <div className={Styles.wrap}>
                <Logo />
                <div className={Styles.bar}>
                    <input
                        type="text"
                        placeholder="Search"
                        className={clsx(Styles.input, {
                            [Styles.event]: event
                        })}
                        value={search}
                        onChange={handleChange}
                        onClick={handleClick}
                        onBlur={handleBlur}
                    />
                    <div className={Styles.boxIcon} onClick={handleAdd}>
                        <i className={clsx("fa fa-plus", Styles.icon)} aria-hidden="true"></i>
                    </div>
                    <div className={Styles.boxIcon} onClick={handleDownload}>
                        <i className={clsx("fa fa-cloud-download", Styles.icon)} aria-hidden="true"></i>
                    </div>
                    <div className={Styles.boxIcon} onClick={handleUpload}>
                        <i className={clsx("fa fa-cloud-upload", Styles.icon)} aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;