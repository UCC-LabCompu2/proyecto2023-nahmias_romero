# proyecto2023
Estructura de Proyecto Lab de Compu II - 2023

## Casa de cambio
Modificar el Readme.MD y colocar información del proyecto/página (mínimamente: título del proyecto, autores con nombre y apellido, 
link de gh-pages, contenido de la página,  listado de tecnologías usadas, etc)

### Autores:
- [ ] Nahmias Arnon, clave: 2222270
- [ ] Romero Villagra Joaquín, clave: 2216694

### Acerca del proyecto
- [ ] Este es un proyecto estudiantil de la materia más importante de Ingeniería, llamada laboratorio de computación II
- [ ] Los aprendizajes principales era la creación de una pagina web desde cero

[Casa de cambio](http://localhost:63342/proyecto2023-nahmias_romero/index.html?_ijt=4jbep5pi40uj1v4gtmnvmblrt0)



### Sobre el HTML
- [ ] Todas las etiquetas deben estar en minúscula ^^
- [ ] Poner comillas a todos los atributos ^^
- [ ] Title debe contener el título de la página ^^
- [ ] En el ```<head></head>``` incluir las etiquetas ```<meta>``` detallando: autor, descripcion y palabras clave
- [ ] Emplear al menos 3 etiquetas semánticas diferentes (header, nav, aside, main, section, article, footer) ^^
- [ ] Emplear ```<header></header>```. En el contenido de la cabecera debe haber un título ```<h1></h1>```, puede tener color de fondo, algún logotipo, etc. ^^
- [ ] Debe haber por lo menos una etiqueta ```<img>``` en la página. ^^
- [ ] La estructura de la página debe estar definida con ```<div></div>``` ^^
- [ ] Debe contener al menos 3 elementos de tipo ```<input>``` o ```<select>``` ó ```<button>``` que le permitan al usuario ingresar valores para poder realizar un cálculo de un ejercicio.^^
- [ ] Debe contener un ```<canvas>```, para que posteriormente (en la 2da etapa) se grafique alguna imagen representativa del ejercicio. (el desarrollo del gráfico se realizará cuando se vea la unidad de “Orientación a Eventos”)
- [ ] No espaciar con excesivos ```<br>```. Utilizar márgenes, paddings, etc.  ^^
- [ ] No utilizar etiquetas deprecadas. ^^
- [ ] Todas las etiquetas deben estar correctamente cerradas ^^
- [ ] Los ids de los elementos deben ser unívocos ^^

### Sobre el CSS
- [ ] El estilo de los elementos debe establecerse en un archivo CSS (prohibido poner el atributo
 style a los elementos o emplear estilos incrustados). PREGUNTAR
- [ ] El CSS debe contar mínimo con un tipo de cada forma (por Tag, por ID y por clase).
- [ ] Se debe emplear pseudoclase. ^^
- [ ] No emplear !important. ^^

### Sobre Accesibilidad:
- [ ] Toda imagen debe tener su etiqueta alt 
- [ ] Todo ```<input>``` o ```<select>``` debe tener su ```<label>``` ^^
- [ ] Los labels deben contener el atributo **for** (el for debe contener el id del input al cual se referencia) ^^
- [ ] Si hay una tabla en la página, debe contener ```<caption></caption>``` ^^

### Sobre las correcciones
* Se corregirá el proyecto con el último commit realizado en Github hasta las 23:59 del día anterior a la fecha de entrega
* Las notas serán de manera logarítmica: (Por ejemplo 60% 4; 70% 5,5; 80% 7; 90% 8,5)



## Requisitos del Segundo Parcial

### Sobre el proyecto general
- [ ] Todas las correcciones y mejoras solicitadas durante el primer parcial deben estar corregidas.
- [ ] No debe haber errores presentes en el código (realizar Code > Inspect Code para verificar que no haya errores)
- [ ] No debe haber errores JavaScripts presentes. (ver con F12 si hay errores)

### Sobre la funcionalidad JavaScript
Se debe agregar funcionalidad Js a la página HTML+CSS desarrollada
- [ ] Una función que compruebe si los valores ingresados son correctos, y si no lo son, que le indique al usuario por un alert, y que blanquee el contenido del campo.
- [ ] Una función que calcule algo en base a los valores ingresados por el usuario en los inputs.
- [ ] Una función que realice un dibujo sobre un canvas (debe ser representativo y acorde a los valores ingreados).
- [ ] El código Js debe estar en un archivo externo
- [ ] Se debe emplear var, let o const según corresponda para mayor eficiencia

### Sobre la documentación
- [ ] TODAS las funciones javaScript deben estar comentadas adecuadamente. [JsDoc](https://jsdoc.app/about-getting-started.html)
   ```/**
     * Descripción de que hace la función
     * @method Nombre de la función
     * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
     * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
     * @return Valor que retorna
     */
   ```
   
### Sobre las correcciones
* Se corregirá el proyecto con el último commit realizado en Github hasta las 23:59 del día anterior a la fecha de entrega
* Las notas serán de manera logarítmica: (Por ejemplo 60% 4; 70% 5,5; 80% 7; 90% 8,5)
* Las sugerencias sobre el HTML y CSS realizadas en el anterior parcial dejen ser corregidas.

   
## Requisitos del FINAL
- [ ] Todas las correcciones y mejoras solicitadas durante el primer y segundo parcial deben estar corregidas.
- [ ] No debe haber errores presentes en el código (realizar Code > Inspect Code para verificar que no haya errores)
- [ ] No debe haber errores JavaScript presentes (F12 > Consola)
- [ ] Debe cumplir con TODOS los requisitos del 1er y 2do Parcial (si se agrego código nuevo en Js, se debe documentar, si hay nuevos inputs de html deben contener su label, etc)
- [ ] El Canvas debe poseer animación con setInterval() o requestAnimationFrame()
- [ ] El cálculo del ejercicio de física/etc debe ser el correcto, independientemente de los valores ingresados.