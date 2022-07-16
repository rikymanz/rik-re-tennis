import React , {useState,useEffect} from 'react'

import { useSelector } from 'react-redux';
import { selectData } from '../store/appSlice';

import styled from 'styled-components';

import {
    getRaquetStatusColor,
    primaryColor,
    getRaquetColor,

} from './../style/styleValues'

const RaquetDiv = styled.div`
    background:${primaryColor};
    height:80px;
    margin: 5px;
    margin-top:15px;
    display:flex;
    border-radius:15px;
    >.raquetDiv{
        font-size:40px;
        padding:10px;
        width:25%;
        text-align:center;  
    }
    >.hoursDiv{
        text-align:center;
        width:65%;
        font-size:35px;
        padding-top:10px;
        color:${ props => getRaquetStatusColor(props.hours) };
        font-size:bold;
    }
`

const RaquetValue = styled.div`
    background:${ props => props.color};
    border-radius:15px;
    color:white;
`


const MainView = () => {

    const [raquets,setRaquets] = useState(null)
    //const dispatch = useDispatch()
    const data = useSelector( selectData )

    useEffect(() => {
        setRaquetsStatus( data )
    },[ data ]);

    const setRaquetsStatus = data => {
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
        setRaquets( raquets )

    } // fine getRaquetsStatus

    return (
        <div>
            {   raquets &&
                raquets.map( ( raquet , index ) => (
                    <RaquetDiv key={index} hours={raquet.hours}>
                        <div className='raquetDiv'> 
                            <RaquetValue color={getRaquetColor( raquet.raquet )}>
                                { raquet.raquet } 
                            </RaquetValue>
                        </div>
                        <div className='hoursDiv'> 
                            <div>{ raquet.hours } </div>
                        </div>
                        
                    </RaquetDiv>
                ))
            }

                    <RaquetDiv hours='0'>
                        <div className='raquetDiv'> 
                            <RaquetValue color={getRaquetColor( 3 )}>
                                3
                            </RaquetValue>
                        </div>
                        <div className='hoursDiv'> 
                            <div> - </div>
                        </div>
                        
                    </RaquetDiv>

        </div>
    );
}



export default MainView
