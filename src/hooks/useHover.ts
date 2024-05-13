import { useState, useEffect, useRef } from 'react'

export const useHover = <T extends HTMLElement>() => {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<T>(null)

  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter)
      node.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter)
        node.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [ref.current])

  return { hovered, ref }
}
