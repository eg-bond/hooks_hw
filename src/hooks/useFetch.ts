import { useCallback, useEffect, useState } from 'react'

type ParamsT = {
  _limit?: number
}

type DataT = {
  id: number
  title: string
  body: string
  userId: number
}

const paramsDefault = {
  _limit: 20,
}

const fetchData = async (url: string) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`)
  }
  return response.json()
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<DataT[] | null>(null)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const refetch = useCallback(
    (params: ParamsT) => {
      setData(null)
      setError(false)
      makeRequest(params)
    },
    [url]
  )

  useEffect(() => {
    makeRequest()
  }, [url])

  async function makeRequest(params: ParamsT = paramsDefault) {
    try {
      const fetchedData = await fetchData(url)
      const filteredData = params._limit
        ? fetchedData.slice(0, params._limit)
        : fetchedData

      setData(filteredData)
    } catch (err) {
      setError(true)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return { data, error, isLoading, refetch }
}
