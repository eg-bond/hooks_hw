import { useLocalStorage } from '../hooks/useLocalStorage'

function Task2() {
  const [token, { setItem, removeItem }] = useLocalStorage('token')

  return (
    <div>
      <h1>Task 2 (useLocalStorage)</h1>
      <p>Твой токен: {token ? token : 'Не задан'}</p>
      <div>
        <button onClick={() => setItem('new-token')}>Задать токен</button>
        <button onClick={() => removeItem()}>Удалить токен</button>
      </div>
    </div>
  )
}

export default Task2
