import { useNavigate } from 'react-router-dom'

export const useRedirect = (endpoint) => {
  const navigate = useNavigate()
  return () => navigate(endpoint)
}
