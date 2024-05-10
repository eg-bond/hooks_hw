import { useEffect, useState } from 'react'

type ParamsT = {
  _limit: number
}

type DataT = {
  id: number
  title: string
  body: string
  userId: number
}

const paramsDefault = {
  _limit: 100,
}
export const useFetch = (url: string) => {
  const [data, setData] = useState<DataT[] | null>(null)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async (params: ParamsT = paramsDefault) => {
    try {
      setIsLoading(true)
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`)
      }
      const data = await response.json()
      console.log(data)

      const filteredData = data.filter(
        (_: DataT, index: number) => index < params._limit
      )
      setData(filteredData)
      setIsLoading(false)
    } catch (error) {
      setError(true)
      setIsLoading(false)
      throw error
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = (params: ParamsT) => {
    setData(null)
    setError(false)
    fetchData(params)
  }

  return { data, error, isLoading, refetch }
}
