import { useFetch } from '../hooks/useFetch'

function Task1() {
  const { data, isLoading, error, refetch } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  return (
    <div>
      <div>
        <h1>Task 1 (useFetch)</h1>
        <button
          onClick={() =>
            refetch({
              _limit: 3,
            })
          }>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data &&
        !isLoading &&
        data.map(item => <div key={item.id}>{item.title}</div>)}
    </div>
  )
}

export default Task1
