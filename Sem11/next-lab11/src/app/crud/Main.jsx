import React from 'react'
import './main.css'

const Main = () => {
  return (
	<main className='container-main'>
    <div className='div-container'>
    <h4 className='main-title'>List CRUD</h4>
    <div className='set-input'>
      <label htmlFor="dato1">Dato1:</label>
      <input type="text" name='dato1' id='dato1' className='form-input1' placeholder='dato1'/>
    </div>
    <div className='set-input'>
      <label htmlFor="dato2">Dato2:</label>
      <input type="text" name='dato2' id='dato2' className='form-input1' placeholder='dato2'/>
    </div>
    <button className='main-button'>Agregar</button>
    </div>
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>dato1</th>
            <th>dato2</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dato1</td>
            <td>dato2</td>
            <td>dato3</td>
            <td><a href='#'>Editar</a></td>
            <td><a href='#'>Eliminar</a></td>
          </tr>
          <tr>
          <td>dato1</td>
            <td>dato2</td>
            <td>dato3</td>
            <td><a href='#'>Editar</a></td>
            <td><a href='#'>Eliminar</a></td>
          </tr>
          <tr>
          <td>dato1</td>
            <td>dato2</td>
            <td>dato3</td>
            <td><a href='#'>Editar</a></td>
            <td><a href='#'>Eliminar</a></td>
          </tr>
          <tr>
          <td>dato1</td>
            <td>dato2</td>
            <td>dato3</td>
            <td><a href='#'>Editar</a></td>
            <td><a href='#'>Eliminar</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </main>
  )
}

export default Main