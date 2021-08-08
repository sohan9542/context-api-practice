import React, { useContext } from 'react'
import { GlobalCategory } from '../App'
// import { useState } from 'react'
const Header = () => {
   const [Count, setCount] = useContext(GlobalCategory)
    return (
        <div>
            <h1>This is header {Count}</h1>
            <button onClick={()=> setCount(Count + 1)}>Increase</button>
        </div>
    )
}

export default Header
