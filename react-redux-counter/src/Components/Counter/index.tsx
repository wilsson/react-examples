import * as React from 'react';

interface Props {
    count: number;
    handleIncrement: any;
    handleDecrement: any;
}
export const Counter = ({
    count,
    handleIncrement,
    handleDecrement
}) => (
    <div>
        <p>{count}</p>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
    </div>
)