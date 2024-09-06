const defaultCartState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
  popupActive: false,
}

const ADD_product = 'ADD_product';
const REMOVE_product = 'REMOVE_product';
const INCR_count = 'INCR_count';
const DECR_count = 'DECR_count';
const POPUP_active = 'POPUP_active';

//action = {type: '', payload: ''}
export const productsReducer = (state = defaultCartState, action) => {
  switch (action.type) {
    case ADD_product:
      for (let product of state.products) {
        if (product.id === action.payload.id) {
          let itemCount = product.count;
          product.count = 1;
          return {...state, 
            products: state.products.filter(product => product.id !== action.payload.id), 
            totalPrice: state.totalPrice - action.payload.totalPrice, 
            totalCount: state.totalCount - itemCount}
        } 
        product.isActive = true;
      }
      return {...state, 
        products: [...state.products, action.payload],
        totalPrice: state.totalPrice + action.payload.totalPrice,
        totalCount: state.totalCount + 1}    
    case REMOVE_product:
      return {...state, 
        products: state.products.filter(product => product.id !== action.payload.id), 
        totalPrice: state.totalPrice - action.payload.totalPrice, 
        totalCount: state.totalCount - action.payload.count}
    case INCR_count:
      return {...state, 
        products: [...state.products], 
        totalPrice: state.totalPrice + action.payload.price,
        totalCount: state.totalCount + 1}
    case DECR_count:
      return {...state, 
        products: [...state.products], 
        totalPrice: state.totalPrice - action.payload.price,
        totalCount: state.totalCount - 1}
    case POPUP_active:
      return {...state,
        popupActive: action.payload
      }
    default:
      return state;
  }
}

export const addProductAction = (payload) => ({type: ADD_product, payload});
export const removeProductAction = (payload) => ({type: REMOVE_product, payload});
export const incrCountAction = (payload) => ({type: INCR_count, payload});
export const decrCountAction = (payload) => ({type: DECR_count, payload});
export const activePopup = (payload) => ({type: POPUP_active, payload});