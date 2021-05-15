import React from 'react'
import { Spinner } from 'reactstrap'
// loading icon for the application
const Loader = () => {
    return (
        <>
            <Spinner
                children='' 
                color='secondary'
                style={{
                    width: '5rem',
                    height: '5rem',
                    margin: 'auto',
                    display: 'block'
            }}/>
        </>
    )
}


export default Loader
