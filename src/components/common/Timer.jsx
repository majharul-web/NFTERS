import React from 'react';

import Countdown from 'react-countdown';


// completed component
const Completionist = () => (
    <span className='pt-3 text-danger bold'>
        Deals closed
    </span>
);

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <span>
                <span className='count'>{hours}h</span>:
                <span className='count'>{minutes}m</span>:
                <span className='count'>{seconds}s</span>
            </span>
        );
    }
};

const Timer = () => {

    const expireDate = Date.now() + 100000000;
    return (
        <div className='flex aCenter'>

            <Countdown date={expireDate} renderer={renderer} />

        </div>
    );
};

export default Timer;