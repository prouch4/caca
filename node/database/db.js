import {Sequelize} from 'sequelize'

const db = new Sequelize('pasantia', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})



import mysql from "mysql"
//const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pasantia'
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});


export default {connection, db}