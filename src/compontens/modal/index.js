import React from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
import Add from './add';
import Delete from './delete';
import Upload from './upload';
import { useSelector, useDispatch } from 'react-redux';
import { close } from '../../redux/useModal';
function Modal(props) {
    const Typemodal = useSelector(state => state.Modal);
    const { id, type, Modal } = Typemodal;
    const dispatch = useDispatch();
    if (!Modal) {
        return false;
    }
    const handleClose = () => {
        dispatch(close());
    }
    return (
        <div className={Styles.Modal}>
            <div className={Styles.overlay}>
            </div>
            <div className={Styles.boxModal}>
                <div className={Styles.wrap}>
                    <div className={Styles.headerModal}>
                        <div className={Styles.feature}>
                            <h3 className={Styles.featureName}>Thêm Công việc</h3>
                        </div>
                        <div className={Styles.boxIcon} onClick={handleClose}>
                            <i className={clsx("fa fa-times", Styles.icon)} aria-hidden="true"></i>
                        </div>
                        {type === "Add" ? <Add /> : false}
                        {type === "Delete" ? <Delete id={id} /> : false}
                        {type === "Upload" ? <Upload /> : false}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;