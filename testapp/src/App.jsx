import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

// compontent outside app to prevent re-rendering of whole app
function CourseComponent({ courses, inText, TextChange, OnSubmitForm }) {
  return (
    <>
      <h2>Liczba kursow: {courses.length}</h2>
      <ol>
        {courses.map((cname, idx) => (
          <li key={idx}>{cname}</li>
        ))}
      </ol>

      <form onSubmit={OnSubmitForm}>
        <label htmlFor="inputText" className="form-label">Imię i nazwisko:</label>
        <input
          type="text"
          name="inputText"
          className="form-control"
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
          value="1"
        /><br/>

        <button type="submit" className="btn btn-primary">Zapisz do kursu</button>
      </form>
    </>
  )
}

function App() {
  const [courses, setCourse] = useState(["Programowanie w C#", "Angular dla poczatkujacych", "Kurs Django"])
  const [inText, setInText] = useState("")

  const OnSubmitForm = (e) => {
    e.preventDefault()
    console.log(inText)
  }

  const TextChange = (e) => {
    setInText(e.target.value)
  }

  return (
    <>
      <CourseComponent
        courses={courses}
        inText={inText}
        TextChange={TextChange}
        OnSubmitForm={OnSubmitForm}
      />
    </>
  )
}

export default App