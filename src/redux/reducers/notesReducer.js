import {ADD_NEW_NOTE, TOGGLE_NOTE, DELETE_NOTE} from '../types/notesTypes';

const initialState = {
    notes: [
        {
            id: Math.random(),
            name: 'Test',
            completed: false
        }
    ]
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }

        case TOGGLE_NOTE:
            return {
                ...state,
                notes: state.notes.map((note) => note.id === action.payload ? {...note, completed: !note.completed}: note)
            }

        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload)
            }

        default:
            return state;
    }
}

export default notesReducer;