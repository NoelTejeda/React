React: es una biblioteca de JS. 

componente: parte de la interfaz de usuario que es independiente (porque cada componente vá a tener cierto estado y una funcionalidad especifica e independiente de otros componentes) y reusable ( se define una vez y se puede usar)

**** tipos de componentes **** 
Existen muchas pero la más usadas son:

+ de clase
+ funcionales

componente funcional:
función de javascript E/S6 que retorna un elemento de React (JSX)

ejemplo:
function Saludo(props){
    return <h1> !Hola, {props.nombre}!</h1>
}

----------------------------------------------------
----------------------------------------------------
se recomienda guardar todos los componentes en una carpeta, llamada componentes y dentro de ella guardar cada componente con su primera letra en mayúscula. HolaMundo.jsx

----------------------------------------------------
----------------------------------------------------
definicion de JSX:

https://cinthialandia.com/es/blog/jsx/

Es una sintaxis que se utiliza como extensión de javascript la cual es utilizada dentro de componentes react para describir cómo se debería de ver la UI.

Es importante al utilizar JSX es importar react en cada archivo que utilice JSX, ya que cuando el código es compilado, este es transformado a elementos con extensión


----------------------------------------------------
----------------------------------------------------
Características de los componentes funcionales:

1) debe retornar un elemento de React (jsx)
una mezcla de html.

2) debe comenzar con una letra en mayúscula:
function Saludo
y se recomienda que la función deba tener el mismo nombre qeu el del archivo. ejemplo:

archivo: Testimonio.jsx
funcion: export function Testimonio(props)


3) puede recibir valores si es necesario
en react se llaman props (propiedades)

----------------------------------------------------
----------------------------------------------------

dentro de la función es obligatorio el return y dentro par de parentesis ( codigo html) ya que es el que nos va a retornar toda la función del componente.


----------------------------------------------------
----------------------------------------------------


componente de Clase:

clase de ES6 (js moderno) que retorna un elemento JSX

ejemplo: el mismo componente anterior pero con clase.

class Saludo extends React.Component {
    render() {
        return <h1> Hola!, {this.props.nombre}! </h1>
    }
}

* hay que extender React.Component que dá la funcionalidad 
* render() es el método que se define para renderizar(mostrar)
* y entre llaves se retorna el elemento jsx

----------------------------------------------------
----------------------------------------------------
Características de los componentes de Clase:

1) debe extender React.Component 
2) debe tener un método render() para retornar elementos jsx
3) puede recibir valores si es necesario.

----------------------------------------------------
----------------------------------------------------

Estado:
Representación en javascript del conjunto de propiedades de un componente y sus valores actuales.

----------------------------------------------------
----------------------------------------------------
HOOKS:

ANTERIORMENTE, se usaban componentes de clase para poder trabajar con "estados" de los componentes y "NO" se podian hacer con componentes funcionales(anteriores a version 16.8).

Luego llegaron los Hooks
que nos permiten agregarles estados a los componentes funcionales.

GRACIAS a los HOOKS podemos asignar y actualizar el estado de un componente funcional en React.

tipos de hook:

useState: permite agregar un estado a un componente funcional

en el componente principal de la aplicación (App.jsx) se aplica el hook,
pero también se podria agregar otro componente que sea el encargado de la
lógica.

se debe importar de la siguiente manera:
import React, { useState } from "react";

y dentro del componente funcional declaramos una constante:


esta constante vá a ser un arreglo, con 2 elementos importantes:

1) el valor que queremos usar como el estado y vamos a actulizar

2) una función que nos vá a permitir actulizarlo, es una convención
  utilizar la palabra set seguida del nombre del valor(estado) ejemplo:

const[numClics, setNumClics] = useState(0)

y se le asigna el valor retornado por useState y entre parentesis pasamos
el valor inicial de nuestro estado. cero va a ser el valor inicial de 
numClics y luego con setNumClics vamos a poder actulizar el numClics.

const manejarClic=()=>{
    setNumClics(numClics + 1);
  }

y luego para mostrarlo en el contador, lo pasamos como props.

   <Contador
       numClics={numClics}
    />

otra explicación del hook useState:
https://jonmircha.com/react

----------------------------------------------------
----------------------------------------------------

Event Listener:

función en js que es ejecutada cuando ocurre un evento especifico, también se le puede llamar "Event Handler"


----------------------------------------------------
----------------------------------------------------
NodeJs:

