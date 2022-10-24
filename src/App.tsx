import React from 'react';
import Hello from '../src/components/Hello'
import SecondEx from './components/SecondEx';

function App() {
  return (
    <div className="App">
      <Hello name="Osman" label={12} onSmtHappen={(name) => console.log(name)} />

      <SecondEx name='Kanan' surname='Akhmadzade'  isWorker={true} getTest={(tested) => console.log(tested)} />

    </div>
  );
}

export default App;
