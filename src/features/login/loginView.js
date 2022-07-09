import React , { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';

import {
    login,
    selectLoginStatus,
    selectLoginError,
} from "./../store/loginSlice"

import styleValues from './../style/styleValues'

import Loading from '../loading/Loading';

import styled from 'styled-components';


const LoginView = () => {

    const [ username , setUsername ] = useState("")
    const [ password , setPassword ] = useState("")

    const dispatch = useDispatch()

    const loginStatus = useSelector( selectLoginStatus )
    const loginError = useSelector( selectLoginError )

    return (
      <div>

                <div style={style.loginBox}>
                    <LoginInput>
                        <div>Username</div>
                        <input value={username} onChange={ (e) => setUsername(e.currentTarget.value) } />
                    </LoginInput>

                    <LoginInput>
                        <div>Password</div>
                        <input value={password} onChange={ (e) => setPassword(e.currentTarget.value) } type="password" />
                    </LoginInput>

                    { loginStatus === 'idle' && <LoginButton onClick={ () => dispatch(login({username,password})) }> Login </LoginButton> }
                    { loginStatus === 'loading' && <Loading /> }

                    <LoginError>{ loginError }</LoginError>

                </div>

      </div>
    )
}

const style = {
    loginBox:{
        width:450,
        height:300,
        padding:30,
        margin:'0 auto',
        marginTop:100,
        border:'1px solid lightgrey'
    }
}


const LoginInput = styled.div`
    padding:10px;
    margin-top:10px;
    div{
        padding:2px;
    };
    input{
        display:block;
        height:35px;
        display:block;
        width:100%;
        text-align:center;
    }
`

const LoginError = styled.div`
    text-align:center;
    color:red;
    font-weight:bold;
    padding:20px;
`

const LoginButton = styled.div`
    text-align:center;
    background-color:${styleValues.buttonBackground};
    border:1px solid black;
    color:${styleValues.buttonColor};
    font-weight:bold;
    padding:10px;
    margin:10px;
    &:hover {
        cursor:pointer;
        opacity:0.7;
    }
`

export default LoginView;
