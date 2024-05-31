import { useState, useCallback } from 'react'
import { useWindowEvent } from './useWindowEvent'

type ScrollT = {
  x: number
  y: number
}

export const useWindowScroll = (): [
  ScrollT,
  (position: Partial<ScrollT>) => void
] => {
  const [scroll, setScroll] = useState<ScrollT>({
    x: window.scrollX,
    y: window.scrollY,
  })

  const handleScroll = useCallback(() => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    })
  }, [])

  useWindowEvent('scroll', handleScroll)

  const scrollTo = useCallback((position: Partial<ScrollT>) => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        left: position.x,
        top: position.y,
        behavior: 'smooth',
      })
    }
  }, [])

  return [scroll, scrollTo]
}
