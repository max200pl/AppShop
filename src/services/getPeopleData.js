import {
        HTTP, SWAPI_ROOT, SWAPI_PEOPLE,
        GUIDE_IMG_EXTENSION, URL_IMG_PERSON
}
        from '@constants/api';
/**
 * 
 * @param {ссылка на фото} url 
 * @param {категория фото} category // корабли, люди и.т.д.
 */
const getId = (url, category) => {
        //определяем идентификатор c url ссылки 
        const id = url // http://swapi.dev/api/people/4/
                .replace(HTTP + SWAPI_ROOT + category, '') // через метод .replace(что мы хотим заменить, на что мы хотим заменить ) заменяем строку 
                .replace(/\//g, '') // первый аргумент регулярное выражение для поиска '/', второй арг. для замены на пустую строку
        return id // получаем id
}
// получем id, person через ссылку. 
export const getPeopleId = url => getId(url, SWAPI_PEOPLE); // принимает url =>  getId() возвращает id  стрелочная функция возвращает url 
// формируем нужную ссылку на изображение 
export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`; //возвращаем новую ссылку с персонажем