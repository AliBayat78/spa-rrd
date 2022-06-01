import React, { useState } from 'react'

export const countContext = React.createContext()
const Counter = ({ children }) => {
  const [count, setCount] = useState(0)

  const handlerCount = () => {
    setCount(count + 1)
  }
  return (
    <>
      <countContext.Provider value={count}>{children}</countContext.Provider>
      <button onClick={() => handlerCount()}>click</button>
    </>
  )
}

export default Counter
