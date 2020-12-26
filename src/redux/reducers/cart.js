const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,   //false - когда при первом запуске пиццы ещё не загрузились
};


const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0); //возьми массив, пробегайся по нему и найди итоговое значение totalPrice

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
}

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
}
    
const cart = (state = initialState, action) => { //это reducer для redux

    switch (action.type) {   //action передаётся в reducer //затем возьми весь state(объект), когда придёт action 
        case 'ADD_PIZZA_CART': { //создай новый объект: возми всё из старого состояния (...state) и в свойстве items содзай новый объект
            
            const currentPizzaItems = !state.items[action.payload.id] //если ничего нет
            ? [action.payload] 
            : [...state.items[action.payload.id].items, action.payload]; // создай массив, если старые значения, помещай их в новый
            //если при вызове следующего action, если не отрицательные значения, то старые значения добавляются в конец нового массива
            
            
            const newItems =  {               //в этом объекте включи action.payload.id ( то есть если хотим передавать какое-либо динамическое значение, то делаем [action.payload.id])
                ...state.items,             //в этот ключ передай массив. когда будешь передавать, передавай старый state (массив), пихни его в новый массив, и в конец массива добавь объект с пиццей action.payload
                    [action.payload.id]: {
                        items: currentPizzaItems,
                        totalPrice: getTotalPrice(currentPizzaItems),
                    },
            
            };
            

                    const totalCount = getTotalSum(newItems, 'items.length');
                    const totalPrice = getTotalSum(newItems, 'totalPrice');
            
                    return {
                    ...state,
                    items: newItems,
                    totalCount,
                    totalPrice,
                };
            }

        case 'PLUS_CART_ITEM':{
            const newObjItems = [...state.items[action.payload].items, 
                                state.items[action.payload].items[0]]
            
            // [...state.items[action.payload].items, 
            //                         state.items[action.payload].items[0]];
            
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
            },
        };
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

           
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
            };   
        

            case 'MINUS_CART_ITEM': {
                const oldItems = state.items[action.payload].items;
                const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
                
                const newItems = {
                    ...state.items,
                    [action.payload]: {
                        items: newObjItems,
                        totalPrice: getTotalPrice(newObjItems),
                    },
                };
                
                const totalCount = getTotalSum(newItems, 'items.length');
                const totalPrice = getTotalSum(newItems, 'totalPrice');
                
                return {
                    ...state,
                    items: newItems,
                    totalCount,
                    totalPrice,
                }
             };   
            
        case 'CLEAR_CART':
            return {
                totalPrice: 0,
                totalCount: 0,
                items: {},
            }


        case 'REMOVE_CART_ITEM':
            const newItems = {
                ...state.items    //здесь клониурем объект и делам изменения в новом
            };

            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;

        
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        default:
            return state;
        }
    };

    export default cart;