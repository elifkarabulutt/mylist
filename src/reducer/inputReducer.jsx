
export const inputReducer = (state, action) => {
    console.log(action);
    return {
        ...state,
        [action.type]: action.value
    };

};