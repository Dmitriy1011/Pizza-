const initialState = {
    items: [],
    isLoaded: false,   //false - когда при первом запуске пиццы ещё не загрузились
};


const pizzas = (state = initialState, action) => { //это reducer для redux

    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
            
        case 'SET_PIZZAS':
            return {
                ...state,
                isLoaded: action.payload,
            };
        
        default:
            return state;
        }
    }

//     if (action.type === 'SET_PIZZAS') { //если придёт SET_PIZZAS, возьми старые данные из state
//         return {                        //замени items и верни новый state
//             ...state,
//             items: action.payload,
//             isLoaded: true,   //когда пиццы уже загрузились
//         };
//     }
//     if (action.type === 'SET_LOADED') { //если придёт SET_PIZZAS, возьми старые данные из state
//         return {                        //замени items и верни новый state
//             ...state,
//             isLoaded: action.payload // то есть то, что передаём в payload, будет пихаться в isLoaded
//         }
//     }
//     return state;
// };

export default pizzas;