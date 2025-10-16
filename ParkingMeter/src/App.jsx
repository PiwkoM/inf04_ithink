import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [minutes,setMinutes] = useState(0)
  const [history,setHistory] = useState([
    {_minutes: 60, blocks: 2, totalFee: 2},
    {_minutes: 60, blocks: 2, totalFee: 2},
    {_minutes: 60, blocks: 2, totalFee: 2}
  ])

  // const blocks = Math.ceil(minutes/30)
  // const NewRecord = {
  //   // id: 1
  //   _minutes: minutes,
  //   blocks: blocks,
  //   totalFee: blocks+2,
  //   timestamp: 1
  //   // timestamp: Date.now().toLocaleString()
  // }
  // setHistory(prev => [...prev,NewRecord])

  var blocks = Math.ceil(minutes/30)
  return (
      <div className="container mt-4">
        <h3 className="mb-4">Kalkulator oplat parkingowych</h3>

        <div className="card mb-4">
          <div className="card-header">
            <h3 className="card-title mb-0">Featured</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <label className="form-label" for="inNumber">Wprowadz minuty</label>
                <input name="inNumber" onChange={(event) => setMinutes(event.target.value)} 
                type="number" className="form-control"/>
                <p/>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary"
                  disabled = {!minutes}
                  
                  >Oblicz</button>
                  <button className="btn btn-secondary">Wyczysc</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h3 className="card-title mb-0"></h3>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <h3 className="text-muted">123</h3>
                <h3 className="text-primary">test</h3>
              </div>
              <div className="col-md-4">
                <h3 className="text-muted">123</h3>
                <h3 className="text-info">test</h3>
              </div>
              <div className="col-md-4">
                <h3 className="text-muted">123</h3>
                <h3 className="text-success">test</h3>
              </div>
            </div>
            <hr/>

            <ul className="list-unstyled mb-0">
            <li>Szczegoly obliczenia:</li>
            <li><b>Oplata bazowa:</b> 2.00 PLN</li>
            <li><b>Bloki (zaokraglone w gore):</b> {} x 1.00 PLN = {} PLN</li>
            <li><b>Oplata calkowita:</b> 2.00 + {} = {} PLN</li>
            </ul>

          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between">
            <h3 className="card-title mb-0">Historia obliczen</h3><button 
            onClick={() => setHistory([])}className="btn btn-warning">Wyczysc historie</button>
          </div>

          <div className="card-body">
            <div className="table-responsive">
            <table className="table table-sm">
              <thead>
                <trow>
                  <th scope="col">#</th>
                  <th scope="col">Minuty</th>
                  <th scope="col">Bloki</th>
                  <th scope="col">Oplata</th>
                  <th scope="col">Data</th>
                </trow>
              </thead>
              <tbody>
                {history.map((item,index) => (
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{item._minutes}</td>
                  <td>{item.blocks}</td>
                  <td>{item.totalFee} PLN</td>
                  {/* <td>{item.timestamp}</td> */}
                </tr>
              ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <h3 className="card-title mb-0">Zasady naliczania oplat</h3>
          </div>

          <div className="card-body">
            <ul className="list-unstyled mb-0">
            <li><b>Oplata bazowa:</b> 2.00 PLN</li>
            <li><b>Cena za blok:</b> 1.00 PLN</li>
            <li><b>Dlugosc bloku:</b> 30 minut</li>
            <li><b>Zaokraglenie:</b> Bloki sa zaokraglane w gore (np. 31 minut = 2 bloki)</li>
            </ul>
          </div>
        </div>


















































      </div>
  )
}

export default App
