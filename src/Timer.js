import React, { useState, useEffect } from 'react';

function Timer() {
    const [totalTime, setTotalTime] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [tenSeconds, setTenSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [tenMinutes, setTenMinutes] = useState(0);

    useEffect(() => {
        const secondInterval = setInterval(() => {
            setTotalTime(totalTime => totalTime + 1);
            setSeconds(seconds => seconds + 1);

            if ((totalTime + 1) % 10 === 0) {
                setSeconds(0);
                setTenSeconds(tenSeconds => tenSeconds + 1);
            }

            if ((totalTime + 1) % 60 === 0) {
                setTenSeconds(0);
                setMinutes(minutes => minutes + 1);
            }

            if ((totalTime + 1) % 600 === 0) {
                setMinutes(0);
                setTenMinutes(tenMinutes => tenMinutes + 1);
            }

            if ((totalTime + 1) % 900 === 0) {
                setTotalTime(0);
                setMinutes(0);
                setTenMinutes(0);
            }
        }, 1000);

        return () => {
            clearInterval(secondInterval);
        };
    }, [seconds, totalTime]);

    return (
        <div className="timer">
            <span className="ten-minutes">{tenMinutes}</span>
            <span className="minutes">{minutes}</span>:<span className="ten-seconds">{tenSeconds}</span>
            <span className="seconds">{seconds}</span>
        </div>
    );
}

export default Timer;
