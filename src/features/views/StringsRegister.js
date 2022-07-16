import React from 'react'
import { useSelector , useDispatch } from 'react-redux';

import {
    setView,
    selectData
} from './../store/appSlice'

import{
    toRealIsoDate
} from './../helpers/generalHelper'

import {
    Rows,
    BlockButton1,
} from './../style/styleValues'

const StringsRegister = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectData)

    return (
        <div>
            <BlockButton1 onClick={()=>dispatch(setView(4))}>New stringing</BlockButton1>
            <div style={{maxHeight:450,overflowY:'scroll'}}>
                { data.stringing.map( row =>(
                    <Rows 
                        key={row.id} 
                    >
                        <div>
                            <div>
                                Raquet: <span style={{fontWeight:'bold'}}>{row.raquet}</span> 
                                <span style={{float:'right',fontSize:12}}>{toRealIsoDate(row.date)}</span>
                            </div>
                            <div style={{fontStyle:'italic',fontSize:12}}>
                                <span>{row.strings} ( {row.weight} Kg )</span>
                                <span style={{float:'right',fontSize:12}}>{row.place}</span>
                            </div>
                        </div>
                    </Rows>
                ))}
            </div>
        </div>
    );
}





export default StringsRegister
