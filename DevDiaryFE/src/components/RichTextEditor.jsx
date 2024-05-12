import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

const RichTextEditor = ({ content, onContentChange }) => {
//   const [content, setContent] = useState(initialContent);

  const handleContentChange = (newContent) => {
    // setContent(content);
    // console.log(content)
    onContentChange(newContent)
  };

  return (
    <ReactQuill theme="snow" value={content} onChange={handleContentChange} />
  );
};

export default RichTextEditor;
 