Node.js, es un entorno en tiempo de ejecución multiplataforma para la capa del servidor (en el lado del servidor) basado en JavaScript.

es un entorno controlado por eventos diseñado para crear aplicaciones escalables, permitiéndote establecer y gestionar múltiples conexiones al mismo tiempo. Gracias a esta característica, no tienes que preocuparte con el bloqueo de procesos, pues no hay bloqueos.

Características principales de Node.js:

Resumiendo, Node.js se ha hecho popular en los últimos años gracias a las siguientes características:

    Velocidad. Node.js está construido sobre el motor de JavaScript V8 de Google Chrome, por eso su biblioteca es muy rápida en la ejecución de código.
    Sin búfer. Las aplicaciones de Node.js generan los datos en trozos (chunks), nunca los almacenan en búfer.
    Asíncrono y controlado por eventos.  Como hemos dicho anteriormente, las APIs de la biblioteca de Node.js son asíncronas, sin bloqueo. Un servidor basado en Node.js no espera que una API devuelva datos. El servidor pasa a la siguiente API después de llamarla, y un mecanismo de notificación de eventos ayuda al servidor a obtener una respuesta de la llamada a la API anterior.
    Un subproceso escalable. Node.js utiliza un modelo de un solo subproceso con bucle de eventos. Gracias al mecanismo de eventos, el servidor responde sin bloqueos, como hemos dicho. Esto hace que el servidor sea altamente escalable comparando con los servidores tradicionales como el Servidor HTTP de Apache.

----------------------------------------------------
----------------------------------------------------

Que es un elemento:
definen lo que se ve en la pantalla, que pueden ser div, h1, img, 

Un componente está hecho de elementos

los componentes se escriben con la primera letra en mayúscula. (Boton)

<div class="fila">
    <Boton manejarClic={agregarInput}>1</Boton>



 *****Asignar atributos a los elementos en JSX:   ******
 algunos se escriben de forma distinta si lo comparamos con HTML


class en HTML:
<h1 class="titulo-azul"> </h1>
class en JSX:
<h1 className="titulo-azul"> </h1>
-----

for en HTML:
<label for="css">CSS</label>
class en JSX:
<label htmlFor="css">CSS</label>


 *****Asignar stilos (USO DE CSS) a los elementos en JSX:   ******
 

 en css:
 background-image
 en JSX:
 backgroundImage

 en css:
 background-color
 en JSX:
 backgroundColor

 en css:
 font-family
 en JSX:
 fontFamily

 NORMALMENTE SE SUELE GUARDAR LOS ESTILOS EN UN ARCHIVO CSS, pero estas opciones son si se quiere hacer de manera más dinámica.

 también se pueden guardar en forma de objetos con una constante, teniendo en cuanta la forma de escritura en camelcase (estiloDiv) los estilos ejemplo:

 const estiloDiv={
    color:'yellow',
    backgroundColor:'black'
 }

 y para llamarlo:

<div style={estiloDiv}> Hola!, Mundo </div> 

se coloca entre llaves, porque esto nos permite indicar que lo que está dentro es código js

OTRA ALTERNATIVA ES:    

<div style={{color:'yellow'}}> Hola Mundo!! </div>

cuando tenemos pocas propiedades se puede implementar, hay que tomar en cuenta las dos llaves.

las llaves externas indican código js
las llaves internas son la creación del objeto js

----------------------------------------------
----------------------------------------------


******  ESTRUCTURA DE UN COMPONENTE *********

1.- Después de establecer al estructura es necesario saber como renderizar componentes, cómo mostrarlos en la aplicación web.

<div id="root"></div>

const elemento = <h1> Hola! </h1>;

ReactDom.render(                        //dos elementos (Hola!)
    elemento,
    document.getElementById('root')
)

// es necesario la importación para el uso del método render.
import ReactDOM from 'react-dom';

----------------------------------------------
----------------------------------------------

para hacer uso de variables de javascript se deben poner entre llaves, ejemplo:

let nombre="gino";

<p>Su nombre es: {nombre.toUpperCase()} </p>
//esta es la manera de llamar metodos como el toUpperCase()

----------------------------------------------
----------------------------------------------

PASOS PARA CREAR UN PROYECTO:

1.- desde la carpeta y en la terminal:
npx create-react-app nombreArchivo ó
si estoy dentro de la carpeta ya creada solo le agrego un punto (.) ejemplo:
npx create-react-app . 


