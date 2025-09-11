import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

// compontent outside app to prevent re-rendering of whole app
// variables in square brackets are to be passed in App() render 
// i.e <courseComponent courses={courses} ... />
// 
function CourseComponent({ courses, inText, TextChange, OnSubmitForm, inNumber, NumChange }) {
  return (
    <>
      <h2>Liczba kursow: {courses.length}</h2>
      <ol>
        {courses.map((cname, CourseID) => (
          <li key={CourseID}>{cname}</li>
        ))}
      </ol>

      <form onSubmit={OnSubmitForm}>
        <label htmlFor="inputText" className="form-label">Imię i nazwisko:</label>
        <input
          type="text"
          name="inputText"
          className="form-control"
          placeholder="Jan Kowalski"
          value={inText} // set value of field from previous state
          onChange={TextChange}
        /><br/>

        <label htmlFor="inputNumber" className="form-label">Numer kursu:</label>
        <input
          type="number"
          name="inputNumber"
          className="form-control"
          max={courses.length}
          min="1"
          placeholder="1"
          value={inNumber}
          onChange={NumChange}
        /><br/>

        <button type="submit" className="btn btn-primary">Zapisz do kursu</button>
      </form>
    </>
  )
}

function App() {
  const [courses, setCourse] = useState(["Programowanie w C#", "Angular dla poczatkujacych", "Kurs Django"])
  const [inText, setInText] = useState("")
  const [inNumber, setInNumber] = useState(1)

  const OnSubmitForm = (e) => {
    e.preventDefault()
    console.log(inText, inNumber)
  }

  const TextChange = (e) => {
    setInText(e.target.value)
  }

  const NumChange = (e) => {
    setInNumber(e.target.value)
  }

  return (
    <>
      <CourseComponent
        courses={courses}
        inText={inText}
        TextChange={TextChange}
        OnSubmitForm={OnSubmitForm}
        NumChange={NumChange}
      />
    </>
  )
}

export default App