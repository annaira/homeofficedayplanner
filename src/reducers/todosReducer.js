const initialState = [
    {
        id: "1",
        time: "12:00",
        todo: "Lunch Break",
        memo: "Salad with Mushrooms"
    },
    {
        id: "2",
        time: "10:00",
        todo: "Yoga Break",
        memo: "Sun Salutations"
    },
    {
        id: "3",
        time: "17:00",
        todo: "Call Mom & Dad",
        memo: "Hangouts"
    },
];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
                action.payload
            ];
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);

        default:
            return state
    }
};

export default todosReducer;