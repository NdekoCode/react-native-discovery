import { useState } from "react";

export function useCounter(initialValue=0,step=1){
    const  [count,setCount] = useState(initialValue)
    const increment = ()=>setCount(c=>c+step);
    const decrement = ()=>setCount(c=>c>1? c-step:0);
    
    return [count,increment,decrement];
}