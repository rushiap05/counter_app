import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [num, setNum] = useState(1);
    const [takeNum, setTakeNum] = useState(0);


    return (
        <div>
            <div>
                <input onChange={(event) => {
                    console.log(event.target.value)
                    setTakeNum(event.target.value)
                }} type="number" />
                <button onClick={() => {
                    setNum(takeNum)
                }}>Click</button>
            </div>
            <div className='counter_div'>
                <button className='decrease_button'
                    onClick={() => {
                        if (num > 0)
                            setNum(num - 1)
                    }}
                >-</button>
                <div className='counter_show'>{num}</div>
                <button className='increase_button'
                    onClick={() => {
                        if (num < 1000)
                            setNum(num + 1)
                    }}
                >+</button>
            </div>
        </div>
    )
}

export default Counter