import React, { useState } from 'react';
import Logo from '../../compontens/logo';
import Styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { add, upload } from '../../redux/useModal';
import { changeSearch } from '../../redux/useList';
import clsx from 'clsx';
function HeaderMobile(props) {
    const [menu, setMenu] = useState(false);
    const List = useSelector(state => state.List);
    const { list, search } = List;
    const dispatch = useDispatch();
    const handleOnMenu = () => {
        setMenu(true);
    }
    const handleCloseMenu = () => {
        setMenu(false)
    }
    const handleAdd = () => {
        dispatch(add());
    }
    const handleUpload = () => {
        dispatch(upload())
    }
    const handleSearch = (e) => {
        const { value } = e.target;
        dispatch(changeSearch(value));
    }
    const handleDownload = () => {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list));
        var dlAnchorElem = document.createElement("a");
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "file.json");
        dlAnchorElem.click();
    }
    return (
        <div className={Styles.HeaderMobile}>
            <div className={Styles.wrap}>
                <Logo />
                <div className={Styles.bar}>
                    <div className={Styles.Menu} onClick={handleOnMenu}>
                        <i className={clsx("fa fa-bars", Styles.Menuicon)} aria-hidden="true"></i>
                    </div>
                    <div className={clsx(Styles.HeaderMenu, {
                        [Styles.onMenu]: menu
                    })}>
                        <div className={Styles.close} onClick={handleCloseMenu}>
                            <i className={clsx("fa fa-times", Styles.Closeicon)} aria-hidden="true"></i>
                        </div>
                        <ul className={Styles.ul}>
                            <li className={Styles.item} onClick={handleAdd}><i className={clsx("fa fa-plus", Styles.icon)} aria-hidden="true"></i>
                                <a href={"#/"} className={Styles.href} >Thêm công việc</a>
                            </li>
                            <li className={Styles.item} onClick={handleDownload}><i className={clsx("fa fa-cloud-download", Styles.icon)} aria-hidden="true"></i>
                                <a href={"#/"} className={Styles.href} >Tải xuống dữ liệu</a>
                            </li>
                            <li className={Styles.item} onClick={handleUpload}><i className={clsx("fa fa-cloud-upload", Styles.icon)} aria-hidden="true"></i>
                                <a href={"#/"} className={Styles.href} >tải lên dữ liệu</a>
                            </li>
                        </ul>
                        <div className={Styles.boxinput}>
                            <input
                                type="text"
                                placeholder="Search"
                                className={Styles.input}
                                onChange={handleSearch}
                                value={search} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMobile;