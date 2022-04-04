import {useState} from 'react'

function RefandState() {

    const [count, setCount] = useState(0);

    const handleFunc = () => {
        const updatec = count + 1;
        setCount(updatec);
    }

    const resetCount = () => {
        setCount(0);
    }
  return (
    <div>
        <button onClick={handleFunc} >Click here..</button>
        <button onClick={resetCount}>Reset</button>
        <p>Clicked {count} times.</p>
    </div>
  )
}

export default RefandState