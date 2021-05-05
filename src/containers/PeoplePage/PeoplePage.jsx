//*======================================= КОМПОНЕНТ - КОНТЕЙНЕР ==========================================================*//
/* eslint-disable react-hooks/exhaustive-deps */
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
               если getApiResource возвращает true => делаем деструктуризацию и.т.д 
                    и  и в JSX через тернарный оператор рендерим узел <> { people && <PeopleList people={people} />} </>
               если getApiResource возвращает false =>  устанавливаем setErrorApi(true) 
                    и в JSX через тернарный оператор рендерим ? <h1>Error!</h1>
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
import {whitErrorApi} from '../../hoc-helpers/whitErrorApi'
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";

import styles from './PeoplePage.module.css';


//* Функциональный компонент 
const PeoplePage = ({setErrorApi}) => {
     const [people, setPeople] = useState(null); // изначально useState(неопределенно)

     const getResource = async (url) => {  // передали url через useEffect в getResource(API__PEOPLE)
          const res = await getApiResource(url); // запрос на сервер по URL 

          if (res) {
               const peopleList = res.results.map(({ name, url }) => { // results это ключ в объекте // 
                    const id = getPeopleId(url);
                    const img = getPeopleImage(id);
                    return {
                         id,
                         name,
                         img
                    }
                    // возвращаем объект {id,name,img}
               })

               // и передаем объект в setPeople
               setPeople(peopleList);
               setErrorApi(false);
          } else {
               setErrorApi(true);// устанавливаем в tru если произошла ошибка запроса данных 
          }
     }

     // используем хук useEffect 
     useEffect(() => { // принимает два аргумента 1) callBack function 2) массив зависимостей
          getResource(API_PEOPLE); // передаем URL через callBack function и вызываем 
     }, [])

     return (
          // фрагмент, невидимый элемент, нужно возвращать только один элемент 
          // передаем пропсы в PeopleList и он нам возвращает разметку при условии что people не null
          <>
               { people && <PeopleList people={people} />}
          </>

     )
}

export default whitErrorApi(PeoplePage);
