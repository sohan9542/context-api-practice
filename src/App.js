import React, { createContext } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import { useState } from 'react'
export const GlobalCategory = createContext()
export const App = () => {
  
   
    const [Count, setCount] = useState(0)
    return (
        
        <GlobalCategory.Provider value={[Count, setCount]}>
        <Header></Header>
        <Home></Home>
        </GlobalCategory.Provider>
    )
}

export default App;