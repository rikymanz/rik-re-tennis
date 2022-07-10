import React from 'react'
import { useSelector , useDispatch } from 'react-redux';

import {
    setView,
    selectData
} from './../store/appSlice'

import {
    AddButton,
    RowRegister,
    getResultColor,
} from './../style/styleValues'

const HoursRegister = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectData)

    return (
        <div>
            <AddButton onClick={()=>dispatch(setView(3))}>Aggiungi</AddButton>
            <div style={{maxHeight:450,overflowY:'scroll'}}>
                { data.register.map( row =>(
                    <RowRegister 
                        key={row.id} 
                        style={{background:getResultColor(row.result)}}
                    >
                        <div>{row.raquet} - {row.date}</div>
                        <div>{row.desc}</div>
                    </RowRegister>
                ))}
            </div>
        </div>
    );
}




export default HoursRegister
