import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [todoList, setList] = useState([{id: 1, task:"yo mama",severity: 1}])

  const HandleClick = (e) => {
    e.preventDefault()
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

              <label className="form-input-label" for="task">Zadanie:</label>
              <input type="text" className="form-control mb-2" id="task" placeholder="Wprowadź treść zadania..."/>

              <label className="form-input-label" for="radios">Priorytet:</label>
              <div className="form-check" id="radios">
              <input type="radio" className="form-check-input" name="taskSeverity" value="1"/> Niski
              </div>
              <div className="form-check">
              <input type="radio" className="form-check-input" name="taskSeverity" value="2"/> Średni
              </div>
              <div className="form-check">
              <input type="radio" className="form-check-input" name="taskSeverity" value="3"/> Wysoki
              </div>

              <button type="button" className="btn btn-primary">Dodaj zadanie</button>
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

            </div>
          </div>

          <div className="card mt-3">
            <h5 className="card-header">Statystyki</h5>
            <div className="card-body">

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