2.-
 /* borramos los archivos que no se están usando:
- setupTest
- reportWebVital
- app.test.js
- logo.svg
de index.js:
  import reportWebVitals from './reportWebVitals';
  reportWebVitals(); */



3.- una vez realizado el primer componente e irlo visualizando en el buscador, es necesario que se renderize ese componente. y eso lo logramos en el archivo app.js dentro del <div className="App"> <Testimonio> </div>

No solo basta con colocarlo dentro del div en app.js, hay que importarlo, porque de lo contrario indicará que no está definido, y app.js no sabrá que existe:
        import Testimonio from './componentes/Testimonio.js;  

pero si lo importamos es necesario exportalo en el archivo origen (Testimonio.js) para que otro lo reciba (importar) y colocar la siguiente linea al final.:
export default Testimonio;

si tenemos varios componentes dentro de un archivo, hay que tomar en cuenta que al exportar sólo acepta un default. ejmp:
export default func....

----------------------------------------------
----------------------------------------------

*** Diferencia entre las exportaciones nombradas y por defecto ****

las que son por "defecto" son las que se exportan del componente (ejemplo Testimonio.jsx) al final (export default Testimonio;) e importan en  el archivo principal (Apps.js) de la siguiente manera: 

function App() {
  return (
    <div className="App">
      <Testimonio />
    </div>
  );
}

y las *** exportaciones "Nombradas" *** :

No se escribe la exportación al final del componente como en las por defecto. sino que se hacen así:

* se coloca la palabra export en la funcion (componente Testimonio.jsx a exportar):
    export function Testimonio() {

* y en Apps.js se importaria de la siguiente manera: 
import {Testimonio} from './componentes/Testimonio'
entre llaves.

con la exportación nombrada podemos tener varios elementos exportados; así que hay que ser explicitos colocando entre llaves, para decirle a react cuál queremos importar.

PERO si lo hacemos por defecto sólo podemos exportar 1 de ese archivo.

----------------------------------------------
----------------------------------------------

Props:
son argumentos que puede recibir un componente de React; funciona similar a los argumentos que se pasan a una función cuando se llaman en js

sólo pueden ser enviados de un "padre a hijo"


***** EL USO DE LOS PROPS *****
2:21:49 - Aprende React Desde Cero freecodecamp

la idea de los props es la reutilización; y estos se deben declarar en la función ejemplo:

function Testimonio(props) {

}

para poder usar el props en la estructura del componente, para así personalizar, como si fueran los parámetros y argumentos.

ahora dentro de la estructura vemos cuales son los que se van a repetir y lo reemplazamos con {props.algo} en todos las partes reemplazables.

---- Pasar props a un componente ------

en el componente que renderiza ó que lo crea es app; ahora se colocan los nombres que he puesto en el componente Testimonio (nombre,cargo,pais,etc.) para pasarle los argumentos. ver código.




--OTRA MANERA DE NO USAR PROPS ES USAR DESESTRUCTURING:--

EJEMPLO DE PROPS:

function Boton (props) {
  return(
    <button>
    {props.texto}
    </button>
  )
}


EJEMPLO USANDO DESESTRUCTURING.

function Boton ({texto}) {
  return(
    <button>
    {texto}
    </button>
  )
}


en vez de colocar props se coloca dentro de las llaves las 
propiedades que estamos pasando.



***** Maneras de agregar imagénes *******

1) require
2) import

CON REQUIRE:

---- Personalizar (agregar) la imagen ------

para poder hacer uso de las imágenes de manera dinámica se deben hacer uso de las plantillas literales (`alt + 96 `)

 src={require(`../imagenes/${props.imagen}.png`)}

recordando que se debe hacer uso del simbolo $ y llaves en las platillas literales, 




CON IMPORT:

1.- tener la imagen en la carpeta dentro del proyecto.
2.- import nombrequequeramos from './img/logo.png';
3.- y para usarla: solo se coloca el nombre en el src. ejemplo:
    <img
      className='imagenes'
      src={nombrequequeramos}
      alt='logo'
    />

----------------------------------------------
----------------------------------------------


"SE RECOMIENDA" que en las etiquetas que no tienen cierre (self closing tag), se les deje un espacio al final ejemplo:

<img 
        className="imagen-testimonio"
        // src={require(`../imagenes/Emma Bostian.png`)}
        src={require(`../imagenes/${props.imagen}.png`)}
        alt="Emma Bostian" (el espacio aqui)/>


--------------------

