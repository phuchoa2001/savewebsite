import React, { useEffect } from 'react';
import List from './list';
import { useDispatch } from 'react-redux';
import { start, end } from '../../redux/useList';
function Main(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(start());
        window.onbeforeunload = function () {
            dispatch(end());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <List />
        </div>
    );
}

export default Main;