import React from 'react'

import { useSelector , useDispatch } from 'react-redux';
import { 
    selectView,
    setView,
 } from '../store/appSlice';

import { 
    selectedButtonBackground , 
    buttonBackground,
    buttonColor
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
                <MenuButton selected={selectedView === 0 ? true : false } style={{ paddingTop:12 }} onClick={()=>dispatch(setView(0))}> Home  </MenuButton>
                <MenuButton selected={selectedView === 1 || selectedView === 3} onClick={()=>dispatch(setView(1))}> Registro <br /> partite </MenuButton>
                <MenuButton selected={selectedView === 2 || selectedView === 4} onClick={()=>dispatch(setView(2))}> Registro <br /> incordature </MenuButton>
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
    }
}

const MenuBar = styled.div`
    height:60px;
    padding:2px;
    display:flex;
`

const MenuButton = styled.div`
    padding:3px;
    justify-content: space-evenly ;
    width:28%;
    height:100%;
    border:1px solid black;
    margin:0 auto;
    text-align:center;
    display:table-cell; 
    vertical-align:middle;
    box-sizing: border-box;
    color:${ buttonColor };
    background:${ props => props.selected ? selectedButtonBackground : buttonBackground };
    font-weight:${ props => props.selected && 'bold' };
    cursor:pointer;
    &:hover {
        opacity:0.7;
    }
`



export default MainView
