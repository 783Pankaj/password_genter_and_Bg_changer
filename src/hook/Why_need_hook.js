// useState:- it's change the variable / state value on UI.  

import React, { useEffect, useMemo, useState } from "react";
const Why_need_hook = () => {
    const [count, setCount] = useState(5)
    // let counter = 5
    const addValue = () => {

        count < 20 ? setCount(count + 1) : alert('you can not goi')
    }
   let val = useMemo(()=>{
     return addValue(count)
   },[])
    console.log(val)
    return (
        <div>
            <p>Header: {count}</p>
            <h1>chai aur react</h1>
            <h2>count Value: {count}</h2>
            <button onClick={addValue}>Add Value</button>
            <br />
            <button onClick={() => { count > 0 ? setCount(count - 1) : alert('you can not go') }}>remove Value</button>
            <p>footer: {count}</p>
            <p>val: {val}</p>
        </div>
        
        );
    
}
export default Why_need_hook;