/*   
     * Отображения не найденной страницы: 
     - path: * ==> route для всех страниц // поиск по неполному совпадению 
     - exact: false ==> не найдено не одного совпадения 
     - component:NotFoundPage ==> для отображения ненайденной страницы
*/

import PeoplePage from '@containers/PeoplePage'; // компонент возвращает асинхронный запрос с сервера с данными через URL 
import NotFoundPage from '@containers/NotFoundPage';
import HomePage from '@containers/HomePage';

const routesConfig =[
     {
          path: '/',
          exact: true,
          component: HomePage
     },
     {
          path: '/people',
          exact: true,
          component: PeoplePage
     },
     {
          path: '/not-found',
          exact: true,
          component: NotFoundPage
     },
     {
          path: '*',
          exact: true,
          component: NotFoundPage
     }
]

export default routesConfig;