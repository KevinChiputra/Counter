import React, {useState} from 'react'


export const Counter = () => {

    const [value, setValue] = useState(0)
    const [information, setInformation] = useState(0)


    const decrease = () => {
        if(value <= 0){
            alert("can not")
        }else{
            setValue(preValue => preValue - 1)
        }  
    }

    const increase = () => {
        if(value >= 3){
            alert("can not")
        }else{
            setValue(preValue => preValue + 1)
        }  
    }

  return (
    <div>
        <div className='container'>
            <button onClick={decrease}>-</button>
            <h1>Counter</h1>
            <button onClick={increase}>+</button>
        </div>
        <h1>{value}</h1>
        {value <= 0 ? <h2>can't decrease</h2> : ""}
        {value >= 3 ? <h2>can't increase</h2> : ""}
    </div>
  )
}
