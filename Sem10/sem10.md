## <center>GUIA DE LABORATORIO N° 10<center>
>Intitución                 |Universidad Nacional del Centro del Perú   |
>-------------------------  | ------------------------------            |
>**Programa de Estudios:**  | Ingeniería de Sistemas                    |
>**Asignatura:**            | Desarrollo de Aplicaciones Web            |
>**Docente:**               | Jaime Suasnábar Terrel                    |
>**Semestre:**              | IX                                        |
### I. OBJETIVO
Desarrollar aplicaciones dinámicas con React usando Hooks.

### II. FUNDAMENTO TEÓRICO
#### Hooks
Es una función de javascript que permite crear y acceder al estado y al ciclo de vida del componente en React. 
#### Lista de Hooks importantes
1. UseState
2. UseEffect
3. UseContext
4. UseReducer
5. UseRef
6. Use Navigation
7. Use Params
#### Gestión de Estados en React
La gestión de estados es el proceso de seguimiento y actualización del estado de una aplicación. El estado es la condición actual de una aplicación(la ubicación actual del usuario, los artículos en su carrito de compras o el estado de un juego).

Es decir: El estado de un componente es un Objeto que contiene los datos (variables) que necesitamos para representarla en la interfaz u otro contexto.

#### Mas información sobre estados
[Referencia Gestión de Estados](https://www.etatvasoft.com/blog/react-state-management/)

### III. PRÁCTICA DE HOOKS
#### 1. HOOK USESTATE
```js
const Ejem1UseState = () => {
	const [nombre, setNombre] = useState("");
	const [direccion, setDireccion] = useState("");
	const handleClick = () => {
		setNombre("Jaime")
		setDireccion("Junin 120")
	}
  return (
	<div>
		<p>Nombre: {nombre}</p>
		<p>Dirección: {direccion}</p>
		<button onClick={handleClick}>Cambiar Datos</button>
	</div>
  )
}
```
#### 2. HOOK USEEFFECT
```js
const Ejem1UseEffect = () => {
	const [titulo, setTitulo] = useState("Sin titulo");
	let nombre="Jaime"
	useEffect(() => {
		document.title=titulo
	}, [titulo]);
	const handleClick = () => {
		setTitulo(`Hola ${nombre}`)
	}
  return (
	<div>
		<p>{titulo}</p>
		<button onClick={handleClick}>Cambiar Titulo</button>
	</div>
  )
}
```
#### 3. HOOK USECONTEXT
Componente Provider
```js
export const MyContext = React.createContext()
const Padre = () => {
	let docente = {
		nombre: "Jaime",
		apellido: "Suasnabar"
	}
	return (
		<MyContext.Provider value={docente} >
			<Hijo />
		</MyContext.Provider>
	)
}
```
Componente Consumer
```js
import { useContext } from 'react'
import { MyContext } from './Padre'
const Hijo = () => {
	const dato = useContext(MyContext)
	return (
		<div>
			<p>{dato.nombre}</p>
			<p>{dato.apellido}</p>
		</div>
	)
}
```

#### 4. CUSTOM HOOK
Creando el Custom Hook
```js
const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};
```
Usando el Custom Hook
```js
import useFetch from "./useFetch";
const Padre3 = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>Title: {item.title}</p>;
        })}
    </>
  );
};
```
#### 5. HOOK USEREDUCER
```js
const Ejem1UseReduce = () => {
  const [text1, setText1] = useState("");
	const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleChange = ({target}) => {
    setText1(target.value)
  }
	const handleComplete = (todo) => {
	  dispatch({ type: "COMPLETE", id: todo.id });
    // console.log(todos);
	};
  const handleClick = () => {
    dispatch({ type: "ADD", payload: text1});
    console.log(todos);
  }  
  const handleClick2 = () => {
    console.log(todos);
  }  
	return (
	  <>
    <div className="div form-container">
      <h4>New Todo Form</h4>
      <input 
      className='form-input'
      name='text1'
      type="text"
      value={text1}
      onChange={handleChange}
      />
      <button onClick={handleClick}>Add Todo</button>
    </div>
    <div className='div form-container'>
      <h4>Todo List</h4>
      
      {todos.map((todo) => (
        <div key={todo.id}>
        <label>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => handleComplete(todo)}
          />
          {todo.title}
        </label>
        </div>
      ))}
      <input
            type="button"
            onClick={handleClick}
            value="Ver"
      />
    </div>
	  </>
	);
  }
```
### IV. EJERCICIOS DEL LABORATORIO
Los ejercicios a revisar deberán ser entregados con la ultima versión 18.2 de React, Vite y JSX. En otras versiones se califica con 0.
#### Ejercicio 10.1
Desarrollar una aplicación web que utilice usestate con tres componentes: 
1. Componente1 es un div de fondo de color azul tiene un botón centrado vertical y horizontalmente.
2. Componente2: es una instancia del mismo componente1, pero su color modificado a verde durante su instanciación.
3. Componente3: es un div de fondo de color celeste y tiene con su fotografia con fondo transparente.
>Implementar un código en el boton para cambiar el color de fondo aleatoriamente en los 3 componentes. 

#### Ejercicio 10.2
Desarrollar una aplicación web con hooks personalizados y useEffect para crear un widget (150px x 150px) con una imagen(5 imagenes) que cambia aleatoriamente cada 30 segundos.

#### Ejercicio 10.3
Desarrollar una aplicación web CRUD para gestionar los datos de un empleado(id, name, address, city) que permita agregar, editar y eliminar objetos utilizando useContext y useReducer. Además el objeto deberá guardar y recuperar del LocalStorage.

#### Ejercicio 10.4
En Ejercicio 10.4 agregar las funcionalidades de:
1. Agregar un botón para Mostrar los datos completos del empleado en un card.
2. Agregar un input text y button para filtrar datos de los empleados
3. Agregar una barra de paginación que permita mostrar 8 empleados por página. 


### V. RESULTADOS
Los resultados serán publicados en el portafolio electrónico del estudiante.