# Floatie Health

## Application Configuration

- Create a new database in MySQL titled `floatieHealth`
  - Seed DB with symptom and diagnsis information
  - If you would like to seed the csv data included in this repository, uncomment the code following "DB Loading Code" in the `server/db/dbConnection.js` file (lines 51 - 79). This will seed your database when you start your server
- Create a new `.env` file in the root directory
  - Add a `DB_USER` variable set to your MySQL username
  - Add a `DB_PASS` variable set to your MySQL password

## Installation and Running the Application

- After cloning the repository, run the following commands:

```js
npm install //install dependencies
npm run build //build bundle file with webpack
npm start //start server on port 3000
```