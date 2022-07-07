import React , { useState , useEffect } from 'react'

import { useSelector } from 'react-redux';
import { selectData } from '../store/appSlice';

import styled from 'styled-components';

const RaquetDiv = styled.div`
    background-color: white;
    padding: 10px;
    border: 1px solid black;
    margin: 5px;
    cursor: pointer;
    &:hover {
        background-color: lightblue;
}
`

const MainView = () => {

    //const dispatch = useDispatch()
    const data = useSelector( selectData )
    const raquets = getRaquetsStatus( data )

    return (
        <div>
            {   raquets &&
                raquets.map( ( raquet , index ) => (
                    <RaquetDiv key={index}>
                        <div> Racchetta : { raquet.raquet } </div>
                        <div> Ore totali : { raquet.hours } </div>
                    </RaquetDiv>
                ))
            }
        </div>
    );
}

const getRaquetsStatus = data => {
    // array con gli id delle racchette, filtrate e unificate dalle incordature. E l'ultima data di incordatura
    const raquets = data.stringing
        .map( row => row.raquet)
        .filter(( value, index, self ) => self.indexOf(value) === index)
        .map( id => ({ 
                raquet:id ,
                lastStringing:new Date(Math.max(...data.stringing.filter( row => row.raquet === id ).map( row => new Date(row.date)))),
            }))  

    // per ogni racchetta vengono calcolate le ore totali
    for (let index = 0; index < raquets.length; index++) {
        const raquet = raquets[index]

        raquet.hours = data.register
            .filter( row => (row.raquet === raquet.raquet && new Date( row.date ) > new Date( raquet.lastStringing )) )
            .reduce( ( a , b ) => a + b.hours , 0 )
    } // fine for

    return raquets
} // fine getRaquetsStatus

export default MainView
