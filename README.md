# Mumablue

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Requisitos
- Node v12.14.1
- Npm 6.13.6

## Desplegar en desarrollo

- Instalar las depenencias en la carpeta raíz con el comando `npm install`

Ejecutar el comando `ng serve` Para iniciar el servidor de desarrollo. Ir `http://localhost:4200/`.

## Code scaffolding



## Build 

Ejecutar `ng build` para generar una versión compilada del proyecto.


## Further help

Desarrollado por [Elvis Reyes](https://www.linkedin.com/in/elvis-reyes-336233a8/) [teclaelvis01@gmil.com](teclaelvis01@gmil.com)

Ver online [Demo](https://mumablue-asignacion.firebaseapp.com/)

# Mumablue CATÁLAGO

Es una SPA sencilla realizada en Angular 8 que consume sólo una vez los datos ofrecidos por [https://staging-k8s-api.mumablue.com/api/products](https://staging-k8s-api.mumablue.com/api/products)

Para el frontend, he usado bootstrap 4 y sus respectivas dependencias como base.

En general he creado 3 componentes básicos para mostrar la información los cuales son:

- app-filters
- app-list-products
- app-product

También he creado una clase model para estructurar la data a manipular.

Los recursos de los filtros tales como: idiomas, países, número de personajes y edades permitidas son generados de forma dinámica teniendo como data la entrada el nodo **hydra:member**





## Componentes

### app-filters
![filtros](src/assets/img/filtros_tags.gif)

Cuenta con cuatro opciones desplegables para filtrar las tarjetas. Cuenta con indicadores para saber que filtros se están utilizando. Los datos de cada opción es generada de forma dinámica.

### app-product
![alt](src/assets/img/card.gif)

Es una tarjeta de presentación con una pequeña animación. Para ver el detalle de del productos deseado se debe hacer click en la tarjeta y mostrará el resto de la información suministrada por [https://staging-k8s-api.mumablue.com/api/products](https://staging-k8s-api.mumablue.com/api/products)


### app-list-products

Es un componente contenedor que sirve para renderizar las tarjetas de productos en una griga responsive.


Con esto se cumplem nos siguientes requisitos:

```

Visión general
Crear una aplicación en Angular 7+ para crear un pequeño catálogo dinámico de nuestros productos que se pueda filtrar por tipo de producto, language, country, número de personajes y edades permitidas.
Cada producto tiene variaciones por language y número de personajes, debiendo solo mostrar 1 variación pon producto en el catálogo, mostrar la máxima información del producto + variación.
Para ello os nutrireis de nuestra Api de testing, la cual podéis consultar aquí: https://staging-k8s-api.mumablue.com/api​ (usar el endpoint de /products) Se deja libertad total en el diseño para evaluar posteriormente.
Objetivos
1. Calidad del código y estructura:​ Uso de patrones de diseño, utilización de servicio propio, creación al menos de 1 compemente para el producto y otro para el catálogo, uso correcto de componentes
2. Diseño y UX:​ Se valorará el diseño elegido, desarrollar preferiblemente con bootstrap
3. Animaciones:​ el uso de animaciones sumará puntos para la prueba, siempre que sean
con sentido y ayuden a mejorar la usabilidad
4. Opcional:​ si estás familiarizado con el uso de docker-compose, sería un punto extra para la realización de la prueba
  
 2
5. Entrega:​ enviar a it@mumablue.com el enlace de un repositorio git, junto con 1 archivo Readme que describa generalmente la prueba

````