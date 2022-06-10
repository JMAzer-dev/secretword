import './StartScreen.css'

const StartScreen = ({startgame}) => {
  return (
    <div className="start" >
        <h1>Palavra Secreta</h1>
        <p>Clique para começar</p>
        <button onClick={startgame}>COMEÇAR</button>
    </div>
  )
}

export default StartScreen