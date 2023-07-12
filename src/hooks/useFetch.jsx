import { useState, useEffect } from 'react'

export const useFecth = (endpoint, dependencies = '') => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [dependencies])
  return [data, setData]
}
