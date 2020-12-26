export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,

})

export const clearCart = () => ({
    type: 'CLEAR_CART',

})

export const removeCartItem = (id) => ({ //передаём id пиццы, которую надо удалить
    type: 'REMOVE_CART_ITEM',
    payload: id,
})


export const plusCartItem = (id) => ({ //передаём id пиццы, которую надо удалить
    type: 'PLUS_CART_ITEM',
    payload: id,
})


export const minusCartItem = (id) => ({ //передаём id пиццы, которую надо удалить
    type: 'MINUS_CART_ITEM',
    payload: id,
})