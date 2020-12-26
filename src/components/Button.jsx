import React from 'react';
import classNames from 'classnames'
//если компонент содержит только то, что вернется в верстке, то лучше использовать функциональный компонент

function Button({ onClick, className, outline, children}) {  //в классах нет return
    
    // componentDidMount() { //этот метод позволяет узнать, когда компонент (например, Button) внедрится в нашу верстку
    //     console.log('Компонент кнопка отобразился');
    // }

    return (
    // componentDidUpdate() { //метод говорит о том, что в компоненте произошло какое-то действие(обновление)

    // }

     //метод, который возвращает нам то, что мы должны увидеть в итоге на экране(в верстке)
        
      <button onClick={onClick} 
      className={classNames('button', className, {
                'button--outline' : outline,
            })}>
                {children}
            </button> //this - это обращение к классу
    )

}    //{`button ${this.props.outline ? 'button--outline' : ''}`}>{this.props.children}</button>

/*
//PROPS - это свойства(аргументы)
        function hello(a, b) {
            return a + b
        }
        
hello(1,2)
*/

export default Button;



