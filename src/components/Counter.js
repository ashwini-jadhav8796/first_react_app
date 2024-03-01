import { useState,useEffect} from 'react';

const Counter = () => {
    const[counter, setCounter] = useState(0);
    useEffect(() => {
        alert('You have changed the counter to'+ counter)
    },[counter]);

return (
    <>
    <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>Decrease</button>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>Increase</button>
    </>
    
);
}
export default Counter;