npx create-react-app NO es la única forma de crear un proyecto de React, pero es la más recomendada porque es más intuitiva y crea la estructura inicial, e instala los módulos que se van a necesitar.




-----------------------------------------------------
/*
uso de 
<React.Fragment> .... </React.Fragment>
otra manera de usarlo es:
<>...</>    
 
esto lo que hace es retornar o envolver multiples elementos, sin necesidad de crear uno nuevo dentro del Dom.

ejemplo: si uso un div. y luego debajo uso otro elemento <p></p>
esto me representaria un error al compilar: SyntaxError
y hay dos maneras de solucionarlo:

1.- envolviendo todos los elementos dentro de un div.
  esta solución no es recomendable ya que generariamos un div extra cada vez que queramos retornar algún elemento.

2.- envolviendo todos los elementos dentro de un fragment.
  esta es la opción que sugiere react. ya que no afectaria en la estructura jerarquica del Dom.

*/ 

----------------------------------------------------------------
------------------ Atajos React --------------------------------

En las extensiones estan todos los atajos.


rfc = react function component
      Crea una función básica de un componente en react


----------------------------------------------------------------
------------------ cambiar el fonodo de React ------------------

una manera de hacerla directamente desde el html es de la siguiente manera:

<body style="background-color: black">


</body>

----------------------------------------------------------------
------------------ $`spread operator` (...) --------------------
https://www.geeksforgeeks.org/javascript-spread-operator/

el parametro spread enviamos a partir de un arreglo.

Nos permite el privilegio de obtener una lista de parámetros de una matriz. La sintaxis del operador Spread es la misma que la del parámetro Rest pero funciona completamente al revés.

* Los spread operator se usan para ["CONCATENAR"] arrays ejemplo:

let arr = [1,2,3];
let arr2 = [4,5];
  
arr = [...arr,...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]

En el caso de la concatenación no es recomendada, ya que funcionará más lentamente en comparación con el
método concat()

***************************************************

* Los spread operator se usan para ['COPIAR'] ejemplo:

let arr = ['a','b','c'];
let arr2 = arr;
console.log(arr2); // [ 'a', 'b', 'c' ]

Esta manera de copiar un array está bien, pero si se le quieren hacer modificaciones a arr2 modificaria igualmente arr. Ejemplo:

let arr = ['a','b','c'];
let arr2 = arr;
  
arr2.push('d');
console.log(arr2); // [ 'a', 'b', 'c','d' ]
console.log(arr); // [ 'a', 'b', 'c','d' ]

por lo tanto la mejor manera es usando los spread operator de la siguiente manera:

let arr = ['a','b','c'];
let arr2 = [...arr];
  
arr2.push('d'); //inserting an element at the end of arr2
  
console.log(arr); // [ 'a', 'b', 'c' ]
console.log(arr2); // [ 'a', 'b', 'c', 'd' ]


***************************************************

* Los spread operator se usan para ['EXTENDER'] ejemplo:

let arr = ['a','b'];
let arr2 = [...arr,'c','d'];
  
console.log(arr2); // [ 'a', 'b', 'c', 'd' ]


si se hace de esta forma, se obtiene un array dentro de otro.
let arr = ['a','b'];
let arr2 = [arr,'c','d'];
  
console.log(arr2); // [ [ 'a', 'b' ], 'c', 'd' ]



----------------------------------------------------------------
------------------ $`Parametros rest` (...) --------------------

https://www.youtube.com/watch?v=yGJdRAXHCPM
el parametro rest recibe todos los argumentos (infinitos) y los guarda en un array

* ejemplo:
const mostrarDatos=(...datos)=>{
  console.log(datos);
}

mostrarDatos('Noel', 23, 'correo@correo.com', 'etc')

...datos = puede ser cualquier nombre y le puedo enviar una cantidad indefinida de datos y recibirla bajo el nombre ...datos,
estos datos los guarda como un array.



* otro ejemplo:
si no sabemos cuántos valores vamos a recibir en un objeto ó etc. se puede usar rest.

function sumar (a,b,...c){
  let resultado = a + b;

  c.forEach(function (n){
    resultado += n

  })
  return resultado
}

console.log(sumar(1,2)) // 3
console.log(sumar(1,2,3)) // 6
console.log(sumar(1,2,3,4)) // 10
console.log(sumar(1,2,3,4,5)) // 15
console.log(sumar(1,2,3,4,5,6)) // 21

todos los datos(parametros) que se le envian los recibe en ...c