//*======================================= КОМПОНЕНТ - КОНТЕЙНЕР ==========================================================*//

/* eslint-disable no-unused-vars */
/**
     ** Подключаем функцию getApiResource в utils:
     ** 1) Подключаем хук useEffect для чего?
     ** 2) Подключим константу c URL {API__PEOPLE}
     ** 3) создаем useEffect =>  callBack function
     ** 3.1) создаем getResource
          3.1) Передаем и вызываем getResource(API__PEOPLE)
     ** 4) Создаем переменную res = 
          4.1 через асинхронную функцию await getApiResource(API__PEOPLE) делаем запрос на сервер 
     ** 5) создаем переменную peopleList:
          5.1 деструктурируем полученные данные через метод .map({name,url})
          5.2 создаем функции получения id персонажа (getPeopleId) и url img (getPeopleImage)
          * 5.3 возвращаем объект {id, name, img} и передаем его setPeople(peopleList)
     ** 6) для хранения состояние подключим useState
          6.1 используем деструктивное присваивание  const [people, statePeople]
          6.2 useState возвращает массива с двумя элементами  people = arr[0]; statePeople = arr[1];
     ** 8) создаем и подключаем PeopleList.jsx 
          8.1 выносим весь список UL в отдельный компонент PeopleList
     ** 9) возвращаем html разметку если 
          9.1) useState не null, проверяем через тернарный оператор  {if people true && <PeopleList people={people}</>)
          9.2 передаем массив объектов в PeopleList через <PeopleList people = {people}/> так называемые пропсы

          
    
         
    
 */

import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";

import styles from './PeoplePage.module.css';


//* Функциональный компонент 
const PeoplePage = () => {
     const [people, setPeople] = useState(null); // изначально useState(неопределенно)

     const getResource = async (url) => {  // передали url через useEffect в getResource(API__PEOPLE)
          const res = await getApiResource(url); // запрос на сервер по URL 

          const peopleList = res.results.map(({ name, url }) => { // results это ключ в объекте // 
               const id = getPeopleId(url);
               const img = getPeopleImage(id);
               return {
                    id,
                    name,
                    img
               }
               // возвращаем объект {id,name,img}
          });
          // и передаем объект в setPeople
          setPeople(peopleList);
     }

     // используем хук useEffect 
     useEffect(() => { // принимает два аргумента 1) callBack function 2) массив зависимостей
          getResource(API_PEOPLE); // передаем URL через callBack function и вызываем 
     }, [])

     return (
          // фрагмент, невидимый элемент, нужно возвращать только один элемент 
          <>
               {people && <PeopleList people={people} />}
          </>
     )
}

export default PeoplePage;
