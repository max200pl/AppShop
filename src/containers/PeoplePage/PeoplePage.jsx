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
          9.2) передаем массив объектов в PeopleList через <PeopleList people = {people}/> так называемые пропсы
     ** 10) подключаем whitErrorApi оборачивая весь компонент 
          10.1) оборачиваем весь компонент в hoc-helpers И ЭКСПОРТИРУЕМ ===> export default whitErrorApi(PeoplePage); 
          10.2) в компоненте PeoplePage появиться prop ===> setErrorApi={setErrorApi} 
          10.3) передаем в PeoplePage через ===> const PeoplePage = ({ setErrorApi }) =>{}
          10.4) меняем setErrorApi в зависимости от удачного запроса ===> if (res): true or false 
          10.5) при рединге в withErrorApi.jsx ===> errorApi : true or false 
               10.5.1) через тернарный оператор рендерим ошибку или компонент View 
          *! 10.6) Для удобства не изменять jsx у PeoplePage
     ** 11) подключаем useQueryParams для получения объекта 
 */
//* ========== ORDER import:
// Library 
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// HOC
import { whitErrorApi } from '@hoc-helpers/whitErrorApi'
// Component
import PeopleList from "@components/PeoplePage/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";
// Utils 
import { getApiResource, changeHTTP } from '@utils/network';
// Constant 
import { API_PEOPLE } from '@constants/api';
// Services 
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
// Hook
import { useQueryParams } from "@hooks/hooksQueryParams";


// Style
import styles from './PeoplePage.module.css';


//* Функциональный компонент 
const PeoplePage = ({ setErrorApi }) => {
     const [people, setPeople] = useState(null); // изначально useState(неопределенно)
     const [prevPage, setPrevPage] = useState(null); 
     const [nexPage, setNextPage] = useState(null); 
     const [counterPage, setCounterPage] = useState(1);
     
     const query = useQueryParams();
     const queryPage = query.get("page");
    // console.log(queryPage, nexPage, prevPage);

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
               // 
               setPrevPage(changeHTTP(res.previous));
               setNextPage(changeHTTP(res.next));
               setCounterPage(getPeoplePageId(url));

               setErrorApi(false);
          } else {
               setErrorApi(true);// устанавливаем в tru если произошла ошибка запроса данных 
          }
     }

     // используем хук useEffect 
     useEffect(() => { // принимает два аргумента 1) callBack function 2) массив зависимостей
          getResource(API_PEOPLE+queryPage); // передаем URL через callBack function и вызываем 
     }, [])

     return (
          // фрагмент, невидимый элемент, нужно возвращать только один элемент 
          // передаем пропсы в PeopleList и он нам возвращает разметку при условии что people не null
          <>
               <PeopleNavigation 
                    getResource={getResource}
                    prevPage={prevPage}
                    nexPage={nexPage}
                    counterPage={counterPage}
               />
               { people && <PeopleList people={people} />}
          </>

     )
}


//* проверяем на тип данных возвращаемых с пропсов setErrorApi
PeoplePage.propTypes = {
     setErrorApi: PropTypes.func
}

export default whitErrorApi(PeoplePage); // оборачиваем компонент PeoplePage компонентом whitErrorApi и навешиваем новые данные на компонент в зависимости от состояния setErrorApi
