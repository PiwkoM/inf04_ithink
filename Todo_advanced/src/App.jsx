import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [todoList, setList] = useState([{id: 1, task:"yo mama",severity: 'low'}])
  const [taskValue, setValue] = useState('')
  const [severity,setSeverity] = useState('')
  // const [severityFilter,setFilter] = useState({
  //   low: false,
  //   medium: false,
  //   high: false
  // })
  const getValue = (e) => {
    setValue(e.target.value)
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
      task: taskValue,
      severity: severity
    }
    setList(prev => [...prev,newTask])
    console.log(todoList)
  }

  const HandleSeverityChange = (e) => {
    setSeverity(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
    <div className="container-sm sb-4">
      <h4 className="mt-3 mb-3">Lista zadań z priorytetami (Zaawansowana)</h4>
      <div className="container-sm row">
        <div className="col-md-6">
          <div className="card">
            <h5 className="card-header">Dodaj nowe zadanie</h5>
            <div className="card-body m-2">
              <form onSubmit={HandleSubmit}>
              <label className="form-input-label" for="task">Zadanie:</label>
              <input type="text" className="form-control mb-2" id="task" placeholder="Wprowadź treść zadania..."
              onChange={getValue}/>

              <label className="form-input-label" for="radios">Priorytet:</label>
              <div className="form-check" id="radios">
              <input type="radio" className="form-check-input" name="taskSeverity" value="low" onChange={HandleSeverityChange}/> Niski
              </div>
              <div className="form-check">
              <input type="radio" className="form-check-input" name="taskSeverity" value="medium" onChange={HandleSeverityChange}/> Średni
              </div>
              <div className="form-check">
              <input type="radio" className="form-check-input" name="taskSeverity" value="high" onChange={HandleSeverityChange}/> Wysoki
              </div>

              <button type="submit" className="btn btn-primary">Dodaj zadanie</button>
              </form>
            </div>
          </div>
          <br/>
          <div className="card">
            <h5 className="card-header">Filtry priorytetów</h5>
            <div className="card-body m-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="check1"/>
                <label className="form-check-label">Pokaż zadania o niskim priorytecie</label>
              </div>

              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="check2"/>
                <label className="form-check-label">Pokaż zadania o średnim priorytecie</label>
              </div>

              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="check3"/>
                <label className="form-check-label">Pokaż zadania o wysokim priorytecie</label>
              </div>
            </div>
          </div>

        </div>
        <div className="col-md-6">

          <div className="card">
            <h5 className="card-header">Lista zadań (posortowana)</h5>
            <div className="card-body">
              {todoList.map(_task => (
                <p>{_task.task}</p>
              ))}
            </div>
          </div>

          <div className="card mt-3">
            <h5 className="card-header">Statystyki</h5>
            <div className="card-body row">
            <div className="col-md-4 text-center">
            <h5 className="text-muted">Minuty</h5>
            <h4 className="text-danger">{todoList.filter(task => task.severity=='high').length}</h4>
          </div>
          <div className="col-md-4 text-center">
            <h5 className="text-muted">Bloki</h5>
            <h4 className="text-info"></h4>
          </div>
          <div className="col-md-4 text-center">
            <h5 className="text-muted">Niski</h5>
            <h4 className="text-success"></h4>
          </div>
          <hr/>
            </div>
          </div>
        </div>

        <div>
          <div className="card mt-5">
            <h5 className="card-header">Instrukcje</h5>
            <div className="card-body">
              <ul>
                  <li>Wprowadź treść zadania w pole tekstowe</li>
                  <li>Wybierz priorytet zadania (Niski, Średni, Wysoki)</li>
                  <li>Kliknij "Dodaj zadanie" aby dodać do listy</li>
                  <li>Użyj filtrów aby pokazać/ukryć zadania o określonych priorytetach</li>
                  <li>Zadania są automatycznie sortowane według priorytetów: Wysoki → Średni → Niski</li>
                  <li>Historia dodawania jest automatycznie zapisywana</li>
                  <li>Dane są zachowywane w localStorage między sesjami</li>
                  <li>Sprawdź konsolę przeglądarki aby zobaczyć logi dodanych zadań</li>
                  <li>Priorytety są oznaczone kolorami: czerwony (wysoki), żółty (średni), zielony (niski)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
