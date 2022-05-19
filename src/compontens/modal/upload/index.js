import React from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { upload } from '../../../redux/useList';
import { close } from '../../../redux/useModal';
function Upload(props) {
    const dispatch = useDispatch();
    function getFile(e) {
        if (e.target.files[0]) {
            const fileName = e.target.files[0].name;
            const patternFileExtension = /\.([0-9a-z]+)(?:[#]|$)/i;
            const fileExtension = fileName.match(patternFileExtension);
            const name = fileExtension[1].toLowerCase();
            if (name === "json") {
                var reader = new FileReader();
                reader.onload = onReaderLoad;
                reader.readAsText(e.target.files[0])
                function onReaderLoad(event) {
                    const data = JSON.parse(event.target.result);
                    dispatch(upload(data));
                    dispatch(close());
                }
            } else {
                alert(
                    `chúng tôi chỉ hổi trợ file JSON còn của bạn là ${fileExtension[1]}`
                );
            }
            e.target.value = "";
        }
    }
    return (
        <>
            <div className={Styles.boxInput}>
                <input type="file" className={Styles.input} onChange={getFile} />
            </div>
            <div className={Styles.holder}>
                <div className={Styles.header}>
                    <div className={Styles.Boxicon}>
                        <i className={clsx("fa fa-cloud-upload", Styles.icon)} aria-hidden="true"></i>
                    </div>
                    <h3 className={Styles.heading}>Kéo hoặc click vào đây </h3>
                </div>
            </div>
        </>
    );
}

export default Upload;