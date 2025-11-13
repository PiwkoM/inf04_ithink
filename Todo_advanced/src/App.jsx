import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [todoList, setList] = useState(() => {
    const savedList = localStorage.getItem("savedList")
    return savedList ? JSON.parse(savedList) : []
  })

  const [recentHistory, setRecent] = useState(() => {
    const recentList = localStorage.getItem("recentList")
    return recentList ? JSON.parse(recentList) : []
  })

  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(todoList))
  }, [todoList])

  useEffect(() => {
    localStorage.setItem("recentList", JSON.stringify(recentHistory))
  }, [recentHistory])

  const [taskValue, setValue] = useState('')
  const [severity, setSeverity] = useState('')
  const [Filters, setFilters] = useState({
    low: true,
    medium: true,
    high: true,
  })

  const getValue = (e) => {
    setValue(e.target.value)
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    if (!severity || !taskValue.trim()) {
      alert("Wprowadź treść zadania i wybierz priorytet!")
      return
    }
    const newTask = {
      id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
      task: taskValue,
      severity: severity
    }
    setList(prev => [...prev, newTask])
    setRecent(prev => [
      ...prev,
      { task: newTask.task, severity: newTask.severity, date: new Date().toLocaleString() }
    ])

    console.log(newTask.task + ' ' + newTask.severity)
    setValue("")
    setSeverity("")
  }

  const HandleSeverityChange = (e) => {
    setSeverity(e.target.value)
    console.log(e.target.value)
  }

  // put this inside your component, above return()
  const getPriorityBadgeClass = (severity) => {
    switch (severity) {
      case "high":
        return "bg-danger";
      case "medium":
        return "bg-warning text-dark";
      case "low":
        return "bg-success";
      default:
        return "bg-secondary";
    }
  };


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
                  <label className="form-input-label" htmlFor="task">Zadanie:</label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="task"
                    placeholder="Wprowadź treść zadania..."
                    value={taskValue}
                    onChange={getValue}
                  />

                  <label className="form-input-label" htmlFor="radios">Priorytet:</label>
                  <div className="form-check" id="radios">
                    <input type="radio" className="form-check-input" name="taskSeverity" value="low" checked={severity === "low"} onChange={HandleSeverityChange}/> Niski
                  </div>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" name="taskSeverity" value="medium" checked={severity === "medium"} onChange={HandleSeverityChange}/> Średni
                  </div>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" name="taskSeverity" value="high" checked={severity === "high"} onChange={HandleSeverityChange}/> Wysoki
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
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check1"
                    checked={Filters.low}
                    onChange={() => setFilters({ ...Filters, low: !Filters.low })}
                  />
                  <label className="form-check-label">Pokaż zadania o niskim priorytecie</label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check2"
                    checked={Filters.medium}
                    onChange={() => setFilters({ ...Filters, medium: !Filters.medium })}
                  />
                  <label className="form-check-label">Pokaż zadania o średnim priorytecie</label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check3"
                    checked={Filters.high}
                    onChange={() => setFilters({ ...Filters, high: !Filters.high })}
                  />
                  <label className="form-check-label">Pokaż zadania o wysokim priorytecie</label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <h5 className="card-header">Lista zadań (posortowana)</h5>
              <div className="card-body">
                {todoList.length !== 0 ? (
                  Object.values(Filters).some(v => v) ? (
                    todoList
                      .filter(task => Filters[task.severity])
                      .sort((a, b) => {
                        const order = { high: 0, medium: 1, low: 2 }
                        return order[a.severity] - order[b.severity]
                      })
                      .map(_task => (
                        <p key={_task.id}>
                          {_task.id}. {_task.task}
                        </p>
                      ))
                  ) : (
                    <p className="text-muted">Brak widocznych zadań</p>
                  )
                ) : (
                  <p className="text-muted">Brak zadań</p>
                )}
              </div>
            </div>


            {/* recenthistory has an entry dw twinjago */}
            <div className={`${recentHistory.length != 0 ? "" : "d-none"} card mt-3 `}>
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">Historia dodawania</h4>
                <button onClick={() => setRecent([])} className="btn btn-warning btn-sm">
                  Wyczyść historię
                </button>
              </div>
              <div className="card-body">
                <div className="table-responsive">

                  <table className="table table-sm">

                    <thead>

                      <tr>

                        <th scope="col">#</th>

                        <th scope="col">Zadanie</th>

                        <th scope="col">Priorytet</th>

                        <th scope="col">Data dodania</th>

                      </tr>

                    </thead>

                    <tbody>

                      {recentHistory.map((record, index) => (

                        <tr key={record.id}>

                          <th scope="row">{index + 1}</th>

                          <td>{record.task}</td>

                          <td>

                            <span className={`badge ${getPriorityBadgeClass(record.severity)}`}>

                              {record.severity}

                            </span>

                          </td>

                          <td>{record.date}</td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>
              </div>
            </div>

            <div className="card mt-3">
              <h5 className="card-header">Statystyki</h5>
              <div className="card-body row">
                <div className="col-md-4 text-center">
                  <h4 className="text-danger">{todoList.filter(task => task.severity === 'high').length}</h4>
                  <p className="text-muted">Wysoki</p>
                </div>
                <div className="col-md-4 text-center">
                  <h4 className="text-warning">{todoList.filter(task => task.severity === 'medium').length}</h4>
                  <p className="text-muted">Średni</p>
                </div>
                <div className="col-md-4 text-center">
                  <h4 className="text-success">{todoList.filter(task => task.severity === 'low').length}</h4>
                  <p className="text-muted">Niski</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-center">
                  <div className="col-md-4 text-center">
                    <h4 className="text-info">{todoList.length}</h4>
                    <p className="text-muted">Wszystkie zadania</p>
                  </div>
                  <div className="col-md-4 text-center">
                    <h4 className="text-primary">{recentHistory.length}</h4>
                    <p className="text-muted">Dodane</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
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
    </>
  )
}

export default App