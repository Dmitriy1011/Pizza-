import React from 'react';
import PropTypes from 'prop-types';

const SortPopup = React.memo(function SortPopup({items, activeSortType, onClickSortType}) { // React.memo - делает поверхностной сравнение, т.е смотрит, изменился ли items, если не измениося, не делает ререндер, и наоборот

  const [visiblePopup, setVisiblePopup] = React.useState(false); //по умолчанию в функцию useState передаём значение false и оно перекидывается в переменную visiblePopup
                                                                  //далее функция setVisiblePopup будет менять значение переменной visiblePopup на то, которое мы захотим, и оповестить реакт и сделать rerender
  
  const sortRef = React.useRef(); //при первой инициализации это хука, в sortRef будет null
  //хук useRef сохраняет ссылки , например, на элементы DOM или что нибудь другое
  //useRef нужен для того, чтобы всегда хранить актуальные значения


  const activeLabel = items.find((obj) => obj.type === activeSortType).name; //найти каждый объект в массиве и его тип сравнить в activesortType //он сравнит и вернёт один объект

  const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup);

 
  }   

  const handleOutsideClick = (event) => {  //функция, которая отлавливает клик вне
    var path = event.path || (event.composedPath && event.composedPath());  
    if (!path.includes(sortRef.current)){
      setVisiblePopup(false);
      
      }
  }


  const onSelectItem = (index) => { //контролирует отображение и скрытие PopUp
      if (onClickSortType) {
          onClickSortType(index);
      }
      setVisiblePopup(false);
  }

  React.useEffect(() => {
      document.body.addEventListener('click', handleOutsideClick);
      
  }, []);

  // React.useEffect(() => {      // следит за событиями компонента (оповещает нас), контролирует, при каком действии вносить изменения
  //     setTimeout(() => {
  //         console.log(111);   //если компонент один раз отрендерился , вызови это действие и никогда больше его не вызывай
  //     }, 500);
  // }, []);      //[] - пустой массив означает, что нет никаких зависимостей
  //              //[visiblePopup] - если есть зависимость и переменная изменится, то вызовется useEffect ,иначе он не вызовется

  return (
      <div ref={sortRef} className="sort">  
            <div className="sort__label">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
                />
              </svg>
              <b>Сортировка по:</b>
              <span onClick={toggleVisiblePopup}>{activeLabel}</span>
            </div>
            {visiblePopup && (
               <div className="sort__popup"> 
              <ul>
               {items && 
                  items.map((obj, index) => (
                  <li 
                  onClick={() => onSelectItem(obj)}
                  className = {activeSortType === obj.type ? 'active' : ''} 
                  key={`${obj.type}_$(index)`}>
                  {obj.name}
                  </li>
                  ))}
              </ul>
            </div>
            )}
            </div>
  )
})

SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,  //здесь мы говорим, что PropTypes является массивом объекта
  onClickSortType: PropTypes.func.isRequired,
};

SortPopup.defaultProps = { //если передал не то, что мы хотели, то верни items
    itmes: [],
};

export default SortPopup
  