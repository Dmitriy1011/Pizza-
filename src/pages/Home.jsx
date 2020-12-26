import React from 'react';
import {  Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux'; 


import {setCategory, setSortBy} from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';
import {addPizzaToCart} from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые'];
const sortItems = [
  {name:'популярности', type: 'popular', order: 'desc'},
  {name:'цене', type: 'price', order:'desc'},
  {name:'алфавит', type:'name', order: 'asc'},
];


function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas}) => pizzas.items);
  const cartItems = useSelector(({cart}) => cart.items);
  const isLoaded = useSelector(({ pizzas}) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {     //когда произойдет первый рендер ->

    dispatch(fetchPizzas(sortBy, category));    
    
}, [category, sortBy]); //когда свойство category меняется, производим useEffect

  const onSelectCategory = React.useCallback((index) => { //один раз при первом render запомним ссылку и больше не будем её менять
    dispatch(setCategory(index)); //это делаем для того, чтобы не происходил rerender 2 раза //
  }, []);


  const onSelectSortType= React.useCallback((type) => { //один раз при первом render запомним ссылку и больше не будем её менять
    dispatch(setSortBy(type)); //это делаем для того, чтобы не происходил rerender 2 раза //
  }, []);
  
   //вытащи из первого параметра pizzas и filters
  //   return {
  //     // items: pizzas.items, //верни мне items, который хранится в pizzas.items
  //     // sortBy: filters.sortBy, //и sortBy, который хранится в фильтрах sortBy
  //   }
  // }); //useSelector получает функцию

    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
        })
    }

    return (
      <div>
      <div className="container">
   <div className="content__top">
    <Categories 
         activeCategory = {category}
         onClickCategory={onSelectCategory}
         items = {categoryNames}/>
     <SortPopup activeSortType = {sortBy.type} items={sortItems} onClickSortType ={onSelectSortType} />
   </div>
   <h2 className="content__title">Все пиццы</h2>
   <div className="content__items">
     {
       isLoaded ? items.map((obj)=>
       <PizzaBlock  onClickAddPizza = {handleAddPizzaToCart} key = {obj.id} addedCount = {cartItems[obj.id] && cartItems[obj.id].items.length} {...obj} />) //каждый объект, который есть в массиве, передаётся сюда //...obj значит, что все свойства, которые есть в массиве буду передаваться в этот компонент
       : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
      }                                          
     
       
     
</div>
</div>
 </div>
         
       
      
    )
}

export default Home;
