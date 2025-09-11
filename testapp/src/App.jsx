import { useState } from 'react'

function App() {
  const [course, setCourse] = useState(["Programowanie w C#","Angular dla początkujących","Kurs Django"])

  return (
    <>
      <h2>Liczba kursow {course.length}</h2>
      <table>
        {course.map(s => (
          <tr>{s.id}. {s}</tr>
        ))}
      </table>
      <form>
        <label for="nameInput">Imię i Nazwisko:</label>
        <input type="text" name="nameInput"></input>
        <label for="numberInput">Numer kursu:</label>
        <input type="number" name="numberInput"></input>  
        <button type="button">Zapisz do kursu</button>
      </form>
    </>
  )
}

export default App
