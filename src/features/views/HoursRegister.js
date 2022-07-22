import React from 'react'
import { useSelector , useDispatch } from 'react-redux';

import {
    setView,
    selectData,

    setPatchRegisterView,

} from './../store/appSlice'

import{
    toRealIsoDate
} from './../helpers/generalHelper'

import {
    Rows,
    getResultColor,
    BlockButton1,
} from './../style/styleValues'

const HoursRegister = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectData)

    return (
        <div>
            <BlockButton1 onClick={()=>dispatch(setView(3))}>New match</BlockButton1>
            <div style={{maxHeight:450,overflowY:'scroll'}}>
                { data.register.map( row =>(
                    <Rows 
                        key={row.id} 
                        onClick={() => dispatch(setPatchRegisterView(row.id))}
                    >
                        <div style={{...style.inlineRegister,width:'92%'}}>
                            <div>
                                Raquet: <span style={{fontWeight:'bold'}}>{row.raquet}</span> 
                                <span style={{float:'right',fontSize:11}}>{toRealIsoDate(row.date)}</span>
                            </div>
                            <span style={{fontStyle:'italic',fontSize:11}}>{row.desc}</span>
                            <span style={{fontStyle:'italic',fontSize:11,float:'right'}}> Hours: <b>{row.hours}</b></span>
                        </div>
                        <div style={{...style.inlineRegister,width:'7%',paddingTop:12,textAlign:'center'}}>
                            <div style={{display:'inline-block',height:15,width:15,borderRadius:15,background:getResultColor(row.result)}}></div>
                        </div>
                    </Rows>
                ))}
            </div>
        </div>
    );
}

const style = {
    inlineRegister:{
        display:'inline-block',
        verticalAlign:'top',
    }
}




export default HoursRegister
