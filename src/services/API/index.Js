const API = process.env.NEXT_PUBLIC_API_URL

const endPoints = {
  products: {
    getProduct: (id) => `${API}/products/${id}`,
    getProducts: (limit, offset) => `${API}/products?limit=${limit}&offset=${offset}`,
    postProducts: `${API}/products/`,
    putProducts: (id) => `${API}/products/${id}`,
    deleteProducts: (id) => `${API}/products/${id}`
  },
  users: {
    getUsers: `${API}/users`,
    postUsers: `${API}/users`
  },
  auth: {
    login: `${API}/auth/login`,
    profile: `${API}/auth/profile`
  },
  categories: {
    getCategories: `${API}/categories`,
    postCategories: `${API}/categories`,
    getCategoriesProduct: (id) => `${API}/categories/${id}/products`,
    putCategories: (id) => `${API}/categories/${id}`
  },
  files: {
    postFiles: `${API}/files/upload`,
    getFiles: (fileName) => `${API}/${fileName}`
  }
}

export default endPoints
