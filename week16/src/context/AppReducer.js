export default (state, action) => {
    switch(action.type) {
        case 'REMOVE_BURGER':
            return {
                burgers: state.burgers.filter(burger => {
                    return burger.id !== action.payload
                })
            }
        case 'ADD_BURGER':
            return {
               burgers: [action.payload, state.burgers] 
            }
        
        default:
            return state
    }
}