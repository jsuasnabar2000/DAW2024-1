import React from 'react'
interface Props{
	nom: JSX.Element, 
	ape: string
}
const Ejem1Props = ({nom, ape}:Props) => {
	return (
		<div>
			<p>Nombre: {nom}</p>
			<p>Apellido: {ape}</p>
		</div>
	)
}

export default Ejem1Props