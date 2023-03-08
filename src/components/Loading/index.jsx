import React from 'react'

export function Loading({ loading, children }) {
  if (loading) return <h1>Cargando....</h1>

  return <>{children}</>
}
