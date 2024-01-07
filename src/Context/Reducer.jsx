export const cartReducer = (state,action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {...state,cart:[...state.cart,(action.payload),]}
            case 'REMOVE_FROM_CART':
                return {...state,cart:state.cart.filter((c)=> c.id!==action.payload.id)}
        default:
            return state;
    }
}

export const filterReducer = (state,action)=>{
     switch(action.type){
        case 'FILTER_BY_STOCK':
            return {...state,bystock:!state.bystock}
            case 'FILTER_BY_FASTDEV':
            return {...state,byfast:!state.byfast}
            case 'FILTER_BY_SEARCH':
            return {...state,search:action.payload}
            case 'CLEAR_FILTER':
            return {bystock:false,
                byfast:false,
                search:'',}
            
        default:
            return state;
     }
}