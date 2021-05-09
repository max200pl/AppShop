/**
 ** 1) Создаем компонент whitErrorApi
 ** 2) Подключаем useState
 ** 2) Принимаем компонент View => реализация компонента  
     2.1. для изменения состояния errorApi пробрасываем prop  ===> setErrorApi={false or true}
     2.2 для отображение всех карточек разворачиваем props через spread syntax =  {...props}
 ** 3) импортируем модуль ErrorMassage
 ** 3) if  errorApi true then ? <ErrorMassage/> 
     else 
     ** 3.1 возвращаем принятый измененный компонент setErrorApi={setErrorApi} + {...props} пропсы изначального компонента
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
                                   setErrorApi={setErrorApi} // флаг ошибки 
                                   {...props} // карточки героев 
                              />
                         )
                    }
               </>
          )
     }
}