import React from 'react';
import FolderBrowser from './Components/Folderbrowser';
import { fileStructure } from './Config';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Folder Browser</h1>
      <FolderBrowser structure={fileStructure} />
    </div>
  );
};

export default App;
