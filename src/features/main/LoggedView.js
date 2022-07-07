import React , { useEffect } from 'react';

import MainView from './MainView';

import { useSelector , useDispatch } from 'react-redux';
import {

  getDataAsync,

  selectDataStatus,
  selectData,
} from './../store/appSlice';

import LoadingPage from './../loading/LoadingPage';

const LoggedView = () => {

  const dispatch = useDispatch()

  const dataStatus = useSelector( selectDataStatus )
  const data = useSelector( selectData )

  // chiamata API all'apertura dell'applicazione
  useEffect(() => {
      dispatch( getDataAsync() )
  },[dispatch])

  return (
    <div>

        { dataStatus === 'loading' && <LoadingPage />}

        { ( dataStatus === 'idle' && !data ) &&  <div> No data </div>}

        { ( dataStatus === 'idle' && data ) &&  <MainView />}

    </div>
  )
}

export default LoggedView;
