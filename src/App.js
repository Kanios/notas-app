import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import './App.css';
function App() {
  const initialNotes = [
    { id: 1, title: 'Nota 1', content: 'Esta es la nota 1' },
    { id: 2, title: 'Nota 2', content: 'Esta es la nota 2' },
    
  ];

  const [notes, setNotes] = useState(initialNotes);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Notas</h1>
      <NoteList notes={searchTerm ? filteredNotes : notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;