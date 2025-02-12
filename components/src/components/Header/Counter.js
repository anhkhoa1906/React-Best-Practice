import React, { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0)
    const onButtonClick = () =>{
        setCount(count + 1)
    }
    return(
        <div onClick={onButtonClick}
        className="button">You click {count} times</div>
    )
    };
    export default Counter;