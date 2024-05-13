import { useToggle } from '../hooks/useToggle'

function Task6() {
  // useToggle with initial values
  const [value1, toggle1] = useToggle(['blue', 'orange', 'cyan', 'teal'])
  // useToggle with initial values
  const [value2, toggle2] = useToggle()

  return (
    <>
      <div>
        <h2>useToggle with initial values</h2>
        <p>{value1.toString()}</p>
        <button onClick={() => toggle1()}>toggle value</button>
        <button onClick={() => toggle1('cyan')}>Set 'cyan'</button>
        <button onClick={() => toggle1('teal')}>Set 'teal'</button>
      </div>
      <div>
        <h2>useToggle without initial values</h2>
        <p>{value2.toString()}</p>
        <button onClick={() => toggle2()}>toggle value</button>
        <button onClick={() => toggle2(false)}>Set false</button>
        <button onClick={() => toggle2(true)}>Set true</button>
      </div>
    </>
  )
}

export default Task6
