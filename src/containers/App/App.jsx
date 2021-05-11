/* 
  //* React-router-dom
    1) import {NavLink}
    2) добавление компонента <NavLink>
    3) exact - для правильного роутинга на сайте
    4) NavLink ===> визуальные компоненты на странице 
    5) import Route ===> не визуальные компоненты
    * при нажатии на NavLink подгружаем Route component={}
    * 6) Подключаем HomePage
      6.1 в Route подгружаем компонент {HomePage}
    * 7) import BrowserRouter ===> предоставляет дополнительные возможности при роутинге
      7.1 Оборачиваем все компоненты в BrowserRoute
    * 8) import Switch component ===> для группирования routing
        8.1 import routersConfig ===> 
        8.2 перебираем через .map массив объектов 
        8.3 при нажатии на NavLink по циклу выдаем нужный routing 

 */

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import Header from '@components/Header';
// eslint-disable-next-line no-unused-vars
import styles from './App.module.css'; //import modules -> object {key:values}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />
          <Switch>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;

