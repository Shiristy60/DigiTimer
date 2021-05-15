import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row, Table } from 'reactstrap';
import { getHistory } from '../actions/timerActions';
import Loader from './Loader';
import Message from './Message';

const HistoryComponent = () => {

    // useDispatch returns the store's dispatch method to let you dispatch actions.
    const dispatch = useDispatch();

    // useSelector reads a value from the store state and subscribes to updates
    const listHistory = useSelector(state => state.listHistory)
    const { loading, error, timerHistory } = listHistory

    // as soon as the component loads, fetch history from the server
    useEffect(() => {
        dispatch(getHistory())
    }, [dispatch])

    return (
        <Container>
            <Button href='/' secondary className='mb-2'>
                Go Back
            </Button>
            {loading ?  /* if loading is true display a loader*/
                <Loader />
                : error ?   /* if some error occured display the error*/
                    <Message variant='danger'>{error}</Message> :
                    (
                        <div className='main-section'>
                            <h2 className = 'mb-3'>Your history</h2>
                            <Table striped>
                                <thead>
                                <tr>
                                    <th>Action performed</th>
                                    <th>Time stamp</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {timerHistory.map((entry) => (
                                        <tr key = {entry._id}>
                                            <td>{ entry.actionPerformed}</td>
                                            <td>
                                                {entry.timerState.h > 0 ? entry.timerState.h + 'h' : ''}
                                                {entry.timerState.m + 'm: '}
                                                {entry.timerState.s + 's: '}
                                                {entry.timerState.ms + 'ms'}
                                            </td>
                                        </tr>      
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )
            }
        </Container>
    )
}

export default HistoryComponent
