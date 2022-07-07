import React , {useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'


import LoggedView from './features/main/LoggedView'
import LoginView from './features/login/loginView';

import {
  checkSession,
  selectIsValidSession
} from './features/store/appSlice';


const App = () => {

    const dispatch = useDispatch()
    const isValidSession =  useSelector(selectIsValidSession)

    useEffect(() => {
        dispatch( checkSession() )
    }, [dispatch])

    return (
      <div>

            { isValidSession && <LoggedView />}
            { !isValidSession && <LoginView />}


      </div>
    )
}

export default App;
