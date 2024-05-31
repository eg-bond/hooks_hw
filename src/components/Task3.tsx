import { useHover } from '../hooks/useHover'

function Task3() {
  const { hovered, ref } = useHover<HTMLDivElement>()

  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  )
}

export default Task3
