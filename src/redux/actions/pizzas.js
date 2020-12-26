import axios from 'axios';

export const setLoaded = (payload) => ({ //эта функция будет возвращать объект
        type:'SET_LOADED',        //эта функция будет передавать в reducer pizzas TRUE или FALSE, будет менять статус загрузки
        payload,
});

//метод FETCHPIZZAS нужен для получения и сохранения пицц
export const fetchPizzas = (sortBy, category) => (dispatch) => { //fetch(дай что-то) - обращение к серверу
    dispatch(setLoaded(false)); //до выполнения axios будет false //после выполнения - true (в pizzas reducers) это метод SET_LOADED
    //затем выполняется метод SET_PIZZAS: он сохраняет пиццы и ставит флаг true о том, что всё загружено
    axios.get(`http://localhost:3000/pizzas?${category !== null ? `category=${category}` : '' }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({data})=> { // ->отправь на сервер этот запрос. Когда эти данные будут получены ->
            dispatch(setPizzas(data)); // -> выполни эту функцию и вызови dispath. Dispatch должен получать setPizzas(объект)
                                                 //далее функция получает все пиццы, создаёт объект и этот объект передаёт в dispath, который передаёт это в redux
});
};

// axios.get('http://localhost:3003/db.json').then(({data})=> { - выполнение get запроса
// dispatch(setPizzas(data)); - сохранение в redux
//благодаря библиотеке REDUX-THUNK мы можем дождаться выполнения get запроса, а потом сохранить что-то в redux

export const setPizzas = (items) => ({  //функция action-creator - функция, которая возвращает объект. Функция принимает динамические данные и прокидывает их в параметры
    type: 'SET_PIZZAS',          //мы говорим, что Функция setPizzas должна взять массив пицц и создать объект
    payload: items,              //этот объект будет type: SET_PIZZAS и получать payload с массивом
 });   
 
//МЕТОД SETPIZZAS нужен только для сохранения пицц




//  const setPizzas = ({  //это просто Action
//     type: 'SET_PIZZAS',          
//     payload: items,              
//  });   



//  const setCategory = (catIndex) => ({  //функция action-creator
//      type: 'SET_CATEGORY',
//      payload: catIndex,
//   });  