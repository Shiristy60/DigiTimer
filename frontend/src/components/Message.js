import React from 'react'
import { Alert } from 'reactstrap'
// component to display errors in the application
const Message = ({ variant, children}) => {
    return (
        <Alert variant = { variant }>
            { children }
        </Alert>
    )
}

Message.defaultProps = {
    variant: 'info'
}

export default Message
