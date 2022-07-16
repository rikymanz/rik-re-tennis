import React from 'react'

import { useSelector , useDispatch } from 'react-redux';
import { 
    selectView,
    setView,
 } from '../store/appSlice';

import { 
    MenuButton,
} 
from './../style/styleValues'

import styled from 'styled-components';

import RaquetsStatus from './../views/RaquetsStatus'
import HoursRegister from './../views/HoursRegister'
import StringsRegister from './../views/StringsRegister'
import PostRegister from '../views/PostRegister'
import PostStringing from '../views/PostStringing'

const MainView = () => {

    const dispatch = useDispatch()
    const selectedView = useSelector( selectView )

    return (
        <div style={{ ...style.main }}>
            <MenuBar>
                <MenuButton selected={selectedView === 0 ? true : false } style={{ paddingTop:25 }} onClick={()=>dispatch(setView(0))}> Home  </MenuButton>
                <MenuButton selected={selectedView === 1 || selectedView === 3} onClick={()=>dispatch(setView(1))}> Match <br /> register </MenuButton>
                <MenuButton selected={selectedView === 2 || selectedView === 4} onClick={()=>dispatch(setView(2))}> Stringing <br /> register </MenuButton>
            </MenuBar>

            { selectedView === 0 && <RaquetsStatus/>}
            { selectedView === 1 && <HoursRegister/>}
            { selectedView === 2 && <StringsRegister/>}

            { selectedView === 3 && <PostRegister/>}
            { selectedView === 4 && <PostStringing/>}


        </div>
    );
}

const style = {
    main:{
        maxWidth:600,
        margin:'0 auto',
        marginTop:'20px'
    }
}

const MenuBar = styled.div`
    height:80px;
    padding:2px;
    display:flex;
`



export default MainView
