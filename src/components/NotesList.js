import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {toggleNotes, deleteNote} from '../redux/actions/notesActions';
import {DisplayNotes, DisplayNote, InputsChecked, NoteName, DeleteNote} from '../styles/NotesList.styled';
function NotesList() {

    const notes = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    const toogleNote = (noteId) => dispatch(toggleNotes(noteId));
    const deleteNoteAction = (noteId) => dispatch(deleteNote(noteId));

    return (
        <DisplayNotes>
            {notes.map((note) => (
               <DisplayNote key={note.id}>
               <InputsChecked
                 type="checkbox"
                 checked={note.completed}
                 onChange={toogleNote.bind(null, note.id)}
               />
               <NoteName className={note.completed ? 'complete' : null}>{note.name}</NoteName>
               <DeleteNote
                 className="delete-button"
                 onClick={deleteNoteAction.bind(null, note.id)}
               >
                 X
               </DeleteNote>
             </DisplayNote>
            ))}
        </DisplayNotes>
    )
}

export default NotesList
