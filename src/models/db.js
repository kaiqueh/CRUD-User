const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('CRUDD', 'root', '18092003Kaiqueje.', {
  host: 'localhost',
  dialect: 'mysql',
});

// sequelize.authenticate().then(() => {
//   console.log('conectado com banco de dados realizado com sucessdo');
// }).catch(() => {
//   console.log('erro de coneccao com banco de dados');
// });

module.exports = sequelize;
