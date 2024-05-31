import { useCallback, useEffect, useState } from 'react'

type QueryParamsT =
  | {
      [key: string]: string
    }
  | undefined

type DataT = {
  id: number
  title: string
  body: string
  userId: number
}

export const useFetch = (url: string, params?: QueryParamsT) => {
  const [data, setData] = useState<DataT[] | null>(null)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const refetch = useCallback(
    (params: QueryParamsT) => {
      setData(null)
      setError(false)
      makeRequest(params)
    },
    [url]
  )

  useEffect(() => {
    makeRequest(params)
  }, [url])

  async function makeRequest(params: QueryParamsT) {
    try {
      setIsLoading(true)
      const data = await fetchData(url, params)
      setData(data)
    } catch (err) {
      setError(true)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return { data, error, isLoading, refetch }
}

async function fetchData(url: string, params: QueryParamsT) {
  const queryParams = new URLSearchParams(params).toString()
  const response = await fetch(`${url}?${queryParams}`)

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`)
  }

  return response.json()
}
