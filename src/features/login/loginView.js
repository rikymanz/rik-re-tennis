import React , { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
    login,
} from "./../store/appSlice"


import styled from 'styled-components';

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

const LoginView = () => {

    const [ username , setUsername ] = useState("")
    const [ password , setPassword ] = useState("")

    const dispatch = useDispatch()

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

                    <button onClick={ () => dispatch(login({username,password})) }>Click</button>

                </div>

      </div>
    )
}

const style = {
    loginBox:{
        width:450,
        padding:30,
        margin:'0 auto',
        marginTop:100,
        border:'1px solid lightgrey'
    }
}

export default LoginView;
