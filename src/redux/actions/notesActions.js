import {ADD_NEW_NOTE, TOGGLE_NOTE, DELETE_NOTE} from '../types/notesTypes';

export const addNewNote = (note) => ({
    type: ADD_NEW_NOTE,
    payload: note
})

export const toggleNotes = (noteId) => ({
    type: TOGGLE_NOTE,
    payload: noteId
})

export const deleteNote = (noteId) => ({
    type: DELETE_NOTE,
    payload: noteId
})