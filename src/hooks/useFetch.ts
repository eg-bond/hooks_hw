export const useFetch = (url: string) => {
  // data returned from fetch
  const data = 'data'
  // boolean to indicate if fetch is loading
  const isLoading = 'isLoading'
  // boolean to indicate if fetch has errored
  const error = 'error'
  // function to refetch data
  const refetch = () => {}

  return { data, isLoading, error, refetch }
}
