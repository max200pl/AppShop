// ** -- export по умолчанию (default) значение может быть только одно 
// ** -- исп конструкцию try.catch для обработки шибок 
// **    исп. async await function для ожидания получения данных с сервера 
// **    нативный метод fetch() для создания запроса на сервер 
// **    конструкция в try {if()} для перехвата ошибки
// **    (async()=>{})() используем для формирования универсального асинхронного запроса на сервер 




import {HTTP, HTTPS} from '@constants/api';

/**
 * Изменяет URL c HTTP на HTTPS
 * @param {string} url - url для изменения 
 * @returns {string} - url c HTTPS 
 */
export const changeHTTP = url =>{
     const result = url ? url.replace(HTTP, HTTPS) :url;
     return result;
} ;

/**
 * Отправляет запрос fetch
 * @param {string} url - url для запроса  
 * @returns {Promise} - Promise с результатом запроса 
 */
export const getApiResource = async (url) => { //принимаем URL
     try {
          const res = await fetch(url); // нативный метод fetch() передаем URL делаем запрос

          // обработка ошибки при уже неправильно полученных данных
          if (!res.ok) {
               console.error('Could not fetch.', res.status);
               return false;
          }

          return await res.json(); // возвращаем res.json 
     // обработка ошибки при получении данных
     } catch (error) {
          console.error('Could not fetch.', error.message);
          return false
     }
}

// (async()=>{
//      const body = await getApiResource(SWAPI__ROOT + SWAPI__PEOPLE);
//      console.log(body);
// })();

// getApiResource(SWAPI__ROOT + SWAPI__PEOPLE) // return Promise
//      .then(body=> console.log(body))




