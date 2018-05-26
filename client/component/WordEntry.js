import React from 'react';

const WordEntry = ({handleDelete, word, idx}) => (
  <div>
    <button
      onClick={() => handleDelete(idx)}
    ></button>
    {word}
  </div>
);

export default WordEntry;
