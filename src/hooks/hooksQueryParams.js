import {useLocation} from 'react-router-dom';

export const useQueryParams = () => {
     // создаем экземпляр класса и передаем hook c методом search
          return new URLSearchParams(useLocation().search);
}