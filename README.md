##  API: Tienda De Video Juegos
Proyecto tipo Backend que tiene como objetivo en la creación de un sistema de tienda de video juegos,  que permita la búscqueda, creación modificación o eliminación de un usuario o videojuego, a su vez, se permita que dicho usuario pueda generar una compra de video juego.


####  Aplicativo realizado con:

- Lenguaje de programación: **Java Script - Type Script**
- Entorno de tiempo de ejecución: **NodeJs**
- Famework: **Express**
- Motor de base de datos: **PostgreSQL**git status
- ORM: **TypeORM**
- Test Famework : **Jest**

                    
###Variables de entornos
Se debe crear un archivo en el directorio raiz del proyecto `.env`  con el cual se procede a agregar las variables de entorno, para la conexión de la base de datos, con motor de bd postgreSQL.

```javascript
PORT = 3000
DATABASE_HOST = localhost
DATABASE_PORT = 5432
DATABASE_USERNAME = postgres -> o tu username de postgreSQL
DATABASE_PASSWORD = ********* -> clave de postgrest
DATABASE_DATABASE = nombre_BD

NODE_ENV=development

```
####  Configuración inicial
- Una vez clonado el repositorio, en directorio raiz del proyecto abrimos la terminal de preferencia y ejecutamos el siguiente comando:`npm install` esto permitirá descargar las dependencias de NodeJs, instaladas para esta aplicación
- El comando para correr el proyecto: `npm run dev
- El comando para correr los test: `npm run test:watch`


####  EndPoints - Postman
https://documenter.getpostman.com/view/36288876/2sAXqta1g6
