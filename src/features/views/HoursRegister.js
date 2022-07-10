import React from 'react'
import { useSelector , useDispatch } from 'react-redux';

import {
    setView,
    selectData
} from './../store/appSlice'

import styled from 'styled-components';

const HoursRegister = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectData)

    return (
        <div>
            <AddButton onClick={()=>dispatch(setView(3))}>Aggiungi</AddButton>
            <div>
                { data.register.map( row =>(
                    <div key={row.id}>
                        {row.id}
                    </div>
                ))}
            </div>
        </div>
    );
}

const AddButton = styled.div`
    margin-top:4px;
    border: 1px solid lightgrey;
    text-align:center;
    padding:5px;
    &:hover{
        border:1px solid black;
        cursor:pointer;
    }

`


export default HoursRegister
