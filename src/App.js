// CSS
import './App.css';

// Hooks
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from './data/words';

//Components
import StartScreen from './components/StartScreen';



function App() {
  return (
    <div className="App">
      <StartScreen/>
    </div>
  );
}

export default App;
