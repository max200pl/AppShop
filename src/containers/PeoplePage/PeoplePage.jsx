//*======================================= КОМПОНЕНТ - КОНТЕЙНЕР ==========================================================*//

/* eslint-disable no-unused-vars */
/**
 ** Подключаем компонент getApiResource:
    ** 1) Подключаем хук useEffect для чего?
    ** 2) Подключим константу c URL {API__PEOPLE}
    ** 3) создаем getResource = 
       3.1) Вызываем getResource() в callBack function useEffect(()=>{}) 
            Передаем в  getResource(API__PEOPLE)
    ** 4) Создаем переменную res = 
       4.1 через асинхронную функцию await getApiResource(API__PEOPLE) делаем запрос на сервер 
    ** 5) деструктурируем полученные данные через метод .map({name,url})
    ** 6) для хранения состояние подключим useState
          6.1 используем деструктивное присваивание  const [people, statePeople]
          6.2 useState возвращает массива с двумя элементами  people = arr[0]; statePeople = arr[1];
    ** 7) передаем  setPeople объект с имением персонажа и ссылкой на него
    ** 8) возвращаем html разметку если 
          8.1) useState не null, проверяем через тернарный оператор  {if people true && (<><ul>{people.map}</ul></>)
          8.2) перебираем people.map и выводим при каждой итерации элементы списка li
          8.3) указываем каждому элементу li уникальный ключ key={name}, для алгоритма реконселяции который использует react 
          *! алгоритм реконселяции - если данные не поменялись то по новой их отрисовать не нужно 
    ** 9) создаем и импортируем функцию getPeopleId(url), получения id по url
          9.1 передаем URL возвращает id
    ** 10) импортируем функцию getPeopleImage
          10.1 передаем id в данную функцию и получаем корректную ссылку на изображение персонажей
          10.2 возвращаем новый объект {id,name,img}
          10.3 потом снова перебираем people.map()
          10.4 по циклу обрисовываем html разметку 
    ** 11) подключаем PeopleList.jsx 
          11.1 выносим весь список UL в отдельный компонент PeopleList
          11.2 передаем массив объектов в PeopleList через <PeopleList people = {people}/> так называемые пропсы
 */

import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import {getPeopleId, getPeopleImage} from '../../services/getPeopleData';
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
          });
          setPeople(peopleList);
     }

     // используем хук useEffect 
     useEffect(() => { // принимает два аргумента 1) callBack function 2) массив зависимостей
          getResource(API_PEOPLE); // передаем URL через callBack function и вызываем 
     }, [])

     return (
          // фрагмент, невидимый элемент, нужно возвращать только один элемент 
          <>
               {people && <PeopleList people = {people}/>} 
          </>
     )
}

export default PeoplePage;
