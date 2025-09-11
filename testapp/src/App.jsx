import { useState } from 'react'


function App() {
  const [courses,setCourse] = useState(["Programowanie w C#","Angular dla poczatkujacych","Kurs Django"])

  const CourseComponent=()=>{
    
    return(
      <>
      <h2>Liczba kursow: {courses.length}</h2>
      <ol>
      {courses.map(n=>(
        <li>{n}</li>
      ))}
      </ol>
      </>
    )
  }
  
  return (
    <>
    <CourseComponent/>
    </>
  )
}

export default App
