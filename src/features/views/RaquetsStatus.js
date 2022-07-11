import React , {useState,useEffect} from 'react'

import { useSelector } from 'react-redux';
import { selectData } from '../store/appSlice';

import styled from 'styled-components';

import {
    getRaquetStatusColor,
} from './../style/styleValues'

const RaquetDiv = styled.div`
    background-color: ${ props => getRaquetStatusColor(props.hours)};
    height:80px;
    border: 1px solid black;
    margin: 5px;
    display:flex;
    >.raquet{
        font-size:40px;
        padding:10px;
        width:20%;
        text-align:center;  
        border-right:1px solid lightgrey;
    }
    >.hours{
        text-align:center;
        width:95%;
        font-size:35px;
        padding-top:10px;
        color:grey;
        font-size:bold;
    }
`

const MainView = () => {

    const [raquets,setRaquets] = useState(null)
    //const dispatch = useDispatch()
    const data = useSelector( selectData )

    useEffect(() => {
        setRaquetsStatus( data )
    },[ data ]);

    const setRaquetsStatus = data => {
        console.log( data )
        
        // array con gli id delle racchette, filtrate e unificate dalle incordature. E l'ultima data di incordatura
        const raquets = data.stringing
            .map( row => row.raquet)
            .filter(( value, index, self ) => self.indexOf(value) === index)
            .map( id => ({ 
                    raquet:id ,
                    lastStringing:new Date(Math.max(...data.stringing.filter( row => row.raquet === id ).map( row => new Date(row.date)))),
                }))  
        console.log( raquets )
        // per ogni racchetta vengono calcolate le ore totali
        for (let index = 0; index < raquets.length; index++) {
            const raquet = raquets[index]
    
            raquet.hours = data.register
                .filter( row => (row.raquet === raquet.raquet && new Date( row.date ) > new Date( raquet.lastStringing )) )
                .reduce( ( a , b ) => a + b.hours , 0 )
        } // fine for
        console.log( raquets )
        setRaquets( raquets )
    } // fine getRaquetsStatus

    return (
        <div>
            {   raquets &&
                raquets.map( ( raquet , index ) => (
                    <RaquetDiv key={index} hours={raquet.hours}>
                        <div className='raquet'>  { raquet.raquet } </div>
                        <div className='hours'> { raquet.hours } </div>
                    </RaquetDiv>
                ))
            }
        </div>
    );
}



export default MainView
