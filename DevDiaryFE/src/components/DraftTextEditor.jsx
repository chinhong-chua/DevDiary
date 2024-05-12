import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const DraftTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  return (
    <Editor editorState={editorState} onChange={handleEditorChange} />
  );
};

export default DraftTextEditor;
