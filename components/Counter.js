import { useState } from 'react';
import './Counter.css';

function Counter (props) {
    const [ count, setCount] = useState(0);
    return (
        <div className='counter'>
            <h2>
                {props.counterName}
            </h2>
            <h3>
                Counter; {count}
            </h3>
            <button onClick={()=> setCount(count - 1)}>
                -1
            </button>
            <button onClick={()=> setCount(0)}>
                0
            </button>
            <button onClick={()=> setCount(count + 1)}>
                +1
            </button>
          
        </div>
    );
}

export default Counter;