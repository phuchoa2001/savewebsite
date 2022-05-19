import React from 'react';
import clsx from 'clsx';
import Styles from './index.module.css';
import { edit } from '../../../../redux/useList';
import { useDispatch } from 'react-redux';
import { add, deleteItem } from '../../../../redux/useModal';
function Item({ name, id, content }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteItem(id));
    }
    const handleEdit = () => {
        dispatch(edit(id));
        dispatch(add());
    }
    // return a promise
    function copyToClipboard(textToCopy) {
        // navigator clipboard api needs a secure context (https)
        if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard api method'
            return navigator.clipboard.writeText(textToCopy);
        } else {
            // text area method
            let textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            // make the textarea out of viewport
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            return new Promise((res, rej) => {
                // here the magic happens
                document.execCommand('copy') ? res() : rej();
                textArea.remove();
            });
        }
    }
    const handleCopy = () => {
        copyToClipboard(content)
            .then(() => alert(`đã copy text`))
            .catch((err) => alert('Error in copying text: ', err));
    }
    return (
        <div className={clsx(".col xxl-3 xl-3 lg-3 md-4 sm-12 col-12")}>
            <div className={Styles.card}>
                <div className={Styles.wrap}>
                    <div className={Styles.Cardheader}>
                        <div className={Styles.Name}>
                            <h3 className={Styles.Nametext}>{name}</h3>
                        </div>
                        <div className={Styles.barCard}>
                            <div className={Styles.Boxicon} onClick={handleEdit}>
                                <i className={clsx("fa fa-pencil", Styles.icon)} aria-hidden="true"></i>
                            </div>
                            <div className={Styles.Boxicon} onClick={handleDelete}>
                                <i className={clsx("fa fa-trash", Styles.icon)} aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.Cardcontent}>
                        <p className={Styles.text}>
                            {content}
                        </p>
                        <div className={Styles.BoxiconContent} onClick={handleCopy}>
                            <i className={clsx("fa fa-clone", Styles.iconConText)} aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;