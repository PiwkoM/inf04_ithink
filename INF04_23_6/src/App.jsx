import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [movieGenre, setMovieGenre] = useState([" ","Komedia","Obyczajowy","Sensacyjny","Horror"])
  const [moviename, setMovieName] = useState("")
  const [movieTypeNumber, setMovieTypeNumber] = useState(0)

  const OverrideSubmit = (e) =>{
    e.preventDefault()
    console.log("tytul: "+moviename+"; rodzaj: "+movieTypeNumber)

  }

  const getName = (e) => {
    setMovieName(e.target.value)
  }

  const getGenre = (e) => {
    console.log(e.target.value)
    setMovieTypeNumber(e.target.value)
  }

  return (
    <>
      <form onSubmit={OverrideSubmit}>
      <label htmlFor="inputName">Tytul Filmu</label>
      <input type="text" className="form-control" onChange={getName}/>
      <label htmlFor="inputGenre">Rodzaj</label>
      <select className="form-select" onChange={getGenre}>
        {movieGenre.map(n=> (
          <option value={movieGenre.indexOf(n)}>{n}</option>
        ))}
      </select>
      <br/><button type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    </>
  )
}

export default App
