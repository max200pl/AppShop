/* 
  //* React-router-dom
    1) import {NavLink}
    2) добавление компонента <NavLink>
    3) exact - для правильного роутинга на сайте
    4) NavLink ===> визуальные компоненты на странице 
    5) import Route ===> не визуальные компоненты
    * при нажатии на NavLink подгружаем Route component={}
    6) Подключаем HomePage
      6.1 в Route подгружаем компонент {HomePage}
    7) import BrowserRouter ===> предоставляет дополнительные возможности при роутинге
      7.1 Оборачиваем все компоненты в BrowserRoute

 */


import PeoplePage from '@containers/PeoplePage'; // компонент возвращает асинхронный запрос с сервера с данными через URL 
import HomePage from '@containers/HomePage';

import { BrowserRouter, NavLink, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styles from './App.module.css'; //import modules -> object {key:values}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/people" exact>People</NavLink>

        <Route path="/" exact component={HomePage} />
        <Route path="/people" exact component={PeoplePage} />
      </BrowserRouter>
    </>
  )
}

export default App;

