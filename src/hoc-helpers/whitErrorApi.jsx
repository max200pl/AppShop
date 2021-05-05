/**
 ** 1) Создаем компонент whitErrorApi
 ** 2) Принимаем компонент View 
 ** 3) импортируем модуль ErrorMassage
 ** 3) if  errorApi true then ? <ErrorMassage/> 
     else 
     ** 3.1 рендерим принятый компонент setErrorApi={setErrorApi} + {...props} пропсы изначального компонента
*/


import { useState } from 'react'; 
import ErrorMassage from '../components/ErrorMessage/ErrorMessage'

export const whitErrorApi = View => {
     return props => {
          const [errorApi, setErrorApi] = useState(false);
          return (
               <>
                    {errorApi
                         ? <ErrorMassage/> 
                         : (
                              <View
                                   setErrorApi={setErrorApi}
                                   {...props}
                              />
                         )
                    }
               </>
          )
     }
}