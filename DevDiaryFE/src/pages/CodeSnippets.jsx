import React, { useState } from 'react';

const CodeSnippets = () => {
  const [snippets, setSnippets] = useState([
    { id: 1, code: "const sum = (a, b) => a + b;", description: "A simple function to add two numbers." }
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Code Snippets</h2>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
        Add Snippet
      </button>
      {snippets.map(snippet => (
        <div key={snippet.id} className="bg-white p-4 rounded shadow mb-4">
          <pre className="text-gray-600 bg-gray-100 p-2 rounded">{snippet.code}</pre>
          <p className="text-gray-600">{snippet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CodeSnippets;
