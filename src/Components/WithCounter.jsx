import React, { useState } from "react"

const WithCounter =(WrappedComponent) =>{
    return function WithCounter (props){
        const [count, setCount] = useState({
            name:"",
            age:""
        })
        const increment=()=>{
            setCount(count+1)
        }
        const decrement=()=>{
            setCount(count-1)
        }
        return(
            <WrappedComponent
            {...props}
            count={count}
            increment={increment}
            decrement={decrement} />
        )
    }
}

export default WithCounter;

