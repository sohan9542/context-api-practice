import React, { useContext } from 'react'
import { GlobalCategory } from '../App'
import Category from './context/Category'

function Home() {
    const count = useContext(GlobalCategory)
    return (
        <div>
            <h1>This is home {count}</h1>
            <Category></Category>
        </div>
    )
}

export default Home
