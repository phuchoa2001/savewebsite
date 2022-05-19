import React from 'react';
import Styles from './index.module.css';
import Btn from '../../btn';
import { useDispatch, useSelector } from 'react-redux';
import { close } from '../../../redux/useModal';
import { change, submit } from '../../../redux/useList';
function Add(props) {
    const dispatch = useDispatch();
    const { add } = useSelector(state => state.List);
    const handleDestroy = () => {
        dispatch(close());
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(change({ name, value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submit());
        dispatch(close());
    }
    return (
        <form className={Styles.form} onSubmit={handleSubmit}>
            <div className={Styles.item}>
                <input
                    type="text"
                    placeholder="Nhập tên tại đây"
                    className={Styles.input}
                    name="name"
                    onChange={handleChange}
                    value={add.name}
                />
            </div>
            <div className={Styles.item}>
                <label className={Styles.content}>Nội dùng : </label>
                <textarea
                    placeholder="Nhập nội dùng tại đây"
                    className={Styles.textarea}
                    name="content"
                    onChange={handleChange}
                    value={add.content}
                >
                </textarea>
            </div>
            <div className={Styles.action}>
                <Btn title="Hủy bỏ" type="destroy" role="button" onClick={handleDestroy} />
                <Btn title="Thêm" type="success" role="submit" />
            </div>
        </form >
    );
}

export default Add;