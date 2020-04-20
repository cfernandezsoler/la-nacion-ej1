# la-nacion-ej1

Para visualizar el código resultante visitar el siguiente link: https://la-nacion-ej1.now.sh/ 

En el ejercicio, a partir del tag Main realice componentes de todos los elementos que considere necesarios. 

Se utilizo Async/Wait para consultar y obtener los datos de manera remota en main.js. Estos datos se almacenan en el estado 'data' a través de React hooks y luego se envían como props, a los componentes Articles y Tags. 

Tags.js se encarga de mapear los artículos para agrupar y totalizar los tags, para luego ordenarlos de mayor a menor y renderizar solo 10 de ellos.

Article.js se encarga de mapear también los artículos, pero este, obtiene la fecha de los mismos y la convierte en una cadena legible, mostrando también su imagen, titulo y solo se renderiza aquellos articulos con subtype 7. 

Se utilizo webpack-dev-server para el testeo de la aplicación. 

Para el estilo de la aplicación se utilizo el archivo CSS que vino incluido con la maqueta que obtuve a través del código fuente de la misma. Sin embargo tuve que hacerle una modificación ya que tiraba error al intentar cargar una fuente y tuve que 'comentar' esas lineas para que funcionara.
No inclui en la aplicación el header y tampoco el footer, debido a que habia iconos que no cargaban y movian al main.
