import React from 'react';
import Hello from '../src/components/Hello'

function App() {
  return (
    <div className="App">
      <Hello name="Osman" label={12} onSmtHappen={(name) => console.log(name)} />
      
    </div>
  );
}

export default App;
