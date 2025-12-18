import { useState , useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [boolOne,setOne]=useState(true)
  const [boolTwo,setTwo]=useState(false)
  const [produkty,setProdukty]=useState([
    {name:'Laptop Dell',price:3499.99},
    {name:'Mysz komputerowa',price:89.99},
    {name:'Klawiatura mechaniczna',price:299.99},
    {name:'Monitor 27"',price:1299.99},
    {name:'Słuchawki bezprzewodowe',price:399.99},
    {name:'Kamera internetowa',price:249.99},
    {name:'Drukarka laserowa',price:899.99},
    {name:'Smartfon Samsung',price:2499.99},
    {name:'Tablet iPad',price:1999.99},
    {name:'Etui na telefon',price:49.99},
    {name:'Powerbank',price:129.99},
    {name:'Kabel USB-C',price:29.99},
    {name:'Głośnik Bluetooth',price:199.99},
    {name:'Konsola do gier',price:1999.99},
    {name:'Router WiFi',price:299.99}
  ])
  const [search,setSearch]=useState("")
  const [searcher,setSearcher] = useState("")

  const change = (e) =>{
    setSearch(e.target.value)
    console.log(search)
    setSearcher(search.toLowerCase())
  }

  const sorting = (e) =>{
      return ((a,b) => a.price > b.price)
  }
  
  return (
    <>
      <div className="container">
        <div className="col -md-12">
      <h2>Lista produktów</h2>

          <div className="card">
            <div className="card-header">Wyszukiwanie i sortowanie</div>
            <div className="card-body">
              <div className="row">
                <div className="col -md-6 form-group">
                  <label htmlFor="a">Szukaj:</label>
                  <div className="input-group">
                    <input type="text" className="form-control" name="a" onChange={change}/>
                    <button type="button" className="btn btn-outline-secondary input-group-append" onClick={() => setSearcher("")}>Wyczyść</button>
                  </div>
                </div>
                <div className="col -md-6 btn-group" role="group" name="b">
                  <button className={`btn ${(boolOne ? 'btn-primary' : 'btn-outline-primary ')}`} type="button" onClick={() => {
                      setOne(true);setTwo(false);console.log("Sortowanie: po nazwie");
                    }} value="_name">Sortuj po nazwie</button>
                  <button className={`btn ${(boolTwo ? 'btn-primary' : 'btn-outline-primary ')}`} type="button" onClick={() => {
                      setOne(false);setTwo(true);console.log("Sortowanie: po cenie");
                    }} value="price">Sortuj po cenie</button>
                </div>
              </div>
                <br/>
                <div className="alert alert-info">
                  <strong>Liczba produktów: {produkty.filter(item => item.name.toLowerCase().includes(searcher)).length}</strong>
                </div>

            </div>
          </div>

      <br/>

          <div className="card">
            <div className="card-header">
              Produkty
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Kolumna 1</th>
                    <th scope="col">Kolumna 2</th>
                  </tr>
              </thead>
              <tbody>
                {
                produkty
                .sort(sorting())
                .filter(item => item.name.toLowerCase().includes(searcher))
                .map((item,index) =>{
                  return(
                    <tr>
                      <th scope="row">{index+1}</th>
                      <td>{item.name}</td>
                      <td>{item.price} zł</td>
                      
                    </tr>
                  )
                })}
              </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
