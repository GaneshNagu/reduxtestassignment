const initialState = {
    userDetails: []

}
const Reducer = (state = initialState, action) => {
    if (action.type === "STORE_DETAILS") {
        return {
            ...state,
            userDetails: state.userDetails.concat({ name: action.name, age: action.age, id: new Date() })
        }
    }
    if (action.type === "DELETE_DETAILS") {
        console.log("dlete Handler clicked");
        return {
            ...state,
            userDetails: state.userDetails.filter(personName => personName.id !== action.personId)
        }
    }
    return state;

    // const newUpdatedArray = state.result.filter(result => result.id !== action.resultEid)

    // return {
    //     ...state,
    //     result: newUpdatedArray
    // }

}

export default Reducer;