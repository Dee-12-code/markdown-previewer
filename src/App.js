import React, { useState } from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Previewer!

## Subheading
[freeCodeCamp](https://www.freecodecamp.org/)

Inline \`code\`

\`\`\`javascript
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote

![Image](data:image/jpeg;base64,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)

**Bold Text**`);

  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`container mt-5 ${darkMode ? 'dark-mode' : ''}`}>
      <div className="text-center mb-4">
        <h1 className="display-4">Markdown Previewer</h1>
        <p className="text-muted">Type Markdown on the left, see the magic on the right!</p>
        <button className="btn btn-secondary mb-3" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-primary">Editor</h3>
          <textarea
            id="editor"
            className="form-control shadow-sm p-3 mb-3 bg-white rounded"
            value={markdown}
            onChange={handleChange}
            rows="20"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-success">Preview</h3>
          <div
            id="preview"
            className="border shadow-sm p-3 mb-3 bg-white rounded"
            dangerouslySetInnerHTML={{
              __html: marked(markdown),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
