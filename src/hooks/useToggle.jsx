import { useState } from 'react'

export function useToggle(initialState) {
  const [isOpen, setOpen] = useState(initialState)
  const handleToggle = () => {
    setOpen((prev) => !prev)
  }
  return { isOpen, handleToggle, setOpen }
}
