import { useState } from 'react'
export interface Toogle {
  isOpen: boolean
  handleToggle: () => void
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export function useToggle(initialState: boolean): Toogle {
  const [isOpen, setOpen] = useState(initialState)
  const handleToggle = () => {
    setOpen((prev) => !prev)
  }
  return { isOpen, handleToggle, setOpen }
}
