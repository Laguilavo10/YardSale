import { PropsWithChildren, createContext, useContext, useState } from 'react'

// type Categorys = 'All' | 'Electronics' | 'Furniture' | 'Shoes' | 'Others'
export type CategorysID = 0 | 1 | 2 | 3 | 4 | 5
// All === 0
// Clothes === 1
// Electronics === 2
// Furniture === 3
// Shoes === 4
// Others === 5

interface CategorysContext {
  category: CategorysID
  setCategory: React.Dispatch<React.SetStateAction<CategorysID>>
}
const DEFAULT_VALUE: CategorysContext = {
  category: 0,
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
