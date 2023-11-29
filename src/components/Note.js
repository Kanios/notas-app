import React from 'react';

function Note({ note, onDelete, onEdit }) {
  const { id, title, content } = note;

  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
      <button className="edit-button" onClick={onEdit}>Editar</button>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
}

export default Note;
