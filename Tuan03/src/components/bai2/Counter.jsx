import React, {useState} from "react";


function Counter() {
    const [count, setCount] = useState(0);
    const xuLyTang = () =>{
        setCount(count + 1);
    }
    const xuLyGiam = () =>{
        if(count > 0)
            setCount(count -1);
    }

    const datLai = ()=>{
        setCount(0);
    }
  return (
    <div>
        <div style={{color: count >10 ? 'red' : 'black'}}>
            {count}
        </div>
        <div>
            <button onClick={xuLyGiam}>-</button>
            <button onClick={datLai}>Reset</button>
            <button onClick={xuLyTang}>+</button>
        </div>
    </div>
  )
}

export default Counter