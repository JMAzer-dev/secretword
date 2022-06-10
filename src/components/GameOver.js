import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Try Again</h1>
      <button onClick={retry}>Retry</button>
    </div>
  )
}

export default GameOver