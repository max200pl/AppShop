import PeoplePage from '@containers/PeoplePage'; // компонент возвращает асинхронный запрос с сервера с данными через URL 
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
     }
]

export default routesConfig;