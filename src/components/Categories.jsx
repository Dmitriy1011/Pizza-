import React from 'react'
import PropTypes from 'prop-types';

// class Categories extends React.Component {

//   state = {     //должна быть выбрана категория и её нужно где-то хранить. Для этого нужно состояние
//     activeItem: 3,   //в классен создаётся состояние
//   }


//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,         //с помощью setState меняем свойство
//     });
//     this.forceUpdate(); //это rerender этот метод оповещает React о том, что нужно производить обновление (при нажатии менять состояние)
//   }


//   render() {
//     const {items, onClickItem} = this.props;
//     return (
//               <div>
//                   <div className="categories">
//                     <ul>
//                       <li>Все</li>
//                       {items.map((name, index) => (
//                         <li className={this.state.activeItem === index ? 'active' : ''}
//                         onClick={()=>this.onSelectItem(index)}
//                         key={`${name}_${index}`}>
//                         {name}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//               </div>
//           )
//   }
// }

const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {


  // const activeItem = state[0];
  // const setActiveItem = state[1];


  
  return (
      <div>
          <div className="categories">
            <ul>
              <li className = {activeCategory === null ? 'active' : ''} 
              onClick={()=>onClickCategory(null)}>Все</li>
              {
                  items && items.map((name, index) => (
                  <li className = {activeCategory === index ? 'active' : ''} 
                  onClick={()=> onClickCategory(index)}
                  key={`${name}_$(index)`}>
                  {name}
                  </li>
                  ))}
            </ul>
          </div>
      </div>
  )
})

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,  
  onClickCategory: PropTypes.func
};

//добавляем типизацию
Categories.defaultProps = {activeCategory: null, items:[] }//если types не был передан, то ошибки не будет



export default Categories;
