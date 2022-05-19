import React from 'react';
import Btn from '../../btn';
import Styles from './index.module.css';
import { close } from '../../../redux/useModal';
import { deleteIndex } from '../../../redux/useList';
import { useSelector, useDispatch } from 'react-redux'
function Delete(props) {
    const dispatch = useDispatch();
    const List = useSelector(state => state.List.list);
    const ModalId = useSelector(state => state.Modal.id);
    const index = List.findIndex(elemt => elemt.id === ModalId);
    const { name } = List[index];
    const handleDestroy = () => {
        dispatch(close());
    }
    const handleDelete = () => {
        dispatch(deleteIndex(index));
        dispatch(close());
    }
    return (
        <>
            <h3 className={Styles.name}>Bạn có muốn xoá {name}</h3>
            <div className={Styles.action}>
                <Btn title="Hủy bỏ" type="destroy" role="button" onClick={handleDestroy} />
                <Btn title="Xóa" type="success" role="button" onClick={handleDelete} />
            </div>
        </>
    );
}

export default Delete;