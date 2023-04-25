import React from 'react'

export default function TableDashboard({ data }) {
  return (
    <>
      <table className='table-dashboard'>
        <thead>
          <tr className='table-dashboard-header'>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>ID</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.category.name}</td>
              <td>$ {item.price}</td>
              <td>{item.id}</td>
              <td className='edit-btn pointer'>Editar</td>
              <td className='delete-btn pointer'> Eliminar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
