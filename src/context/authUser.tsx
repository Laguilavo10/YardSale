// import { createContext, useContext, useState } from 'react'import { createContext, useContext, useState } from 'react'

// const UserAuth = createContext<string>('false')

// export function AuthProvider({ children }) {
//   const [isAuth, setIsAuth] = useState(false)
//   return (
//     <UserAuth.Provider value={{ isAuth, setIsAuth }}>
//       {children}
//     </UserAuth.Provider>
//   )
// }

// export const useAuthUser = () => {
//   const { isAuth, setIsAuth } = useContext(UserAuth)
//   return { isAuth, setIsAuth }
// }
