
export function minusAction() {
    return {
        type: "MINUS_ONE"
    }
}

export function minusReducer(state={number: 0}, action) {
    switch (action.type) {
        case 'MINUS_ONE': {
            return {
                ...state,
                number: state.number - 1
            }
        }
        default:
            return state;
    }
}