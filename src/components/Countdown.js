import React, {useState, useEffect} from 'react';
import moment from 'moment';

import {mapNumber, SVGCircle} from './SVGCircle'

const Countdown = (props) => {
    const [days, setDays] = useState(undefined);
    const [hours, setHours] = useState(undefined);
    const [minutes, setMinutes] = useState(undefined);
    const [seconds, setSeconds] = useState(undefined);

    useEffect(() => {
        let interval = setInterval(() => {
            const { timeTillDate, timeFormat } = props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
        return null;
    }

    return (
        <div>
            <h1>Countdown-Component</h1>
            <div className='countdown-wrapper'>
                {days && (
                    <div className='countdown-item'>
                        <SVGCircle radius={daysRadius}/>
                        {days}
                        <span>days</span>
                    </div>
                )}
                {hours && (
                    <div className="countdown-item">
                        <SVGCircle radius={hoursRadius}/>
                        {hours}
                        <span>hours</span>
                    </div>
                )}
                {minutes && (
                    <div className="countdown-item">
                        <SVGCircle radius={minutesRadius}/>
                        {minutes}
                        <span>minutes</span>
                    </div>
                )}
                {seconds && (
                    <div className="countdown-item">
                        <SVGCircle radius={secondsRadius}/>
                        {seconds}
                        <span>seconds</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Countdown;
