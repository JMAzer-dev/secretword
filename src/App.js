// CSS
import './App.css';

// Hooks
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from './data/words';

//Components
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

const stages = [
  { id:1, name: "start" },
  { id:2, name: "game" },
  { id:3, name: "end" }
]


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(5)
  const [score, setScore] = useState(0)

  //pick word & pick category
  const pickWordAndPickCategory = () => {
    //afunila a informação e capta apenas as keys
    const categories = Object.keys(words)
    //filtra novamente e retorna apenas 1 das categorias
    const category = 
    /* Arredonda o valor de MathRandom para baixo 
    e devolve categories[randomNumber de keyWordsLength ] que ja é uma das chaves em forma de string*/
      categories[Math.floor(Math.random() * Object.keys(words).length)];
    //pick a random word
    /*Como category ja é uma key de words é usada como primeiro índice de rastreamento e depois é passado mais um número aleatório no range da RANDOM KEY anterior de words */
    //retorno words[category][randomNumb(words[category].length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {word, category}

  } 
  //Start the secret word game 
  const startGame = () => {
    //pick word and pick category
    const { word, category } = pickWordAndPickCategory()
    // create an array of letters
    //separa as silabas e retorna um array
    let wordLetters = word.split("")
    //transforma em lowercase
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //fill states

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters)

    

    setGameStage(stages[1].name)
  };
  // process the letter input
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase()


  // check if letter has already been utilized
  if  (
    guessedLetters.includes(normalizedLetter) || 
    wrongLetters.includes(normalizedLetter)
  ) {
    return;
  }

  //pushed guessed letter remove a guess
  if(letter.includes(normalizedLetter)){
    setGuessedLetters((actualGuessedLetters) => [
      //adiciona + 1 letra correta
      ...actualGuessedLetters,
      normalizedLetter
    ]);
  } else {
    setWrongLetters((actualWrongLetters) => [
      //adiciona + 1 letra errada
      ...actualWrongLetters,
      normalizedLetter
    ]);
  }
};
console.log(guessedLetters)
console.log(wrongLetters)
  //restarts the game
  const retry = () => {
    setGameStage(stages[0].name)
  }
  return (
    <div className="App">
      {/* Condicional simples */}
      {gameStage === "start" && <StartScreen startgame={startGame}/>}

      {gameStage === "game" && <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}

      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
