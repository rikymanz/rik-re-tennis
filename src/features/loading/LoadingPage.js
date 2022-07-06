import React from 'react'

import Loading from './Loading'

const LoadingPage = () => {      
    return (
        <div style={style}>
            <Loading />
        </div>
    )
}

const style = {
    marginTop:300,
    fontSize:45
}

export default LoadingPage;