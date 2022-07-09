import React from 'react'

import { useSelector , useDispatch } from 'react-redux';
import { 
    selectView,
    setView,
 } from '../store/appSlice';

import styleValues from './../style/styleValues'

import styled from 'styled-components';

import RaquetsStatus from './../views/RaquetsStatus'
import HoursRegister from './../views/HoursRegister'
import StringsRegister from './../views/StringsRegister'

const MainView = () => {

    const dispatch = useDispatch()
    const selectedView = useSelector( selectView )

    return (
        <div style={{ ...style.main }}>
            <MenuBar>
                <div style={{ paddingTop:12 }} onClick={()=>dispatch(setView(0))}> Home </div>
                <div onClick={()=>dispatch(setView(1))}> Registro <br /> partite </div>
                <div onClick={()=>dispatch(setView(2))}> Registro <br /> incordature </div>
            </MenuBar>

            { selectedView === 0 && <RaquetsStatus/>}
            { selectedView === 1 && <HoursRegister/>}
            { selectedView === 2 && <StringsRegister/>}

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
    height:50px;
    padding:2px;
    display:flex;
    div{
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
        background:${ styleValues.buttonBackground };
        color:${ styleValues.buttonColor };
        cursor:pointer;
        &:hover {
            opacity:0.7;
        }
    }
`

export default MainView
