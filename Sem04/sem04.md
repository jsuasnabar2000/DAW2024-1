## <center>GUIA DE LABORATORIO N° 4<center>
>Intitución                 |Universidad Nacional del Centro del Perú   |
>-------------------------  | ------------------------------            |
>**Programa de Estudios:**  | Ingeniería de Sistemas                    |
>**Asignatura:**            | Desarrollo de Aplicaciones Web            |
>**Docente:**               | Jaime Suasnábar Terrel                    |
>**Semestre:**              | IX                                        |
### I. OBJETIVO
Desarrollar aplicaciones dinámicas con Javascript.

### II. FUNDAMENTO TEÓRICO
#### JavaScript
JavaScript es un lenguaje de programación script Técnicamente, JavaScript es un lenguaje script dinámico, multi-paradigma, basado en prototipos, dinámico, soporta estilos de programación funcional, orientada a objetos e imperativa. 
#### Evolución de Javascript
El estándar de JavaScript es ECMAScript. Desde el 2012, todos los navegadores modernos soportan completamente ECMAScript 5.1. Los navegadores más antiguos soportan por lo menos ECMAScript 3. El 17 de Julio de 2015, ECMA International publicó la sexta versión de ECMAScript, la cual es oficialmente llamada ECMAScript 2015, y fue inicialmente nombrada como ECMAScript 6 o ES6. Desde entonces, los estándares ECMAScript están en ciclos de lanzamiento anuales. Esta documentación se refiere a la última versión del borrador, que actualmente es ECMAScript 2019.
#### Motores de Javascript
Cada navegador dispone de una implementación con nombre propio:
1. SpiderMonkey Mozilla
2. V8 de Google 
3. SquirrelFish Safari
4. Carakan Opera

#### Guía de referencia JavaScript
[Referencia JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference)

### III. PRÁCTICA DE JAVASCRIPT
#### 1. VARIABLES CON LET
```js
    let producto= "Escritorio"
    //producto = "Estante"
    //producto = 300
    console.log(producto);

    let precio
    precio = 1000
    console.log(precio)
```
#### 2. CONSTANTES
```js
    const producto1 = "Escritorio"
    producto1 = "Estante"
    
    console.log(producto1);

    const precio1
    precio = 1000
    console.log(precio1)
```
#### 3. TIPOS DE DATOS
```js
//# Undefined
let producto 
console.log(producto)
console.log(typeof producto)

//# Strings o Cadenas de Texto
let empleado = "Jaime"
console.log(empleado)
console.log(typeof empleado)

// const producto = 'Monitor 19 Pulgadas'
console.log(producto)
console.log(typeof producto)
```
#### 4. Numbers
```js
const numero = 10.35
const numero2 = 400
const numero3 = -300
const numero4 = "20"

console.log(typeof numero)
console.log(typeof numero2)
console.log(typeof numero3)
```
### IV. EJERCICIOS DEL LABORATORIO
Utilizando Spread Operator
#### Ejercicio 4.1
Descomponer el siguiente array:
```js
    const alfabeto = ["a","b","c","d","e"];

    //##Si lo sacamos expandido en consola:

    console.log(...alfabeto);//  a b c d e f
```
#### Ejercicio 4.2
Copiar un array
```js
    const array1 = ["A","B","C"]
    const array2 = array1;
    //const array2 = [...array1];
    console.log(array1);
    console.log(array2);
```
#### Ejercicio 4.3
Unir 2 arrays
```js
    const array1 = ["A","B","C"]
    const array2 = ["D","E","F"]
    
    const array3 = [...array1, ...array2];
    console.log(array3);   
``` 
#### Ejercicio 4.4
Expandir un String en sus caracteres individuales
```js
    //##Si desplegamos en consola expandida dentro de un array
    console.log([..."Texto"]);
    77##["T", "e", "x", "t", "o"]
```

### IV. RESULTADOS
Los resultados serán publicados en el portafolio electrónico del estudiante.