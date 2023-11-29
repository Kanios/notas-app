import React, { useState, useRef } from 'react';

function NoteEditor({ addNote, editNote, editingIndex }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleInputRef = useRef(null);

  const handleAddNote = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      if (editingIndex !== null) {
        editNote(editingIndex, { title, content });
      } else {
        addNote({
          id: Date.now(),
          title,
          content,
        });
      }
      setTitle('');
      setContent('');
      titleInputRef.current.focus();
    }
  };

  return (
    <div className="note-editor">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleInputRef}
      />
      <textarea
        placeholder="Contenido de la nota"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleAddNote}>
        {editingIndex !== null ? 'Guardar   Cambios' : 'Agregar Nota'}
      </button>
    </div>
  );
}

export default NoteEditor;
