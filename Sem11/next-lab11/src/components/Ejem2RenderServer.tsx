'use server'
import React from 'react'
const url='https://jsonplaceholder.typicode.com/users'


const getUsers=async () => {
		const data = await fetch(url)
		.then(res => res.json())
		return data
}

const Ejem2RenderServer = async () => {
	const users = await getUsers()
	console.log(users);
	
	interface usuarios{
		id: number
		name: string
		username: string
		email: string
	}
  return (
	<div>
		<h3>Lista de Empleados</h3>
		<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
			<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
				<tr>
					<th scope="col" className="px-6 py-3">Id</th>
					<th scope="col" className="px-6 py-3">Nombre</th>
					<th scope="col" className="px-6 py-3">Dirección</th>
					<th scope="col" className="px-6 py-3">Ciudad</th>
				</tr>
			</thead>
			<tbody>
				{users.map(({id, name, username, email}:usuarios)=>
				<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<td className="px-6 py-4">{id}</td>
					<td className="px-6 py-4">{name}</td>
					<td className="px-6 py-4">{username}</td>
					<td className="px-6 py-4">{email}</td>
				</tr>
				)}
			</tbody>
		</table>
	</div>
  )
}

export default Ejem2RenderServer