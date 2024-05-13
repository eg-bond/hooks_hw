import { useCallback, useEffect, useState } from 'react'

type UseLsReturnType = [
  value: string | null,
  {
    setItem: (value: string) => void
    removeItem: () => void
  }
]

const DEFAULT_KEY = 'token'

export const useLocalStorage = (key: string = DEFAULT_KEY): UseLsReturnType => {
  const [token, setToken] = useState<string | null>(null)

  const setItem = useCallback(
    (value: string) => {
      localStorage.setItem(key, value)
      setToken(value)
    },
    [key]
  )

  const removeItem = useCallback(() => {
    localStorage.removeItem(key)
    setToken(null)
  }, [key])

  return [
    token,
    {
      setItem,
      removeItem,
    },
  ]
}
