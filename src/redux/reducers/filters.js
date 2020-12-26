//здесь будем хранить сортировку и категории
//здесь функции, связанные с фильтрацией
const initialState = {
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc',
    }
};


const filters = (state = initialState, action) => { //это reducer для redux

    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload,
        }
    }
    if (action.type === 'SET_CATEGORY') {
    return {
        ...state,
        category: action.payload,
    }
}
return state;
};


export default filters;