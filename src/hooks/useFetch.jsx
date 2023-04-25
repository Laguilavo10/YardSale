/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

export const useFecth = (endpoint) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  return [data, setData]
}
