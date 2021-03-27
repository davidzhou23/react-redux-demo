

export function plusAction(payload) {
    return {
        type: "PLUS_ONE",
        payload
    };
}

export function plusReducer(state = {number: 0}, action) {
    console.log('plusReducer');
    switch (action.type) {
        case "PLUS_ONE": {
            return {
                ...state,
                number: action.payload + 1
            }
        }
        default:
            return state;
    }
}