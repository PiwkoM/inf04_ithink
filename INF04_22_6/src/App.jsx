import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css' ;

function App() {
  const [courses, setCourses] = useState(["Programowanie w C#","Angular dla poczatkujacych","Kurs Django"])
  const [name, setName] = useState('')
  const [num, setNum] = useState(0)
  
  const NameChange = (e) => {
    setName(e.target.value)
  }
  const NumChange = (e) =>{
    setNum(e.target.value)
  }

  const OverrideSubmit = (e) =>{
    e.preventDefault()
    console.log(name)
    if(num > (courses.length)-1 || num<0){
      console.log("Nieprawidłowy numer kursu")
    } else {
      console.log(courses[num-1])
    }
  }

  return (
    <>
    <h2>Liczba Kursow: {courses.length}</h2>
    <ol>
      {courses.map(course => (
        <li key={course}>{course}</li>
      ))}
    </ol> 
      <form className="form-group" onSubmit={OverrideSubmit}>
        <label htmlFor="NameInput" className="">Imie i nazwisko:</label>
        <input className="form-control" name="NameInput" type="text" onChange={NameChange}/>
        <label htmlFor="NumberInput" className="">Numer kursu:</label>
        <input className="form-control" min="1" name="NumberInput" type="number" onChange={NumChange}/>
        <br/><button className="btn btn-primary" type="submit">Zapisz do kursu</button>        
      </form>
    </>
  )
}

export default App
