import styled from "styled-components"


export const buttonBackground = '#6f03fc'
export const selectedButtonBackground = '#226675'
export const primaryColor = '#F7F7F7'
export const buttonColor = 'white'

export const ViewTitle = styled.div`
    text-align:center;
    padding:5px;
    font-size:32px;
`
export const BlockButton1 = styled.div`
    text-align:center;
    background-color:${buttonBackground};
    border:1px solid ${buttonBackground};
    color:${buttonColor};
    font-weight:bold;
    padding:10px;
    margin:5px;
    border-radius:30px;
    &:hover {
        cursor:pointer;
        opacity:0.7;
    }
`

export const MenuButton = styled.div`
    border:1px solid ${primaryColor};
    height:55px;
    padding-top:12px;
    margin:0 auto;
    text-align:center;
    border-radius:50px;
    font-weight:bold;
    background:${ props => props.selected ? 'black' : primaryColor };
    color:${ props => props.selected ? 'white' : 'black' };
    justify-content: space-evenly ;
    width:30%;
    height:100%;
    font-size:14px;
    &:hover {
        cursor:pointer;
        opacity:0.7;
        border:1px solid black;
    }
`


export const Rows = styled.div`
    background:${primaryColor};
    height:65px;
    padding:10px;
    margin:5px;
    border-radius:25px;
`

export const OldRows = styled.div`
    border:1px solid lightgrey;
    height:55px;
    padding:3px;
    margin-top:2px;
`

export const getResultColor = ( res ) => {
    if( res === 0 ) return '#DFB759'
    if( res === 1 ) return '#068A29'
    if( res === 2 ) return '#BA3C33'
    return 'white';
}

export const getRaquetColor = ( id ) => {
    if( id === 1 ) return '#4B4742'
    if( id === 2 ) return '#3746D1'
    if( id === 3 ) return '#BA3C33'
    return 'white';
}

export const getRaquetStatusColor = ( hours ) => {
    if( hours > 17 ) return '#EB1E1E'
    if( hours > 10 ) return '#FFCC33'
    return 'black';
}


