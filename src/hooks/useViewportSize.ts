import { useState, useCallback } from 'react'
import { useWindowEvent } from './useWindowEvent'

export const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResize = useCallback(() => {
    setViewportSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [setViewportSize])

  useWindowEvent('resize', handleResize)

  return viewportSize
}
