import React, {useState} from 'react';
import {addNewNote} from '../redux/actions/notesActions';
import {useDispatch} from 'react-redux';
import {FormHelper, FormUpload, Inputs, SubmitButton} from '../styles/NoteInput.styled';

function NoteInput() {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();
  const addNote = (note) => dispatch(addNewNote(note));

  const onNoteChange = (e) => {
    setNote(e.target.value);
  }

  const onNotesSubmit = e => {
    e.preventDefault();
    addNote({
      id: Math.random(),
      name: note,
      completed: false
    });

    setNote('');
  }

  return (
    <FormHelper>
      <FormUpload onSubmit={onNotesSubmit}>
          <Inputs
          type="text"
          name="note"
          value={note}
          onChange={onNoteChange}
        />
        <SubmitButton type="submit">Add</SubmitButton>
      </FormUpload>
    </FormHelper>
  )
}

export default NoteInput;