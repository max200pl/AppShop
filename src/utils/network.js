const SWAPI__ROOT = 'https://swapi.dev/api/';

const SWAPI__PEOPLE = 'people';



export const getApiResource = async (url) => { //принимаем URL
     try {
          const res = await fetch(url) // нативный метод fetch() передаем URL делаем запрос

          // обработка ошибки при уже неправильно полученных данных
          if (!res.ok) {
               console.error('Could not fetch.', res.status);
               return false;
          }

          return await res.json(); // возвращаем res.json 
     // обработка ошибки при получении данных
     } catch (error) {
          console.log('Could not fetch.', error.message);
          return false
     }
}
getApiResource(SWAPI__ROOT + SWAPI__PEOPLE);

      // // добываем данные:
          // .then(res => res.json())
          // .then(body => console.log(body))
          // //обработка ошибок
          // .catch(error => console.log(error.message))


