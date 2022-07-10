import styled from "styled-components"


export const buttonBackground = '#5296a5'
export const buttonColor = 'white'
export const selectedButtonBackground = '#226675'

export const ViewTitle = styled.div`
    text-align:center;
    padding:5px;
    font-size:32px;
`
export const BlockButton1 = styled.div`
    text-align:center;
    background-color:${buttonBackground};
    border:1px solid black;
    color:${buttonColor};
    font-weight:bold;
    padding:10px;
    margin:10px;
    &:hover {
        cursor:pointer;
        opacity:0.7;
    }
`

export const AddButton = styled.div`
    margin-top:4px;
    border: 1px solid lightgrey;
    text-align:center;
    padding:5px;
    &:hover{
        border:1px solid black;
        cursor:pointer;
    }
`

export const RowRegister = styled.div`
    border:1px solid lightgrey;
    height:55px;
    padding:3px;
    margin-top:2px;
`

export const getResultColor = ( res ) => {
    if( res === 0 ) return '#FFFFDD'
    if( res === 1 ) return '#DDFFDD'
    if( res === 2 ) return '#FFDDDD'
    return 'white';
}

export const getRaquetStatusColor = ( hours ) => {
    if( hours > 12 ) return '#FFDDDD'
    if( hours > 7 ) return '#FFFFDD'
    return '#DDFFDD';
}


