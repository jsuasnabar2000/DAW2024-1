## <center>GUIA DE LABORATORIO N° 5<center>
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

### III. EJERCICIOS DEL LABORATORIO
#### Ejercicio 5.1
Diseñar una pagina web para manipular el DOM con un botón.
```html
<h3 class="titulo">Ejercicio 01: Manipular el HTML con un click</h3>
<p id="parrafo1">Texto1</p>
<button type="button" onclick="modificandoDom()" class="btn success">Hacer Click!</button>
```
```javascript
<script>
    function modificandoDom() {
        let parrafo1=document.getElementById('parrafo1');
        parrafo1.innerHTML='Cambiando el DOM' + Date();
    }
</script>
```
![imagen](./assets/cuadricula.png)

#### Ejercicio 5.2
Desarrollar una aplicación para manipular el DOM con addEventListener, mostrando la reactividad de Javascript mediante un input text y un parrafo. 
```html
<h3 class="titulo">Ejercicio 02: Manipular el HTML con un AddEventListener</h3>
<form action="">
    <label for="">Ingrese un texto:</label>
    <input type="text" name="" id="idinput">
    <p id="idparrafo">Texto2</p>
</form>
```
```js
<script>
    let txt=document.getElementById("idinput");
    txt.addEventListener("keyup", cambiandoParrafo);
    function cambiandoParrafo() {
        let parrafo1=document.getElementById("idparrafo");
        parrafo1.innerHTML=txt.value;
    }
</script>
```

#### Ejercicio 5.3
Desarrollar una aplicación para obtener y manipular datos del DOM, mostrando un formulario con 2 input text para el ingreso de numeros y mostrar el resultado de la suma. 
```html
<h3 class="titulo">Ejercicio 03: Manipular el HTML con un AddEventListener</h3>
<form action="">
    <label for="field1">X</label> <input id="num1" type="text" value="">
    <label for="field2">Y</label> <input id="num2" type="text" value="">
    <button type="button" onclick="calculateSum()" class="btn danger">Sumar</button>  
    <p id="sumando">Result:</p>
</form>
```
```js
<script>
function calculateSum() {
    let x,y,suma,text;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
        text = "Es necesarios introducir dos números válidos";  
    } else {  
        //si no ponemos parseFloat concatenaría x con y  
        suma=parseFloat(x)+parseFloat(y);  
        text= suma;  
    }  
    document.getElementById("sumando").innerHTML = "Result: "+text;  
}
</script>
```
#### Ejercicio 5.4
Desarrollar una aplicación que muestre una tabla con 10 datos de estudiantes id, apellidos, nombres, direccion y telefono. Crear un array con 10 objetos y manipular los datos del DOM para mostrar los datos del array. 

#### Ejercicio 5.5
Desarrollar una aplicación orientado a objetos que muestre una tabla con 10 datos de estudiantes id, apellidos, nombres, direccion y telefono. Crear un array con 10 objetos y manipular los datos del DOM para mostrar los datos del array. 

### IV. RESULTADOS
Los resultados serán publicados en el portafolio electrónico del estudiante.