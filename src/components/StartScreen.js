import './StartScreen.css'

const StartScreen = ({startgame}) => {
  return (
    <div className="start" >
        <h1>Secret Word</h1>
        <p>Clique to start</p>
        <button onClick={startgame}>START</button>
    </div>
  )
}

export default StartScreen