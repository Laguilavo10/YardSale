import { PropsWithChildren, createContext, useContext, useState } from 'react'

// type Categorys =
export interface CategorysID {
  id: number
  title: string
}

interface CategorysContext {
  category: CategorysID
  setCategory: React.Dispatch<React.SetStateAction<CategorysID>>
}

const DEFAULT_VALUE: CategorysContext = {
  category: { id: 1, title: 'All' },
  setCategory: () => {}
}
const CategoryContext = createContext<CategorysContext>(DEFAULT_VALUE)

export function CategoryProvider({ children }: PropsWithChildren) {
  const [category, setCategory] = useState(DEFAULT_VALUE.category)
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategory = () => {
  const { category, setCategory } = useContext(CategoryContext)
  return { category, setCategory }
}
