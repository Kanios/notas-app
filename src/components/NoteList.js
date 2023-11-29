import React, { useState } from 'react';
import Note from './Note';
import NoteEditor from './NoteEditor';

function NoteList() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Nota 1', content: 'Esta es la nota 1' },
    { id: 2, title: 'Nota 2', content: 'Esta es la nota 2' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const editNote = (index, updatedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
    setEditingIndex(null); 
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setEditingIndex(null);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
  };

  const cancelEditing = () => {
    setEditingIndex(null);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="note-list">
      <NoteEditor
        addNote={addNote}
        editNote={editNote}
        editingIndex={editingIndex}
      />
      <input
        type="text"
        placeholder="Buscar notas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="notes-container">
        {searchTerm
          ? filteredNotes.map((note, index) => (
              <Note
                key={note.id}
                note={note}
                onDelete={() => deleteNote(note.id)}
                onEdit={() => startEditing(index)}
              />
            ))
          : notes.map((note, index) => (
              <Note
                key={note.id}
                note={note}
                onDelete={() => deleteNote(note.id)}
                onEdit={() => startEditing(index)}
              />
            ))}
      </div>
    </div>
  );
}

export default NoteList;
