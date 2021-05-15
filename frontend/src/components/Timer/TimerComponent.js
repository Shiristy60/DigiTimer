import React, {useState} from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';
import { addTimerState } from '../../actions/timerActions';
import { useDispatch } from 'react-redux';
import './Timer.css'

const Timer = () => {
    const dispatch = useDispatch()

    // state of the component
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    // Not started = 0
    // started = 1
    // stopped = 2

    // function to start the timer
    const start = () => {
        run();
        addTimeStamp('Start')
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    // function which keeps updating timer after each second
    const run = () => {
        // 1 hour - 60m, increment the hour state
        if(updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        // 1 min - 60s, increment the m state
        if(updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        // 1 s - 100ms, increment the s state
        if(updatedMs === 100){
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        //update the component state.
        return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
    };

    // function to stop the timer.
    const stop = () => {
        addTimeStamp('Stop')
        clearInterval(interv);
        setStatus(2);
    };
    
    // function to reset the timer
    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        addTimeStamp('Reset')
        setTime({ms:0, s:0, m:0, h:0})
    };

    const resume = () => start();

    // stores the info at any instant when a button gets pressed
    const addTimeStamp = (actionPerformed) => {
        const ms = time.ms
        const s = time.s
        const m = time.m
        const h = time.h
        dispatch(addTimerState({actionPerformed, ms, s, m, h}))
    }
    
    return (
        <div className="main-section">
            <div className="clock-holder">
                <div className="stopwatch">
                    <DisplayComponent time={time} />
                    { /* passing the status and functions as props */}
                    <BtnComponent
                        status={status}
                        resume={resume}
                        reset={reset}
                        stop={stop}
                        start={start}
                    />
                </div>
            </div>
        </div>
    );
}

export default Timer;
