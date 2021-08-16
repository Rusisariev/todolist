let initialState = {
    posts: []
}


const todoReducer = (state = initialState, action) => {
    console.log("reducer")
    switch (action.type) {
        case 'ADD_TASK_LIST':
            const arr = [...state.posts]
            arr.push({id: 1,taskList: action.payload, performed: false})
            return {...state, posts: arr}
        case 'DELETE_TASK_LIST':
            const arr2 = JSON.parse(JSON.stringify(state.posts))
            arr2.splice(action.payload, 1)
            return {...state, posts: arr2}
        default:
            return state
    }
}

export default todoReducer