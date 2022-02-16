# MongoDB-nuwe

Es un simple proyecto donde iniciamos un servidor y conectamos con la base de datos de MongoDB.
Este servidor se puede lanzar de manera local u online a través de la plataforma Heroku.
Para las peticiones desde Heroku debemos usar la url: “https://mongo-db-nuwe.herokuapp.com/”.

Este proyecto tiene cuatro endpoints a través de los cuales podremos:

- Crear un usuario. (user/create-user).
  Creamos un usuario introduciendo los datos en la request. Obligatorio un username que no exista, opcionalmente se puede añadir city y/o age. Nos da como respuesta el usuario creado.
  Ejemplo del body en la request:

{
"username":"Sr.X",
"city": "Springfield",
"age":65
}

- Eliminar un usuario. (user/delete-user/:id)
  Eliminamos un usuario existente enviando su id en los params de la request. Nos da como respuesta el usuario eliminado.

- Obtener un usuario a través de su username. (user/get-user-by-username)
  Busca el usuario con el username indicado en el body de la request y nos devuelve el usuario en cuestión con todos sus datos.

- Actualizar un usuario. (user/edit-user/:id)
  Editamos un usuario enviando su id a traves de los params de la request y los datos que deseamos actualizar en el body de la request. Se nos devuelve el usuario actualizado.

## TECNOLOGÍAS Y LENGUAJES:

- MongoDB
- Node (con Express y Mongoose)
- JS (Eslint como lintener)
- Heroku

## ARQUITECTURA:

> database
>
> > models
>
> > > user.js
>
> > index.js
>
> server
>
> > controller
>
> > >     usersControllers.js
>
> > routes
>
> > >     userRoutes.js
>
> > middleware
>
> > > errors.js
>
> > index.js
>
> index.js

---

Como podemos ver, este proyecto tiene un index principal más dos carpetas:

INDEX

En el se inicializa el servidor y se conecta con la base de datos. Funciones que importamos de los index de sus respectivas carpetas.

DATABASE:

- models folder: Aqui encontramos los diferentes modelos, para este proyecto solo contamos con uno: User. Utilizamos mongoose para hacer el esquema del modelo User.

- index: Creamos la función para conectar con la base de datos. Para ello usamos mongoose para conectarla y también hemos customizado nuestro JSON para que no devuelva respuesta con campos de Mongo como \_id o \_\_v.

SERVER:

- index: Donde tenemos la función para inicializar el servidor y la cual exportamos. Creamos la ruta /user y añadimos los middelware de errores.

Además de esto incluimos cors y express.json para reconocer el objeto de solicitud entrante como un objeto JSON.

- controller folder: Aquí es donde encontramos los cuatro controladores que se exportan para ser usados en UserRoutes.

- middleware folder: Tenemos el archivo erros.js que es un middleware donde tenemos dos funciones que se encargan de la gestión de errores generales

- routes folder: Dentro del archivo userRoutes.js encontramos las cuatro rutas que nos conduciran a los diferentes controllers.

Para testear las rutas y endpoints he utilizado postman.
