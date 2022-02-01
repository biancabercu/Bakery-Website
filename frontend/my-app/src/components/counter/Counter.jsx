import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(1)

    useEffect(()=>{
        if(count === 0){
            alert("The counter got to 0");
        }

    }, [count])// Only re-run the effect if count changes

    const changeCount = (value) => () => {
        setCount(count + value);
    }
    
    function ElementsList() {
        const elements = [];
      
        for (let i = 0; i < count; i++) {
          elements.push(
                <img src="https://ak.picdn.net/shutterstock/videos/1006633279/thumb/1.jpg" width="100" height="50" alt="cat"></img>
                );
        }
      
        return elements;
    }


    return(
        <div>
           
            <div id="cats">
                <ElementsList />
            </div>
            <button id="button1" onClick={changeCount(1)}>Increment</button>
            <button id="button2" onClick={changeCount(-1)}>Decrement</button>
            <button id="button3" onClick={changeCount((-1) * count)}>Reset</button>
        </div>
    )
}

export default Counter;