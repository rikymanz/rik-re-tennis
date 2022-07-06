import React from 'react'

import { useSelector } from 'react-redux';
import { selectView } from '../store/appSlice';

import RaquetsStatus from './../views/RaquetsStatus'

const MainView = () => {

    //const dispatch = useDispatch()
    const selectedView = useSelector( selectView )

    return (
        <div style={{ ...style.main }}>
            { selectedView === 0 && <RaquetsStatus/>}
        </div>
    );
}

const style = {
    main:{
        maxWidth:600,
        border:'1px solid lightgrey',
        margin:'0 auto',
        marginTop:10,
        padding:20,
    }
}

export default MainView
