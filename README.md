# geekshubs-fsd-val-proyecto_4.1
<em> # CLINICA DENTAL DATABASE</em>

 <p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>


   
<detalles>
   <summary> Índice 📝</summary> 
  <ol>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto // About this project</a></li>
    <li><a href="#objetivo">Objetivos // Objectives</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama BD // Database diagram </a></li>
    <li><a href="#instalacion-en-local">Instalación local // Local instalation</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#errores">Código de errores // Error coding</a></li>
    <li><a href="#bugs">Bugs</a></li>
    <li><a href="#licencia">Licencia // License</a></li>
    <li><a href="#webgrafia">Webgrafia // Webgraphy</a></li>
    <li><a href="#agradecimientos">Agradecimientos // Thanks</a></li>
    <li><a href="#contacto">Contacto // contact</a></li>
  </ol>
</detalles>

---

## Sobre el proyecto // About this project

---

El proyecto consiste en desarrollar un sistema de gestión de citas para una clínica dental. 
El backend de la aplicación está desarrollado con Sequelize como ORM para interactuar con la base de datos relacional con MySQL y Express como framework de Node.js para la construcción de la API restfull.

//

We have developed a system to manage the appointments for a dental care clinique. The backend is made with the ORM Sequelize, that interacts with a relational database on MySQL, also to build the restfull API we have use Express as framework in Node.js.

---


## Objetivos // Objectives

---

Este proyecto requería una API funcional backend para el sistema de gestión de citas de una clínica dental que permita a los usuarios (pacientes, doctores, administradores) realizar diversas acciones en la base de datos (crear, leer, actualizar, eliminar). 

Además, el backend debe garantizar la seguridad de la información y la autenticación de los usuarios mediante el uso de tokens de acceso. El objetivo principal del proyecto es desarrollar un sistema robusto y escalable que permita a la clínica dental gestionar sus datos de una manera efectiva.

//

This project wis about an API that works on manage the apppointments for a dental care clinique and must allow the users (patients, doctors and admins) to do interact with the database (create, read, update and delete). 

Also, must guarantee the security for the information and authentication of the users trhough acces tokens. The main goal is to create a strong system that can get bigger and help the clinique manage all their internal data.

---

## Stack

---

Tecnologías utilizadas:

<div alinear="centro">
<a href="https://www.github.com/">
    <img src= "https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascript-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://www.gmail.com/">
    <img src= "https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&logo=sequelize&logoColor=white"/>
</a>
 </div>

 ---

## Diagrama BD // Database diagram

---

!['imagen-db'](/img/Screenshot_70.png)

---

## Instalación local // Local instalation

---

1. Clonamos el repositorio. // Clone repository.
2. Instalamos dependencias. // Install dependencies. (` $ npm install `)
3. Conectamos nuestro repositorio con la base de datos a través del archivo config.json. // Engage our repository wiith the database through the config.json file.
4. Para crear la base de datos en MySql Workbench. // To create the database at Workbench. (``` $ npx sequelize-cli db:create ```).
5. Ejecutamos las migraciones. // Execute migrations. (``` $ npx sequelize-cli db:migrate ```) 
6. Poblamos la base de datos. // Populate data base. (``` $ npx sequelize-cli db:seed:all ```) 
7. Levantamos el servidor. // Run the server. (``` $ npm run dev ```)
8. Creamos los endpoint en el Postman (o similar) para empezar a hacer las primeras consultas. // create endpoints in Postman (or alike) so we can start making our querys.

---

## Endpoints

---

<details>
<summary>Endpoints</summary>

- AUTH
    - createUserProfile

            POST localhost:3000/auth/register
        body:
        ``` js
            {
                "username": "Eddieden",
                "email": "eddieden@gmail.com",
                "password": "123456"
            }
        ```

    - UserLogin

            POST localhost:3000/auth/login
        body:
        ``` js
            {
                    "email": "eddieden@gmail.com",
                    "password": "123456"
            }
        ```
- USER
    - getUserProfile  

            GET localhost:3000/user/profile

    - updateUserProfile

            POST localhost:3000/user/profile
        body:
        ``` js
            {
                    "userName": "Eddieden",
                    "password": "123456"
            }
        ```
