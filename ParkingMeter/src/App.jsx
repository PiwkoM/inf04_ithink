import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [minutes, setMinutes] = useState('')
  const [min, setMin] = useState('')
  const [history, setHistory] = useState([])

  const blocks = Math.ceil(minutes / 30) || 0
  const totalFee = blocks + 2

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!min) return
    const newRecord = {
      id: (history.at(-1)?.id || 0) + 1,
      _minutes: Number(min),
      blocks: Math.ceil(min / 30),
      totalFee: Math.ceil(min / 30) + 2,
      timestamp: new Date().toLocaleString(),
    }
    setMinutes(min)
    setHistory((prev) => [...prev, newRecord])
  }

  const handleClear = () => {
    setMin('')
    setMinutes('')
  }
  const handleClearHistory = () => setHistory([])

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Kalkulator opłat parkingowych</h3>
      <div className="card mb-4">
        <div className="card-header">
          <h3 className="card-title mb-0">Oblicz opłatę</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleCalculate}>
            <div className="form-group mb-3">
              <label htmlFor="inNumber" className="form-label">Wprowadź minuty</label>
              <input
                id="inNumber"
                name="inNumber"
                type="number"
                className="form-control"
                value={min}
                onChange={(e) => setMin(e.target.value)}
              />
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary" disabled={!min}>
                Oblicz
              </button>
              <button type="button" className="btn btn-secondary" onClick={handleClear}>
                Wyczyść
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={`card mb-4 ${minutes ? '' : 'collapse'}`}>
        <div className="card-header">
          <h3><strong>Wynik obliczenia</strong></h3>
        </div>
        <div className="card-body row">
          <div className="col-md-4 text-center">
            <h4 className="text-muted">Minuty</h4>
            <h4 className="text-primary">{minutes}</h4>
          </div>
          <div className="col-md-4 text-center">
            <h4 className="text-muted">Bloki</h4>
            <h4 className="text-info">{blocks}</h4>
          </div>
          <div className="col-md-4 text-center">
            <h4 className="text-muted">Opłata</h4>
            <h4 className="text-success">{totalFee}</h4>
          </div>
          <hr/>
          
          <ul className="list-unstyled mb-0">
            <li><b>Opłata bazowa:</b> 2.00 PLN</li>
            <li><b>Bloki (zaokrąglone w górę):</b> {blocks} x 1.00 PLN = {blocks} PLN</li>
            <li><b>Opłata całkowita:</b> 2.00 + {blocks} = {totalFee} PLN</li>
          </ul>
        </div>
      </div>

      <div className={`card mb-4 ${ history.length > 0 ? '' : 'collapse' }`}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="card-title mb-0">Historia obliczeń</h3>
          <button onClick={handleClearHistory} className="btn btn-warning btn-sm">
            Wyczyść historię
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Minuty</th>
                  <th>Bloki</th>
                  <th>Opłata</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, index) => (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item._minutes}</td>
                    <td>{item.blocks}</td>
                    <td>{item.totalFee} PLN</td>
                    <td>{item.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h3 className="card-title mb-0">Zasady naliczania opłat</h3>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li><b>Opłata bazowa:</b> 2.00 PLN</li>
            <li><b>Cena za blok:</b> 1.00 PLN</li>
            <li><b>Długość bloku:</b> 30 minut</li>
            <li><b>Zaokrąglenie:</b> Bloki są zaokrąglane w górę (np. 31 minut = 2 bloki)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
