const mongoose = require('mongoose');

const URI = 'mongodb://test:test@ds235850.mlab.com:35850/translate';

const connection = mongoose.connect(URI, {})
  .then(() => {
    console.log('connected to db');
  }).catch((err) => {
    console.log('error: ', err);
  });

module.exports.connection = connection;

//////////////////////////////////////////
// const Sequelize = require('sequelize');
/*
msqld = to restart the db
separate terminal: mysql -u root -p
enter the password specified here
show databases
create database mvp;
*/
// const db = new Sequelize('mvp', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });
//
// db
//   .authenticate()
//   .then(() => {
//     console.log('connection has been establieshed with db');
//   })
//   .catch(err => {
//     console.log('unable to connect: ', err);
//   });
//
// module.exports.db = db;