- PATIENT
    - createPatient

            PUT localhost:3000/patient/new
        body:
        ``` js
            {
                    "name": "Prueba1",
                    "surname": "Abeurp1",
                    "DNI": "111111111A",
                    "phone_number": "+34 666 666 666",
                    "post_code": "46017",
                    "birth": "1991-12-12",
                    "allergy": "1",
                    "surgery": "1"
            }
        ```
    - getPatientInfo 

            GET localhost:3000/patient/profile
    - getPatientAppointment 

            GET localhost:3000/patient/appointment
- DOCTOR
    - getDoctorAppointment 

            GET localhost:3000/doctor/appointment/
- APPOINTMENT
    - createAppointment

            POST localhost:3000/appointment/new
        body:
        ``` js
            {
                    "date_time": "2023-04-11T13:00:00.000Z",
                    "patient_id": "3",
                    "doctor_id": "1"
            }
        ```
    - getAllAppointment

            GET localhost:3000/appointment/all
    - updateAppointment

            PUT localhost:3000/appointment/modify
        body:
        ``` js
            {
                    "appointmentId": "8",
                    "newDate": "2023-04-11T13:00:00.000Z"
            }
        ```
    - deleteAppointment

            DELETE localhost:3000/appointment/cancel
        body:
        ``` js
            {
                    "appointmentId": "29"
            }
        ```
</details>

---

## Código de errores // Error coding

---

- 500: Something went wrong: error.message
- 501: Invalid credentials
- 502: Empty field
- 503: Appointment not fount
- 504: User not found
- 505: You shall not pass!!
- 506: You must fill all the fields
- 507: Your password must contain at least eight characters
- 508: Your password must contain at least one letter and one number.

---

## Bugs

---

Bugs conocidos: // Known bugs:

- Un Paciente que es Doctor puede pedir cita consigo mismo. // A patient that it's also a Doctor can take an appointment with itself.
- Pueden haber citas solapadas. // Can be appointments at the same time and day.

---

## Licencia // License

Este proyecto se encuentra bajo licencia de "MIT".

//

This project is under the MIT license.

---

## Webgrafia // Webgraphy

---

Para conseguir nuestro objetivo hemos recopilado información de:
- Repositorios en GitHub de la academia Geeks Hubs. // GeekHubs's GitHub repositories. 
  [![GITHUB1]][github-url]

  [GITHUB1]: https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white
  [github-url]: https://github.com/GeeksHubs
- Documentación oficial. // Official docs.
- Slack Overflow.  https://stackoverflow.com/
- Vid

## Agradecimientos // Thanks
- Corina Ciorpac:

    Agradezco a mi compañero Ignacio por el apoyo,entendimiento y comprension.
    //
    I thank my coworker Ignacio for all the support, understanding and empathy.

- Ignacio Furió José:

    Gracias a Corina por no rendirse, aunque el viento soplará en contra. Al resto de mis compañeros de aula por seguir siendo piña y estar ahí cuando alguien lo necesitaba. Al equipo de profesores por rescatarnos en los momentos en que el barco se tambaleaba. A mi familia por apoyarme incondicionalmente. Gracias a toda la gente que me ha apoyado de una forma u otra y en especial, a Arturo Ubé, sin él, no habría llegado hasta aquí.
    
    //

    Thank you Corina for not giving up, even when the wind blowed against us. Thanks to the rest of mates at the classroom for being a strong group and be there when i most needed. Also to the teacher's team because you always rescue us when everything seems to fall apart. I thank my family for all the inconditional support I've got. Thanks to all the people that has supported me in one way or another, specially Arturo Ubé, i wouldn't manage to get that far without him.

---

## Contacto // Contact

---

- Corina Ciorpac
  
  [![GITHUB2]][github-url]

  [GITHUB2]: https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=blue
  [github-url]: https://www.github.com/

- Ignacio Furió José

  [![GITHUB3]][github-url] [![LINKEDIN]][linkedin-url]  
  
  [GITHUB3]: https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green
  [github-url]: https://github.com/IgnacioFurio 
  [LINKEDIN]: https://img.shields.io/badge/linkedin-0274B3?style=for-the-badge&logo=linkedin&logoColor=white
  [LINKEDIN-url]: https://www.linkedin.com/in/ignacio-furi%C3%B3-0a9010233/

---
