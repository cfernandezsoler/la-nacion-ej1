# la-nacion-ej1

Para visualizar el código resultante visitar el siguiente link: https://la-nacion-ej1.now.sh/ 

En el ejercicio, a partir del tag Main realice componentes de todos los elementos que considere necesarios. 

Se utilizo Async/Wait para consultar y obtener los datos de manera remota en main.js. Estos datos se almacenan en el estado 'data' a través de React hooks y luego se envían como props, a los componentes Articles y Tags. 

Tags.js se encarga de mapear los artículos para agrupar y totalizar los tags, para luego ordenarlos de mayor a menor y renderizar solo 10 de ellos. 
Article.js se encarga de mapear también los artículos, pero este, obtiene la fecha de los mismos y la convierte en una cadena legible, mostrando también su imagen, titulo y solo se renderiza aquellos con subtype 7. 

Se utilizo webpack-dev-server para el testeo de la aplicación. 
