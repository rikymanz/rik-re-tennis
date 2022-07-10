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

