import React, {useState, useRef, createRef} from "react";

const UseRefandCreateRef = () => {
    const [counter, setCounter] = useState(1);

    const useRefD = useRef();
    const createRefD = createRef();

    if(!useRefD.current) {
        console.log('UseRef called.');
        useRefD.current = counter;
    }

    if (!createRefD.current) {
        console.log('Current Ref Called.');
        createRefD.current = counter;
    }

    const handleCounter = () => {
        setCounter(counter => counter + 1);
    }

    return(
        <div>
            Counter: {counter}<hr />
            UseRef: {useRefD.current}<hr />
            CreateRef: {createRefD.current}<hr />
            <button onClick={handleCounter}>Click me</button>
        </div>
    )
}

export default UseRefandCreateRef;