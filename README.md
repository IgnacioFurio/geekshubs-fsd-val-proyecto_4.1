# geekshubs-fsd-val-proyecto_4.1
<em> # CLINICA DENTAL </em>

 <p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>


   
<detalles>
   <summary> Índice 📝</summary> 
  <ol>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#objetivo">Objetivos</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalacion-en-local">Instalacion</a></li>
    <li><a href="#endpoints">Realizacion de endpoints</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#webgrafia">Webgrafia</a></li>
    <li><a href="#desarrollo">Desarrollo</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</detalles>

## Sobre el proyecto


El proyecto consiste en desarrollar un sistema de gestión de citas para una clínica dental. 
El backend de la aplicación está desarrollado con Sequelize como ORM para interactuar con la base de datos relacional con MySQL y Express como framework de Node.js para la construcción de la API RESTful.


## Objetivos

Este proyecto requería una API funcional backend para el sistema de gestión de citas de una clínica dental que permita a los usuarios (pacientes, doctores, administradores) realizar diversas acciones en la base de datos (crear, leer, actualizar, eliminar) y gestionar las citas entre los pacientes y los doctores de la clínica. Además, el backend debe garantizar la seguridad de la información y la autenticación de los usuarios mediante el uso de tokens de acceso. El objetivo principal del proyecto es desarrollar un sistema robusto y escalable que permita a la clínica dental gestionar sus citas y pacientes de manera eficiente y efectiva.

## Stack
Tecnologías utilizadas:
<div alinear="centro">
<a href="https://www.mongodb.com/">
    <img src= "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
    <img src=""/>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
 </div>

## Diagrama BD
!['imagen-db'](/img/Screenshot_70.png)

## Instalación local

1. Clonar el repositorio
2. `$ npm init `
3. ` $ npm install express, nodemon, mysql2`
4.  `$ npx sequelize-cli `
5.  Configurar Sequelize para conectarse a la base de datos de MySQL en el archivo config.json:
3. Conectamos nuestro repositorio con la base de datos
4. ``` $ Ejecutamos las migraciones ```
5. ``` $ Ejecutamos los seeders ```
6. ``` $ npm ejecutar dev ```
7. ...

## Realizacion de endpoints
<detalles>
<summary>Realizacion de endpoints</summary>

  - Creacion Perfil usuario


Se ha realizado en el controlador `authController` mediante la función createUserProfile  se encarga de crear un nuevo usuario en la base de datos, recibiendo los datos del usuario a través del cuerpo de la solicitud. Primero, se verifica si los campos obligatorios están completos. Si no, la función devuelve un mensaje de error. Si todo está en orden, se cifra la contraseña y se crea un nuevo usuario en la base de datos. La función devuelve un mensaje de éxito y los datos del nuevo usuario creado.


   - Login


Se ha realizado en el controlador `authController` mediante la función  userLogin se encarga de autenticar a un usuario existente en la base de datos. Recibe las credenciales del usuario (correo electrónico y contraseña) a través del cuerpo de la solicitud. La función busca al usuario en la base de datos y verifica si la contraseña coincide con la contraseña cifrada almacenada en la base de datos. Si todo está en orden, se emite un token de autenticación JWT que contiene la información del usuario, como su ID de usuario, nombre de usuario y rol. La función devuelve el token de autenticación y un mensaje de éxito.


- Perfil usuario


Se realiza en el controlador `userController` con la funcion .getUserProfile para obtener el perfil del usuario, incluyendo los pacientes que han registrado,requiere autenticación a través del middleware de verificación de tokens.


- Actualizacion perfil usuario


Para actualizar la información del perfil del usuario, como el nombre de usuario y la contraseña, requiere autenticación a través del middleware de verificación de tokens.


-   Crear cita


Se realiza mediante createAppointment función encargada de crear una cita en la base de datos a partir de la información proporcionada en la solicitud con los siguientes parámetros:


`date_time`: Fecha y hora de la cita en formato de fecha y hora.
`patientId`: ID del paciente que va a tener la cita.


-  Actualizar cita

Se obtiene con la función updateAppointment actualizando la información de una cita en la base de datos a partir del ID proporcionado en la solicitud.


    -  Borrar cita

Se realiza mediante la función deleteAppointment  elimina una cita de la base de datos a partir del ID proporcionado en la solicitud y validar que pertenezca al usuario que hizo la solicitud.
 

    
</detalles>