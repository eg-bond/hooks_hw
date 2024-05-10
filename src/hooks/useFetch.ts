import { useEffect, useState } from 'react'
export const useFetch = (url: string) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`)
        }
        const data = await response.json()
        setData(data)
        setIsLoading(false)
      } catch (error) {
        setError(true)
        setIsLoading(false)
        throw error
      }
    }

    fetchData()
  }, [])

  const refetch = () => {}

  return { data, error, isLoading, refetch }
}
