export default (state, action) => {
    switch(action.type) {
        case 'REMOVE_DESTINATION':
            return {
                destinations: state.destinations.filter(destination => {
                    return destination.id !== action.payload
                })
            }
        case 'ADD_DESTINATION':
            return {
               destinations: [action.payload, ...state.destinations] 
            }
        case 'EDIT_USER':
            const updateDestination = action.payload;

            const updateDestinations = state.destinations.map(destination => {
                if(destination.id === updateDestination.id) {
                    return updateDestination;
                }
                return destination;
            })

            return {
                destinations: updateDestinations
            }
        
        default:
            return state
    }
}