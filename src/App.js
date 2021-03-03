import React from 'react';
import NoteInput from './components/NoteInput';
import NotesList from './components/NotesList';
import Header from './components/Header';

function App() {
  return (
    <div className='main'>
      <Header />
      <NoteInput />
      <NotesList />
    </div>
  );
}

export default App;
