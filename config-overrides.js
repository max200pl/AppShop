/* 
     ** Будем конфигурировать WebPack внутри create-react-app
*/
const {alias} = require('react-app-rewire-alias')


module.exports = function override(config, env) {
     alias({
          '@library': 'library/src',
     })(config)
     //do stuff with the webpack config...
     
     return config;
   } 