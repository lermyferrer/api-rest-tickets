# api-rest-tickets

## Descripción breve del proyecto.
Servicio http RESTFUL creado en Node.js con sus endpoints GET, POST, PUT, DELETE y filtrar por algun registro.

## Configuraciones del Proyecto

### 1. Entorno

- **Node.js y npm:**
  - Asegúrate de tener Node.js instalado. Puedes descargarlo [aquí](https://nodejs.org/).
  - Este proyecto utiliza npm (Node Package Manager) para gestionar las dependencias.

### 2. Configuración del Entorno

- **Variables de Entorno:**
  - Copia el archivo `.env.example` a `.env` y configura las variables de entorno necesarias.
  - Las variables de entorno incluyen configuraciones como el puerto del servidor, las credenciales de la base de datos, etc.

### 3. Instalación de Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

### 4. Configuración del base de datos

- **Clever Cloud - Mysql:**
  - Base de datos en plataforma Clever Cloud para conectar Mysql.
  - Despues de estar conectado con Mysql se obtienen las credenciales para ser agregadas en la variable de entorno .env.
  
```bash
npm i dotenv, express, morgan, promise-mysql

```bash
npm install

```bash
npm npm run dev
