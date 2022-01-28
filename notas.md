# Todo sobre MarkDown



<!-- Títulos -->
# Curs de Fonaments de la Programació h1
## title h2
### title h3
#### title h4
##### title h5
###### title h6



<!-- Doble espacio al final de un texto para hacer un salto de línea -->



<!-- Lista Desordenada -->
* Unordenate List
* More
* More

<!-- Lista Ordenada -->
1. List Ordenate
2. More
3. More



<!-- Crear un callout -->
> Hola 



<!-- Letra Cursiva -->
Esta *palabra* está en cursiva

<!-- Letra Negrita -->
Esta **palabra** está en negrita

<!-- Letra Tachada -->
Esta ~~Palabra~~ está tachada



<!-- Crear un sub Ítem -->
* Ítem
    * Sub ítem <!-- Pulsando Tabulador -->



<!-- Añadir un enlaçe a una palabra o frase -->
[Youtube](https://www.youtube.com/)

<!-- Lo mimo que arriba pero con un "Título" que saldrá cuando el cursor esté encima del enlaçe -->
[Youtube + Title](https://www.youtube.com/ "ByToni")

<!-- Reference-style Links:
( Añadir un link en 2 partes separadas con un identificador de referencia ) 
-->
[Youtube Reference-style Links][1]

[1]: https://www.youtube.com/results?search_query=Que+es+DuckDuckGO "¿Qué es DuckDuckGo?"
<!-- Entre comillas "Título" le añadimos el título, es opcional -->



<!-- URLs and Email Addresses -->
<https://www.markdownguide.org>

<fake@example.com>


<!-- Generar Bloques de Citas -->
> Esto es un bloque de cita ( this is a blockquote )
<!-- Blockquotes with Multiple Paragraphs -->
> Este es un bloque de citas en múltiples párrafos
>
> Aquí continua el mismo bloque
<!-- Nested Blockquotes ( Citas en bloque anidadas ) -->
> Este es un bloque de citas en múltiples párrafos
>
>> Aquí añado otro bloque de citas dentro de un bloque de citas


<!-- Generar línea de separación -->
<!-- Con 3 guiones -->
---
<!-- Con 3 guiones bajos ( son lo mismo ) -->
___


<!-- Escribir Código ( se hace entre 2 tildes abiertas-->
`console.log()`

<!-- Escribir código en un bloque -->

```javascript
console.log() {
    alert(Hello)
}
```

<!-- Crear una tabla -->

| Tables | Are | Cool |
|--------|-----|------|
| Yes | Tables| Are cool |
| One | Two | Three|


<!-- Generar una imagen ( También se le puede añadir un título ) -->
![Texto de la imágen generada](https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?cs=srgb&dl=pexels-christina-morillo-1181244.jpg&fm=jpg "Imagen developer")

<!-- Añadir una imagen con un link -->
[![Texto de la imágen generada](https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?cs=srgb&dl=pexels-christina-morillo-1181244.jpg&fm=jpg "Imagen developer")](https://www.pexels.com/es-es/)




<!-- GITHUB MARKDOWN -->

<!-- To do ( Marcar tareas ) -->
```
[ ] Plátanos  
[x] Manzanas Rojas  
[ ] Manzanas Verdes  
[x] Aguacates
```
<!-- Tengo que añadirle 3 tildes de apertura y 3 tildes de cierre para que me haga los saltos de línea tal y como están en el código -->


<!-- Mencionar a un usuario ( De momento no he podido hacer que funcione ) ) -->
@toniblopez


