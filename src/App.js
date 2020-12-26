import React from 'react';


import { Header } from './components';
import {Home, Cart} from './pages';
import {Route} from 'react-router-dom';


function App () {                                 
 
  return (
    <div>
      <div className="wrapper">
     <Header/>
     {/* <Button outline>Кнопка</Button>
     <Button onClick={clickPoKnopke}>123</Button> */}
     <div className="content">
   <Route path="/" component={Home} exact />
       <Route path="/cart" component={Cart} exact />
     </div>
   </div>
    </div>

  );
}

export default App;

// class App extends React.Component {

//   // componentDidMount() {   //здесь говорим, что когда произойдет первый рендер компонента, вызывай axios, обращайся к запросу и передай куда-то данные
//   //   axios.get('http://localhost:3000/db.json').then(({data})=> {
//   //            this.props.setPizzas(data.pizzas);
//   //            });
//   // }

//       render() {
//       }

// }

// const mapStatetoProps = state => { //взять state и поместить его в props 
//  return {               //затем state вытаскивает из хранилища то, что нам нужно
//     items: state.pizzas.items    //вытаскиваем pizzas и items и передаём свойства items
//  }
// }
// //затем connect берет все пропсы из App , берет объект (возвращаемый функцией mapStatetoProps)
// //объединит его в один пропс и будет использовать там, где нужно 

// const mapDispatchToProps = dispatch => { //пропихивает в пропс компонента action-creators и вызывать их как функции
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
   
//   }
// }


// export default connect(mapStatetoProps, mapDispatchToProps)(App); //объясняем, что теперь компонент должен понимать redux (следить за хранилищем)
//               //connect имеет 2 функции : actions и состояния (то, что нужно вытащить из хранилища)
//               //connect возвращает в пропсах dispatch
