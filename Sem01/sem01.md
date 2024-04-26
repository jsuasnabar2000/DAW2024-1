## GUIA DE LABORATORIO N° 1
>Intitución                 |Universidad Nacional del Centro del Perú   |
>-------------------------  | ------------------------------            |
>**Programa de Estudios:**  | Ingeniería de Sistemas                    |
>**Asignatura:**            | Desarrollo de Aplicaciones Web            |
>**Docente:**               | Jaime Suasnábar Terrel                    |
>**Semestre:**              | IX                                        |

### I. OBJETIVO
Usar apropiadamente el Editor Visual Studio Code mediante el plugin Emmet y atajos de teclado de VSC.

### II. FUNDAMENTO TEÓRICO
#### Plugin Emmet
Es una herramienta que encuentras de manera integrada en tu editor de código, para agilizar tu proceso de desarrollo al escribir código HTML y CSS, más rápido y ahorrándote errores tipográficos.

#### Etiquetas hermanos e hijos
Podemos especificar etiquetas hermanos e hijos usando los caracteres + y >.
```html
    section+section —> 
    <section></section>
    <section></section>
    ul>li —> 
    <ul>
        <li></li>
    </ul>
```
#### Multiplicación de etiquetas
Podemos multiplicar etiquetas con *.
```html
    p*3 —> 
    <p></p>
    <p></p>
    <p></p>
    ul>li*3 —> 
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```
#### Agrupar etiquetas
Podemos agrupar para crear generadores complejos con {} o ()
`
nav#menu>ul.nav-menu>(li.nav-menu-items>a)*3
`
#### Definir contenido
Usando corchetes puedes agregar contenido

`h1{Hola}`
#### Clases
Para definir una clase junto con la etiqueta, simplemente agregar así:
```html
    div.wrapper —> 
    <div class="wrapper"></div>
    h1.header.center —> 
    <h1 class="header center"></h1>
```
#### ID’s
Los Id funcionan de manera muy similar:
```html
    div#hero —> 
    <div id="hero"></div>
```
#### Atributos
También podemos especificar atributos para las etiquetas:
```html
img[src="cat.jpg"][alt="foto de gato"] —> 
<img src="cat.jpg" alt="foto de gato" />
```
#### Enumerar iteración $
Podemos numerar elementos en secuencia usando un signo de dólar ($).
```html
    ul>li{Item $}*3 —> 
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
```

Incluso puede personalizar la secuencia de numeración rellenando con ceros, comenzando con un número específico e incluso en la dirección inversa.



### III. EJERCICIOS DE LABORATORIO
Los ejerciicos están propuestos en la práctica calificada.

### IV. RESULTADOS
Los resultados serán publicados en el portafolio electrónico del estudiante.