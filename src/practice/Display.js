import { useContext } from 'react'
import { countContext } from './Counter'

const Display = () => {
  const count = useContext(countContext)
  return <p style={{ width: '100px', margin: '10px' }}>{count}</p>
}

export default Display
