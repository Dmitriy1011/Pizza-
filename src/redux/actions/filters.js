//здесь функции, связанные с фильтрацией

export const setSortBy = ({type, order}) => ({  //функция action-creator
   type: 'SET_SORT_BY',
   payload: {type, order},
});   

export const setCategory = (catIndex) => ({  //функция action-creator
    type: 'SET_CATEGORY',
    payload: catIndex,
 });  